import React, { KeyboardEvent, useState, useRef, useEffect } from "react";
import { Bars3Icon, EllipsisVerticalIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@apollo/client";
import Image from "next/image";
import ChatDrawer from "./chatDrawer";
import { openChatModal } from "@/app/store/features/chatSlice";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import useChatState from "@/app/store/hooks/chatState";
import { GET_MESSAGES } from "@/lib/queries/chat";
import { SEND_MESSAGE } from "@/lib/mutations/chat";
import ChatReturnRow from "./chatReturnRow";
import Loader from "../shared/loader";
import { GetMessagesQuery } from "@/lib/types/gql/graphql";

export type GetMessages = GetMessagesQuery["getMessages"];

const Chat = () => {
   const dispatch = useAppDispatch();
   const containerRef = useRef<HTMLDivElement>(null);

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

   const {
      selectedUser: {
         receiver: { avatarUrl, name },
      },
   } = useChatState();

   const [message, setMessage] = useState<string>("");

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
            setMessage("");
         })
         .catch((err) => console.log(err.message));
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

   const toggleDrawer = () => dispatch(openChatModal());

   return (
      <>
         <ChatDrawer />

         <div className="py-[1.5rem] pl-[1.5rem] pr-[.7rem] border-b-[1px] flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="md:hidden">
                  <Bars3Icon className="w-[20px]" onClick={toggleDrawer} />
               </div>
               <div className="relative">
                  <Image src={avatarUrl} alt="" width={100} height={100} className="w-[40px] h-[40px] rounded-full" />
                  <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
               </div>
               <div className="flex flex-col">
                  <h2 className="text-[13px] font-[500]">{name}</h2>
                  <div className="flex items-center font-[200] gap-1 text-[11px]">Online</div>
               </div>
            </div>
            <EllipsisVerticalIcon className="w-[35px] p-[4px] rounded-full hover:bg-[#f9f9f9] cursor-pointer" />
         </div>

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
               {/* <div>
                  <input
                     type="file"
                     accept="image/*"
                     ref={fileInputRef}
                     className="hidden"
                     onChange={handleFileChange}
                  />
                  <PhotoIcon className="w-[25px] h-[25px] cursor-pointer" onClick={handleIconClick} />
               </div>
               <div>
                  <input
                     type="file"
                     accept="application/pdf"
                     ref={fileInputRef}
                     className="hidden"
                     onChange={handleFileChange}
                  />
                  <PaperClipIcon className="w-[25px] h-[25px] cursor-pointer" onClick={handleIconClick} />
               </div> */}
            </div>
         </div>
      </>
   );
};

export default Chat;
