import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaGlobe } from "react-icons/fa6";
import { socialMedia } from "@/data/index";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mb-[50px] pb-5 md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready To Take{" "}
          <span className="bg-gradient-to-r from-[#F68C41] via-[#FA487F] to-[#9F64F4] text-transparent bg-clip-text">
            Your
          </span>{" "}
          Digital Presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in Touch Today, and Let&apos;s Turn Your Vision into Reality!
        </p>
        <a href="mailto:eng.musaabestaifee@gmail.com" target="_blank">
          <MagicButton
            title="Let's Get In Touch"
            icon={<FaGlobe size={18} />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col max-md:gap-6 justify-between items-center">
        <p className="md:text-base text-sm leading-[1.6] lg:font-bold max-lg:font-semibold max-sm:text-center">
          <img
            src="/logo.ico"
            alt="logo"
            width={25}
            height={25}
            className="inline-block mb-[2px]"
          />
          {"  "}Copyright © {currentYear} Eng.Musaab_S_Estaifee
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt="contact-icon"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
