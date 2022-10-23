import { IPost } from "./../../types/post.type";
import { axiosRequest } from "../../api/axios";

export const PostService = {
    async getMostPopular() {
        const response = await axiosRequest.get<IPost[]>(
            "posts/findMostPopular"
        );
        return response;
    },
    async getFindAll() {
        const response = await axiosRequest.get<IPost[]>("posts/findPost");
        return response;
    },
    async getFindOne(id: number) {
        const response = await axiosRequest.get<IPost>(`posts/findPost/${id}`);
        return response;
    },
    async findNewPost() {
        const response = await axiosRequest.get<IPost[]>("posts/findNewPost");
        return response;
    },
};
