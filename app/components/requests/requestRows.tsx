import { GetFriendRequestsQuery } from "@/lib/types/gql/graphql";
import Image from "next/image";
import React from "react";
import { useMutation } from "@apollo/client";
import Loader from "../shared/loader";
import { ACCEPT_DECLINE_FRIEND_REQUEST } from "@/lib/mutations/user";
import { toast } from "react-toastify";

interface IProps {
   row: GetFriendRequestsQuery["getFriendRequests"][number];
}

const RequestRows = ({ row }: IProps) => {
   const {
      user: { avatarUrl, name },
      request: { friendRequestId },
   } = row;

   const [acceptDeclineRequest, { loading }] = useMutation(ACCEPT_DECLINE_FRIEND_REQUEST);

   const acceptDeclineRequestHandler = (status: string) => {
      acceptDeclineRequest({
         variables: {
            friendRequestId,
            status,
         },
         refetchQueries: ["getFriendRequests"],
      })
         .then(() => {
            toast.success("Accepted friend request");
         })
         .catch((err) => toast.error(err.message));
   };

   return (
      <div
         className="p-5 rounded-xl flex flex-col items-center gap-2"
         style={{
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
         }}
      >
         <Image src={avatarUrl} alt="" width={100} height={100} className="w-[100px] h-[100px] rounded-full" />
         <h1 className="font-[600] mt-2">{name}</h1>
         <button
            disabled={loading}
            onClick={() => acceptDeclineRequestHandler("ACCEPTED")}
            className="py-[.5rem] rounded-[7px] w-[100%] bg-green-100 text-green-400 text-[11px] md:text-[13px] font-[500] flex justify-center"
         >
            {loading ? <Loader /> : "Accept"}
         </button>
         <button
            disabled={loading}
            onClick={() => acceptDeclineRequestHandler("REJECTED")}
            className="py-[.5rem] rounded-[7px] w-[100%] bg-[#FDEDE8] text-[11px] md:text-[13px] text-[#FA896B] font-[500] flex justify-center"
         >
            {loading ? <Loader /> : "Decline"}
         </button>
      </div>
   );
};

export default RequestRows;
