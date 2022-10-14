import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { IMenuData } from "./menu.interface";
import style from "./Menu.module.sass";

const MenuItem: FC<{ elem: IMenuData }> = ({ elem }) => {
    const { asPath } = useRouter();
    return (
        <>
            <Link href={elem.link}>
                <a className={asPath === elem.link ? style.active : ""}>
                    {elem.icon && <elem.icon />}
                    <div>{elem.title}</div>
                </a>
            </Link>
        </>
    );
};

export default MenuItem;
