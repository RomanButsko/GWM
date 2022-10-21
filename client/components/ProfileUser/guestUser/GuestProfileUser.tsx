import React from "react";
import { FC } from "react";
import { api } from "../../../store/api/api";
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
                {name}
                <div>Ближайшие мероприятия у {name}</div>
            </div>
        </>
    );
};

export default GuestProfileUser;
