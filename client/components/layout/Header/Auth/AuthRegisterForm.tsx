import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import style from "./authForm.module.sass";
import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import { IUserRegister } from "../../../../types/user.types";
import { IOption } from "../../../../types/optionsForm.types";
import { Field } from "../../../../ui/field/Fields";
import { Button } from "../../../../ui/button/Button";
import AuthNameField from "./AuthNameField";

const option: IOption[] = [
    { value: "Minsk", label: "minsk" },
    { value: "Grodno", label: "grodno" },
    { value: "Gomel", label: "gomel" },
    { value: "Vitebsk", label: "vitebsk" },
    { value: "Brest", label: "brest" },
];

const RegistationForm = () => {
    const [activeCheckbox, setActiveCheckbox] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string | IOption>();

    const {
        register,
        handleSubmit,
        reset,
        formState,
        control,
        formState: { errors, isSubmitSuccessful },
    } = useForm<IUserRegister>({
        mode: "onChange",
    });

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset();
        }
    }, [formState, reset]);

    const setCheckbox = (data: string) => {
        if (data !== activeCheckbox || !activeCheckbox) {
            setActiveCheckbox(data);
        } else {
            setActiveCheckbox("");
        }
    };
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className={style.form}>
                <AuthNameField
                    name={"Имя"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.block_name}
                >
                    <Field
                        {...register("name", {
                            required: "Поле обязательно",
                            minLength: {
                                value: 3,
                                message: "Имя не может быть меньше 3 симоволов",
                            },
                        })}
                        required
                        className={style.create_input}
                        placeholder="Имя"
                    />
                </AuthNameField>
                <AuthNameField
                    name={"Фамилия"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.block_name}
                >
                    <Field
                        {...register("surname", {
                            required: "Поле обязательно",
                            minLength: {
                                value: 3,
                                message:
                                    "Фамилия не может быть меньше 3 симоволов",
                            },
                        })}
                        required
                        className={style.create_input}
                        placeholder="Фамилия"
                    />
                </AuthNameField>
                <AuthNameField
                    name={"Дата рождения"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.block_birthday}
                >
                    <Field
                        {...register("date", {
                            required: "Поле обязательно",
                            valueAsDate: true,
                        })}
                        required
                        type="date"
                        className={style.create_input}
                        placeholder="00/00/0000"
                    />
                </AuthNameField>
                <div className={style.gender}>
                    <div className={style.male}>
                        <label>
                            <Field
                                {...register("gender", {
                                    required: "Это поле обязательно",
                                    valueAsDate: true,
                                })}
                                name="gender"
                                type="checkbox"
                                value={activeCheckbox}
                                checked={"male" === activeCheckbox}
                                onClick={() => setCheckbox("male")}
                            />
                            male
                        </label>
                    </div>
                    <div className={style.female}>
                        <label className={style.checkbox}>
                            <Field
                                {...register("gender", { valueAsDate: true })}
                                name="gender"
                                type="checkbox"
                                value={activeCheckbox}
                                checked={"female" === activeCheckbox}
                                onClick={() => setCheckbox("female")}
                            />
                            female
                        </label>
                    </div>
                </div>
                <div className={style.city}>
                    <Controller
                        control={control}
                        name="city"
                        rules={{ required: "City is required" }}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <>
                                <Select
                                    classNamePrefix="city-prefix"
                                    placeholder="Выберите город"
                                    options={option}
                                    value={selectedOption}
                                    onChange={(newValue) =>
                                        onChange((newValue as IOption).value)
                                    }
                                />
                                {error && (
                                    <p className="error">{error.message}</p>
                                )}
                            </>
                        )}
                    />
                </div>
                <div className={style.email}>
                    <fieldset className={style.create}>
                        <legend className={style.create_title}>Email</legend>
                        <input
                            {...register("email", {
                                required: "Поле обязательно",
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message: "Некорректный Email",
                                },
                            })}
                            required
                            className={style.create_input}
                            placeholder="Email"
                        />
                        {errors?.email && (
                            <span className={style.required}>
                                {errors.email.message}
                            </span>
                        )}
                    </fieldset>
                </div>
                <AuthNameField
                    name={"Пароль"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.password}
                >
                    <Field
                        {...register("password", {
                            required: "Поле обязательно",
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                message:
                                    "Пароль должен содержать хотя бы одно число и один спецсимвол-(@) ",
                            },
                            minLength: {
                                value: 6,
                                message:
                                    "Пароль должен иметь больше 6 символов",
                            },
                        })}
                        type="password"
                        required
                        className={style.create_input}
                        placeholder="Пароль"
                    />
                </AuthNameField>
                <AuthNameField
                    name={"Повторите пароль"}
                    fieldClass={style.create}
                    legendClass={style.create_title}
                    blockClass={style.password}
                >
                    <Field
                        name="repeatPassword"
                        type="password"
                        required
                        className={style.create_input}
                        placeholder="Пароль"
                    />
                </AuthNameField>
                <div className={style.sendForm}>
                    <Button
                        type="submit"
                        value="Зарегестрироваться"
                        // onClick={handleSubmit("good")}
                    ></Button>
                </div>
            </form>
        </>
    );
};
export default RegistationForm;
