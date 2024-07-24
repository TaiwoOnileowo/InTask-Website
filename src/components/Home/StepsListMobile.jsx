import React from "react";
import { motion } from "framer-motion";
const StepsListMobile = ({ stepIndex, how, fadeInUp }) => {
  return (
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
  );
};

export default StepsListMobile;
