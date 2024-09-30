"use client";

import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaRegShareSquare } from "react-icons/fa";
import ShootingStars from "./ui/ShootingStars";
import { TextGenerateEffect1 } from "./ui/TextGenerateEffect1";
import { StarsBackground } from "./ui/StarsBackground";

const Hero = React.memo(() => {
  const [typingState, setTypingState] = useState({
    loopNum: 0,
    isDeleting: false,
    text: "",
    delta: 100, // Adjust as needed
  });

  const period = 2000; // Duration before switching to the next word
  const toRotate = useMemo(
    () => [
      "Software Engineer",
      "Front-End Web Developer",
      "React Developer",
      "Next.Js Developer",
      "Junior MERN Developer",
      "UI / UX Expert",
    ],
    []
  );

  // Refs to handle the typing and deleting sound
  const typingSoundRef = useRef<HTMLAudioElement | null>(null);
  const deletingSoundRef = useRef<HTMLAudioElement | null>(null);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  // Adjust the volume for both sounds
  const typingSoundVolume = 0.2; // Set desired volume level for typing sound (0.0 to 1.0)
  const deletingSoundVolume = 0.2; // Set desired volume level for deleting sound (0.0 to 1.0)

  // Function to play a sound from a given audio ref
  const playSound = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = typingState.isDeleting
        ? deletingSoundVolume
        : typingSoundVolume; // Adjust volume based on action
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(() => {}); // Play sound without promise rejection
    }
  };

  // Optimized function for typing effect
  const tick = useCallback(() => {
    let i = typingState.loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = typingState.isDeleting
      ? fullText.substring(0, typingState.text.length - 1)
      : fullText.substring(0, typingState.text.length + 1);

    // Play the typing or deleting sound based on state
    if (typingState.isDeleting) {
      playSound(deletingSoundRef); // Play deleting sound
    } else {
      playSound(typingSoundRef); // Play typing sound
    }

    // Update state in a single call to reduce re-renders
    setTypingState((prevState) => ({
      ...prevState,
      text: updatedText,
      delta: typingState.isDeleting ? 50 : 100,
      ...(updatedText === fullText && !typingState.isDeleting
        ? { isDeleting: true, delta: period }
        : {}),
      ...(typingState.isDeleting && updatedText === ""
        ? { isDeleting: false, loopNum: prevState.loopNum + 1, delta: 50 }
        : {}),
    }));
  }, [toRotate, typingState]);

  // Use Intersection Observer to detect when Hero section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeroVisible(true);
          } else {
            setIsHeroVisible(false);
            // Stop sounds when Hero section is not visible
            if (typingSoundRef.current) {
              typingSoundRef.current.pause();
              typingSoundRef.current.currentTime = 0; // Reset playback position
            }
            if (deletingSoundRef.current) {
              deletingSoundRef.current.pause();
              deletingSoundRef.current.currentTime = 0; // Reset playback position
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [heroSectionRef]);

  useEffect(() => {
    if (isHeroVisible) {
      const ticker = setInterval(tick, typingState.delta);
      return () => clearInterval(ticker);
    }
  }, [tick, typingState.delta, isHeroVisible]);

  const shouldAppendN = (word: string) => {
    const firstChar = word[0];
    return ["A", "E", "I", "O", "U"].includes(firstChar);
  };

  const fullText = toRotate[typingState.loopNum % toRotate.length];
  const prefix = shouldAppendN(fullText) ? "n" : "";

  return (
    <div ref={heroSectionRef} className="pb-9 pt-16" id="#hero">
      {/* Use the relative paths directly from the public folder */}
      <audio ref={typingSoundRef} src="/sounds/keyboard-typing.mp3" />
      <audio ref={deletingSoundRef} src="/sounds/keyboard-typing.mp3" />
      <div className="sm:h-[130vh] max-sm:h-[130vh] md:h-screen w-full bg-transparent flex items-center justify-center absolute top-0 left-0 z-10">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div>
        <Spotlight
          className="-top-40 -left-10 xl:-left-24 lg:-left-28 max-lg:w-[90vw] md:-left-32 md:-top-16 max-md:-top-5 h-screen max-sm:!h-[150vh] max-sm:w-[85vw] max-sm:-top-20"
          fill="#BD6F2F"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] max-sm:-top-5 max-sm:w-[70vw]"
          fill="#461885"
        />
        <Spotlight
          className="top-12 left-60 xl:left-[265px] h-[80vh] w-[50vw] max-lg:left-[140px] max-md:-top-5 max-md:left-12 max-md:h-screen max-sm:left-[30px] max-sm:!h-[150vh] max-sm:w-[85vw] max-sm:-top-24"
          fill="#D13372"
        />
        <Spotlight
          className="-top-28 xl:left-[230px] lg:left-[200px] max-xl:left-[100px] h-[80vh] w-[50vw] max-lg:left-[15px] max-md:-left-[25px] max-md:h-[100vh]max-sm:-left-[20px] max-sm:h-[150vh] max-sm:w-[85vw] max-sm:-top-5"
          fill="#461885"
        />
      </div>
      {/* Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {/* Heading */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-100">
            Unleashing Cutting-Edge Web with Next.js
          </h2>
          {/* A cool text effect that fades in text on page load, one by one. */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User-Experiences"
          />
          <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl leading-snug tracking-wide">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[#ff8024] to-[#ff9881] text-transparent bg-clip-text">
              Musaab Estaifee
            </span>
            ,<br /> Based In Syria,
          </h1>
          {/* Text Effect with Optimized Typing Animation */}
          <TextGenerateEffect1
            className="text-center text-[40px] md:text-5xl lg:text-6xl lg:h-[200px] max-lg:h-[150px]"
            words={`A${prefix} ${typingState.text}`}
          />
          <a href="#mindset">
            <MagicButton
              title="Unveil My Mindset"
              icon={<FaRegShareSquare className="text-xl" />}
              position="right"
              otherClasses=""
            />
          </a>
        </div>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
