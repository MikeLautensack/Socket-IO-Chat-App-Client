import { Typography } from "@mui/material";
import React from "react";
import { auth } from "../../auth";
import ConnectionState from "./ConnectionState";

const Header = async () => {
  const session = await auth();
  return (
    <header className="flex justify-between items-center w-full h-14 px-4 md:px-8 lg:px-16 border-b border-gray-500">
      <Typography
        variant="h6"
        color="white"
        sx={{
          fontSize: {
            xs: "1rem", // 16px
            sm: "1.25rem", // 20px
            md: "1.5rem", // 24px
            lg: "1.75rem", // 28px
            xl: "2rem", // 32px
          },
          fontWeight: "medium",
        }}
      >{`${session?.user?.name}'s Chat Dashboard`}</Typography>
      <ConnectionState />
    </header>
  );
};

export default Header;
