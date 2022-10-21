import React from "react";
import { PropsWithChildren } from "react";
import { FC } from "react";
import style from "./Modal.module.sass";

const Modal: FC<PropsWithChildren> = ({ children }, active) => {
    return (
        <div className={active ? style.modal_active : style.modal}>
            <div
                className={
                    active ? style.modal_content__active : style.modal_content
                }
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
