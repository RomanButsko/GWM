import { IMediaResponse } from "./../../../server/src/media/media.interface";
import { axiosRequest } from "./../../api/axios";

export const MediaService = {
    async upload(media: FormData, folder?: string) {
        return axiosRequest.post<IMediaResponse>("/media", media, {
            params: { folder },
            headers: { "Content-type": "multipart/form-data" },
        });
    },
};
