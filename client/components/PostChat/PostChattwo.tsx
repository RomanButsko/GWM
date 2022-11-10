import React from "react";
import { ChangeEvent } from "react";
import { useState } from "react";
import { FC } from "react";
import useChat from "../../hooks/useChat";
import { IPostChat } from "./postChat.interface";
import style from "./PostChat.module.sass";

const PostChat: FC<IPostChat> = ({ postId, userId, title }) => {
    const [message, setMessage] = useState<string>("");
    const [userStatus, setUserStatus] = useState<boolean>(false);

    const { chatMessages, setLog, chatActions } = useChat(postId, userId);

    const sendMessage = () => {
        chatActions.send({
            text: message,
            dialogID: postId,
            isRead: false,
            userIdFrom: userId,
        });
    };

    const connectChat = () => {
        setUserStatus(true);
    };

    const leaveChat = () => {
        setUserStatus(false);
        chatActions.leaveChat;
    };

    return (
        <>
            <div className={style.chat}>
                <div className={style.chat_header}>
                    <header>{title}</header>
                </div>
                <menu>
                    {chatMessages?.map((message) => (
                        <div>{message.text}</div>
                    ))}
                </menu>
                <div className={style.chat_footer}>
                    {userStatus ? (
                        <>
                            <button onClick={leaveChat}>Покинуть чат</button>
                            <input
                                type="text"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    setMessage(e.target.value)
                                }
                            />
                            <button onClick={sendMessage} disabled={!message}>
                                Отправить
                            </button>
                        </>
                    ) : (
                        <button onClick={connectChat}>
                            Присоединиться к чату
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default PostChat;
