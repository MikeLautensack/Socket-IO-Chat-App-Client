import { Button, Typography } from "@mui/material";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";
import Rooms from "@/components/Rooms";
import Link from "next/link";

export default async function ChatDashBoard() {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex flex-col items-center justify-between gap-4 relative h-[calc(100vh-56px)]">
      <div className="w-full flex justify-between items-center h-11 my-4 px-4 md:px-8 lg:px-16">
        <Typography variant="h5" color="white">
          Chat Rooms
        </Typography>
        <Link href="/chat-dashboard/create-room">
          <Button variant="contained">Create Room</Button>
        </Link>
      </div>
      <div className="flex-grow overflow-hidden w-full">
        <Rooms
          username={session.user?.name!}
          profileImg={session.user?.image!}
          session={session}
        />
      </div>
    </main>
  );
}
