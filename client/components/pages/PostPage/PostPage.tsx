import { FC } from "react";
import { IPost } from "../../../types/post.type";
import Post from "../../ExactPost/Post";
import { Layout } from "../../layout/Layout";

const PostPage: FC<IPost> = (props) => {
    return (
        <>
            <Layout title={props.title}>
                <Post {...props} />
            </Layout>
        </>
    );
};

export default PostPage;
