import Link from "next/link";
import React from "react";
import { FC } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { GrSchedulePlay } from "react-icons/gr";
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
            <div className={style.profile}>
                <ul className={style.profile_list}>
                    <li>
                        <ImProfile />
                        <Link href="my-profile">
                            <a>Мой профиль</a>
                        </Link>
                    </li>
                    <li>
                        <GrSchedulePlay />
                        <Link href="setting">
                            <a>Мой мероприятия</a>
                        </Link>
                    </li>
                    <li>
                        <AiOutlineSetting />
                        <Link href="setting">
                            <a>Настройки</a>
                        </Link>
                    </li>
                </ul>

                <button onClick={logoutForm}>Выйти</button>
            </div>
        </>
    );
};

export default UserMenu;
