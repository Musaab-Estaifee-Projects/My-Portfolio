"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect1 = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              // word 1 its index 0 and word 2 its index 1 ...etc
              key={word + idx}
              className={`  
                ${
                  idx > 0
                    ? `!bg-gradient-to-r !from-[#F68C41] !via-[#FA487F] !to-[#9F64F4] !text-transparent !bg-clip-text`
                    : `dark:text-white text-black`
                }
                 `}
              style={{
                filter: filter ? "" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-1">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};






























// Optimized Version
// "use client";

// import { useEffect, useMemo } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TextGenerateEffect1 = ({
//   words,
//   className,
//   filter = true,
//   duration = 0.5,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
// }) => {
//   const [scope, animate] = useAnimate();

//   const wordsArray = useMemo(() => words.split(" "), [words]);

//   useEffect(() => {
//     animate(
//       "span",
//       {
//         opacity: 1,
//         filter: filter ? "blur(0px)" : "none",
//       },
//       {
//         duration: duration || 1,
//         delay: stagger(0.2),
//       }
//     );
//   }, [animate, filter, duration]);

//   const renderWords = () => (
//     <motion.div ref={scope}>
//       {wordsArray.map((word, idx) => (
//         <motion.span
//           key={word + idx}
//           className={cn(
//             idx === 2 || idx === 3
//               ? "text-yellow-300"
//               : "dark:text-white text-black",
//             idx >= 8 ? "text-purple" : ""
//           )}
//           style={{
//             filter: filter ? "" : "none",
//           }}
//         >
//           {word}{" "}
//         </motion.span>
//       ))}
//     </motion.div>
//   );

//   return (
//     <div className={cn("font-bold", className)}>
//       <div className="my-2">
//         <div className="dark:text-white text-black leading-snug tracking-wide">
//           {renderWords()}
//         </div>
//       </div>
//     </div>
//   );
// };
