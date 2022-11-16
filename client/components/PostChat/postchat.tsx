import React, { useEffect, useRef } from "react";
import { ChangeEvent } from "react";
import { useState } from "react";
import { FC } from "react";
import useChat from "../../hooks/useChat";
import { IPostChat } from "./postChat.interface";
import style from "./PostChat.module.sass";
import { api } from "./../../store/api/api";
import UserChat from "./../UserChat/UserChat";
import { flushSync } from "react-dom";

const PostChat: FC<IPostChat> = ({ postId, userId, title }) => {
    const [message, setMessage] = useState<string>("");
    const [userStatus, setUserStatus] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const { chatMessages, connectChat, leaveChat, send } = useChat(postId);
    // const isFirstRender = useRef(true);

    // useEffect(() => {
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false;
    //         return;
    //     }
    // }, [chatMessages]);

    const sendMessage = () => {
        send({
            text: message,
            dialogID: postId,
            isRead: false,
            userIdFrom: userId,
        });
        setMessage("");
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
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
            {chatMessages && (
                <div className={style.chat}>
                    <div className={style.chat_header}>
                        <header>{title}</header>
                    </div>
                    <menu className={style.chat_menu}>
                        {chatMessages.length > 1 &&
                            chatMessages.map((message) => (
                                <div>
                                    <UserChat {...message} />
                                </div>
                            ))}
                    </menu>
                    <div className={style.chat_footer}>
                        {userStatus ? (
                            <>
                                <button
                                    onClick={leavePostChat}
                                    className={style.leave}
                                >
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
                                    className={style.chat_footer__input}
                                    placeholder="Сообщение"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!message}
                                    className={style.chat_footer__btn}
                                >
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
            )}
        </>
    );
};

export default PostChat;
