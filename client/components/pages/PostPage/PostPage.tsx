import { FC } from "react";
import { IPost } from "../../../types/post.type";
import SelectPost from "../../SelectPost/SelectPost";
import { Layout } from "../../layout/Layout";

const PostPage: FC<IPost> = (props) => {
    return (
        <>
            <Layout title={props.title}>
                <SelectPost {...props} />
            </Layout>
        </>
    );
};

export default PostPage;
