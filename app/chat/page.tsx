"use client";

import React from "react";
import MainLayout from "../components/hoc/layout/main-layout";
import Hamburger from "../components/shared/hamburger";
import Chat from "../components/chat/chat";
import NoChat from "../components/chat/noChat";
import ChatDesktopView from "../components/chat/chatDesktopView";
import { getWebSocketClient } from "../components/utils/useWebSocketClient";
import useChatState from "../store/hooks/chatState";
const { socketClient } = getWebSocketClient("chat");

const Index = () => {
   const { selectedUser } = useChatState();

   return (
      <MainLayout>
         <>
            <div className="px-2 md:px-0 py-[1.5rem] mt-[.1rem] max-w-6xl m-auto bg-[#FEFEFE]">
               <Hamburger title="Chat App" path="Messenger" />

               <div className="flex mt-5 border w-full rounded-lg h-[35rem] p-0">
                  <div className="hidden md:block w-[27%] border-r-[1px] py-5 h-full">
                     <ChatDesktopView />
                  </div>

                  <div className="w-[100%] md:w-[73%] relative">
                     {selectedUser.friendsId !== '' ? <Chat /> : <NoChat />}
                  </div>
               </div>
            </div>
         </>
      </MainLayout>
   );
};

export default Index;
