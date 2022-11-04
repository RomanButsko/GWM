import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import { myLoader } from "../../loader/Image-loader";
import { MapService } from "../../services/map/map.service";
import { api } from "../../store/api/api";
import { IPost } from "../../types/post.type";
import YandexMap from "../../ui/map/Map";
import UserAvatar from "../../ui/user-avatar/general/UserAvatar";
import style from "./SelectPost.module.sass";

const SelectPost: FC<IPost> = ({
    title,
    description,
    date,
    userId,
    views,
    picture,
    location,
    id,
}) => {
    const { data } = api.useGetExactPointerQuery(id);

    const router = useRouter();
    return (
        <div className={style.post}>
            <button type="button" onClick={() => router.push("/")}>
                На главную
            </button>
            <button type="button" onClick={() => router.back()}>
                Перейти к прошлому мероприятию
            </button>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <div>
                <AiFillEye />
                {views}
            </div>
            <div>{location}</div>
            <span>Фото с предстоящего мероприятия</span>
            {picture && (
                <Image
                    loader={myLoader}
                    src={picture}
                    width="100%"
                    height="100%"
                />
            )}
            <div>{<UserAvatar id={userId} />}</div>
            <YandexMap
                post={false}
                width={"900px"}
                height={"400px"}
                clusterPoints={data}
            />
        </div>
    );
};

export default SelectPost;
