import { IPost, IPostReq } from "./../../types/post.type";
import { ApiURL } from "./../../api/axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IActiveUser, IChangeAvatar, IUser } from "../../types/user.types";
import { TypeRootState } from "../store";

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Posts", "User", "ActiveUser"],
    baseQuery: fetchBaseQuery({
        baseUrl: ApiURL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as TypeRootState).auth.user?.accessT;
            !!token && headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getProfile: builder.query<IUser, void>({
            query: () => `user/profile`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.posts.map(({ id }) => ({
                              type: "User" as const,
                              id,
                          })),
                          { type: "User", id: "LIST" },
                      ]
                    : [{ type: "User", id: "LIST" }],
        }),
        getUserById: builder.query<IUser, number>({
            query: (id: number) => `user/pureUser/${id}`,
        }),
        findMyPostBySearch: builder.query<IPost[], string>({
            query: (param) => `posts?searchParam=${param}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: "Posts" as const,
                              id,
                          })),
                          { type: "Posts", id: "LIST" },
                      ]
                    : [{ type: "Posts", id: "LIST" }],
        }),
        findActiveUserForPost: builder.query<IActiveUser & IPost, string>({
            query: (id: string) => `user/baseDataUser/${id}`,
        }),
        createPost: builder.mutation<IPost, Partial<IPostReq>>({
            query: (body) => ({
                url: `posts/create`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Posts", id: "LIST" }],
        }),
        changeUserAvatar: builder.mutation<
            IUser,
            { data: Partial<IChangeAvatar>; id: number }
        >({
            query: ({ data, id }) => ({
                url: `user/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
        joinToEvent: builder.mutation<IUser & IPost, { id: string }>({
            query: ({ id }) => ({
                url: `posts/join/${id}`,
                method: "POST",
            }),
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
        leaveEvent: builder.mutation<IUser & IPost, { id: string }>({
            query: ({ id }) => ({
                url: `posts/leaveEvent/${id}`,
                method: "POST",
            }),
            invalidatesTags: [{ type: "User", id: "LIST" }],
        }),
    }),
});
