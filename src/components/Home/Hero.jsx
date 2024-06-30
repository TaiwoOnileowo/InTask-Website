import React from "react";
import image from "../../assets/Home/image1.png";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  return (
    <div className="h-screen  px-24 flex pt-[10%] bg-gradient-5 gap-32 overflow-hidden relative">
      <img src={image} className="absolute z-[0] -top-32 right-0 w-[50%] h-auto" alt="Hero background" />
      <div className="absolute w-[500px] h-[500px] z-[0] right-36 top-10 blur opacity-80 rounded-full bg-gradient-4" />
      <div className="pt-12 w-[45%] z-[10]">
        <h1 className="font-poppins text-5xl font-bold leading-tight">
          Hire the Next Gen <span className="text-primary">Talents</span>
        </h1>
        <p className="mt-6 font-inter text-lg text-dim">
          InTask is an exclusive network of the top young freelance software developers, designers, marketing experts, finance experts, product managers, and project managers in the world. Top companies hire InTask talents for their most important projects.
        </p>
        <button className="bg-primary text-white shadow-md shadow-accent hover:shadow-xl hover:shadow-accent w-[180px]  hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md">
         Hire Top Talent
        </button>
      </div>
      <HeroAnimation />
    </div>
  );
};

export default Hero;
