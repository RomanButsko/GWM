import React from "react";
import { api } from "../../../store/api/api";
import Image from "next/image";
import { myLoader } from "../../../loader/Image-loader";
import UserPageAvatar from "../../../ui/user-avatar/UserPageAvatar";
import style from "./ProfileUser.module.sass";
import UserPosts from "../../Posts/userPosts/UserProfilePosts";

const MyProfile = () => {
    const { data } = api.useGetProfileQuery();

    return (
        <div className={style.profile}>
            <h1 className={style.profile_title}>Мой профиль</h1>
            {data && (
                <main>
                    Фото
                    <Image
                        loader={myLoader}
                        src={data.avatarPath}
                        width={50}
                        height={30}
                    />
                    <UserPageAvatar id={data.id} />
                    <div>
                        My name {data?.name}
                        My Posts
                        {data.posts?.map((item) => (
                            <UserPosts {...item} />
                        ))}
                    </div>
                </main>
            )}
        </div>
    );
};

export default MyProfile;
