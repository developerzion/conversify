import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

const NoChat = () => {
   return (
      <div className="w-full h-[100%] flex justify-center align-center px-3">
         <div className="flex flex-col justify-center items-center text-center w-[30rem]">
            <ChatBubbleLeftIcon className="w-[70px] text-[#3CD8EB]" />
            <p className="text-[13px] font-[200] mt-1">
               A chat allows users to exchange text messages instantly, supporting both individual and group
               conversations
            </p>
         </div>
      </div>
   );
};

export default NoChat;
