import React from "react";
import Header from "./header";
import Footer from "./footer";

interface IProps {
   children: React.ReactElement;
}

const MainLayout = ({ children }: IProps) => {
   return (
      <>
         <Header />
         <div className="pt-[5.5rem]">{children}</div>
         <Footer />
      </>
   );
};

export default MainLayout;
