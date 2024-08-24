import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SocketContextProvider from "./contexts/SocketContext";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

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
      <body className={inter.className}>
        <InitColorSchemeScript attribute="class" />
        <SocketContextProvider>
          <AppRouterCacheProvider>
            <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
          </AppRouterCacheProvider>
        </SocketContextProvider>
      </body>
    </html>
  );
}
