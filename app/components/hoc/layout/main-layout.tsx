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
         {children}
         <Footer />
      </>
   );
};

export default MainLayout;
