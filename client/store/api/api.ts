import { IPost, IPostReq } from "./../../types/post.type";
import { ApiURL } from "./../../api/axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types/user.types";
import { TypeRootState } from "../store";

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["Posts"],
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
                              type: "Posts" as const,
                              id,
                          })),
                          { type: "Posts", id: "LIST" },
                      ]
                    : [{ type: "Posts", id: "LIST" }],
        }),
        getMostPopularPosts: builder.query<IPost[], void>({
            query: () => "posts/findMostPopular",
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
        getFindAllPosts: builder.query<IPost[], void>({
            query: () => "posts/findPost",
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
        getFindOnePost: builder.query<IPost, number>({
            query: (id: number) => `posts/findPost/${id}`,
        }),
        findNewPost: builder.query<IPost[], void>({
            query: () => "posts/findNewPost",
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
        createPost: builder.mutation<IPost, Partial<IPostReq>>({
            query: (body) => ({
                url: `posts/create`,
                method: "POST",
                body,
            }),
            invalidatesTags: [{ type: "Posts", id: "LIST" }],
        }),
    }),
});
