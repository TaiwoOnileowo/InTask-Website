import React from "react";
import { done } from "../../data";
import { MdOutlineSettings } from "react-icons/md";
import doneimage from "../../assets/Home/done.jpg";
const Done = () => {
  return (
    <div className="flex  gap-4  items-center px-20 justify-center p-48 ">
      <div className="w-[50%]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#000] mb-4 leading-[1.2rem]">
          Getting Work Done has never been easier
        </h1>
        <ul className="text-lg flex flex-col font-inter mt-6 gap-2">
          {done.map((item, index) => {
            return (
              <li key={index} className="inline-flex items-center gap-2">
                <span className="text-primary ">
                  <MdOutlineSettings />
                </span>
                {item}
              </li>
            );
          })}
        </ul>
        <button className="bg-primary text-white w-[190px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md">
          Start Now For Free
        </button>
      </div>
      <div className="w-[50%]">
        <img src={doneimage} alt="" />
      </div>
    </div>
  );
};

export default Done;
