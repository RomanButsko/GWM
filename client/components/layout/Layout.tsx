import Head from "next/head";
import React, { FC } from "react";
import { PropsWithChildren } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export const Layout: FC<PropsWithChildren<{ title: string }>> = ({
    children,
    title,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Header />
                <section>
                    <Sidebar />
                </section>
                {children}
            </main>
        </>
    );
};
