import { errorCatch } from "./../../utils/api.utils";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { MediaService } from "../../services/media/media.service";
import { ChangeEvent } from "react";

export const useUploadField = (
    onChange: (...event: any) => void,
    folder?: string,
    setIsChosen?: Dispatch<SetStateAction<boolean>>
) => {
    const dataMutate = async (data: FormData) => {
        await MediaService.upload(data, folder)
            .then((res) => onChange(res))
            .catch((error) => alert(errorCatch(error)));
    };

    const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files?.length) return;

        setIsChosen && setIsChosen(true);

        const formData = new FormData();
        formData.append("media", files[0]);

        await dataMutate(formData);
    };

    return {
        uploadFile,
    };
};
