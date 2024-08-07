import React, { KeyboardEvent, useState } from "react";
import {
   Bars3Icon,
   EllipsisVerticalIcon,
   PaperAirplaneIcon,
   // PaperClipIcon,
   // PhotoIcon,
} from "@heroicons/react/24/outline";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import ChatDrawer from "./chatDrawer";
import { openChatModal } from "@/app/store/features/chatSlice";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import useChatState from "@/app/store/hooks/chatState";
import { GET_MESSAGES } from "@/lib/queries/chat";

const Chat = () => {
   const dispatch = useAppDispatch();

   const {
      selectedUser: {
         receiver: { userId },
      },
   } = useChatState();

   const { loading, error, data } = useQuery(GET_MESSAGES, {
      variables: { receiverId: userId },
      fetchPolicy: "network-only",
   });

   console.log(data);

   const {
      selectedUser: {
         receiver: { avatarUrl, name },
      },
   } = useChatState();

   const [message, setMessage] = useState<string>("");

   const sendMessageHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
         event.preventDefault();
         console.log("Message sent:", message);
         setMessage("");
      }
   };
   const sendMessageHandlerBtn = () => {
      console.log("Message sent:", message);
      setMessage("");
   };

   // const fileInputRef = useRef<HTMLInputElement>(null);

   // const handleIconClick = () => {
   //    if (fileInputRef.current) {
   //       fileInputRef.current.click();
   //    }
   // };

   // const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
   //    const file = event.target.files?.[0];
   //    if (file) {
   //       console.log("Selected file:", file);
   //    }
   // };

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

         <div className="p-[1rem]">
            <div className="">
               <div className="flex gap-3 mb-6">
                  <Image
                     src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-10_nd5hgv.jpg"
                     alt=""
                     width={80}
                     height={80}
                     className="w-[35px] h-[35px] rounded-full"
                  />
                  <div>
                     <span className="text-[12px] font-[300]">Maria Mendex, 15 mins ago</span>
                     <div className="max-w-[30rem] mt-1 py-2 px-3 rounded-lg bg-[#F2F6FA] text-[13px]">
                        Ak upwiwge mikolhi wefti gidjunip mewvi updole kogva tewode fa.
                     </div>
                  </div>
               </div>

               <div className="flex justify-end gap-3 mb-3">
                  <div>
                     <span className="text-[12px] font-[300]">Samuel Moses, 15 mins ago</span>
                     <div className="max-w-[30rem] mt-1 py-2 px-3 rounded-lg bg-[#ECF2FF] text-[13px]">
                        Ak upwiwge mikolhi wefti gidjunip mewvi updole kogva tewode fa. kfsjkfs fj sdkfjlksjdf
                        lsjdfklsjdkl sdjsldf
                     </div>
                  </div>
               </div>
            </div>
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
