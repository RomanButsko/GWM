import React from "react";
import { Layout } from "../../layout/Layout";
import MapEvents from "../../mapEvents/MapEvents";

const MapPage = () => {
    return (
        <Layout title={"Мероприятия"}>
            <MapEvents />
        </Layout>
    );
};

export default MapPage;
