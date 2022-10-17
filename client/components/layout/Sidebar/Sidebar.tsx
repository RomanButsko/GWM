import React from "react";
import { api } from "../../../store/api/api";
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
