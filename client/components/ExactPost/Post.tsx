import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { AiFillEye } from "react-icons/ai";
import { IPost } from "../../types/post.type";
import UserAvatar from "../../ui/user-avatar/UserAvatar";

const Post: FC<IPost> = ({
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
        <div>
            <button type="button" onClick={() => router.push("/")}>
                На главную
            </button>
            <button type="button" onClick={() => router.back()}>
                Перейти к прошлому мероприятию
            </button>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <div>
                {" "}
                <AiFillEye />
                {views}
            </div>
            <div>{location}</div>
            <div>{<UserAvatar id={userId} />}</div>
        </div>
    );
};

export default Post;
