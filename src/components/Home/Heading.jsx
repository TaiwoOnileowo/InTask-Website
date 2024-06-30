import React from "react";
import { MdOutlineSettings } from "react-icons/md";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heading = ({ text }) => {
  const { ref, inView } = useInView({
    threshold: 0.7,
    triggerOnce: true,
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 200, scale: 0.3 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="mb-8">
      <motion.h1
        ref={ref}
        className="text-3xl font-bold inline-flex items-center justify-center gap-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
      >
        <motion.span className="text-primary rotate">
          <MdOutlineSettings />
        </motion.span>
        {text}
      </motion.h1>
    </div>
  );
};

export default Heading;
