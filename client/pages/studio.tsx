import React from "react";
import { PrivateRouter } from "../provider/private-route.interface";

interface Props {}

const studio: PrivateRouter = () => {
    return <div>Studio</div>;
};

studio.isOnlyUser = true;
export default studio;
