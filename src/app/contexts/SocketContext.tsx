"use client";

import useSocket from "@/hooks/useSocket";
import React, { createContext, useContext } from "react";

type SocketContextProviderProps = {
  children: React.ReactNode;
};

type SocketContextState = {
  isConnected: boolean;
  messages: string[];
  sendMessage: (message: string) => void;
  connect: () => void;
  disconnect: () => void;
};

export const SocketContext = createContext<SocketContextState | null>(null);

const SocketContextProvider = ({ children }: SocketContextProviderProps) => {
  const { isConnected, messages, sendMessage, connect, disconnect } =
    useSocket();
  return (
    <SocketContext.Provider
      value={{
        isConnected,
        messages,
        sendMessage,
        connect,
        disconnect,
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
