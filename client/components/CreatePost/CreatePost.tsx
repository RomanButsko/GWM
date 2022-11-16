import { FC } from "react";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMediaResponse } from "../../../server/src/media/media.interface";
import useAuth from "../../hooks/useAuth";
import { api } from "../../store/api/api";
import { IPostReq } from "../../types/post.type";
import { Button } from "../../ui/button/Button";
import AuthNameField from "../../ui/field/AuthNameField";
import { Field } from "../../ui/field/Fields";
import TextArea from "../../ui/text-area/TextArea";
import UploadField from "../../ui/upload-field/UploadField";
import { ICreatePost, IMapPointer } from "./createPost.interface";
import style from "./CreatePost.module.sass";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import Caledar from "../../ui/calendar/event/Caledar";
import Router from "next/router";
import YandexMap from "../../ui/map/Map";
import { useOutside } from "../../hooks/useOutside";
import SearchAdress from "../../ui/searchAddress/SearchAddress";

const CreatePost: FC<ICreatePost> = ({ setIsShow }) => {
    const [modalCreate, setModalCreate] = useState<boolean>(true);
    const [mapPointer, setMapPointer] = useState<IMapPointer>(
        [] as IMapPointer
    );
    const { ref, isShow, setIsShow: setIsShowMap } = useOutside(false);

    const [userPostCreate, { isLoading }] = api.useCreatePostMutation();

    const { user } = useAuth();

    const { register, handleSubmit, control, reset, formState } =
        useForm<IPostReq>({
            shouldUseNativeValidation: true,
            mode: "onChange",
        });

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            setModalCreate(!modalCreate);
            reset();
        }
    }, [formState, reset]);

    const onSubmit: SubmitHandler<IPostReq> = async (data) => {
        setIsShow(false);
        await userPostCreate(data).unwrap();
        Router.reload();
    };
    return (
        <>
            {user && modalCreate && (
                <div className={style.createPost}>
                    <div className={style.createPost_header}>
                        <div className={style.createPost_header__title}>
                            Создать свое мероприятие
                        </div>
                        <button
                            className={style.createPost_header__close}
                            onClick={() => setIsShow(false)}
                        >
                            X
                        </button>
                    </div>
                    {isLoading && <div>Идет загрузка...</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AuthNameField
                            name={"Заголовок"}
                            blockClass={style.block_title}
                            fieldClass={style.block_title__field}
                            legendClass={style.create_title__legend}
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
                            fieldClass={style.block_descr__field}
                            legendClass={style.block_descr__legend}
                            blockClass={style.block_descr}
                        >
                            <TextArea
                                {...register("description", {
                                    required: "Поле обязательно",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "Поле не может быть меньше 3 симоволов",
                                    },
                                })}
                                className={style.block_descr__textarea}
                            />
                        </AuthNameField>
                        <AuthNameField
                            name={"Дата"}
                            fieldClass={style.block_date__field}
                            legendClass={style.block_date__legend}
                            blockClass={style.block_date}
                        >
                            <Controller
                                control={control}
                                name="date"
                                render={({ field: { onChange, value } }) => (
                                    <Caledar
                                        onChange={(value: Date) =>
                                            onChange(value)
                                        }
                                        value={value}
                                    />
                                )}
                            />
                            <BsCalendarDate className={style.block_date__img} />
                        </AuthNameField>
                        <div className={style.block_picture}>
                            <Controller
                                control={control}
                                name="picture"
                                render={({ field: { onChange } }) => (
                                    <UploadField
                                        title={"Перетащите или выберите фото"}
                                        onChange={(value: IMediaResponse) =>
                                            onChange(value.url)
                                        }
                                        folder="posts"
                                        id={user.id}
                                        showBottomPhoto={true}
                                    />
                                )}
                            />
                        </div>
                        <AuthNameField
                            name={"Место проведения"}
                            fieldClass={style.block_location__field}
                            legendClass={style.block_location__legend}
                            blockClass={style.block_location}
                        >
                            <Controller
                                control={control}
                                name="location"
                                render={({ field: { onChange, value } }) => (
                                    <SearchAdress
                                        onChange={(address: string) =>
                                            onChange(address)
                                        }
                                        setMapPointer={setMapPointer}
                                    />
                                )}
                            />
                            <FaMapMarkedAlt
                                className={style.block_location__img}
                                onClick={() => setIsShowMap(!isShow)}
                            />
                        </AuthNameField>
                        {isShow && (
                            <div ref={ref}>
                                <YandexMap
                                    clusterPoints={mapPointer}
                                    post={"create"}
                                    setMap={setIsShowMap}
                                    showMap={isShow}
                                    width={"66vw"}
                                    height={"84vh"}
                                />
                            </div>
                        )}
                        <div className={style.block_sendForm}>
                            <Button
                                type="submit"
                                value="Зарегестрироваться"
                                className={style.block_sendForm__btn}
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
