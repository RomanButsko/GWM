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
    async getProfile() {
        const response = await axiosRequest.get<IUser>("user/profile");
        return response.data;
    },

    async login(email: string, password: string) {
        const response = await axiosRequest.post<IUser>("auth/signIn", {
            email,
            password,
        });
        return response.data;
    },
    async register(
        email: string,
        password: string,
        name: string,
        surname: string,
        date: Date,
        gender: string,
        city: string
    ) {
        const response = await axiosRequest.post("auth/register", {
            email,
            password,
            name,
            surname,
            date,
            gender,
            city,
        });
        return response.data;
    },
};
