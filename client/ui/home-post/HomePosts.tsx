import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { FC } from "react";
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
            </div>
            {userId && (
                <div
                    className={style.block_user}
                    onClick={() => router.push(`profile/${id}`)}
                >
                    <UserAvatar id={userId} />
                </div>
            )}
        </>
    );
};

export default HomePosts;
