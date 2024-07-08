"use client";

import React from "react";
import MainLayout from "../components/hoc/layout/main-layout";
import Hamburger from "../components/shared/hamburger";
import RequestRows from "../components/requests/requestRows";
import { GET_FRIEND_REQUESTS } from "@/lib/queries/user";
import { useQuery } from "@apollo/client";
import Loader from "../components/shared/loader";
import { GetFriendRequestsQuery } from "@/lib/types/gql/graphql";

const FriendRequests = () => {
   const { loading, data } = useQuery(GET_FRIEND_REQUESTS);

   const rows = data?.getFriendRequests || [];
   return (
      <MainLayout>
         <div className="py-[1.5rem] mt-[.1rem] max-w-6xl m-auto bg-[#FEFEFE] px-2 md:px-0">
            <Hamburger title="Friend Requests" path="Pending Requests" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5">
               {loading ? (
                  <div className="text-[#3CD8EB]">
                     <Loader />
                  </div>
               ) : rows.length ? (
                  rows.map((row: GetFriendRequestsQuery["getFriendRequests"][number], idx: number) => {
                     return <RequestRows key={idx} row={row} />;
                  })
               ) : (
                  <div>No record found</div>
               )}
            </div>
         </div>
      </MainLayout>
   );
};

export default FriendRequests;
