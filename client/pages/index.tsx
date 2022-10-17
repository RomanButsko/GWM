import type { GetStaticProps, NextPage } from "next";
import HomePage from "../components/pages/Home/Home";
import { IHomePosts } from "../components/pages/Home/home.interface";
import { PostService } from "../services/post/post.service";
import { IPost } from "../types/post.type";
import shuffle from "lodash/shuffle";

const Home: NextPage<IHomePosts> = (props) => {
    return (
        <>
            <HomePage {...props} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const mostPopular = await PostService.getMostPopular();
        const lastPosts = await PostService.findNewPost();
        const randomPost = await PostService.getFindAll();
        return {
            props: {
                mostPopularPosts: mostPopular,
                newPosts: lastPosts,
                randomPost:
                    shuffle(
                        randomPost.filter(
                            (item) => item.id !== mostPopular[0].id
                        )
                    )[0] || ({} as IPost),
            } as IHomePosts,
            revalidate: 20,
        };
    } catch (e) {
        return {
            props: {
                newPosts: [],
                mostPopularPosts: [],
                randomPost: {} as IPost,
            } as IHomePosts,
        };
    }
};

export default Home;
