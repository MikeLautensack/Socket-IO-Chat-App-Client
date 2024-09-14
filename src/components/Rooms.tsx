"use client";

import React from "react";
import Room from "./Room";
import { useSocketContext } from "@/app/contexts/SocketContext";
import { Session } from "next-auth";

type RoomsProps = {
  username: string;
  profileImg: string;
  session: Session;
};

const Rooms = ({ username, profileImg, session }: RoomsProps) => {
  const { rooms } = useSocketContext();
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {rooms.map((room: any) => (
        <Room
          key={room}
          roomname={room}
          username={username}
          profileImg={profileImg}
          session={session}
        />
      ))}
    </div>
  );
};

export default Rooms;
