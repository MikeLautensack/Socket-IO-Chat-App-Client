import { useCallback, useEffect, useState } from "react";
import { socket } from "../socket";

export type Message = {
  message: string;
  profileImg: string;
};

export type Room = {
  id: number;
  name: string;
};

const useSocket = () => {
  // State
  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUser, setActiveUser] = useState<string>("");
  const [rooms, setRooms] = useState<Room[]>([]);

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

    function onRoomList(value: string[]) {
      console.log("testing onRoomList", value);
      setRooms(
        value.map((room, index) => {
          return {
            id: index,
            name: room,
          };
        })
      );
    }

    function onUpdateRooms(value: string[]) {
      console.log("testing onUpdateRooms", value);
      setRooms(
        value.map((room, index) => {
          return {
            id: index,
            name: room,
          };
        })
      );
    }

    function onJoinRoom() {}

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);
    socket.on("activity", onActivity);
    socket.on("roomList", onRoomList);
    socket.on("joinRoom", onJoinRoom);
    socket.on("updateRooms", onUpdateRooms);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
      socket.off("activity", onActivity);
      socket.off("roomList", onRoomList);
      socket.off("updateRooms", onUpdateRooms);
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

  const onJoinRoom = useCallback((roomname: string, username: string) => {
    console.log("testing onJoinRoom");
    socket.emit("joinRoom", { roomname, username });
  }, []);

  // Return
  return {
    isConnected,
    messages,
    rooms,
    sendMessage,
    onActivity,
    onJoinRoom,
    connect,
    disconnect,
    activeUser,
  };
};

export default useSocket;
