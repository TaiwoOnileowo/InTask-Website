import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../assets/Home/image1.png";
import HeroAnimation from "./HeroAnimation";

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
    <div className="h-screen px-24 flex pt-[15%] bg-gradient-5 gap-4 overflow-hidden relative">
      <motion.div
        ref={ref}
        className=" w-[60%] z-[10]"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h1
          className="font-poppins text-[4.625rem] font-[500] leading-[5.125rem] tracking-[-0.0625rem]"
          variants={fadeInUp}
        >
          Hire the Next Gen <span style={{ color: color }}>Talents</span>
        </motion.h1>
        <motion.p
          className="mt-6 font-inter text-[1.3125rem] text-dim leading-[1.9375rem]"
          variants={fadeInUp}
        >
          InTask is an exclusive network of the top young freelancers. Top
          companies hire InTask talents for their most important projects.
        </motion.p>
        <a href="/signup">
          <motion.button
            style={{
              backgroundColor: isHovered ? "#37DC29" : color,
              transform: isHovered ? "scale(0.95)" : "scale(1)",
              transition: "all 0.3s ease-in-out",
            }}
            className="text-white w-[180px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent  px-6 py-3 mt-8 rounded-md"
            variants={fadeInUp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Hire Top Talent
          </motion.button>
        </a>
      </motion.div>
      <HeroAnimation index={index} setIndex={setIndex} />
    </div>
  );
};

export default Hero;
