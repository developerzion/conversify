import { GetFriendsQuery } from "@/lib/types/gql/graphql";
import Image from "next/image";
import React from "react";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import { selectChatUser } from "@/app/store/features/chatSlice";

interface IProps {
   row: GetFriendsQuery["getFriends"][number];
}

const ChatDesktopRow = ({ row }: IProps) => {
   const dispatch = useAppDispatch();

   const handleUserSelected = () => {
      dispatch(selectChatUser(row))
   }


   const {
      receiver: { name, avatarUrl },
   } = row;
   return (
      <div className="flex items-center justify-between w-full hover:bg-[#F2F6FF] cursor-pointer px-5 py-3" onClick={handleUserSelected}>
         <div className="flex items-center gap-3">
            <div className="relative">
               <Image src={avatarUrl} alt="" width={100} height={100} className="w-[40px] h-[40px] rounded-full" />
               <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
            </div>
            <div className="flex flex-col">
               <h2 className="text-[13px] font-[500]">{name}</h2>
               <div className="flex items-center font-[200] gap-1 text-[11px]">You: La ub jiromu fik su.</div>
            </div>
         </div>
         <span className="text-[12px] font-[300]">14 hours</span>
      </div>
   );
};

export default ChatDesktopRow;
