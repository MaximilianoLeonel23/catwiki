import React from "react";
import image1 from "@/assets/images/image 1.png";
import image2 from "@/assets/images/image 2.png";
import image3 from "@/assets/images/image 3.png";
import Divider from "@/components/Divider";
import Image from "next/image";

const SectionWhyShould: React.FC = () => {
  return (
    <section className="grid grid-cols-2 items-center p-24">
      <div className="flex flex-col gap-y-8 p-8">
        <div className="flex flex-col gap-y-2">
          <Divider />
          <h2 className="text-5xl text-primary-gray-700 font-bold">
            Why should you have a cat?
          </h2>
        </div>
        <p className="text-lg text-primary-gray-700">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <a
          href=""
          className="text-lg font-bold text-primary-gray-700 opacity-60"
        >
          SEE MORE
        </a>
      </div>
      <div className="columns-2">
        <Image src={image2} alt="imagen de gato" className="mb-4" />
        <div className="flex justify-end">
          <Image src={image1} alt="imagen de gato" className="mb-4 w-3/4" />
        </div>
        <Image src={image3} alt="imagen de gato" className="mb-4 h-4/5" />
      </div>
    </section>
  );
};

export default SectionWhyShould;
