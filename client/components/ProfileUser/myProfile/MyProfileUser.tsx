import React from "react";
import { api } from "../../../store/api/api";
import Image from "next/image";
import userImage from "./../../../asset/user-svg.svg";
import UploadField from "../../../ui/upload-field/UploadField";
import { myLoader } from "../../../loader/Image-loader";
import UserPageAvatar from "../../../ui/user-avatar/UserPageAvatar";
import useAuth from "../../../hooks/useAuth";

interface IChangePhoto {
    url: string;
}

const MyProfile = () => {
    const { data } = api.useGetProfileQuery();

    // const changePhoto = (value:IChangePhoto ) => {
    //     data?.avatarPath = value.url
    //     return value.url
    // }

    const { user } = useAuth();

    return (
        <>
            {data && (
                <div>
                    Фото{" "}
                    {user?.avatarPath ? (
                        <Image
                            loader={myLoader}
                            src={user?.avatarPath}
                            width={50}
                            height={30}
                        />
                    ) : (
                        <Image src={userImage} width={50} height={30} />
                    )}
                    <UserPageAvatar id={data.id} />
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
            )}
        </>
    );
};

export default MyProfile;
