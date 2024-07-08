import Image from "next/image";
import React from "react";

interface IProps {
   row: any;
}

const RequestRows = ({ row }: IProps) => {
   const {
      user: { avatarUrl, name },
   } = row;
   return (
      <div
         className="p-5 rounded-xl flex flex-col items-center gap-2"
         style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
         }}
      >
         <Image src={avatarUrl} alt="" width={100} height={100} className="w-[100px] h-[100px] rounded-full" />
         <h1 className="font-[600] mt-2">{name}</h1>
         <button className="py-[.5rem] rounded-[7px] w-[100%] bg-green-100 text-green-400 text-[11px] md:text-[13px] font-[500] flex justify-center">
            Accept
         </button>
         <button className="py-[.5rem] rounded-[7px] w-[100%] bg-[#FDEDE8] text-[11px] md:text-[13px] text-[#FA896B] font-[500] flex justify-center">
            Decline
         </button>
      </div>
   );
};

export default RequestRows;
