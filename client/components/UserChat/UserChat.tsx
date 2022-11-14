import React from "react";
import { FC } from "react";
import { api } from "../../store/api/api";
import { IMessage } from "../../types/chat.types";

const UserChat = ({ message }: any) => {
    const [findUser] = api.useFindChatUserMutation();
    return (
        <>
            {message.text}
            user2{message.id}
        </>
    );
};

export default UserChat;
