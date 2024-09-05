"use client";

import React from "react";
import Room from "./Room";
import { useSocketContext } from "@/app/contexts/SocketContext";

const Rooms = () => {
  const { rooms } = useSocketContext();
  return (
    <div className="flex flex-col justify-start items-start w-full">
      {rooms.map((room: any) => (
        <Room key={room} roomname={room} />
      ))}
    </div>
  );
};

export default Rooms;
