import { io } from "socket.io-client";
import { IMessage, SendMessage, UpdateMessage } from "./../types/chat.types";

import { useCallback, useEffect, useMemo, useState } from "react";

const useChat = (postId: number, userId: number) => {
    const socket = io(`http://localhost:80/chat`, {
        query: {
            postId,
        },
    });

    const [chatMessages, setChatMessages] = useState<IMessage[]>();
    const [log, setLog] = useState<string>();

    useEffect(() => {
        socket.emit("messages:get", postId, (response: any) => {
            setChatMessages(response);
        });
        return () => {
            socket.close();
        };
    }, [log, postId, userId]);

    const connectChat = useCallback(() => {
        socket.emit("user:add", { chatId: postId, userId: userId });
    }, []);

    const leaveChat = useCallback(() => {
        socket.emit("user:leave", { chatId: postId, userId: userId });
    }, []);

    const send = useCallback((payload: SendMessage) => {
        socket.emit("message:post", payload);
        setLog(`message was sent ${payload.text}`);
    }, []);

    const remove = useCallback(
        (payload: { messageId: number; userId: number }) => {
            socket.emit("message:delete", payload.messageId, payload.userId);
        },
        []
    );

    const update = useCallback((payload: UpdateMessage) => {
        socket.emit("message:patch", payload);
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

    return { chatMessages, setLog, chatActions };
};

export default useChat;
