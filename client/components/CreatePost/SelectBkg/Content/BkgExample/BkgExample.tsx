import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { myLoader } from "../../../../../loader/Image-loader";
import { api } from "../../../../../store/api/api";
import { sendAvatar } from "../../../../../store/postAvatar/postAvatarSlice";
import { IBkgExample } from "./bkgExample.interface";
import style from "./BkgExample.module.sass";

const BkgExample: FC<IBkgExample> = ({ background, setModal }) => {
    const dispatch = useDispatch();

    const { data } = api.useGetExampleBackgroungQuery();
    let paths = [];
    for (let key in data) {
        if (key == background) paths = data[key];
        else () => console.log("Таких фотографий нет");
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [background]);

    const limit = 12;
    const pages = Math.ceil(paths.length / limit);
    const [currentPage, setCurrentPage] = useState(1);
    const newLimit = currentPage * limit;
    const previousLimit = currentPage * limit - limit;
    const pagination = [];

    const next = () => {
        if (currentPage !== pagination.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    for (let i = 1; i <= pages; i++) {
        pagination.push(i);
    }

    const chooseAvatar = (path: string) => {
        dispatch(sendAvatar(path));
        setModal(false);
    };

    return (
        <div className={style.photo}>
            <div className={style.photo_container}>
                {!!paths.length &&
                    paths.map((path: string, index: number) => {
                        if (index <= newLimit && index > previousLimit) {
                            return (
                                <div>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_REACT_APP_URL}${path}`}
                                        width={180}
                                        height={180}
                                        onClick={() => chooseAvatar(path)}
                                    />
                                </div>
                            );
                        }
                    })}
            </div>
            {!!pagination.length && (
                <div className={style.photo_pagination}>
                    {pagination.map((pageNum) => (
                        <div
                            onClick={() => setCurrentPage(pageNum)}
                            className={style.photo_pagination__page}
                        >
                            {pageNum === currentPage ? (
                                <b>{pageNum}</b>
                            ) : (
                                pageNum
                            )}
                        </div>
                    ))}

                    {pages !== currentPage ? (
                        <button
                            onClick={next}
                            className={style.photo_pagination__btn}
                        >
                            Дальше
                        </button>
                    ) : (
                        <div></div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BkgExample;
