import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_FRIENDS } from "@/lib/queries/chat";
import ChatLoader from "../shared/chatLoader";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import useUserState from "@/app/store/hooks/useUserState";
import ChatDesktopRow from "./chatDesktopRow";
import { GetFriendsQuery } from "@/lib/types/gql/graphql";

const ChatDesktopView = () => {
   const {
      user: { avatarUrl, name },
   } = useUserState();

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
      <>
         <div className="flex items-center gap-3 px-5">
            <div className="relative">
               <Image src={avatarUrl} alt="" width={100} height={100} className="w-[50px] h-[50px] rounded-full" />
               <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-8" />
            </div>
            <div className="flex flex-col">
               <h2 className="text-[14px] font-[500]">{name}</h2>
               <div className="flex items-center font-[200] gap-1 text-[12px]">Online</div>
            </div>
         </div>

         <div className="relative mt-8 px-5">
            <input
               type="text"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               placeholder="Search contact"
               className="w-full px-4 border-[1px] border-[#DFE5EF] py-[.4rem] rounded-[7px] outline-[#5C87FF] text-[13px]"
            />
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
         </div>

         {loading ? (
            <ChatLoader />
         ) : friends?.length ? (
            <div className="flex flex-col gap-5 h-full overflow-y-scroll w-full mt-4">
               {friends.map((row: GetFriendsQuery["getFriends"][number], idx: number) => {
                  return <ChatDesktopRow row={row} key={idx} />;
               })}
            </div>
         ) : (
            <div className="mt-5 text-[13px]">No active friends</div>
         )}
      </>
   );
};

export default ChatDesktopView;
