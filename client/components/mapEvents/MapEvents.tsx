import React from "react";
import { api } from "../../store/api/api";
import YandexMap from "../../ui/map/Map";

const MapEvents = () => {
    const { data } = api.useGetAllPointersQuery();
    console.log(data);
    return (
        <div>
            <YandexMap
                post={""}
                width={"900px"}
                height={"400px"}
                clusterPoints={data}
            />
        </div>
    );
};

export default MapEvents;
