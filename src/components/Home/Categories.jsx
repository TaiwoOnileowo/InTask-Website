import React, { useEffect, useRef } from "react";
import { categories } from "../../data";
import Heading from "./Heading";

const Categories = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.7,
    };

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    if (cardRefs.current) {
      cardRefs.current.forEach((card) => cardObserver.observe(card));
    }

    return () => {
      if (cardRefs.current) {
        cardRefs.current.forEach((card) => cardObserver.unobserve(card));
      }
    };
  }, []);

  return (
    <div className="z-[10] flex flex-col bg-gradient-5 py-24 overflow-hidden justify-center items-center w-full">
      <Heading text="Browse talents by category" />
      <p className="text-sm font-inter mt-2 text-center">
        Looking for work?{" "}
        <a href="/jobs" className="underline text-primary">
          Browse Jobs
        </a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 px-6 md:px-28 w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className=" autoshow flex flex-col items-center p-6 cursor-pointer bg-white hover:bg-light transition-all duration-300 ease-in-out w-full rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.category}
              className="w-20 h-20"
            />
            <p className="text-lg font-bold mt-4">{category.category}</p>
            <p className="text-sm font-inter text-dim mt-2">
              {category.skills} skills
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
