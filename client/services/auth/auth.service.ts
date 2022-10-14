import { IAuthResponse } from "./auth.helper";
import { axiosRequest } from "../../api/axios";

export const AuthService = {
    async login(email: string, password: string) {
        const user = axiosRequest.post<IAuthResponse>("auth/signIn", {
            email,
            password,
        });
        return (await user).data;
    },
};
