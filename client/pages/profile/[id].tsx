import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { UserService } from "../../services/user.service";
import { IUser } from "../../types/user.types";
import { IParams, IUserIdProps } from "../../types/userSearchId.types";
import ProfilePage from "./../../components/pages/Profile/Profile";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { id } = params! as IParams;
        const { data: user } = await UserService.getOneUserById(id);
        return {
            props: {
                user,
            },
        };
    } catch (e) {
        return {
            props: {
                user: {} as IUser,
            },
        };
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: arr } = await UserService.getAllUser();
        const paths = arr.map((item) => ({
            params: {
                id: String(item.id),
            },
        }));
        return { paths, fallback: "blocking" };
    } catch (e) {
        return { paths: [], fallback: false };
    }
};

const ProfilePages: NextPage<IUserIdProps> = ({ user }) => {
    return <ProfilePage {...user} />;
};

export default ProfilePages;
