import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useOutside } from "../../../../hooks/useOutside";
import { useAppSelector } from "../../../../hooks/useSelector";
import { myLoader } from "../../../../loader/Image-loader";
import { Button } from "../../../../ui/button/Button";
import CreatePost from "../../../CreatePost/CreatePost";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import style from "./RightHeader.module.sass";
import { IoMdAdd } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";
import AnimationModal from "../../../../ui/modal/AnimationModal";
import userSvg from "./../../../../asset/user-svg.svg";

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
                                <Image
                                    loader={myLoader}
                                    src={user.avatarPath || userSvg}
                                    width={50}
                                    height={50}
                                    className={style.profile_avatar}
                                />
                            </div>
                            <button
                                className={style.profile_block__post}
                                onClick={() => setIsShow(!isShow)}
                            >
                                {isShow ? (
                                    <GiReturnArrow />
                                ) : (
                                    <IoMdAdd color="white" fontSize="30px" />
                                )}
                            </button>
                            {isShow && (
                                <div
                                    className={
                                        style.profile_block__post__create
                                    }
                                >
                                    <AnimationModal
                                        opened={isShow}
                                        onClose={() => setIsShow(false)}
                                        windowView={"createPost"}
                                    >
                                        <CreatePost setIsShow={setIsShow} />
                                    </AnimationModal>
                                </div>
                            )}
                        </>
                    ) : (
                        <Button
                            className={style.profile_btn}
                            onClick={handleClick}
                        >
                            <AiOutlineUserAdd fill="#ffff" fontSize={25} />
                            Профиль
                        </Button>
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
