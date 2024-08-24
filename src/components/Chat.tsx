"use client";

import React, { useEffect } from "react";
import MessageFeed from "./MessageFeed";
import ChatInput from "./ChatInput";
import { Typography } from "@mui/material";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";

type ChatProps = {
  session: Session;
};

const Chat = ({ session }: ChatProps) => {
  // Hooks
  const { isConnected, connect, disconnect } = useSocketContext();

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
    <div className="flex flex-col justify-between gap-4 w-full h-full">
      <div className="flex gap-2 h-10 justify-center items-center absolute top-4 right-4">
        <div>
          <Typography variant="h6" color="primary">
            Connected
          </Typography>
        </div>
        <div
          className={`w-2 h-2 rounded-full ${
            isConnected ? "bg-green-500" : "bg-red-500"
          }`}
        ></div>
      </div>
      <MessageFeed session={session} />
      <ChatInput />
    </div>
  );
};

export default Chat;
