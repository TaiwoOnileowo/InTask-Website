import React from "react";

import task from "../../assets/Home/task1.jpg";
const Trusted = () => {
  return (
    <div className=" h-screen px-10  ">
      <div className="flex  gap-4  justify-center my-48 w-full h-screen bg-primary rounded-2xl items-center ">
        <div className="w-[50%] h-full flex flex-col p-10 justify-center">
          <p className="font-inter mb-2 text-light_green text-lg">
            Bring Your Idea to Life
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#f5f5f5] my-4 leading-10">
            You now have freelance talents to get it done
          </h1>
          <a href="/signup">
            <button className="bg-gray-800 hover:bg-gray-900 text-white w-[190px] my-2 hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md">
              Start Now For Free
            </button>
          </a>
        </div>
        <div className="w-[50%] h-full rounded-2xl rounded-l-none">
          <img
            src={task}
            alt=""
            className="h-full w-full object-cover rounded-l-none rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
