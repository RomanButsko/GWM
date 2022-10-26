import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FC } from "react";
import { myLoader } from "../../loader/Image-loader";
import { IPost } from "../../types/post.type";
import UserAvatar from "../user-avatar/UserAvatar";
import style from "./HomePosts.module.sass";

const HomePosts: FC<IPost> = ({
    title,
    description,
    date,
    picture,
    location,
    id,
    views,
    userId,
}) => {
    const router = useRouter();

    return (
        <>
            <div className={style.block}>
                <Image
                    loader={myLoader}
                    src={picture}
                    width={100}
                    height={80}
                    className={style.block_image}
                />
                <div
                    className={style.block_post}
                    onClick={() => router.push(`posts/${id}`)}
                >
                    <span>{title}</span>
                    <span>{description}</span>
                </div>
                <div>
                    <span>{location}</span>
                    <span>{views}</span>
                </div>
                {userId && (
                    <div
                        className={style.block_user}
                        onClick={() => router.push(`profile/${id}`)}
                    >
                        <UserAvatar id={userId} />
                    </div>
                )}
            </div>
        </>
    );
};

export default HomePosts;
