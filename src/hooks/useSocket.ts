import { useCallback, useEffect, useState } from "react";
import { socket } from "../socket";

export type Message = {
  message: string;
  profileImg: string;
};

const useSocket = () => {
  // State
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUser, setActiveUser] = useState<string>("");

  // Effects
  useEffect(() => {
    console.log("useSocket useEffect firing");

    function onConnect() {
      setIsConnected(true);
      console.log("connected");
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log("disconnected");
    }

    function onMessage(value: Message) {
      setMessages((prev) => [
        ...prev,
        { message: value.message, profileImg: value.profileImg },
      ]);
      console.log("message event fired");
    }

    function onActivity(value: string) {
      setActiveUser(value);
      setTimeout(() => {
        setActiveUser("");
      }, 3000);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);
    socket.on("activity", onActivity);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
      socket.off("activity", onActivity);
    };
  }, []);

  // Callbacks
  const connect = useCallback(() => {
    socket.connect();
    console.log("connect callback called");
  }, []);

  const disconnect = useCallback(() => {
    socket.disconnect();
    console.log("disconnect callback called");
  }, []);

  const sendMessage = useCallback((message: string, profileImg: string) => {
    socket.emit("message", { message, profileImg });
    console.log("sendMessage callback called");
  }, []);

  const onActivity = useCallback((username: string) => {
    socket.emit("activity", username);
    console.log("onActivity callback called");
  }, []);

  // Return
  return {
    isConnected,
    messages,
    sendMessage,
    onActivity,
    connect,
    disconnect,
    activeUser,
  };
};

export default useSocket;
