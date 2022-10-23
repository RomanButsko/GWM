import React from "react";
import { FC } from "react";
import { IPost } from "../../../types/post.type";
import HomePosts from "../../../ui/home-post/HomePosts";
import style from "./PostNew.module.sass";

const PostNew: FC<IPost> = (props) => {
    return (
        <div className={style.posts_block}>
            <HomePosts {...props} />
        </div>
    );
};

export default PostNew;
