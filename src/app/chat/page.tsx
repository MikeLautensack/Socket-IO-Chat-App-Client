import { Typography } from "@mui/material";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Chat from "@/components/Chat";

export default async function Home() {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography variant="h4" color="primary">
        Chat Page
      </Typography>
      <Chat />
    </main>
  );
}
