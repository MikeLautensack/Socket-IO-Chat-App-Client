"use client";

import React from "react";
import Message from "./Message";
import { useSocketContext } from "@/app/contexts/SocketContext";

const MessageFeed = () => {
  // Hooks
  const { messages } = useSocketContext();

  return (
    <div className="">
      <ul>
        {messages.map((message: string, index: number) => (
          <li key={`${message}-${index}`}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageFeed;
