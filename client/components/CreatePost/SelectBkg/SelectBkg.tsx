import React from "react";
import { FC } from "react";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/useSelector";
import AnimationModal from "../../../ui/modal/AnimationModal";
import ListBkg from "./Content/List/ListBgk";
import { ISelectBkg } from "./selectBkg.interface";
import style from "./SelectBkg.module.sass";

const SelectBkg: FC<ISelectBkg> = ({ selectedPhoto }) => {
    const { path, success } = useAppSelector((state) => state.postAvatar);

    if (success) {
        selectedPhoto(path);
    }
    const [modal, setModal] = useState<boolean>(false);
    return (
        <div>
            <div onClick={() => setModal(!modal)}>Выберите задний фон</div>
            {path && <div>Выбрано {path}</div>}
            {modal && (
                <AnimationModal
                    opened={modal}
                    onClose={() => setModal(false)}
                    windowView={"chooseBkg"}
                >
                    <ListBkg setModal={setModal} />
                </AnimationModal>
            )}
        </div>
    );
};

export default SelectBkg;
