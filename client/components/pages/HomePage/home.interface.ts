import { IPost } from "../../../types/post.type";

export interface IHomePosts {
    mostPopularPosts: IPost[];
    newPosts: IPost[];
    randomPost: IPost;
}
