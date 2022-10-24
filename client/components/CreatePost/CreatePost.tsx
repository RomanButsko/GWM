import { ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMediaResponse } from "../../../server/src/media/media.interface";
import useAuth from "../../hooks/useAuth";
import { api } from "../../store/api/api";
import { IPostReq } from "../../types/post.type";
import { Button } from "../../ui/button/Button";
import AuthNameField from "../../ui/field/AuthNameField";
import { Field } from "../../ui/field/Fields";
import UploadField from "../../ui/upload-field/UploadField";
import style from "./CreatePost.module.sass";

const CreatePost = () => {
    const [modalCreate, setModalCreate] = useState<boolean>(true);

    const [createPost, { isLoading }] = api.useCreatePostMutation();
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState } = useForm<IPostReq>({
        shouldUseNativeValidation: true,
    });

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            setModalCreate(!modalCreate);
            reset();
        }
    }, [formState, reset]);

    const onSubmit: SubmitHandler<IPostReq> = async (data) => {
        await createPost(data).unwrap();
    };
    return (
        <>
            {user && modalCreate && (
                <div className={style.createPost}>
                    {isLoading && <div>Идет загрузка...</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AuthNameField
                            name={"Заголовок"}
                            fieldClass={style.create}
                            legendClass={style.create_title}
                            blockClass={style.block_name}
                        >
                            <Field
                                {...register("title", {
                                    required: "Поле обязательно",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Поле не может быть меньше 3 симоволов",
                                    },
                                })}
                                required
                                className={style.create_input}
                            />
                        </AuthNameField>
                        <AuthNameField
                            name={"Описание"}
                            fieldClass={style.create}
                            legendClass={style.create_title}
                            blockClass={style.block_name}
                        >
                            <Field
                                {...register("description", {
                                    required: "Поле обязательно",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Поле не может быть меньше 3 симоволов",
                                    },
                                })}
                                required
                                className={style.create_input}
                            />
                        </AuthNameField>
                        <AuthNameField
                            name={"Дата"}
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
                        <Controller
                            control={form.control}
                            name="postsPhotoPath"
                            render={() => (
                                <UploadField
                                    title={"Загрузите фото"}
                                    onChange={(value: IMediaResponse) => {
                                        onChange(value.url);
                                    }}
                                    folder="posts"
                                    setIsChosen={}
                                />
                            )}
                        />
                        <AuthNameField
                            name={"Место проведения"}
                            fieldClass={style.create}
                            legendClass={style.create_title}
                            blockClass={style.block_name}
                        >
                            <Field
                                {...register("location", {
                                    required: "Поле обязательно",
                                })}
                                required
                                className={style.create_input}
                            />
                        </AuthNameField>
                        <div className={style.sendForm}>
                            <Button
                                type="submit"
                                value="Зарегестрироваться"
                                // onClick={handleSubmit("good")}
                            >
                                Опубликовать
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default CreatePost;
