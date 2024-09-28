import { Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import RoomForm from "@/components/RoomForm";
import BackToDashboard from "@/components/BackToDashboard";

export default async function ChatDashBoard() {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex h-[calc(100vh-56px)] flex-col items-center justify-start px-4 md:px-8 lg:px-16 gap-8 relative">
      <div className="w-full flex justify-between items-center h-11 mt-4">
        <Typography variant="h4" color="white">
          Create Room
        </Typography>
        <BackToDashboard />
      </div>
      <RoomForm session={session} />
    </main>
  );
}
