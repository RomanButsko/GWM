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

const YandexMap: FC<IYandexMap> = ({
    clusterPoints,
    post,
    setMap,
    showMap,
    width,
    height,
}) => {
    return (
        <>
            <div
                className={cn(style.map, {
                    [style.map_active]: !!post,
                })}
            >
                <div className={style.map_block}>
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
                            }}
                        >
                            {clusterPoints?.map((coordinates, index) => (
                                <Placemark key={index} geometry={coordinates} />
                            ))}
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
                    <button
                        className={style.map_closeBtn}
                        onClick={() => setMap(!showMap)}
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </>
    );
};

export default YandexMap;
