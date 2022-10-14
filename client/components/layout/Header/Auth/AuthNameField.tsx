import React, { FC } from "react";
import { ReactFCWithChildren } from "./auth.interface";

const AuthNameField: FC<ReactFCWithChildren> = ({ children, ...props }) => {
    const { name, blockClass, fieldClass, legendClass } = props;
    return (
        <div className={blockClass}>
            <fieldset className={fieldClass}>
                <legend className={legendClass}>{name}</legend>
                {children}
            </fieldset>
        </div>
    );
};

export default AuthNameField;
