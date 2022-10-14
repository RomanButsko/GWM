import { IUser } from "./../../types/user.types";

export interface IUserRegister
    extends Pick<
        IUser,
        "email" | "password" | "name" | "surname" | "date" | "gender" | "city"
    > {}

export interface IUserLogin {
    email: string;
    password: string;
}
