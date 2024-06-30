import React, { useRef, useEffect } from "react";
import { MdOutlineSettings } from "react-icons/md";

const Heading = ({ text }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.7,
    };

    const titleObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        titleRef.current.classList.add("show");
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
    <div className="mb-8">
      <h1
        ref={titleRef}
        className="text-3xl font-bold autoshow inline-flex items-center justify-center gap-2 opacity-0 transition-opacity duration-700 ease-in-out"
      >
        <span className="text-primary rotate">
          <MdOutlineSettings />
        </span>
        {text}
      </h1>
    </div>
  );
};

export default Heading;
