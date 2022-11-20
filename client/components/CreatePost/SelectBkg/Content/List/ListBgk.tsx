import React from "react";
import { FC } from "react";
import { useState } from "react";
import BkgExample from "../BkgExample/BkgExample";
import { IListBgk } from "./listBgk.interface";
import style from "./ListBgk.module.sass";

const ListBkg: FC<IListBgk> = ({ setModal }) => {
    const [selectedBkg, setSelectedBkg] = useState<string>("bar");
    return (
        <div className={style.container}>
            <ul className={style.container_list}>
                <li onClick={() => setSelectedBkg("bar")}>Бар</li>
                <li onClick={() => setSelectedBkg("cafe")}>Кафе</li>
                <li onClick={() => setSelectedBkg("gym")}>Тренажерный зал</li>
            </ul>
            <BkgExample background={selectedBkg} setModal={setModal} />
        </div>
    );
};

export default ListBkg;
