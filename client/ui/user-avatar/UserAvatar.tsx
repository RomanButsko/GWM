import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { api } from "../../store/api/api";

const UserAvatar: FC<{ id: number }> = ({ id }) => {
    const { data, isSuccess } = api.useGetUserByIdQuery(id);
    return <>{isSuccess && <>Фото юзера - {data?.avatarPath}</>}</>;
};

export default UserAvatar;
