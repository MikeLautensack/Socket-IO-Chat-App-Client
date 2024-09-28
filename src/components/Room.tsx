"use client";

import { useSocketContext } from "@/app/contexts/SocketContext";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Session } from "next-auth";

type RoomProps = {
  roomname: string;
  username: string;
  profileImg: string;
  session: Session;
  host: string;
  index: number;
};

const Room = ({
  roomname,
  username,
  profileImg,
  session,
  host,
  index,
}: RoomProps) => {
  // Hooks
  const { onJoinRoom, onDeleteRoom } = useSocketContext();
  return (
    <div
      className={`flex justify-between items-center w-full h-14 px-4 md:px-8 lg:px-16 ${
        index % 2 === 0 ? "bg-[#32353b]" : "bg-[#3a3d42]"
      }`}
    >
      <div className="flex justify-center items-center gap-3">
        <Typography color="white" variant="h6">
          Room Name:
        </Typography>
        <Typography color="white" variant="body1">
          {roomname}
        </Typography>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link href={`/chat-dashboard/chat?room=${roomname}`}>
          <Button
            variant="contained"
            color="success"
            onClick={() => onJoinRoom(roomname, username, profileImg)}
          >
            Join Room
          </Button>
        </Link>
        {session?.user?.name! === host && (
          <Button
            variant="contained"
            color="error"
            onClick={() => onDeleteRoom(roomname, username)}
          >
            <DeleteIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Room;
