import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { UserService } from "../../services/user.service";
import { IHomePosts } from "../pages/HomePage/home.interface";
import PostNew from "./newOnePost/PostNew";
import PopularPosts from "./popularPosts/PopularPosts";
import style from "./Posts.module.sass";
import RandomPost from "./randomPost/RandomPost";

const Posts: FC<IHomePosts> = ({ randomPost, newPosts, mostPopularPosts }) => {
    const router = useRouter();

    const handleClick = (e: any, post: any) => {
        const path = post.userId;
        e.preventDefault();
        router.push(`/profile/${path}`);
    };
    return (
        <div className={style.post}>
            <div className={style.post_random}>
                {<RandomPost {...randomPost} />}
            </div>

            <div className={style.post_popular}>
                {mostPopularPosts.map((item) => (
                    <PopularPosts {...item} />
                ))}
            </div>

            <div className={style.post_new}>
                <PostNew {...newPosts[0]} />
            </div>
        </div>
    );
};

export default Posts;
