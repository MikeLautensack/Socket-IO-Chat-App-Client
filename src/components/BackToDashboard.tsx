"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const BackToDashboard = () => {
  return (
    <Link href={"/chat-dashboard"}>
      <Button>To Dashboard</Button>
    </Link>
  );
};

export default BackToDashboard;
