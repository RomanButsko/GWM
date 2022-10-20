import Image from "next/image";
import React from "react";
import RightHeader from "./RightHeader/RightHeader";
import logo from "./../../../asset/logo.png";
import style from "./Header.module.sass";

const Header = () => {
    return (
        <div className={style.header}>
            <Image src={logo} alt="logo" width={200} height={50} />
            <RightHeader />
        </div>
    );
};

export default Header;
