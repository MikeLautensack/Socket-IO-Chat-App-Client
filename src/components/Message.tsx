import { Box, Typography } from "@mui/material";
import { Session } from "next-auth";
import React from "react";
import Image from "next/image";
import { Message as MessageType } from "@/hooks/useSocket";
import { format } from "date-fns";

type MessageProps = {
  message: MessageType;
  session: Session;
  index: number;
};

const Message = ({ message, session, index }: MessageProps) => {
  return (
    <div
      className={`flex flex-col justify-start items-center w-full px-8 py-2 gap-4 ${
        index % 2 === 0 ? "bg-[#32353b]" : "bg-[#3a3d42]"
      }`}
    >
      <div className="flex justify-start items-center w-full">
        <div className="relative w-8 h-8 mr-2">
          <Image
            fill
            src={message.profileImg}
            alt={session.user?.name!}
            className="rounded-full" // Optional: if you want a circular image
            style={{ objectFit: "cover" }} // This ensures the image covers the area without stretching
          />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "flex-start" },
          }}
        >
          <div className="flex gap-1 justify-start items-center">
            <Typography
              variant="body1"
              color="white"
              sx={{
                fontWeight: "semibold",
                fontSize: {
                  xs: "0.875rem",
                  sm: "1rem",
                  md: "1.125rem",
                },
              }}
            >{`${message.username}: `}</Typography>
            {message.isHost === true && (
              <Typography
                variant="body1"
                color="success"
                sx={{
                  fontWeight: "semibold",
                  fontSize: {
                    xs: "0.75rem",
                    sm: "0.875rem",
                    md: "1rem",
                  },
                }}
              >{`HOST `}</Typography>
            )}
          </div>
          <Typography
            color="white"
            sx={{
              fontSize: {
                xs: "0.7rem",
                sm: "0.8rem",
                md: "0.9rem",
              },
            }}
          >
            {format(message.timestamp, "MMM d, yyyy h:mm:ss a")}
          </Typography>
        </Box>
      </div>
      <div className="flex justify-start items-start w-full max-w-full">
        <Typography
          variant="body1"
          color="white"
          sx={{
            fontSize: {
              xs: "0.75rem",
              sm: "0.875rem",
              md: "1rem",
            },
            overflowWrap: "break-word",
            wordWrap: "break-word",
            hyphens: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {message.message}
        </Typography>
      </div>
    </div>
  );
};

export default Message;
