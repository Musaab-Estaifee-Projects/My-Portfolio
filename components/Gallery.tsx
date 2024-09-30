import { projectsGallery } from "@/data/index";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Gallery = () => {
  return (
    <div className="py-10">
      <h1 className="heading">
        A Visual Journey Into{" "}
        <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
          DevOverlow
        </span>
      </h1>
      {/* Projects' Cards */}
      <div className="flex flex-col items-center lg:mt-12 max-lg:mt-10">
        <InfiniteMovingCards
          items={projectsGallery}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Gallery;
