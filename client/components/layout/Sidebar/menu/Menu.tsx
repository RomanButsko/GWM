import React, { FC } from "react";
import { IMenuData } from "./menu.interface";
import MenuItem from "./MenuItem";

interface IMenu {
    title: string;
    items: IMenuData[];
}

const Menu: FC<IMenu> = ({ title, items }) => {
    return (
        <>
            {title}
            <div>
                {items.map((item) => (
                    <MenuItem elem={item} />
                ))}
            </div>
        </>
    );
};

export default Menu;
