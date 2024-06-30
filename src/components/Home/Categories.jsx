import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { categories } from "../../data";
import Heading from "./Heading";

const Categories = () => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div ref={ref} className="relative z-[10] flex flex-col bg-white py-24 overflow-hidden justify-center items-center w-full">
      <div className="absolute w-[60%] h-[80%] z-[0] -right-[40%] -top-[25%] blur opacity-80 rounded-full bg-gradient-4" />
      <Heading text="Browse talents by category" />
      <p className="text-sm font-inter mt-2 text-center">
        Looking for work?{" "}
        <a href="/jobs" className="underline text-primary">
          Browse Jobs
        </a>
      </p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-6 md:px-28 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="flex flex-col z-[10] items-center p-6 cursor-pointer bg-white hover:bg-light transition-all duration-300 ease-in-out w-full rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105"
            variants={fadeInUp}
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-20 h-20"
            />
            <p className="text-lg font-bold mt-4">{category.category}</p>
            <p className="text-sm font-inter text-dim mt-2">
              {category.skills} skills
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categories;
