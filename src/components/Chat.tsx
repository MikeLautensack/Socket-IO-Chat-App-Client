"use client";

import React, { useEffect } from "react";
import MessageFeed from "./MessageFeed";
import ChatInput from "./ChatInput";
import useSocket from "@/hooks/useSocket";
import { Typography } from "@mui/material";

const Chat = () => {
  // Hooks
  const { isConnected, connect, disconnect } = useSocket();

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
    <div className="flex flex-col justify-between gap-4 p-4 w-full flex-grow">
      <div className="flex flex-col gap-4 justify-start items-start">
        <Typography variant="h6">{`Is Connected: ${isConnected}`}</Typography>
        <MessageFeed />
      </div>
      <ChatInput />
    </div>
  );
};

export default Chat;
