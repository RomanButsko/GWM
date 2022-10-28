import React, { forwardRef } from "react";
import { FC } from "react";
import { ITextArea } from "./textarea.interface";
import styles from "./TextArea.module.sass";

const TextArea: FC = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ error, style, ...rest }, ref) => {
        return (
            <>
                <div className={styles.areaBlock} style={style}>
                    <textarea ref={ref} {...rest} />
                    {error && (
                        <span className={styles.error}>{error?.message}</span>
                    )}
                </div>
            </>
        );
    }
);

export default TextArea;
