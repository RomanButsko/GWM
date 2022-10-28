import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface IAnimationModal {
    opened: boolean;
    onClose: Dispatch<SetStateAction<boolean>>;
    windowView: string;
}
