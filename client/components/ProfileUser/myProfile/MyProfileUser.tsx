import React from "react";
import { api } from "../../../store/api/api";
import Image from "next/image";
import { myLoader } from "../../../loader/Image-loader";
import UserPageAvatar from "../../../ui/user-avatar/profile/UserPageAvatar";
import style from "./ProfileUser.module.sass";
import UserPosts from "../../Posts/userPosts/UserProfilePosts";

const MyProfile = () => {
    const { data } = api.useGetProfileQuery();

    return (
        <div className={style.profile}>
            <h1 className={style.profile_title}>Мой профиль</h1>
            {data && (
                <main className={style.profile_main}>
                    <Image
                        loader={myLoader}
                        src={data.avatarPath}
                        width={200}
                        height={200}
                        className={style.profile_image}
                    />

                    <UserPageAvatar id={data.id} />
                    <div className={style.profile_info}>
                        <div className={style.profile_name}>
                            <h5>{data.name}</h5>
                            <h5>{data.surname}</h5>
                        </div>
                        <span className={style.profile_city}>{data.city}</span>
                        <div className={style.profile_aboutMe}>
                            <p>{data.aboutMe}</p>
                        </div>
                    </div>
                    <div className={style.profile_posts}>
                        {data.posts?.map((item) => (
                            <div className={style.profile_posts__item}>
                                <UserPosts {...item} />
                            </div>
                        ))}
                    </div>
                </main>
            )}
        </div>
    );
};

export default MyProfile;
