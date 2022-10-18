import Head from "next/head";
import React, { FC } from "react";
import { PropsWithChildren } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import style from "./Layout.module.sass";

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({
    children,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main className={style.main}>
                <header className={style.header}>
                    <Header />
                </header>
                <section className={style.sidebar}>
                    <Sidebar />
                </section>
                {children}
            </main>
        </>
    );
};
