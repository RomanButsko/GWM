import { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ANIMATION_TIME } from "./const";
import styles from "./styles.module.sass";
import animationStyles from "./animation.module.sass";
import { FC } from "react";
import { PropsWithChildren } from "react";
import { IAnimationModal } from "../animation.interface";
import cn from "classnames";

const overlayAnimation = {
    enter: animationStyles.overlayEnter,
    enterActive: animationStyles.overlayEnterActive,
    exit: animationStyles.overlayExit,
    exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
    enter: animationStyles.contentEnter,
    enterActive: animationStyles.contentEnterActive,
    exit: animationStyles.contentExit,
    exitActive: animationStyles.contentExitActive,
};

export const Layout: FC<PropsWithChildren<IAnimationModal>> = ({
    onClose,
    children,
    windowView,
    opened,
}) => {
    const overlayRef = useRef();
    const contentRef = useRef();

    const [animationIn, setAnimationIn] = useState<boolean>(false);

    useEffect(() => {
        setAnimationIn(opened);
    }, [opened]);

    return (
        <div className={styles.container}>
            <CSSTransition
                in={animationIn}
                nodeRef={overlayRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={overlayAnimation}
            >
                <div
                    ref={overlayRef}
                    className={styles.overlay}
                    onClick={onClose}
                />
            </CSSTransition>
            <CSSTransition
                in={animationIn}
                nodeRef={contentRef}
                timeout={ANIMATION_TIME}
                mountOnEnter
                unmountOnExit
                classNames={contentAnimation}
            >
                <div
                    ref={contentRef}
                    className={cn(styles.content, {
                        [styles.content_login]: !!(windowView === "login"),
                        [styles.content_register]: !!(
                            windowView === "register"
                        ),
                    })}
                >
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};
