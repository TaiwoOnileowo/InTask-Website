import React from "react";
import laptopman from "../../assets/Home/laptopman.png";
import { motion } from "framer-motion";

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
      <div className="rounded-[30px] p-6 shadow-lg gap-8 flex flex-col md:flex-row items-center justify-center">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={fadeInUp}
        >
          <img
            src={laptopman}
            alt="Man sitting with a laptop"
            className="w-full md:w-[55%]"
          />
        </motion.div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-dark mb-4"
            variants={fadeInUp}
          >
            Want to Kickstart Your{" "}
            <span className="text-primary">Freelance</span> Career?
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700"
            variants={fadeInUp}
          >
            Join inTask today and connect with startups and companies looking
            for young talent like you. Start your journey to success now!
          </motion.p>
          <motion.button
            className="bg-primary text-white w-[180px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md"
            variants={fadeInUp}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
