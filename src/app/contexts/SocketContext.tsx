"use client";

import useSocket, { Message, Room } from "@/hooks/useSocket";
import React, { createContext, useContext, useEffect } from "react";

type SocketContextProviderProps = {
  children: React.ReactNode;
};

type SocketContextState = {
  isConnected: boolean;
  messages: Message[];
  rooms: Room[];
  sendMessage: (message: string, profileImg: string) => void;
  onActivity: (username: string) => void;
  onJoinRoom: (roomname: string, username: string) => void;
  connect: () => void;
  disconnect: () => void;
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
    connect,
    disconnect,
    activeUser,
  } = useSocket();

  // Effects
  useEffect(() => {
    connect();
    return () => {
      console.log("Component unmounting, disconnecting socket");
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SocketContext.Provider
      value={{
        isConnected,
        messages,
        rooms,
        sendMessage,
        onActivity,
        onJoinRoom,
        connect,
        disconnect,
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
