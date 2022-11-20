import { errorCatch } from "./../../utils/api.utils";
import { MediaService } from "../../services/media/media.service";
import { ChangeEvent } from "react";

export const useUploadField = (
    onChange: (...event: any) => void,
    // setIsChosen: Dispatch<SetStateAction<boolean>>,
    id: number,
    folder?: string
) => {
    console.log("hook", id, folder);
    const dataMutate = async (data: FormData) => {
        return await MediaService.upload(data, id, folder)
            .then(({ data }) => onChange(data))
            .catch((error) => alert(errorCatch(error)));
    };

    const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        console.log("files", files);
        if (!files?.length) return;

        // setIsChosen && setIsChosen(true);

        const formData = new FormData();
        formData.append("media", files[0]);
        return await dataMutate(formData);
    };

    return {
        uploadFile,
    };
};

//здесь получаем URL и Name загруженного файла
