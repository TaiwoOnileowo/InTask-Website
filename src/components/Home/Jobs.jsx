import React, { useRef, useEffect, useState } from "react";
import { people } from "../../data";
import CountUp from "react-countup";

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

  return (
    <div className="flex flex-row overflow-hidden bg-gradient-5">
      <div className="w-[60%] flex flex-col justify-center px-36">
        <h1 className="text-5xl font-bold autoshow" ref={titleRef}>
          {isCounting ? <CountUp start={0} end={60} duration={2.75} /> : "0"}+
          projects completed this month
        </h1>
        <p className="mt-4 text-dim font-inter">
          What are you waiting for? InTask provides a platform for you to begin
          your freelance journey even at a young age. This place is specially
          for young talents who are looking for a platform to showcase their
          skills.
        </p>
        <button className="bg-primary text-white w-[180px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md">
          Get Started
        </button>
      </div>
      <div className="bg-primary relative w-[40%] py-14 h-[500px]">
        <div className="gap-14 flex flex-col absolute -left-24">
          {people.map((person, index) => (
            <div
              key={index}
              className="flex gap-2 items-center w-[400px] p-2 bg-white rounded-2xl"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
