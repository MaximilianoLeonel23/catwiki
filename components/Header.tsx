import { LogoSvg } from "@/assets/images/images";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="container py-8">
      <div className="flex items-center justify-start">
        <Link href="/">
          <LogoSvg />
        </Link>
      </div>
    </header>
  );
};

export default Header;
