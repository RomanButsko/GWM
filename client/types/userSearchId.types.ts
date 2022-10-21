import { ParsedUrlQuery } from "querystring";
import { IUser } from "./user.types";

export interface IUserIdProps {
    user: IUser;
}

export interface IParams extends ParsedUrlQuery {
    id: string;
}
