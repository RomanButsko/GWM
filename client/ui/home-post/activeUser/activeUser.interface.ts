import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface IActive {
    userId: number;
    joinedUser: number;
    setJoinedUser: Dispatch<SetStateAction<number>>;
}
