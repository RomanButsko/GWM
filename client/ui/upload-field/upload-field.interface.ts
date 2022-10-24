import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface IUploadField {
    title: string;
    onChange: (...event: any) => any;
    folder?: string;
    setIsChosen: Dispatch<SetStateAction<boolean>>;
}
