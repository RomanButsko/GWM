import React from "react";
import { FC } from "react";
import { Layout } from "../../layout/Layout";
import Posts from "../../Posts/Posts";
import { IHomePosts } from "./home.interface";
import style from "./Home.module.sass";

const HomePage: FC<IHomePosts> = (props) => {
    return (
        <>
            <Layout title={"Главная страница"}>
                <Posts {...props} />
            </Layout>
        </>
    );
};

export default HomePage;
