"use client";

import React from "react";
import MainLayout from "../components/hoc/layout/main-layout";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useUserState from "../store/hooks/useUserState";
import Hamburger from "../components/shared/hamburger";
import Chat from "../components/chat/chat";
// ChatBubbleLeftIcon,
import NoChat from "../components/chat/noChat";
// import ChatDrawer from "../components/chat/chatDrawer";

const Index = () => {
   const {
      user: { avatarUrl, name },
   } = useUserState();

   return (
      <MainLayout>
         <div className="px-2 md:px-0 py-[1.5rem] mt-[.1rem] max-w-6xl m-auto bg-[#FEFEFE]">
            <Hamburger title="Chat App" path="Messenger" />

            <div className="flex mt-5 border w-full rounded-lg h-[35rem] p-0">
               <div className="hidden md:block w-[27%] px-5 border-r-[1px] py-5 h-full">
                  <div className="flex items-center gap-3">
                     <div className="relative">
                        <Image
                           src={avatarUrl}
                           alt=""
                           width={100}
                           height={100}
                           className="w-[50px] h-[50px] rounded-full"
                        />
                        <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-8" />
                     </div>
                     <div className="flex flex-col">
                        <h2 className="text-[14px] font-[500]">{name}</h2>
                        <div className="flex items-center font-[200] gap-1 text-[12px]">Online</div>
                     </div>
                  </div>

                  <div className="relative mt-8">
                     <input
                        type="text"
                        placeholder="Search contact"
                        className="w-full px-4 border-[1px] border-[#DFE5EF] py-[.4rem] rounded-[7px] outline-[#5C87FF] text-[13px]"
                     />
                     <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>

                  <div className="flex flex-col gap-5 h-full overflow-y-scroll w-full mt-4">
                     <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                           <div className="relative">
                              <Image
                                 src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-10_nd5hgv.jpg"
                                 alt=""
                                 width={100}
                                 height={100}
                                 className="w-[40px] h-[40px] rounded-full"
                              />
                              <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                           </div>
                           <div className="flex flex-col">
                              <h2 className="text-[13px] font-[500]">James Johnson</h2>
                              <div className="flex items-center font-[200] gap-1 text-[11px]">
                                 You: La ub jiromu fik su.
                              </div>
                           </div>
                        </div>
                        <span className="text-[12px] font-[300]">14 hours</span>
                     </div>

                     <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                           <div className="relative">
                              <Image
                                 src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-6_mbgys2.webp"
                                 alt=""
                                 width={100}
                                 height={100}
                                 className="w-[40px] h-[40px] rounded-full"
                              />
                              <div className="bg-[#FFAE20] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                           </div>
                           <div className="flex flex-col">
                              <h2 className="text-[13px] font-[500]">Maria Hernandez</h2>
                              <div className="flex items-center font-[200] gap-1 text-[11px]">
                                 You: La ub jiromu fik su.
                              </div>
                           </div>
                        </div>
                        <span className="text-[12px] font-[300]">12 mins</span>
                     </div>
                  </div>
               </div>

               <div className="w-[100%] md:w-[73%] relative">
                  {/* ================ No Chat section =============  */}
                  <NoChat />
                  {/* ================ Chat section =============  */}
                  {/* <Chat /> */}
               </div>
            </div>
         </div>
      </MainLayout>
   );
};

export default Index;
