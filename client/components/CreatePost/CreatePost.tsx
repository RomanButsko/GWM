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
import YandexMap from "../../ui/map/Map";
import { useOutside } from "../../hooks/useOutside";
import SearchAdress from "../../ui/searchAddress/SearchAddress";
import SelectBkg from "./SelectBkg/SelectBkg";
import { useDispatch } from "react-redux";
import { clearBckg } from "../../store/postAvatar/postAvatarSlice";

const CreatePost: FC<ICreatePost> = ({ setIsShow }) => {
    const [modalCreate, setModalCreate] = useState<boolean>(true);
    const [mapPointer, setMapPointer] = useState<IMapPointer>(
        [] as IMapPointer
    );

    const dispatch = useDispatch();
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
        console.log(data);
        setIsShow(false);
        await userPostCreate(data).unwrap();
        dispatch(clearBckg);
        Router.reload();
    };
    return (
        <>
            {user && modalCreate && (
                <div className={style.createPost}>
                    <div className={style.createPost_header}>
                        <div className={style.createPost_header__title}>
                            ?????????????? ???????? ??????????????????????
                        </div>
                        <button
                            className={style.createPost_header__close}
                            onClick={() => setIsShow(false)}
                        >
                            X
                        </button>
                    </div>
                    {isLoading && <div>???????? ????????????????...</div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AuthNameField
                            name={"??????????????????"}
                            blockClass={style.block_title}
                            fieldClass={style.block_title__field}
                            legendClass={style.create_title__legend}
                        >
                            <Field
                                {...register("title", {
                                    required: "???????? ??????????????????????",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "???????? ???? ?????????? ???????? ???????????? 3 ??????????????????",
                                    },
                                })}
                                required
                                className={style.create_input}
                            />
                        </AuthNameField>
                        <AuthNameField
                            name={"????????????????"}
                            fieldClass={style.block_descr__field}
                            legendClass={style.block_descr__legend}
                            blockClass={style.block_descr}
                        >
                            <TextArea
                                {...register("description", {
                                    required: "???????? ??????????????????????",
                                    minLength: {
                                        value: 3,
                                        message:
                                            "???????? ???? ?????????? ???????? ???????????? 3 ??????????????????",
                                    },
                                })}
                                className={style.block_descr__textarea}
                            />
                        </AuthNameField>
                        <AuthNameField
                            name={"????????"}
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
                                        title={"???????????????????? ?????? ???????????????? ????????"}
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
                            name={"?????????? ????????????????????"}
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
                        <div>
                            <Controller
                                control={control}
                                name="bckgPicture"
                                render={({ field: { onChange } }) => (
                                    <SelectBkg
                                        selectedPhoto={(bkg: string) =>
                                            onChange(bkg)
                                        }
                                    />
                                )}
                            />
                        </div>
                        <div className={style.block_sendForm}>
                            <Button
                                type="submit"
                                value="????????????????????????????????????"
                                className={style.block_sendForm__btn}
                            >
                                ????????????????????????
                            </Button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default CreatePost;
