import Image from "next/image";
import React from "react";
import { FC } from "react";
import { myLoader } from "../../loader/Image-loader";
import { api } from "../../store/api/api";
import style from './UserAvatar.module.sass'

const UserAvatar: FC<{ id: number }> = ({ id }) => {
    const { data, isSuccess } = api.useGetUserByIdQuery(id);

    return (
        <>
            {data && isSuccess && (
                <>
                    <Image
                        loader={myLoader}
                        src={data.avatarPath}
                        width={60}
                        height={60}
                        className={style.userPhoto}
                    />
                </>
            )}
        </>
    );
};

export default UserAvatar;
