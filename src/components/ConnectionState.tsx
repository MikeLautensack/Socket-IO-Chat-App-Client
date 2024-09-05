"use client";

import { useSocketContext } from "@/app/contexts/SocketContext";
import { Typography } from "@mui/material";
import React from "react";

const ConnectionState = () => {
  // Hooks
  const { isConnected } = useSocketContext();

  return (
    <div className="flex justify-center items-center gap-2">
      <Typography variant="body1" color="primary">
        {isConnected ? "Connected" : "Disconnected"}
      </Typography>
      <div
        className={`flex rounded-full w-2 h-2 ${
          isConnected ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
    </div>
  );
};

export default ConnectionState;
