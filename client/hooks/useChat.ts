import { io, Socket } from "socket.io-client";
import { IChat } from "./../types/chat.types";
import { ApiURL } from "./../api/axios";
import { api } from "./../store/api/api";
import React, { useCallback, useEffect, useMemo, useState } from "react";

let socket: Socket;

const useChat = () => {
    const { data } = api.useGetProfileQuery();

    if (!socket && data) {
        socket = io(`${ApiURL}chat`, {
            query: {
                name: data.name,
            },
        });
    }

    const [messages, setMessages] = useState<IChat[]>();
    const [log, setLog] = useState<string>();

    useEffect(() => {
        socket.on("log", (log: string) => {
            setLog(log);
        });

        socket.on("messages", (messages: IChat[]) => {
            setMessages(messages);
        });

        socket.emit("messages:get");
    }, []);

    const send = useCallback((payload: IChat) => {
        socket.emit("message:post", payload);
    }, []);

    const remove = useCallback((payload: { id: number }) => {
        socket.emit("message:delete", payload);
    }, []);

    const update = useCallback((payload: IChat) => {
        socket.emit("message:put", payload);
    }, []);

    const chatActions = useMemo(
        () => ({
            send,
            update,
            remove,
        }),
        []
    );

    return { messages, log, chatActions };
};

export default useChat;
