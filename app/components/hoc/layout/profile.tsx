import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { EnvelopeIcon, LifebuoyIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Profile() {
   return (
      <Popover className="relative">
         <PopoverButton className="inline-flex items-center gap-x-1 text-[14px] font-[300] leading-6 text-gray-900 outline-none">
            <Image
               src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-1_t0yguk.jpg"
               alt=""
               width={100}
               height={100}
               className="w-[35px] h-[35px] rounded-full"
            />
         </PopoverButton>

         <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
         >
            <div className="w-screen max-w-[20rem] flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
               <div className="pt-[2rem] px-6">
                  <h1 className="text-[16px] font-[600]">User Profile</h1>
                  <div className="my-5 flex items-center gap-3">
                     <Image
                        src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-1_t0yguk.jpg"
                        alt=""
                        width={100}
                        height={100}
                        className="w-[80px] h-[80px] rounded-full"
                     />

                     <div className="flex flex-col">
                        <h2 className="font-[500]">Mathew Anderson</h2>
                        <div className="flex items-center font-[90] gap-1 text-[13px]">
                           <EnvelopeIcon className="w-[16px]" />
                           info@conversify.com
                        </div>
                     </div>
                  </div>
                  {/* <hr /> */}
               </div>
               {/* <div className="px-6 pt-5 pb-8">
                  <button className="w-full text-center border border-indigo-600 py-[.4rem] text-indigo-600 rounded-md">
                     Logout
                  </button>
                  <div className="flex justify-between"></div>
               </div> */}
            </div>
         </PopoverPanel>
      </Popover>
   );
}
