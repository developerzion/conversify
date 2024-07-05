import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/lib/queries/user";
import Loader from "../../shared/loader";
import { useRouter } from "next/navigation";

interface IProps {
   children: React.ReactElement;
}

const MainLayout = ({ children }: IProps) => {
   const router = useRouter();
   const { loading, data } = useQuery(GET_USER);

   useEffect(() => {
      if (!data && !loading) {
         router.push("/signin");
      }
   }, [data, loading, router]);

   if (loading || !data)
      return (
         <div className="w-full h-screen flex justify-center items-center text-[#5D87FF]">
            <Loader />
         </div>
      );

   if (data)
      return (
         <>
            <Header />
            <div className="pt-[5.5rem]">{children}</div>
            <Footer />
         </>
      );
};

export default MainLayout;
