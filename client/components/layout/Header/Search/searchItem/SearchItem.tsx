import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { IPost } from "../../../../../types/post.type";
import { ISearchPost } from "./searchItem.interface";
import style from "./SearchItem.module.sass";

const SearchItem: FC<ISearchPost> = ({ post, setSearchTerm }) => {
    const router = useRouter();
    console.log(router.asPath);

    const changeRouter = (id: number) => {
        router.push(`/posts/${id}`);
        setSearchTerm("");
    };
    return (
        <div className={style.card} onClick={() => changeRouter(post.id)}>
            <div>{post.title}</div>
            {post.description}
        </div>
    );
};

export default SearchItem;
