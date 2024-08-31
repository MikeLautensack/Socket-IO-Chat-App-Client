"use client";

import useSocket, { Message } from "@/hooks/useSocket";
import React, { createContext, useContext } from "react";

type SocketContextProviderProps = {
  children: React.ReactNode;
};

type SocketContextState = {
  isConnected: boolean;
  messages: Message[];
  sendMessage: (message: string, profileImg: string) => void;
  onActivity: (username: string) => void;
  connect: () => void;
  disconnect: () => void;
  activeUser: string;
};

export const SocketContext = createContext<SocketContextState | null>(null);

const SocketContextProvider = ({ children }: SocketContextProviderProps) => {
  const {
    isConnected,
    messages,
    sendMessage,
    onActivity,
    connect,
    disconnect,
    activeUser,
  } = useSocket();
  return (
    <SocketContext.Provider
      value={{
        isConnected,
        messages,
        sendMessage,
        onActivity,
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
