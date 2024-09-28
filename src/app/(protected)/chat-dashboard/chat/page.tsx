import { Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
import Chat from "@/components/Chat";
import LeaveRoom from "@/components/LeaveRoom";

export default async function ChatPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <main className="flex flex-col items-center justify-between gap-4 relative h-[calc(100vh-56px)]">
      <div className="w-full flex justify-between items-center h-11 px-4 md:px-8 lg:px-16">
        <Typography
          variant="h4"
          color="white"
          sx={{
            fontSize: {
              xs: "1.25rem", // 20px
              sm: "1.5rem", // 24px
              md: "1.75rem", // 28px
              lg: "2rem", // 32px
              xl: "2.25rem", // 36px
            },
            fontWeight: "medium",
          }}
        >
          {`Room: ${searchParams.room}`}
        </Typography>
        <LeaveRoom
          roomname={searchParams.room as string}
          username={session.user?.name!}
          profileImg={session.user?.image!}
        />
      </div>
      <div className="w-full h-[calc(100vh-116px)]">
        <Chat session={session} roomname={searchParams.room as string} />
      </div>
    </main>
  );
}
