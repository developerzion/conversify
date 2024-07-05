import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import useUserState from "@/app/store/hooks/useUserState";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import { logout } from "@/app/store/features/userSlice";

export default function Profile() {
   const dispatch = useAppDispatch();
   const {
      user: { avatarUrl, name, email },
   } = useUserState();

   const logoutHandler = () => {
      dispatch(logout());
      window.location.href= "/signin"
   };

   return (
      <Popover className="relative">
         <PopoverButton className="inline-flex items-center gap-x-1 text-[14px] font-[300] leading-6 text-gray-900 outline-none">
            <Image src={avatarUrl} alt="" width={100} height={100} className="w-[35px] h-[35px] rounded-full" />
         </PopoverButton>

         <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
         >
            <div className="w-screen max-w-[20rem] flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
               <div className="pt-[2rem] mx-6">
                  <h1 className="text-[16px] font-[600]">User Profile</h1>
                  <div className="my-5 flex items-center gap-3">
                     <Image
                        src={avatarUrl}
                        alt=""
                        width={100}
                        height={100}
                        className="w-[80px] h-[80px] rounded-full"
                     />

                     <div className="flex flex-col">
                        <h2 className="font-[500]">{name}</h2>
                        <div className="flex items-center font-[90] gap-1 text-[13px]">
                           <EnvelopeIcon className="w-[16px]" />
                           {email}
                        </div>
                     </div>
                  </div>
                  <hr />
               </div>
               <div className="px-6 pt-5 pb-8">
                  <button onClick={logoutHandler} className="w-full text-center border border-[#5D87FF] py-[.4rem] text-[#5D87FF] hover:bg-[#5D87FF] hover:text-white rounded-md">
                     Logout
                  </button>
                  <div className="flex justify-between"></div>
               </div>
            </div>
         </PopoverPanel>
      </Popover>
   );
}
