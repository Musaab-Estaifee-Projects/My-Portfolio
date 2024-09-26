// The Primary Section that will see above the fold once the page is visited.
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaRegShareSquare } from "react-icons/fa";
import ShootingStars from "./ui/ShootingStars";
import { StarsBackground } from "./ui/StarsBackground";
// import AnimatedAstronautAndPlanet from "./ui/AnimatedAstronautAndPlanet";
// import "../public/AstronautAndPlanet22.webp";
import { useEffect, useState } from "react";
import { TextGenerateEffect1 } from "./ui/TextGenerateEffect1";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "IT Engineer",
    "Software Engineer",
    "Front-End Web Developer",
    "React Developer",
    // "Front-End Mobile Application Developer",
    // "React Native Developer",
    "Beginner Next.Js Developer",
    "UI / UX Expert",
  ];
  const [text, setText] = useState("");
  // How fase one letter appears to the screen
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [delta, setDelta] = useState(0.0005);
  // The period between rendering the "Web Developer", "React", "UI / UX Expert"
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 4);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      // setDelta(500);
      // setDelta(80);
      setDelta(isDeleting ? 80 : 80);

    }
  };

  // Function to determine if "n" should be appended
  const shouldAppendN = (word: string | any[]) => {
    const firstChar = word[0];
    return ["A", "E", "I", "O", "U"].includes(firstChar);
  };

  const fullText = toRotate[loopNum % toRotate.length];
  const prefix = shouldAppendN(fullText) ? "n" : "";

  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const toRotate = [
  //   " Software Engineer",
  //   " Front-End Web Developer",
  //   " React Developer",
  //   "n UI / UX Expert",
  // ];
  // const [text, setText] = useState("");
  // // How fase one letter appears to the screen
  // const [delta, setDelta] = useState(0.0005);
  // // The period between rendering the "Web Developer", "React", "UI / UX Expert"
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);
  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);
  //   setText(updatedText);
  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 4);
  //   }
  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setDelta(period / 2);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setDelta(500);
  //   }
  // };

  return (
    <div className="pb-9 pt-16">
      <div className="sm:h-[130vh] max-sm:h-[130vh] md:h-screen w-full bg-transparent flex items-center justify-center absolute top-0 left-0 z-10">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* Grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {/* Heading */}
      <div className="md:flex justify-center gap-0 relative my-20 z-30 sm:grid sm:grid-cols-1">
        <div className="max-w-[89vw] md:max-w-2xl md:w-full lg:max-w-[60vw] flex flex-col md:items-start sm:items-center max-sm:items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            Dynamic Web Magic With Next.js
          </h2>
          {/* A cool text effect that fades in text on page load, one by one. */}
          <TextGenerateEffect
            className="md:text-left sm:text-center max-sm:text-center text-[40px] md:text-4xl lg:text-5xl"
            words="Transforming Concepts into Seamless User Experiences (UX)"
          />
          <div className="lg:h-[270px] max-lg:h-[270px] md:h-[250px] max-md:h-[300px] max-sm:h-[300px]">
            <TextGenerateEffect1
              className="md:text-left sm:text-center max-sm:text-center text-[40px] md:text-4xl lg:text-5xl"
              words={`Hi, I'm Musaab Estaifee, Based In Syria, A${prefix} ${text}`}
            />
          </div>
          {/* <h1 className="font-bold leading-snug tracking-widest md:text-left sm:text-center max-sm:text-center text-[40px] md:text-5xl lg:text-6xl">
            Hi, I&apos;m Musaab Estaifee, From Syria A
            <h1 className="text-purple">{text}</h1>
          </h1> */}
          {/* <p className="md:text-left max-sm:text-center sm:text-center md:tracking-wider mb-4 md:text-lg lg:text-2xl">
            Hi, I&apos;m Musaab Estaifee, A {text} Based In SYRIA.
          </p> */}
          <a href="#about">
            <MagicButton
              title="Show My Work"
              icon={<FaRegShareSquare className="text-xl" />}
              position="right"
              otherClasses=""
            />
          </a>
        </div>
        <div className="h-full w-full animateAstronautAndPlanet flex items-center justify-center lg:mt-0 md:mt-4 max-sm:pt-10">
          {/* <AnimatedAstronautAndPlanet /> */}
          <div className="flex justify-center items-center">
            <img
              src="AstronautAndPlanet22.webp"
              alt="Astronaut"
              loading="lazy"
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
