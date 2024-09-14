"use client";

import useSocket, { Message } from "@/hooks/useSocket";
import React, { createContext, useContext } from "react";
import { Session } from "next-auth";
import { ChatUser } from "@/components/Chatters";

type SocketContextProviderProps = {
  children: React.ReactNode;
  session: Session;
};

type SocketContextState = {
  isConnected: boolean | undefined;
  messages: Message[];
  rooms: string[];
  chatters: ChatUser[];
  sendMessage: (
    message: string,
    username: string,
    profileImg: string,
    roomname: string,
    timestamp: Date
  ) => void;
  onActivity: (username: string, roomname: string) => void;
  onJoinRoom: (roomname: string, username: string, profileImg?: string) => void;
  onLeaveRoom: (
    roomname: string,
    username: string,
    profileImg?: string
  ) => void;
  activeUser: string;
};

export const SocketContext = createContext<SocketContextState | null>(null);

const SocketContextProvider = ({
  children,
  session,
}: SocketContextProviderProps) => {
  // Hooks
  const {
    isConnected,
    messages,
    rooms,
    chatters,
    sendMessage,
    onActivity,
    onJoinRoom,
    onLeaveRoom,
    activeUser,
  } = useSocket(session);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        messages,
        rooms,
        chatters,
        sendMessage,
        onActivity,
        onJoinRoom,
        onLeaveRoom,
        activeUser,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;

export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};
