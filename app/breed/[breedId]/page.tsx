"use client";
import { BreedDetails, BreedInfo } from "@/types/types";
import React, { useEffect, useState } from "react";
import { capitalizeString } from "@/helpers/capitalize";
interface Params {
  params: {
    breedId: string;
  };
}
const SingleBreed: React.FC<Params> = ({ params }) => {
  const [breedDetails, setBreedDetails] = useState<BreedInfo>();
  const [breedPhotos, setBreedPhotos] = useState<string[]>([]);
  const API_KEY =
    "live_Jc4iWcT5N4QOGBmDxbjqoSXf45xl7pBttppSz1GfI3m2GO3VLt5ah7oY1RrCWuHN";

  useEffect(() => {
    const getBreed = async (params: string) => {
      if (!params) return;
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${params}&api_key=${API_KEY}`
        );
        const data: BreedDetails[] = await response.json();
        const { breeds } = data[0];
        const {
          name,
          description,
          temperament,
          origin,
          life_span,
          adaptability,
          affection_level,
          child_friendly,
          grooming,
          intelligence,
          health_issues,
          social_needs,
          stranger_friendly,
        } = breeds[0];

        const breedInfo: BreedInfo = {
          name,
          description,
          temperament,
          origin,
          life_span,
          adaptability,
          affection_level,
          child_friendly,
          grooming,
          intelligence,
          health_issues,
          social_needs,
          stranger_friendly,
        };

        setBreedDetails(breedInfo);
        const breedPhotos = data.map((breed) => {
          return breed.url;
        });
        setBreedPhotos(breedPhotos);
      } catch (err) {
        console.log(err);
      }
    };

    getBreed(params.breedId);
  }, []);
  return (
    <main className="container">
      <div className="flex flex-col">
        <section className="flex gap-x-24 items-start px-24 py-16">
          <div className="relative w-1/3">
            <img
              src={breedPhotos[0]}
              className="w-full h-full object-cover object-center rounded-3xl"
            />
            <div className="grid place-items-center absolute top-0 -left-4 h-full -z-10">
              <div className="bg-primary-golden w-16 h-4/5 rounded-2xl"></div>
            </div>
          </div>
          <div className="w-2/3 flex flex-col gap-y-8">
            <h1 className="text-4xl text-primary-gray-700 font-semibold">
              {breedDetails?.name}
            </h1>
            <p className="text-lg text-primary-gray-700">
              {breedDetails?.description}
            </p>
            <ul className="flex flex-col gap-y-8">
              {breedDetails &&
                Object.entries(breedDetails)
                  .filter(
                    ([property, value]) =>
                      property !== "name" && property !== "description"
                  )
                  .map(([property, value]) => (
                    <li key={property} className="flex items-center gap-x-8">
                      <p className="font-bold text-black">
                        {capitalizeString(property.replace("_", " "))}:
                      </p>
                      {typeof value === "string" ? (
                        <p className="text-black">{value}</p>
                      ) : (
                        <div className="flex items-center gap-x-2">
                          {Array.from({ length: 5 }, (_, index) => (
                            <span
                              key={index}
                              className={`h-3 w-16 rounded-full
                              ${
                                index < value
                                  ? "bg-primary-gray-600"
                                  : "bg-primary-inputItem"
                              }
                            `}
                            ></span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
            </ul>
          </div>
        </section>
        <section className="flex flex-col gap-y-8 py-24">
          <h4 className="text-4xl text-primary-gray-700 font-semibold">
            Other photos
          </h4>
          <div className="grid grid-cols-4 gap-8 ">
            {breedPhotos &&
              breedPhotos.slice(1).map((photoUrl, idx) => (
                <div key={idx}>
                  <img
                    src={photoUrl}
                    alt={breedDetails?.name}
                    className="w-full h-full object-cover object-center rounded-3xl"
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default SingleBreed;
