import { ChatUser } from "@/components/Chatters";

export const isUserHost = (username: string, chatters: ChatUser[]): boolean => {
  return chatters.some(
    (user) => username === user.username && user.isHost === true
  );
};
