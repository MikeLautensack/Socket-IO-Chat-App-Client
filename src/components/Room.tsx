"use client";

import { useSocketContext } from "@/app/contexts/SocketContext";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

type RoomProps = {
  roomname: string;
  username: string;
};

const Room = ({ roomname, username }: RoomProps) => {
  console.log("testing roomname", roomname);
  // Hooks
  const { onJoinRoom } = useSocketContext();
  return (
    <div className="flex justify-between items-center w-full h-14">
      <Typography color="primary" variant="body1">
        {`Roomname: ${roomname}`}
      </Typography>
      <Link href={`/chat-dashboard/chat?room=${roomname}`}>
        <Button
          variant="contained"
          onClick={() => onJoinRoom(roomname, username)}
        >
          Join Room
        </Button>
      </Link>
    </div>
  );
};

export default Room;
