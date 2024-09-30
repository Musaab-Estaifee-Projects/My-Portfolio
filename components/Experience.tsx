import { workExperience } from "@/data/index";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20" id="workExperience">
      <h1 className="heading">
        My{" "}
        <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] inline-block text-transparent bg-clip-text">
          Work Experience
        </span>
      </h1>
      {/* Experiences' Cards */}
      <div className="w-full mt-14 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 8000) + 8000}
            borderRadius="1.5rem"
            style={{
              backgroundColor: "rgba(17, 18, 90, 0.25)",
              borderRadius: "1.5rem",
            }}
            className="relative flex-1 text-white border-neutral-200 dark:border-slate-800  backdrop-blur-[18px]"
          >
            <div className="relative flex lg:flex-row flex-col lg:items-start p-3 py-6 lg:p-10 max-lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
