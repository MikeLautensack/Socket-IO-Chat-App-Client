import { Typography } from "@mui/material";
import { Session } from "next-auth";
import React from "react";
import Image from "next/image";

type MessageProps = {
  message: string;
  session: Session;
  index: number;
};

const Message = ({ message, session, index }: MessageProps) => {
  return (
    <div
      className={`flex justify-start items-center w-full px-8 py-2 ${
        index % 2 === 0 ? "bg-[#1A1B20]" : "bg-[#1E1F25]"
      }`}
    >
      <div className="relative w-8 h-8 mr-2">
        <Image
          fill
          src={session.user?.image!}
          alt={session.user?.id!}
          className="rounded-full" // Optional: if you want a circular image
          style={{ objectFit: "cover" }} // This ensures the image covers the area without stretching
        />
      </div>
      <div className="flex gap-1">
        <Typography
          variant="body1"
          className="font-semibold"
          color="primary"
        >{`${session.user?.name}:`}</Typography>
        <Typography variant="body1" className="" color="primary">
          {message}
        </Typography>
      </div>
    </div>
  );
};

export default Message;
