"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My{" "}
        <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
          Approach
        </span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          description="In the initial phase, I dive deep into understanding the project’s core requirements, laying a strong foundation for success. Utilizing my expertise in front-end and back-end technologies like React, Next.js, MongoDB, and TypeScript, I craft a comprehensive strategy that aligns with your business goals. Every detail, from database architecture to user flow design, is meticulously planned to ensure a seamless development process. This phase is not just about gathering requirements; it’s about envisioning a solution that’s both scalable and future-proof, setting the stage for a project that stands out in the competitive digital landscape."
        >
          <CanvasRevealEffect
            animationSpeed={6}
            containerClassName="bg-[#ff8024]"
            colors={[
              [255, 107, 9],
              [189, 95, 27],
            ]}
            dotSize={3}
          />
        </Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          description="With a solid plan in place, I move to the development phase, where code turns ideas into reality. Leveraging modern frameworks like React and Next.js, I build robust and dynamic user interfaces, enriched with interactive elements powered by JavaScript and TypeScript. I bring designs to life with Tailwind CSS, ensuring pixel-perfect alignment and responsiveness across all devices. Backend development is equally precise, using MongoDB to structure data and optimize performance. Regular progress updates and demos keep you involved, providing full transparency and enabling feedback loops that ensure the product evolves exactly as envisioned."
        >
          <CanvasRevealEffect
            animationSpeed={6}
            containerClassName="bg-[#FA487F]"
            colors={[
              [189, 54, 96],
              [161, 46, 82],
            ]}
            dotSize={3}
          />
          {/* Radial gradient for the cute fade
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
        </Card>
        <Card
          title="Deployment & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="This final phase is where vision meets execution. After thorough testing and optimization, I deploy the application using cutting-edge tools and best practices, ensuring a smooth and seamless launch. Whether deploying a sophisticated MERN stack application or a static/dynamic Next.js website/webapp, I handle everything from server configurations to database setups. With a focus on performance, security, and scalability, your project is launched with a solid foundation, ready to deliver exceptional user experiences and drive business growth."
        >
          <CanvasRevealEffect
            animationSpeed={6}
            containerClassName="bg-[#9F64F4]"
            colors={[
              [135, 85, 207],
              [115, 72, 176],
            ]}
            dotSize={3}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-4xl">
          {title}
        </h2>
        <h2
          className="text-md dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#BD6F2F_0%,#D13372_25%,#6222BA_50%,#461885_75%,#BD6F2F_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 pb-[3px] text-white backdrop-blur-3xl text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach;
