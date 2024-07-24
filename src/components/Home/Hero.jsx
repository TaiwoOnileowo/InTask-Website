import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../assets/Home/image1.png";
import HeroAnimation from "./HeroAnimation";
import { Link } from "react-router-dom";
const Hero = () => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("primary");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    switch (index) {
      case 0:
        setColor("#37DC29");
        break;
      case 1:
        setColor("#ac8791");
        break;
      case 2:
        setColor("#FD7A68");
        break;
      case 3:
        setColor("#913D6C");
        break;
      default:
        setColor("primary");
        break;
    }
  }, [index]);

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
    <div className="sm:h-[60vh] md:h-screen px-8 ts:px-10 md:px-24 flex sm:flex-row flex-col pt-[30%] sm:pt-[20%] md:pt-[15%] bg-gradient-5 gap-4 overflow-hidden relative">
      <motion.div
        ref={ref}
        className=" sm:w-[60%] z-[10]"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="font-poppins text-[2.5rem] ts:text-[4rem] md:text-[4.625rem] font-[500] leading-[3rem] ts:leading-[5.125rem] tracking-[-0.0625rem]"
          variants={fadeInUp}
        >
          Hire the Next Gen <span style={{ color: color }}>Talents</span>
        </motion.h1>
        <motion.p
          className="mt-6 font-inter text-[1rem] ts:text-[1.3125rem] text-dim leading-[1.9375rem]"
          variants={fadeInUp}
        >
          InTask is an exclusive network of the top young freelancers. Top
          companies hire InTask talents for their most important projects.
        </motion.p>
        <Link to="/signup">
          <motion.button
            style={{
              backgroundColor: isHovered ? "#37DC29" : color,
              transform: isHovered ? "scale(0.95)" : "scale(1)",
              transition: "all 0.3s ease-in-out",
            }}
            className="text-white w-[200px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent  px-6 md:py-3 mt-6 py-2 md:mt-8 rounded-md"
            variants={fadeInUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hire Top Talent
          </motion.button>
        </Link>
      </motion.div>
      <HeroAnimation index={index} setIndex={setIndex} />
    </div>
  );
};

export default Hero;
