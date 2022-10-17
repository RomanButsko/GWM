import { IPost } from "./../../types/post.type";
import { axiosRequest } from "../../api/axios";

export const PostService = {
    async getMostPopular() {
        const response = await axiosRequest.get<IPost[]>(
            "auth/findMostPopular"
        );
        console.log(response.data);
        return response.data;
    },
    async getFindAll() {
        const response = await axiosRequest.get<IPost[]>("auth/findPost");
        return response.data;
    },
    async getFindOne(id: number) {
        const response = await axiosRequest.get<IPost>(`auth/findPost/${id}`);
        return response.data;
    },
    async findNewPost() {
        const response = await axiosRequest.get<IPost[]>("auth/findNewPost");
        return response.data;
    },
};
