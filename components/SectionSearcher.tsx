"use client";
import React, { useEffect, useState } from "react";
import bannerImgLg from "@/assets/images/HeroImagelg.png";
import Image from "next/image";
import { LogoSvg } from "@/assets/images/images";
import { Breed } from "@/types/types";
import { SearchIcon } from "@/assets/icons/icons";
import Link from "next/link";
const SectionSearcher = () => {
  const [searchedBreed, setSearchedBreed] = useState<string>("");
  const [breeds, setBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    const handleSearcherByBreed = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds`);
        const data: Breed[] = await response.json();
        console.log(searchedBreed);
        const filteredBreed = data.filter((breed) =>
          breed.name.toLowerCase().includes(searchedBreed.toLowerCase())
        );
        if (!searchedBreed) {
          setBreeds([]);
        } else {
          setBreeds(filteredBreed);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleSearcherByBreed();
  }, [searchedBreed]);

  return (
    <section>
      <div className="relative">
        <Image src={bannerImgLg} alt="banner image" className="rounded-t-3xl" />
        <div className="absolute left-0 top-0 logoWhite w-1/2 p-24">
          <div className="flex flex-col justify-center gap-y-16">
            <div className="flex flex-col gap-y-4">
              <LogoSvg />
              <h1 className="text-white text-2xl">
                Get to know about your cat breed
              </h1>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="relative flex items-center searchIconDark">
                <input
                  type="text"
                  className="w-full py-4 px-8 bg-white text-primary-gray-700 placeholder:text-primary-gray-700 placeholder:text-lg text-lg border-none rounded-full outline-none"
                  placeholder="Enter your breed"
                  defaultValue={searchedBreed}
                  onChange={(e) => setSearchedBreed(e.target.value)}
                />
                <div className="absolute right-8">
                  <SearchIcon />
                </div>
              </div>
              {breeds.length > 0 && (
                <ul className="flex flex-col bg-white p-4 rounded-3xl max-h-[15rem] overflow-auto no-scrollbar">
                  {breeds.map((breed) => (
                    <li
                      key={breed.id}
                      className="py-4 px-4 rounded-2xl  text-primary-gray-700 hover:bg-primary-inputItem cursor-pointer transition-colors duration-300"
                    >
                      <Link
                        href={`/breed/${breed.id}`}
                        className="block h-full w-full"
                      >
                        {breed.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSearcher;
