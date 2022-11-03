import axios from "axios";

export const ApiURL = `${process.env.NEXT_PUBLIC_REACT_APP_URL}`;

const headers = {
    "Content-Type": "application/json",
};

export const axiosRequest = axios.create({
    baseURL: ApiURL,
    headers: headers,
});
