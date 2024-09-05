import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <Link href={""}>
        <Button variant="text">test</Button>
      </Link>
    </nav>
  );
};

export default Nav;
