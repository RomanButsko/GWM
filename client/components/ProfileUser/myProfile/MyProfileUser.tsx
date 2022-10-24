import React from "react";
import { api } from "../../../store/api/api";
import Image from "next/image";
import userImage from "./../../../asset/user-svg.svg";

const MyProfile = () => {
    const { data } = api.useGetProfileQuery();
    return (
        <>
            <div>
                Фото{" "}
                {data?.avatarPath ? (
                    <Image src={data?.avatarPath} width={50} height={30} />
                ) : (
                    <Image src={userImage} width={50} height={30} />
                )}
                Изменить фото
                <div>
                    My name {data?.name}
                    My Posts{" "}
                    {data?.posts?.map((item) => (
                        <>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyProfile;
