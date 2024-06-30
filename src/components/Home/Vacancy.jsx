import React from "react";
import { projects } from "../../data";
import Heading from "./Heading";
import { FaRegClock } from "react-icons/fa";
import { TbCash } from "react-icons/tb";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Vacancy = () => {
  const getFormattedTitle = (title) => {
    const formattedTitle =
      title.length > 35 ? title.substr(0, 35) + " ..." : title;
    return formattedTitle;
  };

  const getFormattedBody = (body) => {
    const shortDescription =
      body.length > 145 ? body.substr(0, 145) + " ..." : body;
    return shortDescription;
  };

  return (
    <div className="relative flex flex-col z-[10] px-10 py-24 bg-background overflow-hidden items-center md:px-28">
      <div className="absolute w-[70%] h-[70%] z-[0] -left-[55%]  -top-8 blur opacity-80 rounded-full bg-gradient-4" />
      <Heading text="Pick Up a Project" />
      <div className="flex flex-col md:flex-row z-[10] gap-12 w-full">
        <div className="w-full md:w-[45%] flex z-[10] flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl z-[10]font-bold">Latest projects</h1>
          <p className="w-full mt-6 font-inter text-base z-[10] md:text-lg text-dim">
            Are you a young talent looking to kickstart your career? Dive into
            exciting opportunities with inTask!
          </p>
          <button className="bg-primary text-white w-[180px] shadow-md shadow-accent hover:shadow-xl hover:shadow-accent hover:scale-95 transition-all duration-300 px-6 py-3 mt-8 rounded-md">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-[55%] ">
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={2.1}
            navigation
            className="w-full py-4 bg-white bg-opacity-0 h-[400px]"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col cursor-pointer items-center justify-center bg-white mx-1 p-6 h-[350px] rounded-2xl shadow-lg transition-transform transform hover:scale-105">
                  <h2 className="text-xl font-bold">
                    {getFormattedTitle(project.project)}
                  </h2>
                  <p className="text-sm font-inter mt-2 text-dim text-center">
                    {getFormattedBody(project.task)}
                  </p>
                  <div className="flex gap-4 text-xs justify-start w-full mt-4">
                    <p className="inline-flex items-center justify-center gap-2">
                      <span className=" text-primary">
                        <FaRegClock />
                      </span>
                      {project.time}
                    </p>
                    <p className="inline-flex items-center justify-center gap-2">
                      <span className=" text-primary">
                        <TbCash />
                      </span>
                      {project.amount}
                    </p>
                  </div>
                  <div className="flex mt-4 items-center gap-2">
                    <div className="w-[2px] h-[2px] bg-primary rounded-full" />
                    <hr className="border-primary opacity-50 w-[40px]" />
                    <p className="text-xs text-dim">{project.level}</p>
                    <hr className="border-primary opacity-50 w-[40px]" />
                    <div className="w-[2px] h-[2px] bg-primary rounded-full" />
                  </div>
                  <div className="flex gap-2 mt-6 w-full justify-center">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary text-sm text-white px-4 py-1 rounded-xl"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
