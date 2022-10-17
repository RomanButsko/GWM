import { PropsWithChildren } from "react";
import { FC } from "react";
import cn from "classnames";
import styles from "./Button.module.sass";
import { IButton } from "./button.interface";

export const Button: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <button className={cn(styles.submit, className)} {...rest}>
            {children}
        </button>
    );
};
