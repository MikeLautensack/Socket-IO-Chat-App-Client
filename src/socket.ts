import { io, Socket } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const URL =
  "https://socket-io-chat-app-server-daewhfc4f9aad7et.eastus-01.azurewebsites.net/";

// const URL = "http://localhost:8080";

// export const socket = io(URL!, {
//   autoConnect: false,
// });

let socket: Socket;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(URL, {
      transports: ["websocket"],
      autoConnect: false,
    });
  }
  return socket;
};
