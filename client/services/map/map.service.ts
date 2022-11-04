import { axiosRequest } from "./../../api/axios";

export const MapService = {
    async getPointers() {
        const response = await axiosRequest.get("posts/location");
        return response.data;
    },
};
