import { ApiURL } from "./../../api/axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types/user.types";
import { TypeRootState } from "../store";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: ApiURL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState as unknown as TypeRootState).auth.user
                ?.accessT;
            !!token && headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProfile: builder.query<IUser, any>({
            query: () => `user/profile`,
        }),
    }),
});
