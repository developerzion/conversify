import React, { ChangeEvent, useRef, useState } from "react";
import {
   Bars3Icon,
   EllipsisVerticalIcon,
   PaperAirplaneIcon,
   PaperClipIcon,
   PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import ChatDrawer from "./chatDrawer";

const Chat = () => {
   const [isOpen, setIsOpen] = useState(false);
   // Initial state set to true for the drawer to be open

   const sendMessageHandler = () => {
      console.log("send message");
   };

   const fileInputRef = useRef<HTMLInputElement>(null);

   const handleIconClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
   };

   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
         console.log("Selected file:", file);
      }
   };

   const toggleDrawer = () => setIsOpen(!isOpen);

   return (
      <>
         <ChatDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
         <div>
            <div className="py-[1.5rem] pl-[1.5rem] pr-[.7rem] border-b-[1px] flex items-center justify-between">
               <div className="flex items-center gap-3">
                  <div className="md:hidden">
                     <Bars3Icon className="w-[20px]" onClick={toggleDrawer} />
                  </div>
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
                     <div className="flex items-center font-[200] gap-1 text-[11px]">Online</div>
                  </div>
               </div>
               <EllipsisVerticalIcon className="w-[35px] p-[4px] rounded-full hover:bg-[#f9f9f9] cursor-pointer" />
            </div>

            <div className="absolute bottom-0 border-t-[1px] w-full rounded-br-lg px-[1rem] py-[1rem] flex">
               <input
                  placeholder="Type a message"
                  onKeyDown={sendMessageHandler}
                  className="w-full border-none outline-none text-[14px] pr-5"
               />
               <div className="flex relative gap-5">
                  <PaperAirplaneIcon className="w-[20px] h-[20px] cursor-pointer -rotate-45" />
                  <div>
                     <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                     />
                     <PhotoIcon className="w-[20px] h-[20px] cursor-pointer" onClick={handleIconClick} />
                  </div>
                  <div>
                     <input
                        type="file"
                        accept="application/pdf"
                        ref={fileInputRef}
                        className="hidden"
                        onChange={handleFileChange}
                     />
                     <PaperClipIcon className="w-[20px] h-[20px] cursor-pointer" onClick={handleIconClick} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Chat;
