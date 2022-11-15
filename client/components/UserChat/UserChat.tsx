import Image from "next/image";
import React, { useState } from "react";
import { FC } from "react";
import { myLoader } from "../../loader/Image-loader";
import { api } from "../../store/api/api";
import { IMessage } from "../../types/chat.types";
import userAvatar from "./../../asset/user-svg.svg";
import style from "./UserChat.module.sass";
import useAuth from "../../hooks/useAuth";
import classNames from "classnames";

const UserChat: FC<IMessage & any> = ({ id, text, userIdFrom }) => {
    const { data: user } = api.useGetUserByIdQuery(userIdFrom);
    const myProfile = useAuth();

    return (
        <>
            {user && (
                <div
                    className={classNames(style.message, {
                        [style.myMessage]: myProfile.user?.id === userIdFrom,
                    })}
                >
                    <div>
                        <div>Пользователь {user?.name}</div>
                        <Image
                            loader={myLoader}
                            src={user?.avatarPath || userAvatar}
                            width={30}
                            height={30}
                        />
                    </div>
                    <div>{text}</div>
                </div>
            )}
        </>
    );
};

export default UserChat;
