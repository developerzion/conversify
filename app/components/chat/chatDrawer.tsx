import useUserState from "@/app/store/hooks/useUserState";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import useChatState from "@/app/store/hooks/chatState";
import { closeChatModal } from "@/app/store/features/chatSlice";
import ChatLoader from "../shared/chatLoader";
import ChatDesktopRow from "./chatDesktopRow";
import { GetFriendsQuery } from "@/lib/types/gql/graphql";
import { useEffect, useState } from "react";
import { GET_FRIENDS } from "@/lib/queries/chat";
import { useQuery } from "@apollo/client";

function ChatDrawer() {
   const dispatch = useAppDispatch();
   const {
      user: { avatarUrl, name },
   } = useUserState();

   const { open } = useChatState();

   const toggleDrawer = () => {
      dispatch(closeChatModal());
   };

   const [friends, setFriends] = useState([]);
   const [search, setSearch] = useState<string>("");

   const { data, loading } = useQuery(GET_FRIENDS, {
      fetchPolicy: "network-only",
   });
   const rows = data?.getFriends || [];

   useEffect(() => {
      setFriends(data?.getFriends);
   }, [data]);

   useEffect(() => {
      if (search.length) {
         const friendResult = friends.filter((friend: GetFriendsQuery["getFriends"][number]) => {
            const receiverName = friend.receiver.name.toLowerCase();
            const searchTerm = search.toLowerCase();
            return receiverName.indexOf(searchTerm) !== -1;
         });
         setFriends(friendResult);
      } else {
         setFriends(rows);
      }
   }, [search, rows]);

   return (
      <div className="flex md:hidden">
         <div
            className={`fixed top-0 left-0 z-20 w-[85%] h-full transition-all duration-500 transform ${
               open ? "" : "-translate-x-full"
            } bg-white shadow-lg peer-checked:translate-x-0`}
         >
            <div className="pt-5 pb-4">
               <div className="w-full flex justify-end pr-3">
                  <XMarkIcon className="w-[25px]" onClick={toggleDrawer} />
               </div>

               <div className="h-full">
                  <div className="flex items-center gap-3 px-6">
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

                  <div className="relative mt-6 px-6">
                     <input
                        type="text"
                        placeholder="Search contact"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 border-[1px] border-[#DFE5EF] py-[.4rem] rounded-[7px] outline-[#5C87FF] text-[13px]"
                     />
                     <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-9 top-1/2 transform -translate-y-1/2" />
                  </div>

                  <div className="flex flex-col gap-6 h-full overflow-y-scroll w-full px-2">
                     {loading ? (
                        <div className="px-6">
                           <ChatLoader />
                        </div>
                     ) : friends?.length ? (
                        <div className="flex flex-col gap-5 h-full overflow-y-scroll w-full mt-4">
                           {friends.map((row: GetFriendsQuery["getFriends"][number], idx: number) => {
                              return <ChatDesktopRow row={row} key={idx} />;
                           })}
                        </div>
                     ) : (
                        <div className="px-6 mt-5 text-[13px]">No active friends</div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ChatDrawer;
