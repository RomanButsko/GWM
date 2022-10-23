import { IUser } from "./../types/user.types";
import { axiosRequest } from "../api/axios";

export const UserService = {
    async getOnePureUser(id: string) {
        const response = await axiosRequest.get<IUser>(`user/pureUser/${id}`);
        if (!response) return;
        return response.data;
    },
    async getOneUserById(id: string) {
        const response = await axiosRequest.get<IUser>(`user/${id}`);
        return response;
    },
    async getAllUser() {
        const response = await axiosRequest.get<IUser[]>("user");
        return response;
    },
};
