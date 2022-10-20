import { IUser } from "./user.types";

export interface IPost extends IPostReq {
    id: number;
    views: number;
    userId: number;
}

export interface IPostReq {
    title: string;
    description: string;
    date: Date;
    picture: string;
    location: string;
}
