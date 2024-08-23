"use client";

import useSocket from "@/hooks/useSocket";
import React from "react";
import Message from "./Message";

const MessageFeed = () => {
  // Hooks
  const { messages } = useSocket();

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
