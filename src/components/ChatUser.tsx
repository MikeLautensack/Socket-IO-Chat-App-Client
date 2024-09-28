import React from "react";
import { ChatUser as ChatUserType } from "./Chatters";
import Image from "next/image";
import { Typography } from "@mui/material";
import { Session } from "next-auth";

type ChatUserProps = {
  chatuser: ChatUserType;
  session: Session;
};

const ChatUser = ({ chatuser, session }: ChatUserProps) => {
  return (
    <div className="flex justify-center items-center gap-1">
      <div className="relative w-8 h-8 mr-2">
        <Image
          fill
          src={chatuser.profileImg}
          alt={session.user?.name!}
          className="rounded-full" // Optional: if you want a circular image
          style={{ objectFit: "cover" }} // This ensures the image covers the area without stretching
        />
      </div>
      <div className="flex gap-1">
        <div className="flex">
          <Typography
            variant="body1"
            className="font-semibold"
            color="white"
          >{`${chatuser.username}`}</Typography>
          {chatuser.isHost === true && (
            <Typography
              variant="body1"
              className="font-semibold"
              color="white"
            >{`:`}</Typography>
          )}
        </div>
        {chatuser.isHost === true && (
          <Typography
            variant="body1"
            className="font-semibold"
            color="success"
          >{`HOST`}</Typography>
        )}
      </div>
    </div>
  );
};

export default ChatUser;
