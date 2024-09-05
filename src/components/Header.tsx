import { Typography } from "@mui/material";
import React from "react";
import { auth } from "../../auth";
import Nav from "./Nav";
import ConnectionState from "./ConnectionState";

const Header = async () => {
  const session = await auth();
  return (
    <header className="flex justify-between items-center w-full h-14 px-4">
      <Typography
        variant="h6"
        color="primary"
      >{`${session?.user?.name}'s Chat Dashboard`}</Typography>
      <Nav />
      <ConnectionState />
    </header>
  );
};

export default Header;
