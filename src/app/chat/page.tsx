import { Typography } from "@mui/material";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Chat from "@/components/Chat";

export default async function Home() {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex h-screen flex-col items-center justify-between p-4 gap-4 relative">
      <div className="w-full flex justify-start items-center h-11">
        <Typography variant="h4" color="primary">
          Chat Page
        </Typography>
      </div>
      <div className="flex-grow overflow-hidden w-full">
        <Chat session={session} />
      </div>
    </main>
  );
}
