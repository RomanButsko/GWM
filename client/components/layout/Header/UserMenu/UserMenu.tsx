import Link from "next/link";
import React from "react";
import { FC } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { useActions } from "../../../../hooks/useAction";
import { IProfileMenu } from "../ProfileMenu/profileMenu.interface";
import style from "./UserMenu.module.sass";

const UserMenu: FC<IProfileMenu> = ({ setMenu, profileMenu }) => {
    const { logout } = useActions();

    const logoutForm = () => {
        logout();
        setMenu(!profileMenu);
    };

    return (
        <>
            <div className={style.auth_forms}>
                <Link href="setting">
                    <div>
                        <AiOutlineSetting />
                        <a>Настройки</a>
                    </div>
                </Link>
                <button onClick={logoutForm}>Выйти</button>
            </div>
        </>
    );
};

export default UserMenu;
