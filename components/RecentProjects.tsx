import { projects } from "@/data/index";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaGlobe } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20 mt-10" id="projects">
      <h1 className="heading">
        A Small Selection Of{" "}
        <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
          Recent Projects
        </span>
      </h1>
      {/* Projects' Cards */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10 max-sm:gap-y-1 max-sm:gap-x-10 max-sm:mt-1 max-lg:gap-y-1 max-lg:gap-x-10 max-lg:mt-1">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40%] max-sm:h-[30%] mb-10">
                {/* <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10"> */}
                <div className="relative w-full h-full overflow-hidden rounded-t-2xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0 px-2"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
                {title}
              </h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-3 max-sm:text-xs">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm font-bold">
                    <a href={link} target="_blank">
                      <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
                        Check Live Site
                      </span>
                    </a>
                  </p>
                  <a href={link} target="_blank">
                    <FaGlobe className="ms-3 mr-[2px]" color="#F68C41" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
