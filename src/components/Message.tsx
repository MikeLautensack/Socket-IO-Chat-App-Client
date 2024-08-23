import { Typography } from "@mui/material";
import React from "react";

type MessageProps = {
  message: string;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className="w-full p-2">
      <Typography variant="body1">{message}</Typography>
    </div>
  );
};

export default Message;
