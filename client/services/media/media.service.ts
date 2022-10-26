import { IMediaResponse } from "./../../../server/src/media/media.interface";
import { axiosRequest } from "./../../api/axios";

export const MediaService = {
    async upload(media: FormData, id: number, folder?: string) {
        return axiosRequest.post<IMediaResponse>("/media", media, {
            params: { folder, id },
            headers: { "Content-Type": "multipart/form-data" },
        });
    },
};
