import { Button, Typography } from "@mui/material";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Rooms from "@/components/Rooms";
import Link from "next/link";

export default async function ChatDashBoard() {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex h-screen flex-col items-center justify-between p-4 gap-4 relative">
      <div className="w-full flex justify-between items-center h-11">
        <Typography variant="h4" color="primary">
          Rooms
        </Typography>
        <Link href="/chat-dashboard/create-room">
          <Button variant="contained">Create Room</Button>
        </Link>
      </div>
      <div className="flex-grow overflow-hidden w-full">
        <Rooms username={session.user?.name!} />
      </div>
    </main>
  );
}
