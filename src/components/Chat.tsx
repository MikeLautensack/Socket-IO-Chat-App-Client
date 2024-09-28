"use client";

import React from "react";
import MessageFeed from "./MessageFeed";
import ChatInput from "./ChatForm";
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
    <div className="flex flex-col justify-start w-full h-full">
      <Chatters chatters={chatters} session={session} />
      <MessageFeed session={session} />
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
