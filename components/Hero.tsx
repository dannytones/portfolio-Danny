"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ShimmerButton } from "./ui/ShimmerButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero: React.FC = () => {
  const handleScrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("experience");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50]"
          fill="#00c9b4"
        />
        <Spotlight
          className="top-28 left-80 h-[90vh] w-[50vw]"
          fill="#ffe8ff"
        />
      </div>

      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0 ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:80px_80px]",
            "[background-image:linear-gradient(to_right,rgba(0_0_0/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0_0_0/0.03)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(255_255_255/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255_255_255/0.03)_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black-100"></div>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl ld:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-[#00c9b4] max-w-80">
            Dynamic Web Magic with Next.js
          </h2>
          {/* Hero page h1 text */}
          <TextGenerateEffect
            className="text-[#ffe8ff] text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming concepts into seamless user experiencess"
          />

          <p className="text-[#ffe8ff] **:text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I`m Daniel, a NEXT.JS Developer
          </p>
        </div>
      </div>
      <a
        className="flex justify-center"
        href="#experience"
        onClick={handleScrollToAbout}
      >
        <ShimmerButton icon={<FaLocationArrow />} position="right">
          About me
        </ShimmerButton>
      </a>
    </div>
  );
};

export default Hero;
