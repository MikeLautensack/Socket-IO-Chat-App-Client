import { Button, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import Rooms from "@/components/Rooms";
import Link from "next/link";
import { auth } from "../../../../../auth";
import RoomForm from "@/components/RoomForm";
import BackToDashboard from "@/components/BackToDashboard";

export default async function ChatDashBoard() {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex h-screen flex-col items-center justify-between p-4 gap-4 relative">
      <div className="w-full flex justify-start items-center h-11">
        <Typography variant="h4" color="primary">
          Create Room
        </Typography>
      </div>
      <BackToDashboard />
      <div className="flex-grow overflow-hidden w-full">
        <RoomForm session={session} />
      </div>
    </main>
  );
}
