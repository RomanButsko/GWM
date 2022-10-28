import React, { useState } from "react";
import { FC } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useOutside } from "../../../../hooks/useOutside";
import AnimationModal from "../../../../ui/modal/AnimationModal";
import LoginForm from "../LoginForm/Login";
import RegistationForm from "../RegisterForm/AuthRegisterForm";
import UserMenu from "../UserMenu/UserMenu";
import style from "./Profile.module.sass";
import { IProfileMenu } from "./profileMenu.interface";

const ProfileMenu: FC<IProfileMenu> = (props) => {
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [signInModal, setSignInModal] = useState<boolean>(false);
    const [authModal, setAuthModal] = useState<boolean>(true);

    const { user } = useAuth();

    const { ref, isShow, setIsShow } = useOutside(false);

    const changeShowModal = () => {
        setAuthModal(!authModal);
        setIsShow(!isShow);
    };

    const loginForm = () => {
        setLoginModal(!loginModal);
        changeShowModal();
    };

    const signInForm = () => {
        setSignInModal(!signInModal);
        changeShowModal();
    };

    return (
        <div className={style.auth}>
            {!user && authModal && (
                <div className={style.auth_forms}>
                    <button onClick={loginForm}>Логин</button>
                    <button onClick={signInForm}>Зарегестрироваться</button>
                </div>
            )}

            {!user &&
                isShow &&
                ((signInModal && (
                    <div ref={ref} className={style.auth_forms__item}>
                        <AnimationModal
                            opened={isShow}
                            onClose={() => setIsShow(false)}
                            windowView={"register"}
                        >
                            <RegistationForm />
                        </AnimationModal>
                    </div>
                )) ||
                    (loginModal && (
                        <div ref={ref} className={style.auth_forms__item}>
                            <AnimationModal
                                opened={isShow}
                                onClose={() => setIsShow(false)}
                                windowView={"login"}
                            >
                                <LoginForm {...props} />
                            </AnimationModal>
                        </div>
                    )))}

            {user && <UserMenu {...props} />}
        </div>
    );
};

export default ProfileMenu;
