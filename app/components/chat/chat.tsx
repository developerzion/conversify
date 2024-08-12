import React, { KeyboardEvent, useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@apollo/client";
import useChatState from "@/app/store/hooks/chatState";
import { GET_MESSAGES } from "@/lib/queries/chat";
import { SEND_MESSAGE } from "@/lib/mutations/chat";
import ChatReturnRow from "./chatReturnRow";
import Loader from "../shared/loader";
import { GetMessagesQuery } from "@/lib/types/gql/graphql";

export type GetMessages = GetMessagesQuery["getMessages"];

const Chat = () => {
   const containerRef = useRef<HTMLDivElement>(null);
   const [message, setMessage] = useState<string>("");

   const {
      selectedUser: {
         receiver: { userId },
      },
   } = useChatState();

   const { loading, data } = useQuery(GET_MESSAGES, {
      variables: { receiverId: userId },
      fetchPolicy: "network-only",
      pollInterval: 100,
   });

   const messages: GetMessages = data?.getMessages || [];

   useEffect(() => {
      if (containerRef.current) {
         containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
   }, [messages]);

   const send = () => {
      sendMessage({
         variables: { receiverId: userId, message },
      })
         .then((data) => {
            console.log(data);
         })
         .catch((err) => console.log(err.message));
      setMessage("");
   };

   const sendMessageHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         event.preventDefault();
         if (message === "") return;
         send();
      }
   };

   const [sendMessage] = useMutation(SEND_MESSAGE);
   const sendMessageHandlerBtn = () => {
      if (message === "") return;
      send();
   };

   return (
      <>
         <div className="p-[1rem] overflow-scroll h-[25.6rem]" ref={containerRef}>
            {loading ? (
               <Loader />
            ) : (
               messages.map((message: GetMessages[number], key) => {
                  return <ChatReturnRow key={key} message={message} />;
               })
            )}
         </div>

         <div className="absolute bottom-0 border-t-[1px] w-full rounded-br-lg px-[1rem] py-[1rem] flex">
            <input
               value={message}
               placeholder="Type a message"
               onChange={(e) => setMessage(e.target.value)}
               onKeyDown={sendMessageHandler}
               className="w-full border-none outline-none text-[14px] pr-5"
            />
            <div className="flex relative gap-4">
               <PaperAirplaneIcon
                  className="w-[25px] h-[25px] cursor-pointer -rotate-45"
                  onClick={sendMessageHandlerBtn}
               />
            </div>
         </div>
      </>
   );
};

export default Chat;
