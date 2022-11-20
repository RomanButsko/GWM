import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface IBkgExample {
    background: string;
    setModal: Dispatch<SetStateAction<boolean>>;
}
