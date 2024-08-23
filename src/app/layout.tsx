import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocketContextProvider from "./contexts/SocketContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat App",
  description: "A socket-io chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SocketContextProvider>
        <body className={inter.className}>{children}</body>
      </SocketContextProvider>
    </html>
  );
}
