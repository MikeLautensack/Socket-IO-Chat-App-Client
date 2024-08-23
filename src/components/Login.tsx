"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return <Button onClick={() => signIn("google")}>Sign in with google</Button>;
};

export default Login;
