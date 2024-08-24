import Login from "@/components/Login";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <Typography variant="h3" color="primary" textAlign="center">
        Sign In to Enter Chat
      </Typography>
      <Login />
    </main>
  );
}
