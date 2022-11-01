import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { ISearchPost } from "./searchItem.interface";
import style from "./SearchItem.module.sass";

const SearchItem: FC<ISearchPost> = ({ post, setSearchTerm }) => {
    const router = useRouter();

    const changeRouter = (id: number) => {
        router.push(`/posts/${id}`);
        setSearchTerm("");
    };

    return (
        <li className={style.card} onClick={() => changeRouter(post.id)}>
            {post.title}
        </li>
    );
};

export default SearchItem;
