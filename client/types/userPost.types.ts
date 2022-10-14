import { Base } from "./base.types";

export interface IPostUser extends Base {
    id: number;
    title: string;
    description: string;
    date: Date;
    location: string;
    userId: number;
}
