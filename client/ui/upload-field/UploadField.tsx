import React from "react";
import { FC } from "react";
import { IUploadField } from "./upload-field.interface";
import { useUploadField } from "./useUploadField";

const UploadField: FC<IUploadField> = ({
    title,
    onChange,
    setIsChosen,
    folder,
}) => {
    const { uploadFile } = useUploadField(onChange, folder, setIsChosen);

    return (
        <div>
            {title && <h2>{title}</h2>}
            <label>
                <span>Выберите файл</span>
                <input type="file" onChange={uploadFile} />
            </label>
        </div>
    );
};

export default UploadField;
