import React from "react";
import { FC } from "react";
import { IPost } from "../../../types/post.type";
import HomePosts from "../../../ui/home-post/HomePosts";
import style from "./PopularPosts.module.sass";

const PopularPosts: FC<IPost> = (props) => {
    return (
        <div className={style.posts_block}>
            <HomePosts {...props} />
        </div>
    );
};

export default PopularPosts;
