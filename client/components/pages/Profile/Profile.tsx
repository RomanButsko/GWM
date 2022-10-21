import { FC } from "react";
import { IUserProfile } from "../../../types/user.types";
import { Layout } from "../../layout/Layout";
import GuestProfileUser from "../../ProfileUser/guestUser/GuestProfileUser";

const ProfilePage: FC<IUserProfile> = (props) => {
    return (
        <>
            <Layout title={props.name}>
                <GuestProfileUser {...props} />
            </Layout>
        </>
    );
};

export default ProfilePage;
