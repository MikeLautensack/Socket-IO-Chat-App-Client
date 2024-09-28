import Login from "@/components/Login";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-12 lg:p-32 gap-4">
      <Typography
        variant="h2"
        color="white"
        className="w-full text-center lg:text-left"
      >
        Welcome to Simple Chat!
      </Typography>
      <Typography
        variant="h6"
        color="white"
        className="w-full text-center lg:text-left"
      >
        Sign in with your google account below
      </Typography>
      <div className="flex justify-center lg:justify-start w-full mt-16">
        <Login />
      </div>
    </main>
  );
}
