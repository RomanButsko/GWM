import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { FC } from "react";
import { TypeComponentAuthFields } from "./private-route.interface";

const DynamicCheckRole = dynamic(() => import("./checkRole"), {
    ssr: false,
});

export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    Component: { isOnlyUser },
    children,
}) => {
    return !isOnlyUser ? (
        <>{children}</>
    ) : (
        <DynamicCheckRole Component={{ isOnlyUser }}>
            {children}
        </DynamicCheckRole>
    );
};
