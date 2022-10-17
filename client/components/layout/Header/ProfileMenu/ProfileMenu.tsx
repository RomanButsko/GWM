import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useOutside } from "../../../../hooks/useOutside";
import LoginForm from "../LoginForm/Login";
import RegistationForm from "../RegisterForm/AuthRegisterForm";
import style from "./Profile.module.sass";

const ProfileMenu = () => {
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [signInModal, setSignInModal] = useState<boolean>(false);
    const [authModal, setAuthModal] = useState<boolean>(true);

    const { user } = useAuth();

    const { ref, isShow, setIsShow } = useOutside(false);

    const loginForm = () => {
        setIsShow(!isShow);
        setLoginModal(!loginModal);
        setAuthModal(!authModal);
    };

    const signInForm = () => {
        setIsShow(!isShow);
        setSignInModal(!signInModal);
        setAuthModal(!authModal);
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
                        <RegistationForm />
                    </div>
                )) ||
                    (loginModal && (
                        <div ref={ref} className={style.auth_forms__item}>
                            <LoginForm />
                        </div>
                    )))}
        </div>
    );
};

export default ProfileMenu;
