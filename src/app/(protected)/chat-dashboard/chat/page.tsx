import { Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import Chat from "@/components/Chat";

export default async function ChatPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex flex-col items-center justify-between p-4 gap-4 relative h-[calc(100vh-56px)]">
      <div className="w-full flex justify-start items-center h-11">
        <Typography variant="h4" color="primary">
          {`Room: ${searchParams.room}`}
        </Typography>
      </div>
      <div className="w-full">
        <Chat session={session} roomname={searchParams.room as string} />
      </div>
    </main>
  );
}
