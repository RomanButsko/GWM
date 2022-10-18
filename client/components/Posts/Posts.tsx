import React from "react";
import { FC } from "react";
import { IHomePosts } from "../pages/Home/home.interface";
import style from "./Posts.module.sass";

const Posts: FC<IHomePosts> = ({ randomPost, newPosts, mostPopularPosts }) => {
    console.log(randomPost, newPosts, mostPopularPosts);
    return (
        <div className={style.post}>
            <div className={style.post_random}>
                Random
                {randomPost.title}
                {randomPost.views}
            </div>

            <div className={style.post_popular}>
                {mostPopularPosts.map((item) => (
                    <>
                        Popular
                        <div>{item.views}</div>
                        <div>{item.title}</div>
                    </>
                ))}
            </div>

            <div className={style.post_new}>
                {newPosts.map((item) => (
                    <>
                        NewPost
                        <div>{item.views}</div>
                        <div>{item.title}</div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Posts;
