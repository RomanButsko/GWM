import { IUser } from "./user.types";

export interface IPost {
    id: number;
    title: string;
    description: string;
    date: Date;
    picture: string;
    views: number;
    location: string;
    userId: number;
    user: IUser;
}
