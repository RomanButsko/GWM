import { IUser } from "./../../types/user.types";

export interface IAuthResponse {
    user: IUser[];
    accessToken: string;
}
