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
                <a
                    className={
                        asPath === elem.link
                            ? style.menu_active
                            : style.menu_link
                    }
                >
                    <div className={style.menu_items}>
                        <div className={style.menu_items__item}>
                            <span className={style.menu_items__item__image}>
                                {elem.icon && <elem.icon />}
                                </span>
                            <span className={style.menu_items__item__title}>
                                {elem.title}
                            </span>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
};

export default MenuItem;
