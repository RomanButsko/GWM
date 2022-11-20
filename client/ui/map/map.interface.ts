import { SetStateAction } from "react";
import { Dispatch } from "react";

export interface IYandexMap {
    clusterPoints?: any;
    post: string;
    setMap?: Dispatch<SetStateAction<boolean>>;
    showMap?: boolean;
    width: string;
    height: string;
    data?: IPostData;
}

interface IPostData {
    title: string;
    description: string;
}
