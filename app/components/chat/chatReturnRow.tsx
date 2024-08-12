import React from "react";
import Image from "next/image";
import useUserState from "@/app/store/hooks/useUserState";
import { GetMessages } from "./chat";
import { timeAgo } from "../utils/methods";

interface IProps {
   message: GetMessages[number];
}
const ChatReturnRow = ({ message }: IProps) => {
   const {
      user: { userId: id, name },
   } = useUserState();

   const { message: msg, senderId, sender, createdAt } = message!;
   const { name: senderName, avatarUrl } = sender!;

   const renderMsg = () => {
      if (senderId === id) {
         return (
            <div className="flex gap-3 mb-3">
               <div>
                  <span className="text-[12px] font-[300]">{name}, {timeAgo(createdAt)}</span>
                  <div className="max-w-[30rem] mt-1 py-2 px-3 rounded-lg bg-[#ECF2FF] text-[13px]">{msg}</div>
               </div>
            </div>
         );
      } else {
         return (
            <div className="flex justify-end gap-3 mb-6">
               <Image
                  src={avatarUrl}
                  alt=""
                  width={80}
                  height={80}
                  className="w-[35px] h-[35px] rounded-full"
               />
               <div>
                  <span className="text-[12px] font-[300]">{senderName}, {timeAgo(createdAt)}</span>
                  <div className="max-w-[30rem] mt-1 py-2 px-3 rounded-lg bg-[#F2F6FA] text-[13px]">{msg}</div>
               </div>
            </div>
         );
      }
   };

   return <div>{renderMsg()}</div>;
};

export default ChatReturnRow;
