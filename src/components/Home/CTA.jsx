import React from "react";
import laptopman from "../../assets/Home/laptopman.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const CTA = () => {
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
    <motion.div
      className="p-6 md:p-24"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="rounded-[30px] p-6 shadow-lg gap-8 flex flex-col ts:flex-row items-center justify-center">
        <motion.div
          className="w-[50%] md:w-[45%] flex justify-center"
          variants={fadeInUp}
        >
          <img
            src={laptopman}
            alt="Man sitting with a laptop"
            className="w-full md:w-[55%]"
          />
        </motion.div>
        <div className="w-full md:w-[55%] text-left">
          <motion.h1
            className="text-2xl ts:text-4xl md:text-5xl font-bold text-[#000] mb-4"
            variants={fadeInUp}
          >
            Want to Kickstart Your{" "}
            <span className="text-primary">Freelance</span> Career?
          </motion.h1>
          <motion.p
            className="ts:text-lg md:text-xl text-gray-700"
            variants={fadeInUp}
          >
            There's never been a better time to take yourself online and start
            making money from your very own fine-tuned set of skills.
          </motion.p>
          <Link to="/singup">
            <motion.button
              className="bg-primary text-white w-[200px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 my-6 py-2 ts:mb-0 ts:mt-6 px-6 md:py-3 md:mt-8 rounded-md"
              variants={fadeInUp}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
