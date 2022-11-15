import io, { Socket } from "socket.io-client";
import { IMessage, SendMessage, UpdateMessage } from "./../types/chat.types";

import { useCallback, useEffect, useMemo, useState } from "react";

const useChat = (postId: number, userId: number) => {
    const [socket] = useState<Socket>(
        io(`http://localhost:80/chat`, {
            query: {
                postId,
            },
        })
    );

    console.log(socket);
    const [chatMessages, setChatMessages] = useState<IMessage[]>([]);
    const [log, setLog] = useState<number>(0);

    const messageListener = (message: IMessage) => {
        setChatMessages([...chatMessages, message]);
    };

    useEffect(() => {
        socket?.emit("messages:get", postId, messageListener);

        socket?.on("messages:get", (chatMessages) => {
            setChatMessages(chatMessages);
        });

        return () => {
            socket?.disconnect();
        };
    }, []);

    const connectChat = (chatId: number, userId: number) => {
        if (!socket) console.log("неравен");
        console.log(userId);
        console.log(postId);
        socket?.emit("user:connected", { chatId, userId });
    };

    const leaveChat = (postId: number, userId: number) => {
        socket?.emit("user:leave", { chatId: postId, userId });
    };

    const send = (payload: SendMessage) => {
        socket?.emit("message:post", payload);
    };

    const remove = useCallback(
        (payload: { messageId: number; userId: number }) => {
            socket?.emit("message:delete", payload.messageId, payload.userId);
        },
        []
    );

    const update = useCallback((payload: UpdateMessage) => {
        socket?.emit("message:patch", payload);
    }, []);

    const chatActions = useMemo(
        () => ({
            connectChat,
            leaveChat,
            send,
            update,
            remove,
        }),
        []
    );

    return { send, leaveChat, connectChat, chatMessages, setLog, chatActions };
};

export default useChat;
