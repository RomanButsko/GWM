import Image from "next/image";
import React from "react";
import { FC } from "react";
import { IPost } from "../../../types/post.type";
import HomePosts from "../../../ui/home-post/HomePosts";
import style from "./PostNew.module.sass";

const PostNew: FC<IPost> = (props) => {
    return (
        <div
            className={style.posts_block}
            // style={{
            //     background: `http://localhost:7500/${props.bckgPicture}`,
            // }}
        >
            <div className={style.posts_block__image}>
                <Image
                    src={`http://localhost:7500/${props.bckgPicture}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <HomePosts {...props} />
        </div>
    );
};

export default PostNew;
