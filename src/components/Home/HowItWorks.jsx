import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import woman from "../../assets/Home/woman3.png";
import { howitworks } from "../../data";

const HowItWorks = () => {
  const [index, setIndex] = useState(0);

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

  return (
    <div ref={ref} className="relative flex flex-col overflow-hidden bg-gradient-5 md:flex-row z-[10] p-6 md:p-24 gap-14 items-center w-full justify-center">
      <motion.div
        className="flex justify-center z-[10] md:justify-start mb-6 md:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={woman} alt="Woman" className="z-[10] w-[250px] md:w-[350px]" />
      </motion.div>
      <motion.div
        className="w-full md:w-[50%]"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1 className="text-3xl md:text-5xl font-bold mb-4" variants={fadeInUp}>
          How it Works
        </motion.h1>
        <motion.p className="text-lg md:text-xl font-inter text-gray-600 mb-6" variants={fadeInUp}>
          {index === 0
            ? "It's that easy to start your freelance journey with inTask"
            : "Find the right young talent for your project with inTask"}
        </motion.p>
        {howitworks[index].map((how, stepIndex) => (
          <motion.div
            key={stepIndex}
            className="flex items-start gap-4 mb-2 cursor-pointer hover:shadow-sm hover:bg-gradient-5 p-3"
            variants={fadeInUp}
          >
            <div className="bg-primary rounded-full p-2 flex items-center justify-center">
              <h1 className="text-xl font-semibold text-white">#{how.step}</h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{how.heading}</h2>
              <p className="text-sm text-gray-600">{how.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="w-full flex items-center gap-4 justify-center mt-8">
          <a href="/signup">
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
          </a>
         
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
