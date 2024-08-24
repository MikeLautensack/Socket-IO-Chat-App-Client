"use client";

import React from "react";
import Message from "./Message";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";

type MessageFeedProps = {
  session: Session;
};

const MessageFeed = ({ session }: MessageFeedProps) => {
  // Hooks
  const { messages } = useSocketContext();

  return (
    <div className="w-full flex-grow overflow-y-auto custom-scrollbar">
      <ul>
        {messages.map((message: string, index: number) => (
          <li key={`${message}-${index}`}>
            <Message message={message} session={session} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageFeed;
