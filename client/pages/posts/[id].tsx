import { NextPage } from "next";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import PostPage from "../../components/pages/PostPage/PostPage";
import { PostService } from "../../services/post/post.service";
import { IPost, IPostIdProps } from "../../types/post.type";
import { IParams } from "../../types/userSearchId.types";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { id } = params! as IParams;
        const { data: post } = await PostService.getFindOne(+id);
        return {
            props: {
                post,
            },
        };
    } catch (e) {
        return {
            props: {
                post: {} as IPost,
            },
        };
    }
};

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const { data: arr } = await PostService.getFindAll();
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

const post: NextPage<IPostIdProps> = ({ post }) => {
    return (
        <div>
            <PostPage {...post} />
        </div>
    );
};

export default post;
