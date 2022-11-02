import Image from "next/image";
import React from "react";
import RightHeader from "./RightHeader/RightHeader";
import logo from "./../../../asset/logo.png";
import style from "./Header.module.sass";
import { useRouter } from "next/router";
import Search from "./Search/Search";

const Header = () => {
    const router = useRouter();
    return (
        <div className={style.header}>
            <div className={style.header_image}>
                {logo && (
                    <Image
                        onClick={() => router.push("/")}
                        src={logo}
                        alt="logo"
                        width={200}
                        height={50}
                    />
                )}
            </div>
            <div className={style.header_search}>
                <Search />
            </div>
            <div className={style.header_profile}>
                <RightHeader />
            </div>
        </div>
    );
};

export default Header;
