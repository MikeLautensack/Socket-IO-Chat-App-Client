"use client";

import React from "react";
import Room from "./Room";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";
import { RoomType } from "@/hooks/useSocket";

type RoomsProps = {
  username: string;
  profileImg: string;
  session: Session;
};

const Rooms = ({ username, profileImg, session }: RoomsProps) => {
  const { rooms } = useSocketContext();
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {rooms.map((room: RoomType, index: number) => (
        <Room
          key={room.roomname}
          roomname={room.roomname}
          username={username}
          profileImg={profileImg}
          session={session}
          host={room.host}
          index={index}
        />
      ))}
    </div>
  );
};

export default Rooms;
