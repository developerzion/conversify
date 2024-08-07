import { io } from "socket.io-client";
// import { useRouter } from 'next/router';
// import { logout } from '../../api/auth/logOutApi';
// import { useAppDispatch } from '@/app/store/utils/useAppDispatch';
import useUserState from "@/app/store/hooks/useUserState";

export function getWebSocketClient(namespace: string) {
   const serverUrl = getWebSocketServerUrl() + namespace;
   const lsKey = process.env.NEXT_PUBLIC_LST_NAME || "app_tkn_clt";
   let token: string = "";

   if (typeof window !== "undefined") {
      token = (localStorage && localStorage?.getItem(lsKey)) || "";
   }

   const socketClient = io(serverUrl, {
      auth: { token },
      autoConnect: true,
      transports: ["websocket"],
      reconnectionAttempts: 20,
   });

   socketClient.on("connect", () => {
      console.log("connected");
   });

   socketClient.on("disconnect", (error) => {
      console.log({ error });
   });

   socketClient.on("connect_error", (error: Error) => {
      console.log({ error });
   });

   return { socketClient };
}

export default function useWebSocketClient(namespace: string) {
   // const dispatch = useAppDispatch();
   // const router = useRouter();
   const { token } = useUserState();
   const serverUrl = getWebSocketServerUrl() + namespace;

   const socketClient = io(serverUrl, {
      auth: { token },
      autoConnect: true,
      transports: ["websocket"],
      reconnectionAttempts: 20,
   });

   socketClient.on("connect", () => {
      //
   });

   socketClient.on("disconnect", (error) => {
      console.log({ error });
   });

   socketClient.on("connect_error", (error: Error) => {
      console.log({ error });
   });

   socketClient.on("error", (error: Error) => {
      console.log({ error });
   });

   socketClient.on("exception", (error: Error) => {
      if (error && error?.message?.indexOf("Unauthorized") !== -1) {
         // dispatch(logout({ router, dispatch }));
         console.log(error);
      }
   });

   return { socketClient };
}

export function getWebSocketServerUrl(): string {
   return "ws://localhost:3001/";
}
