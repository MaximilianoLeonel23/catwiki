import React from "react";
import SectionWhyShould from "@/components/SectionWhyShould";
import SectionAllBreeds from "@/components/SectionAllBreeds";
import SectionSearcher from "@/components/SectionSearcher";

const Home: React.FC = () => {
  return (
    <main className="container">
      <div className="flex flex-col">
        <SectionSearcher />
        <SectionAllBreeds />
        <SectionWhyShould />
      </div>
    </main>
  );
};

export default Home;
