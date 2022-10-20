import { IUser } from "./../types/user.types";
import { axiosRequest } from "../api/axios";

export const UserService = {
    async getOnePureUser(id: string) {
        const response = await axiosRequest.get<IUser>(`pureUser/${id}`);
        if (!response) return;
        return response.data;
    },
    async getAllUser() {
        const response = await axiosRequest.get<IUser[]>("user");
        return response.data;
    },
};
