import SocketContextProvider from "@/app/contexts/SocketContext";
import Header from "@/components/Header";
import { auth } from "../../../../auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SocketContextProvider session={session!}>
      <Header />
      {children}
    </SocketContextProvider>
  );
}
