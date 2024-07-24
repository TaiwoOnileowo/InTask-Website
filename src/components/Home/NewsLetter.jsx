import React from "react";
import { motion } from "framer-motion";

const NewsLetter = () => {
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
      className="flex items-center overflow-hidden flex-col p-6 md:p-24 bg-gradient-4"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div
        className="w-full sm:w-[50%] bg-white p-6 md:p-8 rounded-lg shadow-2xl"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-2xl ts:text-4xl md:text-6xl font-bold text-center text-gray-800"
          variants={fadeInUp}
        >
          Keep Yourself Up to Date
        </motion.h1>
        <motion.p
          className="text-center ts:text-base text-sm text-gray-600 mt-4 font-inter"
          variants={fadeInUp}
        >
          Stay ahead of the curve with the latest updates on new projects,
          industry trends, career tips, and success stories directly in your
          inbox. Don't miss out on exclusive opportunities to connect with
          startups and companies seeking young talent like you.
        </motion.p>
        <motion.div className="mt-8 flex justify-center" variants={fadeInUp}>
          <input
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-[70%] p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="p-3 bg-primary text-white font-bold rounded-r-lg hover:bg-accent transition duration-300"
          >
            Subscribe
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NewsLetter;
