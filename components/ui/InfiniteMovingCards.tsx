"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    id: number;
    projectImg: string;
    projectName: string;
    projectPageName: string;
    imgClassName: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className="relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5"
            style={{
              // Set the fixed width and height for the card here
              width: "700px", // Fixed width of 300px (adjust as needed)
              height: "500px", // Fixed height of 400px (adjust as needed)
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <img
                src={item.projectImg}
                alt="project-img"
                className={`${item.imgClassName} w-full h-full rounded-t-2xl border-x-2 border-t-2 border-white/[0.1]`} // Adjust the image size
              />

              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1 px-[6px]">
                    <span className="text-xl leading-[1.6] text-white font-bold">
                      {item.projectName} -{" "}
                      <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
                        {item.projectPageName}
                      </span>
                    </span>
                    <span className="mt-1 text-sm leading-[1.6] text-gray-400 font-bold line-clamp-3">
                      {item.description}
                    </span>
                    {/* <span className="text-sm leading-[1.6] text-white-200 font-normal">{item.title}</span> */}
                  </div>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
