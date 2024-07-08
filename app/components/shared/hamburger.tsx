import Image from "next/image";
import React from "react";

interface IProps {
   title: string;
   path: string;
}

const Hamburger = ({ title, path }: IProps) => {
   return (
      <div className="bg-[#ECF2FF] relative w-full h-[7rem] rounded-xl flex items-center p-6">
         <div>
            <h1 className="text-[#2A3547] font-[600] text-[18px] md:text-[21px]">{title}</h1>
            <span className="text-[#2A3547] text-[13px] md:text-[14px]">{path}</span>
         </div>
         <Image
            src="/chat.webp"
            alt="chat img"
            className="absolute right-0 mr-4 h-[100px] w-auto"
            width={80}
            height={80}
         />
      </div>
   );
};

export default Hamburger;
