import SocketContextProvider from "@/app/contexts/SocketContext";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SocketContextProvider>
      <Header />
      {children}
    </SocketContextProvider>
  );
}
