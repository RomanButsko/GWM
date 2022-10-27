import React from "react";
import { api } from "../../../store/api/api";
import Image from "next/image";
import { myLoader } from "../../../loader/Image-loader";
import UserPageAvatar from "../../../ui/user-avatar/UserPageAvatar";

const MyProfile = () => {
    const { data } = api.useGetProfileQuery();

    return (
        <>
            {data && (
                <div>
                    Фото{" "}
                    <Image
                        loader={myLoader}
                        src={data.avatarPath}
                        width={50}
                        height={30}
                    />
                    <UserPageAvatar id={data.id} />
                    <div>
                        My name {data?.name}
                        My Posts{" "}
                        {data.posts?.map((item) => (
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
