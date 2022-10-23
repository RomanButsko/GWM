import React from "react";
import { FC } from "react";
import { IUserProfile } from "../../../types/user.types";

const GuestProfileUser: FC<IUserProfile> = ({
    email,
    name,
    surname,
    aboutMe,
    avatarPath,
    date,
    gender,
    city,
    banned,
    banReason,
    like,
    dislike,
    posts,
}) => {
    return (
        <>
            <div>
                <div>Пользователь Имя {name}</div>
                <div>Фамилия {surname}</div>
                <div>Обо мне {aboutMe}</div>
            </div>
        </>
    );
};

export default GuestProfileUser;
