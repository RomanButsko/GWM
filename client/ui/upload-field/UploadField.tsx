import React, { useEffect, useState } from "react";
import { FC } from "react";
import { IStateType, IUploadField } from "./upload-field.interface";
import { useUploadField } from "./useUploadField";
import style from "./UploadField.module.sass";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const UploadField: FC<IUploadField> = ({ title, onChange, folder, id }) => {
    const [files, setFiles] = useState<IStateType[]>([]);

    const { uploadFile } = useUploadField(onChange, id, folder);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/*": [],
        },
        onDrop: (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    })
                )
            );
        },
    });

    const thumbs = files.map((file) => (
        <div className={style.thumb} key={file.name}>
            <div className={style.thumbInner}>
                <Image
                    src={file.preview}
                    className={style.img}
                    width={300}
                    height={180}
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <section className={style.container}>
            <div
                {...getRootProps({ className: "dropzone" })}
                className={style.container_window}
                onChange={uploadFile}
            >
                <input {...getInputProps()} />
                <p>{title}</p>
            </div>
            <aside className={style.container_window__thumb}>{thumbs}</aside>
        </section>
    );
};

export default UploadField;
