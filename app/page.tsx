// import { useState, useEffect } from "react";
import Approach from "@/components/Approach";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MusicPlayer from "@/components/MusicPlayer";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data/index";

export default function Home() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip select-none">
      {/* Music Player Component */}
      <MusicPlayer />
      <div className="max-w-7xl w-full transition-opacity duration-1000">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Gallery />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
