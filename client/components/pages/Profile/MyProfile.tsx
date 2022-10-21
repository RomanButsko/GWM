import { Layout } from "../../layout/Layout";
import MyProfile from "../../ProfileUser/myProfile/MyProfileUser";

const MyProfilePage = () => {
    return (
        <>
            <Layout title={"Мой профиль"}>
                <MyProfile />
            </Layout>
        </>
    );
};

export default MyProfilePage;
