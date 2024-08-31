"use client";

import React from "react";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";
import { Message as MessageType } from "@/hooks/useSocket";
import Message from "./Message";

type MessageFeedProps = {
  session: Session;
};

const MessageFeed = ({ session }: MessageFeedProps) => {
  // Hooks
  const { messages } = useSocketContext();

  return (
    <div className="w-full flex-grow overflow-y-auto custom-scrollbar">
      <ul>
        {messages.map((message: MessageType, index: number) => (
          <li key={`${message}-${index}`}>
            <Message message={message} session={session} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageFeed;
