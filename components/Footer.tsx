import { LogoSvg } from "@/assets/images/images";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className="flex items-center justify-between bg-black logoWhite py-8 px-16 rounded-t-3xl">
        <LogoSvg />
        <p className="text-white font-light">
          © created by <span className="font-bold">Maximiliano</span> -
          devChallenge.io 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
