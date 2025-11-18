import { io } from "socket.io-client";
import { SOCKET_URL } from "./utils/api"; // adjust path if needed

const token = localStorage.getItem("token");

const socket = io(SOCKET_URL, {
  withCredentials: true,
  auth: { token },
  transports: ["websocket"],
});

export default socket;
