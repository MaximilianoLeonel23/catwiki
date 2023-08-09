import { LogoSvg } from "@/assets/images/images";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="container py-8">
      <div className="flex items-center justify-start">
        <LogoSvg />
      </div>
    </header>
  );
};

export default Header;
