"use client";

import React from "react";
import MainLayout from "../components/hoc/layout/main-layout";
import Hamburger from "../components/shared/hamburger";
import Chat from "../components/chat/chat";
import NoChat from "../components/chat/noChat";
import ChatDesktopView from "../components/chat/chatDesktopView";
// import { getWebSocketClient } from "../components/utils/useWebSocketClient";
import useChatState from "../store/hooks/chatState";
import Image from "next/image";
import { Bars3Icon, EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../store/utils/useAppDispatch";
import { closeChatModal, openChatModal } from "../store/features/chatSlice";
import ChatDrawer from "../components/chat/chatDrawer";
// const { socketClient } = getWebSocketClient("chat");

const Index = () => {
   const dispatch = useAppDispatch();

   const toggleDrawer = () => {
      dispatch(openChatModal());
   };
   const {
      selectedUser: {
         friendsId,
         receiver: { avatarUrl, name },
      },
   } = useChatState();

   return (
      <MainLayout>
         <>
            <ChatDrawer />

            <div className="px-2 md:px-0 py-[1.5rem] mt-[.1rem] max-w-6xl m-auto bg-[#FEFEFE]">
               <Hamburger title="Chat App" path="Messenger" />

               <div className="flex mt-5 border w-full rounded-lg h-[35rem] p-0">
                  <div className="hidden md:block w-[27%] border-r-[1px] py-5 h-full">
                     <ChatDesktopView />
                  </div>

                  <div className="w-[100%] md:w-[73%] relative">
                     <div className="py-[1.5rem] pl-[1.5rem] pr-[.7rem] border-b-[1px] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="md:hidden">
                              <Bars3Icon className="w-[20px]" onClick={toggleDrawer} />
                           </div>

                           {friendsId && (
                              <>
                                 <div className="relative">
                                    <Image
                                       src={avatarUrl}
                                       alt=""
                                       width={100}
                                       height={100}
                                       className="w-[40px] h-[40px] rounded-full"
                                    />
                                    <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                                 </div>
                                 <div className="flex flex-col">
                                    <h2 className="text-[13px] font-[500]">{name}</h2>
                                    <div className="flex items-center font-[200] gap-1 text-[11px]">Online</div>
                                 </div>
                              </>
                           )}
                        </div>
                        <EllipsisVerticalIcon className="w-[35px] p-[4px] rounded-full hover:bg-[#f9f9f9] cursor-pointer" />
                     </div>
                     {friendsId !== "" ? <Chat /> : <NoChat />}
                  </div>
               </div>
            </div>
         </>
      </MainLayout>
   );
};

export default Index;
