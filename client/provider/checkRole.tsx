import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { FC } from "react";
import { useAppSelector } from "../hooks/useSelector";
import { TypeComponentAuthFields } from "./private-route.interface";

const checkRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
    children,
    Component: { isOnlyUser },
}) => {
    const { isLoading, error, user } = useAppSelector((state) => state.auth);
    const { replace, pathname } = useRouter();

    const Children = () => <>{children}</>;

    if (isLoading) return null;

    if (user) return <Children />;

    if (isOnlyUser) pathname !== "/" && replace("/");
    return null;
};

export default checkRole;
