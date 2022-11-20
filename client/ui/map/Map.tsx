import React from "react";
import {
    Clusterer,
    Map,
    Placemark,
    FullscreenControl,
    GeolocationControl,
    SearchControl,
    ZoomControl,
    ObjectManager,
} from "@pbe/react-yandex-maps";
import { FC } from "react";
import { IYandexMap } from "./map.interface";
import style from "./Map.module.sass";
import cn from "classnames";
import { useState } from "react";

const YandexMap: FC<IYandexMap> = ({
    clusterPoints,
    post,
    setMap,
    showMap,
    width,
    height,
    data,
}) => {
    return (
        <>
            <div
                className={cn(style.map, {
                    [style.map_active__create]: post === "create",
                    [style.map_active__post]: post === "post",
                })}
            >
                <div
                    className={cn(style.map_block, {
                        [style.map_active__post]: post === "post",
                    })}
                >
                    <Map
                        defaultState={{
                            center: [53.90136779994891, 27.516049072335527],
                            zoom: 9,
                        }}
                        width={width}
                        height={height}
                        modules={["geocode"]}
                        // onLoad={(ymaps) => (ymaps.on. ('Москва'))}
                    >
                        <Clusterer
                            options={{
                                preset: "islands#greenDotIcon",
                                groupByCoordinates: false,
                                clusterIconLayout: "default#pieChart",
                            }}
                        >
                            {!!clusterPoints &&
                            !!clusterPoints.length &&
                            clusterPoints[0].length ? (
                                clusterPoints?.map(
                                    (coordinates: number[], index: number) => (
                                        <Placemark
                                            key={index}
                                            geometry={coordinates}
                                            options={{ draggable: false }}
                                        />
                                    )
                                )
                            ) : (
                                <Placemark
                                    geometry={
                                        (!!clusterPoints &&
                                            clusterPoints.length &&
                                            clusterPoints) || [
                                            53.90136779994891,
                                            27.516049072335527,
                                        ]
                                    }
                                    balloonContentHeader={data && data.title}
                                    balloonContentBody={
                                        data && data.description
                                    }
                                    options={{
                                        draggable: true,
                                        preset: "islands#violetCircleDotIcon",
                                    }}
                                />
                            )}
                        </Clusterer>

                        <FullscreenControl />
                        <GeolocationControl options={{ float: "left" }} />
                        <SearchControl
                            options={{
                                provider: "yandex#search",
                                float: "right",
                            }}
                        />
                        <ZoomControl options={{ float: "right" }} />
                    </Map>
                    {showMap && setMap && (
                        <button
                            className={style.map_closeBtn}
                            onClick={() => setMap(!showMap)}
                        >
                            Закрыть
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default YandexMap;
