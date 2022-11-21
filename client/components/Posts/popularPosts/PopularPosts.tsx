import Image from "next/image";
import React from "react";
import { FC } from "react";
import { IPost } from "../../../types/post.type";
import HomePosts from "../../../ui/home-post/HomePosts";
import style from "./PopularPosts.module.sass";

const PopularPosts: FC<IPost> = (props) => {
    return (
        <div className={style.posts_block}>
            <div className={style.posts_block__image}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_REACT_APP_URL}${props.bckgPicture}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <HomePosts {...props} />
        </div>
    );
};

export default PopularPosts;
