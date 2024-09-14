import { Session } from "next-auth";
import React from "react";
import ChatUser from "./ChatUser";

export type ChatUser = {
  username: string;
  profileImg: string;
  isHost: boolean;
};

type ChattersProps = {
  chatters: ChatUser[];
  session: Session;
};

const Chatters = ({ chatters, session }: ChattersProps) => {
  console.log("testing chatters", chatters);
  return (
    <div className="flex flex-col justify-start items-start w-1/5 h-full gap-2">
      {chatters.map((chatuser: ChatUser) => (
        <ChatUser
          key={chatuser.username}
          chatuser={chatuser}
          session={session}
        />
      ))}
    </div>
  );
};

export default Chatters;
