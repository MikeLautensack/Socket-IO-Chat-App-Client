import { Typography } from "@mui/material";
import React from "react";

type RoomProps = {
  roomname: string;
};

const Room = ({ roomname }: RoomProps) => {
  return (
    <div className="flex justify-between items-center w-full h-14">
      <Typography
        color="primary"
        variant="body1"
      >{`Roomname: ${roomname}`}</Typography>
    </div>
  );
};

export default Room;
