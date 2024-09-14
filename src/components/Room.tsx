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
};

const Room = ({ roomname, username, profileImg, session }: RoomProps) => {
  // Hooks
  const { onJoinRoom } = useSocketContext();
  return (
    <div className="flex justify-between items-center w-full h-14">
      <Typography color="primary" variant="body1">
        {`Roomname: ${roomname}`}
      </Typography>
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
        {session?.user?.name! === username && (
          <Button variant="contained" color="error">
            <DeleteIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Room;
