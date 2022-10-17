import { getContentType } from "./../utils/api.utils";
import axios from "axios";

export const ApiURL = `${process.env.NEXT_PUBLIC_REACT_APP_URL}`;

export const axiosRequest = axios.create({
    baseURL: ApiURL,
});
