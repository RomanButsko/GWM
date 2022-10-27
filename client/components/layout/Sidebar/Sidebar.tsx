import React from "react";
import Menu from "./menu/Menu";
import { menu } from "./menu/menu.data";

const Sidebar = () => {
    return (
        <>
            <Menu items={menu} />
        </>
    );
};

export default Sidebar;
