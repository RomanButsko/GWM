import React from "react";
import {
    Clusterer,
    Map,
    Placemark,
    FullscreenControl,
    GeolocationControl,
    SearchControl,
    ZoomControl,
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
}) => {
    return (
        <div className={cn(style.map, { [style.map_active]: !!post })}>
            <div className={style.map_block}>
                <Map
                    defaultState={{
                        center: [53.90136779994891, 27.516049072335527],
                        zoom: 9,
                    }}
                    width="40vw"
                    height="50vh"
                >
                    <Clusterer
                        options={{
                            preset: "islands#redCircleDotIcon",
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
                        options={{ provider: "yandex#search", float: "right" }}
                    />
                    <ZoomControl options={{ float: "right" }} />
                </Map>
                <button onClick={() => setMap(!showMap)}>X</button>
            </div>
        </div>
    );
};

export default YandexMap;
