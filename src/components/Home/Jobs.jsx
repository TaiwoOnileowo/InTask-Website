import React, { useRef, useEffect, useState } from "react";
import { people } from "../../data";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Jobs = () => {
  const titleRef = useRef(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.7,
    };

    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        titleRef.current.classList.add("show");
        setTimeout(() => {
          setIsCounting(true);
        }, 1000);
      } else {
        setIsCounting(false);
      }
    }, observerOptions);

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
    };
  }, []);

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
    <div className="flex flex-row overflow-hidden bg-gradient-5">
      <div className="w-[60%] flex flex-col justify-center px-36">
        <motion.h1
          className="text-5xl font-bold"
          ref={titleRef}
          initial="hidden"
          animate={isCounting ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {isCounting ? <CountUp start={0} end={60} duration={2.75} /> : "0"}+
          projects completed this month
        </motion.h1>
        <motion.p
          className="mt-4 text-dim font-inter"
          initial="hidden"
          animate={isCounting ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          What are you waiting for? InTask provides a platform for you to begin
          your freelance journey even at a young age. This place is specially
          for young talents who are looking for a platform to showcase their
          skills.
        </motion.p>
        <motion.button
          className="bg-primary text-white w-[180px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md"
          initial="hidden"
          animate={isCounting ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          Get Started
        </motion.button>
      </div>
      <div className="bg-primary relative w-[40%] py-14 h-[500px]">
        <motion.div
          className="gap-14 flex flex-col absolute -left-24"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {people.map((person, index) => (
            <motion.div
              key={index}
              className="flex gap-2 items-center w-[400px] p-2 bg-white rounded-2xl"
              variants={fadeInUp}
            >
              <div
                className={`${
                  index === 0
                    ? "bg-pink-300"
                    : index === 1
                    ? "bg-blue-300"
                    : "bg-orange-300"
                } rounded-full flex items-start w-20 h-20 justify-center`}
              >
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-[70px] h-[70px]"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-orelega">
                  {person.name}
                </h3>
                <p className="text-sm font-inter">{person.text}🔥</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Jobs;
