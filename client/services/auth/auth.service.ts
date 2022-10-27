import { axiosRequest } from "../../api/axios";
import { IUser } from "../../types/user.types";

export const AuthService = {
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
        city: string,
        gender: string,
        date: Date,
        name: string,
        surname: string
    ) {
        const response = await axiosRequest.post("auth/register", {
            email,
            password,
            city,
            gender,
            date,
            name,
            surname,
        });
        return response.data;
    },
};
