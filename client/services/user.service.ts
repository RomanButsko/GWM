import { IUser } from "./../types/user.types";
import { axiosRequest } from "../api/axios";

export const UserService = {
    async getOneUser(id: number) {
        const response = await axiosRequest.get<IUser>(`user/${id}`);
        return response.data;
    },
    async getAllUser() {
        const response = await axiosRequest.get<IUser[]>("user");
        return response.data;
    },
};
