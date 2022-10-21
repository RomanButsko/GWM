import React from "react";
import { api } from "../../../store/api/api";

const MyProfile = () => {
    const { data } = api.useGetProfileQuery();
    return (
        <>
            <div>
                My name {data?.name}
                <div>
                    My Posts{" "}
                    {data?.posts?.map((item) => (
                        <>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default MyProfile;
