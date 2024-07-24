import React from "react";
import { done } from "../../data";
import { MdOutlineSettings } from "react-icons/md";
import doneimage from "../../assets/Home/done.jpg";
import { Link } from "react-router-dom";
const GetWorkDone = () => {
  return (
    <div className="flex ts:flex-row flex-col-reverse  gap-6  items-center px-8 ts:px-10 md:px-24 justify-center py-32 ">
      <div className="mt-4 sm:m-0 sm:w-[50%]">
        <h1 className="text-2xl ts:text-3xl md:text-5xl font-bold text-[#000] mb-4 ">
          Getting Work Done has never been easier
        </h1>
        <ul className="text-sm md:text-lg flex flex-col font-inter mt-6 gap-2">
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
        <Link to="/signup">
          <button className="bg-primary text-white w-[200px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 px-6 md:py-3 mt-6 py-2 md:mt-8 rounded-md">
            Start Now For Free
          </button>
        </Link>
      </div>
      <div className="sm:w-[50%]">
        <img src={doneimage} alt="" />
      </div>
    </div>
  );
};

export default GetWorkDone;
