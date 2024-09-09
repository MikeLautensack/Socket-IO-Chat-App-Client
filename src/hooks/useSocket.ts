import { useCallback, useEffect, useState } from "react";
import { getSocket } from "../socket";

export type Message = {
  message: string;
  username: string;
  profileImg: string;
};

const useSocket = () => {
  // State
  const [isConnected, setIsConnected] = useState<boolean | undefined>(
    undefined
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUser, setActiveUser] = useState<string>("");
  const [rooms, setRooms] = useState<string[]>([]);

  // Effects
  useEffect(() => {
    const socket = getSocket();

    function onConnect() {
      setIsConnected(true);
      console.log("connected");
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log("disconnected");
    }

    function onMessage(value: Message) {
      console.log("testing message event", value);
      setMessages((prev) => [
        ...prev,
        {
          message: value.message,
          username: value.username,
          profileImg: value.profileImg,
        },
      ]);
    }

    function onActivity(value: string) {
      setActiveUser(value);
      setTimeout(() => {
        setActiveUser("");
      }, 3000);
    }

    function onRoomList(value: string[]) {
      setRooms(
        value.map((room) => {
          return room;
        })
      );
    }

    function onUpdateRooms(value: string[]) {
      setRooms(
        value.map((room) => {
          return room;
        })
      );
    }

    function onJoinRoom(value: string) {}

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);
    socket.on("activity", onActivity);
    socket.on("roomList", onRoomList);
    socket.on("joinRoom", onJoinRoom);
    socket.on("updateRooms", onUpdateRooms);

    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
      socket.off("activity", onActivity);
      socket.off("roomList", onRoomList);
      socket.off("updateRooms", onUpdateRooms);
    };
  }, []);

  const sendMessage = useCallback(
    (
      message: string,
      username: string,
      profileImg: string,
      roomname: string
    ) => {
      const socket = getSocket();
      socket.emit("message", { message, username, profileImg, roomname });
    },
    []
  );

  const onActivity = useCallback((username: string) => {
    const socket = getSocket();
    socket.emit("activity", username);
  }, []);

  const onJoinRoom = useCallback((roomname: string, username: string) => {
    const socket = getSocket();
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
    activeUser,
  };
};

export default useSocket;
