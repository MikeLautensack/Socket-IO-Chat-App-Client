"use client";

import React from "react";
import MessageFeed from "./MessageFeed";
import ChatInput from "./ChatInput";
import { Typography } from "@mui/material";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";

type ChatProps = {
  session: Session;
  roomname: string;
};

const Chat = ({ session, roomname }: ChatProps) => {
  // Hooks
  const { activeUser } = useSocketContext();

  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full">
      <MessageFeed session={session} />
      <div>
        <Typography color="primary">{`${activeUser} ${
          activeUser ? "..." : ""
        }`}</Typography>
      </div>
      <ChatInput session={session} roomname={roomname} />
    </div>
  );
};

export default Chat;
