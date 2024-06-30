import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegUser } from "react-icons/fa";
import avatar from "../../assets/Home/avatar.svg";
import { topTalents } from "../../data";

const HeroAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % topTalents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-[10] pt-4 h-screen">
      <div className="w-full flex justify-center mb-8">
        <h1 className="text-3xl font-orelega font-bold text-primary">
          Our Top Talents This Month!
        </h1>
      </div>
      {topTalents.map((talent, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            transform: "translate(35%, 170%) rotate(-45deg)",
          }}
          animate={{
            opacity: index === activeIndex ? 1 : 0,
            transform:
              index === activeIndex
                ? "translate(0) rotate(0deg)"
                : "translate(35%, 170%) rotate(-45deg)",
            transition: { duration: 1, ease: "easeOut" },
          }}
          className={`font-inter w-[420px] shadow-lg transition-all duration-300 flex flex-col gap-4 mt-6 bg-white rounded-[30px] py-8 px-6 ${
            index === activeIndex ? "block" : "absolute"
          }`}
        >
          <div className="flex gap-4 w-full items-center">
            <img
              src={talent.avatar || avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full"
            />
            <div className="w-[80%]">
              <h1 className="text-2xl font-bold font-orelega">{talent.name}</h1>
              <p className="text-dim text-sm">{talent.skill}</p>
              <div className="flex w-full justify-between text-sm mt-1">
                <div className="flex text-yellow">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
                <h3 className="inline-flex gap-2 items-center text-sm">
                  <FaRegUser />
                  {talent.customers}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center h-full w-full">
            <p className="w-[70%]">{talent.description}</p>
            <button className="text-sm bg-primary text-white w-[100px] box-shadow  hover:scale-95 transition-all duration-300 py-2 px-2 mt-8 rounded-md">
              View Profile
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default HeroAnimation;
