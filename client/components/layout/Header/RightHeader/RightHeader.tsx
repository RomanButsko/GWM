import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useAppSelector } from "../../../../hooks/useSelector";
import { Button } from "../../../../ui/button/Button";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import style from "./RightHeader.module.sass";

const RightHeader = () => {
    const [profileMenu, setProfileMenu] = useState(false);

    const { user } = useAppSelector((state) => state.auth);

    const handleClick = (e: any) => {
        e.preventDefault();
        setProfileMenu(!profileMenu);
    };
    return (
        <>
            <div className={style.profile}>
                <div className={style.profile_block}>
                    {user ? (
                        <div className={style.newId}>{user.email}</div>
                    ) : (
                        <AiOutlineUserAdd fill="#ffff" fontSize={28} />
                    )}
                    <Button className={style.profile_btn} onClick={handleClick}>
                        Профиль
                    </Button>
                </div>
                {profileMenu && (
                    <div className={style.profile_forms}>
                        <ProfileMenu />
                    </div>
                )}
            </div>
        </>
    );
};

export default RightHeader;
