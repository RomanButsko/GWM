import { getContentType } from "./../utils/api.utils";
import axios from "axios";

const ApiURL = `${process.env.REACT_APP_URL}`;

export const axiosRequest = axios.create({
    baseURL: ApiURL,
    headers: getContentType(),
});
