'use client'
// import { useState, useEffect } from "react";
import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";

// const EnvelopeIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 48 48"
//     width="96px"
//     height="96px"
//     className="bg-black-100"
//   >
//     <path
//       fill="#4285F4"
//       d="M4,40L4,40c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V14c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4v26C4,39.2,4,39.6,4,40z"
//     />
//     <path
//       fill="#34A853"
//       d="M44,8c0-2.2-1.8-4-4-4H8C5.8,4,4,5.8,4,8v4l20,12L44,12V8z"
//     />
//     <path
//       fill="#FBBC04"
//       d="M4,8c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v4L24,24L4,12V8z"
//     />
//     <path
//       fill="#EA4335"
//       d="M24,24L4,12v26c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V12L24,24z"
//     />
//   </svg>
// );

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   console.log("Adding load event listener");
  //   const handleLoad = () => {
  //     console.log("Page fully loaded");
  //     setIsLoading(false);
  //   };

  //   window.addEventListener("load", handleLoad);

  //   const timeout = setTimeout(() => {
  //     console.log("Fallback timeout triggered");
  //     setIsLoading(false);
  //   }, 5000);

  //   return () => {
  //     console.log("Removing load event listener");
  //     window.removeEventListener("load", handleLoad);
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip select-none">
      <div
        className="max-w-7xl w-full transition-opacity duration-1000"
      >
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
