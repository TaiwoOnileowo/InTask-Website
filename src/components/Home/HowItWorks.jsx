import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import woman from "../../assets/Home/woman3.png";
import { howitworks } from "../../data";
import StepsListMobile from "./StepsListMobile";
import StepsListDesktop from "./StepsListDesktop";
const HowItWorks = () => {
  const [index, setIndex] = useState(0);
  const [screenWidth, setScreenwidth] = useState(0);
  const { ref, inView } = useInView({
    // triggerOnce: true,
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

  useEffect(() => {
    const handleResize = () => {
      setScreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <div
      ref={ref}
      className="relative flex overflow-hidden bg-gradient-5 flex-col msm:flex-row z-[10] p-6 ts:px-10 md:p-24 md:px-20 gap-14 items-center w-full justify-center"
    >
      <motion.div
        className="flex justify-center items-center  z-[10] md:justify-start px-16 ts:mb-6 md:mb-0 sm:w-[60%] md:w-[40%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={woman}
          alt="Woman"
          className="z-[10] w-[250px] ts:w-[300px] md:w-[350px]"
        />
      </motion.div>
      <motion.div
        className="w-full md:w-[55%]"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="text-2xl text-center ts:text-left sm:text-4xl md:text-5xl font-bold mb-4"
          variants={fadeInUp}
        >
          How it Works
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center ts:text-left font-inter text-gray-600 mb-6"
          variants={fadeInUp}
        >
          {index === 0
            ? "It's that easy to start your freelance journey with inTask"
            : "Find the right young talent for your project with inTask"}
        </motion.p>
        {howitworks[index].map((how, stepIndex) => (
          <>
            {" "}
            {screenWidth > 600 ? (
              <StepsListDesktop
                how={how}
                stepIndex={stepIndex}
                fadeInUp={fadeInUp}
              />
            ) : (
              <StepsListMobile
                how={how}
                stepIndex={stepIndex}
                fadeInUp={fadeInUp}
              />
            )}
          </>
        ))}

        <div className="w-full flex items-center gap-4  mt-8 px-[75px]">
          <motion.button
            onClick={() => setIndex(0)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              index === 0 ? "bg-primary text-white" : "bg-gray-200 text-primary"
            } transition-colors duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Freelancer
          </motion.button>

          <motion.button
            onClick={() => setIndex(1)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              index === 1 ? "bg-primary text-white" : "bg-gray-200 text-primary"
            } transition-colors duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Recruiter
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
