import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import { myLoader } from "../../loader/Image-loader";
import { IPost } from "../../types/post.type";
import UserAvatar from "../../ui/user-avatar/UserAvatar";
import style from "./SelectPost.module.sass";

const SelectPost: FC<IPost> = ({
    title,
    description,
    date,
    userId,
    views,
    picture,
    location,
}) => {
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
            <Image loader={myLoader} src={picture} width="100%" height="100%" />
            <div>{<UserAvatar id={userId} />}</div>
        </div>
    );
};

export default SelectPost;
