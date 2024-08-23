import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  "https://socket-io-chat-app-server-daewhfc4f9aad7et.eastus-01.azurewebsites.net/";

export const socket = io(URL!, {
  autoConnect: false,
});
