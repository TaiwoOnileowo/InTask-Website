import React, { useEffect, useState } from "react";
import { heroData } from "../../data";
import { FaStar } from "react-icons/fa";
const HeroAnimation = ({ index, setIndex }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full sm:w-[40%] h-full ">
      {heroData.map((hero, i) => (
        <div
          key={i}
          className={`sm:w-full h-[50%] md:h-[80%] flex items-center mt-10 md:absolute top-0 left-0 transition justify-center ${
            index === i ? "opacity-90 visible" : "opacity-0 hidden"
          }`}
        >
          <img
            src={hero.image}
            alt={hero.role}
            className="w-full h-full object-cover rounded-md"
          />
          <div className=" text-sm md:w-[10.6875rem] bg-white absolute rounded-md flex flex-col justify-center items-center gap-2 p-2 -right-2 sm:-right-6 md:-right-16 bottom-4 sm:bottom-[50%] md:bottom-4 bg-opacity-90 hero-mini-card">
            <img
              src="https://robohash.org/${Math.random()}?set=set5"
              alt="avatar"
              className="md:w-16 md:h-16 h-14 w-14 rounded-full"
            />
            <h1 className="font-medium md:text-base text-sm">{hero.role}</h1>
            <p className=" md:text-base text-sm">{hero.name}</p>
            <p className="gap-2 inline-flex text-xs items-center justify-center">
              <span className="text-yellow">
                <FaStar />
              </span>
              {hero.star}[{hero.reviews}]
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroAnimation;
