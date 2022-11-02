import React, { useEffect, useState } from "react";
import { FC } from "react";
import { IStateType, IUploadField } from "./upload-field.interface";
import { useUploadField } from "./useUploadField";
import styles from "./UploadField.module.sass";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import cn from "classnames";

const UploadField: FC<IUploadField> = ({
    title,
    onChange,
    folder,
    id,
    showBottomPhoto,
    typeField,
}) => {
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
        <div className={styles.thumb} key={file.name}>
            <div className={styles.thumbInner}>
                <Image
                    src={file.preview}
                    className={styles.img}
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
        <section className={styles.container}>
            <div
                {...getRootProps({ className: "dropzone" })}
                className={cn(styles.container_window, {
                    [styles.container_window__userPage]: typeField === "page",
                })}
                onChange={uploadFile}
            >
                <input {...getInputProps()} />
                <p>{title}</p>
            </div>
            {showBottomPhoto && (
                <aside className={styles.container_window__thumb}>
                    {thumbs}
                </aside>
            )}
        </section>
    );
};

export default UploadField;
