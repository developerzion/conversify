"use client";

import { useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Image from "next/image";

type TCountry = {
   logo: string;
   name: string;
   label: string;
};

const countries: TCountry[] = [
   { logo: "/uk.png", name: "English", label: "English (UK)" },
   { logo: "/nigeria.png", name: "arabic", label: "Yoruba (Nigeria)" },
   { logo: "/chinese.png", name: "中国人 (Chinese)", label: "中国人 (Chinese)" },
   { logo: "/french.png", name: "french", label: "française (French)" },
];

export default function Country() {
   const [selectedCountry, setSelectedCountry] = useState<TCountry>(countries[0]);
   const { logo } = selectedCountry;

   const onChangeCountry = (country: TCountry) => {
      setSelectedCountry(country);
   };

   return (
      <Popover className="relative">
         <PopoverButton className="inline-flex items-center gap-x-1 text-sm leading-6 text-gray-900 outline-none">
            <Image src={logo} alt="" width={100} height={100} className="w-[23px] h-[23px] rounded-full" />
         </PopoverButton>
         <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
         >
            <div className="w-screen max-w-[13rem] flex-auto overflow-hidden rounded-lg  bg-white text-sm leading-6 shadow-md ring-1 ring-gray-900/5">
               <div className="py-4">
                  {countries.map((item: TCountry) => (
                     <button
                        key={item.name}
                        className="group relative flex gap-x-3 p-2 hover:bg-gray-50 items-center font-[300] cursor-pointer px-4 py-3 w-full "
                        onClick={() => onChangeCountry(item)}
                     >
                        <Image
                           src={item.logo}
                           alt=""
                           width={100}
                           height={100}
                           className="w-[18px] h-[18px] rounded-full"
                        />
                        <div>{item.label}</div>
                     </button>
                  ))}
               </div>
            </div>
         </PopoverPanel>
      </Popover>
   );
}
