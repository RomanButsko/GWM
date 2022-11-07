import React from "react";
import ChatScreen from "../../chatScreen/ChatScreen";
import { Layout } from "../../layout/Layout";

const ChatPage = () => {
    return (
        <Layout title={"Чат"}>
            <ChatScreen />
        </Layout>
    );
};

export default ChatPage;
