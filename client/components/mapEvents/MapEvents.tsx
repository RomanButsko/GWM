import React from "react";
import { api } from "../../store/api/api";
import YandexMap from "../../ui/map/Map";

const MapEvents = () => {
    const { data } = api.useGetAllPointersQuery();
    return (
        <div>
            <YandexMap
                post={false}
                width={"900px"}
                height={"400px"}
                clusterPoints={data}
            />
        </div>
    );
};

export default MapEvents;