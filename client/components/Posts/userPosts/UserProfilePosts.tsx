import React from "react";
import { FC } from "react";
import { IPostUser } from "../../../types/userPost.types";
import style from "./UserPosts.module.sass";

const UserProfilePosts: FC<IPostUser> = ({
    title,
    description,
    views,
    date,
}) => {
    return (
        <div className={style.postCard}>
            <h3>{title}</h3>
            <div>{description}</div>
        </div>
    );
};

export default UserProfilePosts;
