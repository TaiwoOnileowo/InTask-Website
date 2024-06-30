import React from "react";
import { navLinks } from "../../data";
const Navbar = () => {
  return (
    <div className="flex z-[100] transition-all p-10 overflow-hidden justify-between items-center absolute top-0 w-full px-24 bg-blur">
      <div className="flex gap-24 w-[75%] justify-between items-center">
        <div>
          <h1 className="font-bold animate-fade-in text-dark text-3xl font-poppins">
            {" "}
            <span className="text-primary ">In</span>Task
          </h1>
        </div>
        <ul className="flex gap-6 z-[10] items-center justify-center">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={` hover:text-primary text-dim`}
              >
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-8 z-[10] ">
        <button className="text-primary hover:text-dim">Log In</button>
        <button className="bg-primary text-dim hover:text-white px-4 py-2 rounded-md  box-shadow hover:scale-[0.95] transition-all duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
