"use client";

import React from "react";
import MessageFeed from "./MessageFeed";
import ChatInput from "./ChatInput";
import { Typography } from "@mui/material";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";
import Chatters from "./Chatters";

type ChatProps = {
  session: Session;
  roomname: string;
};

const Chat = ({ session, roomname }: ChatProps) => {
  // Hooks
  const { activeUser, chatters } = useSocketContext();

  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full">
      <div className="flex justify-center items-center gap-4">
        <MessageFeed session={session} />
        <Chatters chatters={chatters} session={session} />
      </div>
      {activeUser && (
        <Typography color="primary">{`${activeUser} ${
          activeUser ? "..." : ""
        }`}</Typography>
      )}
      <ChatInput session={session} roomname={roomname} />
    </div>
  );
};

export default Chat;
