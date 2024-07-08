import useUserState from "@/app/store/hooks/useUserState";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import useChatState from "@/app/store/hooks/chatState";
import { closeChatModal } from "@/app/store/features/chatSlice";

function ChatDrawer() {
   const dispatch = useAppDispatch();
   const {
      user: { avatarUrl, name },
   } = useUserState();

   const { open } = useChatState();

   const toggleDrawer = () => {
      dispatch(closeChatModal());
   };

   return (
      <div className="flex md:hidden">
         <div
            className={`fixed top-0 left-0 z-20 w-[85%] h-full transition-all duration-500 transform ${
               open ? "" : "-translate-x-full"
            } bg-white shadow-lg peer-checked:translate-x-0`}
         >
            <div className="px-6 pt-5 pb-4">
               <div className="w-full flex justify-end">
                  <XMarkIcon className="w-[25px]" onClick={toggleDrawer} />
               </div>

               <div className="h-full">
                  <div className="flex items-center gap-3">
                     <div className="relative">
                        <Image
                           src={avatarUrl}
                           alt=""
                           width={100}
                           height={100}
                           className="w-[50px] h-[50px] rounded-full"
                        />
                        <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-8" />
                     </div>
                     <div className="flex flex-col">
                        <h2 className="text-[15px] font-[600]">{name}</h2>
                        <div className="flex items-center font-[200] gap-1 text-[13px]">Online</div>
                     </div>
                  </div>

                  <div className="relative mt-6">
                     <input
                        type="text"
                        placeholder="Search contact"
                        className="w-full px-4 border-[1px] border-[#DFE5EF] py-[.4rem] rounded-[7px] outline-[#5C87FF] text-[13px]"
                     />
                     <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                  </div>

                  <div className="flex flex-col gap-6 h-full overflow-y-scroll w-full mt-4">
                     <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                           <div className="relative">
                              <Image
                                 src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-10_nd5hgv.jpg"
                                 alt=""
                                 width={100}
                                 height={100}
                                 className="w-[40px] h-[40px] rounded-full"
                              />
                              <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                           </div>
                           <div className="flex flex-col">
                              <h2 className="text-[13px] font-[500]">James Johnson</h2>
                              <div className="flex items-center font-[200] gap-1 text-[11px]">
                                 You: La ub jiromu fik su.
                              </div>
                           </div>
                        </div>
                        <span className="text-[12px] font-[300]">14 hours</span>
                     </div>

                     <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-3">
                           <div className="relative">
                              <Image
                                 src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-6_mbgys2.webp"
                                 alt=""
                                 width={100}
                                 height={100}
                                 className="w-[40px] h-[40px] rounded-full"
                              />
                              <div className="bg-[#FFAE20] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                           </div>
                           <div className="flex flex-col">
                              <h2 className="text-[13px] font-[500]">Maria Hernandez</h2>
                              <div className="flex items-center font-[200] gap-1 text-[11px]">
                                 You: La ub jiromu fik su.
                              </div>
                           </div>
                        </div>
                        <span className="text-[12px] font-[300]">12 mins</span>
                     </div>
                  </div>
               </div>
               {/* <h2 className="text-lg font-semibold" onClick={toggleDrawer}>
                  Drawer
               </h2>
               <p className="text-gray-500">This is a drawer.</p> */}
            </div>
         </div>
      </div>
   );
}

export default ChatDrawer;
