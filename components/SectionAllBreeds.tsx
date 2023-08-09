import React from "react";
import Divider from "./Divider";
const SectionAllBreeds = () => {
  return (
    <section>
      <div className="p-24 bg-primary-gray-200 rounded-b-3xl">
        <div className="grid grid-cols-2 place-items-end">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <p className="text-primary-gray-700 text-lg">
                Most Searched Breeds
              </p>
              <Divider />
            </div>
            <h2 className="text-5xl text-primary-gray-700 font-bold">
              66+ Breeds For you to discover
            </h2>
          </div>
          <div>
            <a
              href=""
              className="text-lg font-bold text-primary-gray-700 opacity-60"
            >
              SEE MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAllBreeds;
