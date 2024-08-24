"use client";

import { Button } from "@mui/material";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/chat", redirect: true })}
      variant="contained"
      className="flex gap-2"
    >
      Sign in with google
      <FcGoogle className="w-5 h-5" />
    </Button>
  );
};

export default Login;
