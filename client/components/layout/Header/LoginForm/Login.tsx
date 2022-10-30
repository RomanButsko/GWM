import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserLogin } from "../../../../store/auth/auth.interface";
import { Field } from "../../../../ui/field/Fields";
import AuthNameField from "../../../../ui/field/AuthNameField";
import style from "./Login.module.sass";
import { Button } from "../../../../ui/button/Button";
import { useActions } from "../../../../hooks/useAction";
import useAuth from "../../../../hooks/useAuth";
import { IProfileMenu } from "../ProfileMenu/profileMenu.interface";
import { FC } from "react";
import Router from "next/router";

const LoginForm: FC<IProfileMenu> = ({ setMenu, profileMenu }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState,
        control,
        formState: { errors, isSubmitSuccessful },
    } = useForm<IUserLogin>({
        mode: "onChange",
    });

    const { isLoading } = useAuth();

    const { login } = useActions();
    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);

    const onSubmit: SubmitHandler<IUserLogin> = (data) => {
        login(data);
        setMenu(!profileMenu);
        Router.reload();
    };

    return (
        <div className={style.login_block}>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <AuthNameField
                    name={"Email"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.block_name}
                >
                    <Field
                        {...register("email", {
                            required: "Поле обязательно",
                            minLength: {
                                value: 3,
                                message: "Имя не может быть меньше 3 симоволов",
                            },
                        })}
                        required
                        className={style.create_input}
                        placeholder="Email"
                    />
                </AuthNameField>
                <AuthNameField
                    name={"Пароль"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.block_name}
                >
                    <Field
                        {...register("password", {
                            required: "Поле обязательно",
                            minLength: {
                                value: 3,
                                message: "Имя не может быть меньше 3 симоволов",
                            },
                        })}
                        required
                        className={style.create_input}
                        placeholder="Пароль"
                    />
                </AuthNameField>
                <div className={style.sendForm}>
                    <Button
                        type="submit"
                        value="Зарегестрироваться"
                        disabled={isLoading}
                    >
                        Войти
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
