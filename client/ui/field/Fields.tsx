import { forwardRef } from "react";
import { IField } from "./field.interface";
import styles from "./Fields.module.sass";

export const Field = forwardRef<HTMLInputElement, IField>(
    ({ error, type = "text", style, ...rest }, ref) => {
        return (
            <>
                <input
                    ref={ref}
                    type={type}
                    {...rest}
                    className={styles.create_input}
                />
                {error && (
                    <span className={styles.required}>{error?.message}</span>
                )}
            </>
        );
    }
);
