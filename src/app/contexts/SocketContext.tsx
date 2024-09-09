"use client";

import useSocket, { Message } from "@/hooks/useSocket";
import React, { createContext, useContext, useEffect } from "react";

type SocketContextProviderProps = {
  children: React.ReactNode;
};

type SocketContextState = {
  isConnected: boolean | undefined;
  messages: Message[];
  rooms: string[];
  sendMessage: (
    message: string,
    username: string,
    profileImg: string,
    roomname: string
  ) => void;
  onActivity: (username: string) => void;
  onJoinRoom: (roomname: string, username: string) => void;
  activeUser: string;
};

export const SocketContext = createContext<SocketContextState | null>(null);

const SocketContextProvider = ({ children }: SocketContextProviderProps) => {
  // Hooks
  const {
    isConnected,
    messages,
    rooms,
    sendMessage,
    onActivity,
    onJoinRoom,
    activeUser,
  } = useSocket();

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        messages,
        rooms,
        sendMessage,
        onActivity,
        onJoinRoom,
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
