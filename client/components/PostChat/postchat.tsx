import React from "react";
import { ChangeEvent } from "react";
import { useState } from "react";
import { FC } from "react";
import useChat from "../../hooks/useChat";
import { IPostChat } from "./postChat.interface";
import style from "./PostChat.module.sass";
import { api } from "./../../store/api/api";
import UserChat from "./../UserChat/UserChat";

const PostChat: FC<IPostChat> = ({ postId, userId, title }) => {
    const { data } = api.useGetProfileQuery();

    const [message, setMessage] = useState<string>("");
    const [userStatus, setUserStatus] = useState<boolean>(false);
    const { chatMessages, setLog, chatActions, connectChat, leaveChat, send } =
        useChat(postId, userId);

    console.log(chatMessages);
    const sendMessage = () => {
        send({
            text: message,
            dialogID: postId,
            isRead: false,
            userIdFrom: userId,
        });
        setMessage("");
    };

    const connectPostChat = () => {
        connectChat(postId, userId);
        setUserStatus(true);
    };

    const leavePostChat = () => {
        setUserStatus(false);
        leaveChat(postId, userId);
    };

    return (
        <>
            <div className={style.chat}>
                <div className={style.chat_header}>
                    <header>{title}</header>
                </div>
                <menu>
                    {chatMessages.length >= 1 &&
                        chatMessages.map((message) => (
                            <div>
                                <UserChat message={message} />
                            </div>
                        ))}
                </menu>
                <div className={style.chat_footer}>
                    {userStatus ? (
                        <>
                            <button onClick={leavePostChat}>
                                Покинуть чат
                            </button>
                            <input
                                type="text"
                                value={message}
                                onChange={(
                                    e: ChangeEvent<HTMLInputElement>
                                ) => {
                                    setMessage(e.target.value);
                                }}
                            />
                            <button onClick={sendMessage} disabled={!message}>
                                Отправить
                            </button>
                        </>
                    ) : (
                        <button onClick={connectPostChat}>
                            Присоединиться к чату
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default PostChat;
