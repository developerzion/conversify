import React from "react";
import { LogoImg } from "../svgIcons";
import Profile from "./profile";
import Notification from "./notification";
import Country from "./country";
import Link from "next/link";
import {
   ChatBubbleLeftIcon,
   ExclamationCircleIcon,
   PaperAirplaneIcon,
   UserCircleIcon,
} from "@heroicons/react/24/outline";
import SendFriendRequests from "../../shared/friendRequestModal";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import { openModal } from "@/app/store/features/friendRequestSlice";

const appLink = [
   { path: "/chat", label: "Chat", Icon: ChatBubbleLeftIcon },
   { path: "/profile", label: "Profile", Icon: UserCircleIcon },
   { path: "/requests", label: "Requests", Icon: ExclamationCircleIcon },
];

const Header = () => {
   const dispatch = useAppDispatch();

   const onOpenHandler = () => {
      dispatch(openModal());
   };

   return (
      <div className="">
         <SendFriendRequests />
         <div className="bg-white shadow-sm h-fit fixed w-full z-3 px-3 z-10">
            <div className="py-[1.5rem] max-w-6xl m-auto flex items-center">
               <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-8">
                     <LogoImg />
                  </div>
                  <div className="mt-1 md:mt-0 flex items-center gap-4 md:gap-6">
                     <Country />
                     <Notification />
                     <Profile />
                  </div>
               </div>
            </div>
         </div>

         <div className="w-full pt-[7rem] max-w-6xl m-auto px-2 md:px-0 ">
            <div className="bg-[#83FFD5] text-[13px] p-3 rounded">
               Live chat is an instant messaging tool for real-time online communication, commonly used for customer
               support and direct interaction between users and businesses
            </div>
            <div className="flex items-center mt-2 gap-1 md:gap-3 text-[12px] font-[300] pt-2 flex-wrap">
               {appLink.map((item) => {
                  const { path, label, Icon } = item;
                  return (
                     <Link key={label} href={path}>
                        <div className="bg-[#3CD8EB] py-2 px-4 rounded flex items-center gap-1">
                           <Icon className="w-[20px]" />
                           {label}
                        </div>
                     </Link>
                  );
               })}
               <div className="bg-[#3CD8EB] py-2 px-4 rounded flex items-center gap-1 cursor-pointer" onClick={onOpenHandler}>
                  <PaperAirplaneIcon className="w-[20px] rotate-[310deg]" />
                  Send Friend Request
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
