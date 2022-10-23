import React from "react";
import { FC } from "react";
import { IPost } from "../../../types/post.type";
import HomePosts from "../../../ui/home-post/HomePosts";
import style from "./RandomPost.module.sass";

const RandomPost: FC<IPost> = (props) => {
    return (
        <div className={style.posts_block}>
            <HomePosts {...props} />
        </div>
    );
};

export default RandomPost;
