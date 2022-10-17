import React from "react";
import { FC } from "react";
import { Layout } from "../../layout/Layout";
import { IHomePosts } from "./home.interface";

const HomePage: FC<IHomePosts> = ({
    randomPost,
    newPosts,
    mostPopularPosts,
}) => {
    console.log(randomPost, newPosts, mostPopularPosts);
    return (
        <>
            <Layout title={"Главная страница"}></Layout>
            {randomPost.description}
        </>
    );
};

export default HomePage;
