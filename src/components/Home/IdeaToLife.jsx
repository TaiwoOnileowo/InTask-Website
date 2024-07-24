import React from "react";
import { Link } from "react-router-dom";
import task from "../../assets/Home/task1.jpg";
const IdeaToLife = () => {
  return (
    <div className=" md:h-screen px-8 ts:px-10  ">
      <div className="flex  ts:flex-row flex-col-reverse gap-4  justify-center my-24 sm:my-32 w-full md:h-screen bg-primary rounded-bl-none ts:rounded-2xl md:items-center ">
        <div className="sm:w-[50%] flex flex-col px-4 sm:px-6 md:p-10 justify-center">
          <p className="font-inter mb-2 text-light_green md:text-lg">
            Bring Your Idea to Life
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#f5f5f5] md:my-4 ">
            You now have freelance talents to get it done
          </h1>
          <Link to="/signup">
            <button className="bg-gray-800 hover:bg-gray-900 text-white w-[200px] my-6 ts:mb-0 ts:mt-6 py-2 hover:scale-95 transition-all duration-300 px-6 md:py-3 md:mt-8 rounded-md">
              Start Now For Free
            </button>
          </Link>
        </div>
        <div className="sm:w-[50%] h-full rounded-2xl rounded-l-none rounded-br-none sm:rounded-br-2xl">
          <img
            src={task}
            alt=""
            className="h-full w-full object-cover rounded-l-none rounded-br-none  sm:rounded-br-2xl rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default IdeaToLife;
