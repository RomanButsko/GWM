import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { FC } from "react";
import { myLoader } from "../../../loader/Image-loader";
import { api } from "../../../store/api/api";
import userSvg from "./../../../asset/user-svg.svg";
import { IActive } from "./activeUser.interface";
import style from "./ActiveUser.module.sass";

const ActiveUser: FC<IActive> = ({ userId, joinedUser, setJoinedUser }) => {
    const { data, isSuccess } = api.useFindActiveUserForPostQuery(
        String(userId)
    );

    useEffect(() => {
        setJoinedUser(joinedUser + 1);
    }, []);

    return (
        <>
            {isSuccess && (
                <Image
                    loader={myLoader}
                    src={data?.avatarPath || userSvg}
                    width={30}
                    height={30}
                    className={style.block_user}
                />
            )}
            <div>
                {joinedUser === 1
                    ? `${joinedUser} участник`
                    : joinedUser > 1 && joinedUser < 5
                    ? `${joinedUser} участника`
                    : `${joinedUser} участников`}
            </div>
        </>
    );
};

export default ActiveUser;
