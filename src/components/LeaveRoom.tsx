"use client";

import { useSocketContext } from "@/app/contexts/SocketContext";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

type LeaveRoomProps = {
  roomname: string;
  username: string;
  profileImg: string;
};

const LeaveRoom = ({ roomname, username, profileImg }: LeaveRoomProps) => {
  // Hooks
  const { onLeaveRoom } = useSocketContext();
  return (
    <Link href="/chat-dashboard">
      <Button
        variant="contained"
        onClick={() => onLeaveRoom(roomname, username, profileImg)}
      >
        Leave Room
      </Button>
    </Link>
  );
};

export default LeaveRoom;
