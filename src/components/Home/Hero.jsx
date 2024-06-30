import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import image from "../../assets/Home/image1.png";
import HeroAnimation from "./HeroAnimation";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
    <div className="h-screen px-24 flex pt-[10%] bg-gradient-5 gap-32 overflow-hidden relative">
      <img src={image} className="absolute z-[0] -top-32 right-0 w-[50%] h-auto" alt="Hero background" />
      <div className="absolute w-[500px] h-[500px] z-[0] right-36 top-10 blur opacity-80 rounded-full bg-gradient-4" />
      <motion.div
        ref={ref}
        className="pt-12 w-[45%] z-[10]"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="font-poppins text-5xl font-bold leading-tight"
          variants={fadeInUp}
        >
          Hire the Next Gen <span className="text-primary">Talents</span>
        </motion.h1>
        <motion.p
          className="mt-6 font-inter text-lg text-dim"
          variants={fadeInUp}
        >
          InTask is an exclusive network of the top young freelance software developers, designers, marketing experts, finance experts, product managers, and project managers in the world. Top companies hire InTask talents for their most important projects.
        </motion.p>
        <motion.button
          className="bg-primary text-white shadow-md shadow-accent hover:shadow-xl hover:shadow-accent w-[180px] hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md"
          variants={fadeInUp}
        >
          Hire Top Talent
        </motion.button>
      </motion.div>
      <HeroAnimation />
    </div>
  );
};

export default Hero;
