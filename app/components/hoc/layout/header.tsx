import React from "react";
import { LogoImg } from "../svgIcons";
import Profile from "./profile";
import Notification from "./notification";
import Country from "./country";
import Link from "next/link";

const appLink = [
   { path: "/chat", label: "Chat" },
   { path: "/profile", label: "Profile" },
   { path: "#", label: "Requests" },
];

const Header = () => {
   return (
      <div className="bg-white shadow-sm h-fit fixed w-full z-10 px-3">
         <div className="py-[1.5rem] max-w-6xl m-auto flex items-center">
            <div className="flex items-center justify-between w-full">
               <div className="flex items-center gap-8">
                  <LogoImg />
                  <div className="hidden md:flex mt-1 items-center gap-5 text-[14px] font-[400]">
                     {appLink.map((item) => {
                        const { path, label } = item;
                        return (
                           <Link key={label} href={path}>
                              {label}
                           </Link>
                        );
                     })}
                  </div>
               </div>
               <div className="mt-1 md:mt-0 flex items-center gap-4 md:gap-6">
                  <Country />
                  <Notification />
                  <Profile />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
