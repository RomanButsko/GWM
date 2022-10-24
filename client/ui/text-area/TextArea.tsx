import React, { forwardRef } from "react";
import { PropsWithChildren } from "react";
import { FC } from "react";
import { ITextArea } from "./textarea.interface";
import styles from "./TextArea.module.sass";
import cn from "classnames";

const TextArea: FC = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ error, style, ...rest }, ref) => {
        return (
            <>
                <textarea ref={ref} {...rest} className={styles.create_input} />
                {error && (
                    <span className={styles.required}>{error?.message}</span>
                )}
            </>
        );
    }
);

export default TextArea;
