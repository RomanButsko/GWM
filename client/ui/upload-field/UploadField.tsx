import React from "react";
import { FC } from "react";
import { IUploadField } from "./upload-field.interface";
import { useUploadField } from "./useUploadField";

const UploadField: FC<IUploadField> = ({ title, onChange, folder, id }) => {
    const { uploadFile } = useUploadField(onChange, id, folder);

    return (
        <div>
            {title && <h2>{title}</h2>}
            <label>
                <span>Выберите файл</span>
                <br></br>
                <input type="file" onChange={uploadFile} />
            </label>
        </div>
    );
};

export default UploadField;

// Здесь при изменении файлы в input в него возвращается новое фото (name и путь)
