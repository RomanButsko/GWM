import { Base } from "./base.types";
import { IPostUser } from "./userPost.types";

export interface IUser extends Base {
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    aboutMe: string;
    avatarPath?: string;
    date: Date;
    gender: string;
    city: string;
    banned: boolean;
    banReason: string;
    like: number;
    dislike: number;
    accessT: string;
    posts?: IPostUser[];
}

export interface IUserAuth {
    user: IUser | null;
    accessToken: string;
}
