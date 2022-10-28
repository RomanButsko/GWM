import React from "react";
import { PropsWithChildren } from "react";
import { FC } from "react";
import Portal from "../../portal/Portal";
import { IAnimationModal } from "./animation.interface";
import { Layout } from "./Layout";
import { useMount } from "./useMount";

const AnimationModal: FC<PropsWithChildren<IAnimationModal>> = ({
    opened,
    onClose,
    children,
    windowView,
}) => {
    const { mounted } = useMount({ opened });
    if (!mounted) return null;

    return (
        <Portal>
            <Layout onClose={onClose} opened={opened} windowView={windowView}>
                {children}
            </Layout>
        </Portal>
    );
};

export default AnimationModal;
