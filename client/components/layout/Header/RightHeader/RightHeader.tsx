import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useOutside } from "../../../../hooks/useOutside";
import { useAppSelector } from "../../../../hooks/useSelector";
import { Button } from "../../../../ui/button/Button";
import CreatePost from "../../../CreatePost/CreatePost";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import style from "./RightHeader.module.sass";

const RightHeader = () => {
    const [profileMenu, setProfileMenu] = useState(false);

    const { ref, isShow, setIsShow } = useOutside(false);

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
                        <>
                            <div className={style.newId} onClick={handleClick}>
                                {user.email}
                            </div>
                            <button
                                className={style.profile_block__post}
                                onClick={() => setIsShow(!isShow)}
                            >
                                {isShow ? (
                                    <div>Отменить</div>
                                ) : (
                                    <button>Добавить пост</button>
                                )}
                            </button>
                            {isShow && (
                                <div
                                    ref={ref}
                                    className={
                                        style.profile_block__post__create
                                    }
                                >
                                    <CreatePost />
                                </div>
                            )}
                        </>
                    ) : (
                        <div>
                            <AiOutlineUserAdd fill="#ffff" fontSize={28} />
                            <Button
                                className={style.profile_btn}
                                onClick={handleClick}
                            >
                                Профиль
                            </Button>
                        </div>
                    )}
                </div>
                {profileMenu && (
                    <div className={style.profile_forms}>
                        <ProfileMenu
                            setMenu={(arg0: boolean) => setProfileMenu(arg0)}
                            profileMenu={profileMenu}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default RightHeader;
