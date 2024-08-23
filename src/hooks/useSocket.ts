import { useCallback, useEffect, useState } from "react";
import { socket } from "../socket";

const useSocket = () => {
  // State
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [messages, setMessages] = useState<string[]>([]);

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

    function onMessage(value: string) {
      setMessages((prev) => [...prev, value]);
      console.log("message event fired");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
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

  const sendMessage = useCallback((message: string) => {
    socket.emit("message", message);
    console.log("sendMessage callback called");
  }, []);

  // Return
  return { isConnected, messages, sendMessage, connect, disconnect };
};

export default useSocket;
