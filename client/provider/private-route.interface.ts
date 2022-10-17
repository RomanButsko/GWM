import { NextPage } from "next";

export type TypeRole = {
    isOnlyUser?: boolean;
};

export type PrivateRouter<P = {}> = NextPage<P> & TypeRole;

export type TypeComponentAuthFields = { Component: TypeRole };
