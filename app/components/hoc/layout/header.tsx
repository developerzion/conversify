import React from "react";
import { LogoImg } from "../svgIcons";

const Header = () => {
   return (
      <div className="py-[1.5rem] max-w-6xl m-auto">
         <div>
            <LogoImg />
         </div>
      </div>
   );
};

export default Header;
