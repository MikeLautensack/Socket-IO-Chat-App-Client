import { useCallback, useEffect, useState } from "react";
import { getSocket } from "../socket";
import { Session } from "next-auth";
import { ChatUser } from "@/components/Chatters";

export type Message = {
  timestamp: Date;
  message: string;
  username: string;
  profileImg: string;
  isHost?: boolean;
};

const useSocket = (session?: Session) => {
  // State
  const [isConnected, setIsConnected] = useState<boolean | undefined>(
    undefined
  );
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeUser, setActiveUser] = useState<string>("");
  const [rooms, setRooms] = useState<string[]>([]);
  const [chatters, setChatters] = useState<ChatUser[]>([]);

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
      setMessages((prev) => [
        ...prev,
        {
          timestamp: value.timestamp,
          message: value.message,
          username: value.username,
          profileImg: value.profileImg,
          isHost: value.isHost,
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

    function onSetRooms(value: string[]) {
      setRooms(
        value.map((room) => {
          return room;
        })
      );
    }

    function onSetRoomMessages(messages: Message[]) {
      setMessages(
        messages.map((message: Message) => {
          return {
            timestamp: message.timestamp,
            message: message.message,
            username: message.username,
            profileImg: message.profileImg,
            isHost: message.isHost,
          };
        })
      );
    }

    function onUserJoinedRoom(value: {
      username: string;
      profileImg: string;
      roomname: string;
      date: Date;
      message: string;
      isHost: boolean;
    }) {
      if (value.username !== session?.user?.name) {
        setMessages((prev) => [
          ...prev,
          {
            timestamp: value.date,
            message: value.message,
            username: value.username,
            profileImg: value.profileImg,
            isHost: value.isHost,
          },
        ]);
      }
    }

    function onUserLeftRoom(value: {
      username: string;
      profileImg: string;
      roomname: string;
      date: Date;
      message: string;
    }) {
      setMessages((prev) => [
        ...prev,
        {
          timestamp: value.date,
          message: value.message,
          username: value.username,
          profileImg: value.profileImg,
        },
      ]);
    }

    function onSetChatters(value: ChatUser[]): void {
      console.log("testing chatters in handler", value);
      setChatters(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("message", onMessage);
    socket.on("activity", onActivity);
    socket.on("roomList", onRoomList);
    socket.on("setRooms", onSetRooms);
    socket.on("setRoomMessages", onSetRoomMessages);
    socket.on("userJoinedRoom", onUserJoinedRoom);
    socket.on("userLeftRoom", onUserLeftRoom);
    socket.on("setChatters", onSetChatters);

    if (!socket.connected) {
      socket.connect();
    }

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message", onMessage);
      socket.off("activity", onActivity);
      socket.off("roomList", onRoomList);
      socket.off("setRooms", onSetRooms);
      socket.off("setRoomMessages", onSetRoomMessages);
      socket.off("userJoinedRoom", onUserJoinedRoom);
      socket.off("userLeftRoom", onUserLeftRoom);
      socket.off("setChatters", onSetChatters);
    };
  }, [session?.user?.name]);

  const sendMessage = useCallback(
    (
      message: string,
      username: string,
      profileImg: string,
      roomname: string,
      timestamp: Date
    ) => {
      const socket = getSocket();
      socket.emit("message", {
        message,
        username,
        profileImg,
        roomname,
        timestamp,
      });
    },
    []
  );

  const onActivity = useCallback((username: string, roomname: string) => {
    const socket = getSocket();
    socket.emit("activity", { username, roomname });
  }, []);

  const onJoinRoom = useCallback(
    (roomname: string, username: string, profileImg?: string) => {
      const socket = getSocket();
      socket.emit("joinRoom", { roomname, username, profileImg });
      socket.emit("setRoomMessages", roomname);
    },
    []
  );

  const onLeaveRoom = useCallback(
    (roomname: string, username: string, profileImg?: string) => {
      const socket = getSocket();
      setMessages([]);
      setChatters([]);
      socket.emit("leaveRoom", { roomname, username, profileImg });
    },
    []
  );

  // Return
  return {
    isConnected,
    messages,
    rooms,
    chatters,
    sendMessage,
    onActivity,
    onJoinRoom,
    onLeaveRoom,
    activeUser,
  };
};

export default useSocket;
