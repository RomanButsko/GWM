import { Base } from "./base.types";
import { IPostUser } from "./userPost.types";

export interface IUser extends Base {
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    aboutMe: string;
    avatarPath: string;
    date: Date;
    gender: string;
    city: string;
    banned: boolean;
    banReason: string;
    like: number;
    dislike: number;
    accessT: string;
    posts: IPostUser[];
    joinPost: number[];
}

export type IUserProfile = Omit<IUser, "id" | "password" | "accessT">;

export type IActiveUser = Pick<
    IUser,
    "id" | "name" | "surname" | "date" | "city" | "avatarPath"
>;

export interface IUserAuth {
    user: IUser | null;
    accessToken: string;
}

export interface IChangeAvatar {
    avatarPath: string;
}
