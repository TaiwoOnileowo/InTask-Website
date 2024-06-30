import React, { useState } from "react";
import woman from "../../assets/Home/woman2.png";
import { howitworks } from "../../data";

const HowItWorks = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative flex flex-col overflow-hidden md:flex-row z-[10] p-6 md:p-24 gap-14 items-center w-full justify-center">
       
      <div className="flex justify-center z-[10] md:justify-start mb-6 md:mb-0">
        <img src={woman} alt="Woman" className="z-[10] w-[250px] md:w-[350px]" />
      </div>
      <div className="w-full md:w-[50%]">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">How it Works</h1>
        <p className="text-lg md:text-xl font-inter text-gray-600 mb-6">
          {index === 0
            ? "It's that easy to start your freelance journey with inTask"
            : "Find the right young talent for your project with inTask"}
        </p>
        {howitworks[index].map((how, stepIndex) => (
        <div key={stepIndex} className="flex items-start gap-4 mb-2 cursor-pointer hover:shadow-sm hover:bg-gradient-5 p-3">
            <div className="bg-primary rounded-full p-2 flex items-center justify-center">
              <h1 className="text-xl font-semibold text-white">#{how.step}</h1>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{how.heading}</h2>
              <p className="text-sm text-gray-600">{how.description}</p>
            </div>
          </div>
        ))}
        <div className="w-full flex items-center gap-4 justify-center mt-8">
          <button
            onClick={() => setIndex(0)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              index === 0 ? "bg-primary text-white" : "bg-gray-200 text-primary"
            } transition-colors duration-200`}
          >
            Freelancer
          </button>
          <button
            onClick={() => setIndex(1)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              index === 1 ? "bg-primary text-white" : "bg-gray-200 text-primary"
            } transition-colors duration-200`}
          >
            Recruiter
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
