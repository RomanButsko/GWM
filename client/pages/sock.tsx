import { useEffect } from "react";
import { io } from "socket.io-client";
import { api } from "../store/api/api";

const Chat = () => {
    const { data } = api.useGetProfileQuery();
    console.log(data);
    const socket = io("http://localhost:7500/chat", {
        query: {
            name: data?.name,
        },
    });

    useEffect(() => {
        console.log("chat useEffect");
        socket.emit("msgToServer", "message");
        socket.on("log", (message) => {
            console.log(message);
        });
    }, []);
};

export default Chat;
