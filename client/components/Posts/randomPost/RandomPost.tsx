import React from "react";
import { FC } from "react";
import { IPost } from "../../../types/post.type";
import style from "./RandomPost.module.sass";

const RandomPost: FC<IPost> = ({
    title,
    description,
    date,
    picture,
    location,
    id,
    views,
    userId,
}) => {
    return (
        <div className={style.posts_block}>
            <div>
                <span>{title}</span>
                <span>{description}</span>
                <span>{location}</span>
            </div>
            <div>
                <span>{description}</span>
                <span>{views}</span>
            </div>
        </div>
    );
};

export default RandomPost;
