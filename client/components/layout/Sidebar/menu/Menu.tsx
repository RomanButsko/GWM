import React, { FC } from "react";
import { IMenuData } from "./menu.interface";
import MenuItem from "./MenuItem";
import style from "./Menu.module.sass";

interface IMenu {
    items: IMenuData[];
}

const Menu: FC<IMenu> = ({ items }) => {
    return (
        <div className={style.menu}>
            {items.map((listNavigation) => (
                <MenuItem elem={listNavigation} />
            ))}
        </div>
    );
};

export default Menu;
