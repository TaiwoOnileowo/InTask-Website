import React, { useState } from "react";
import { navLinks } from "../../data";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex z-[100] transition-all p-8 ts:p-10 pt-4  justify-between items-center absolute top-0 w-full md:px-16 bg-blur">
      <div className="flex gap-6 md:justify-between items-center ts:w-[70%] md:w-[80%]">
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div>
          <h1 className="font-bold animate-fade-in text-dark text-3xl font-poppins">
            <span className="text-primary">In</span>Task
          </h1>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6 bg-gray-400 bg-opacity-90 absolute top-20   left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`text-base hover:text-black text-white`}
              >
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <ul
          className={`hidden md:flex flex-col md:flex-row  gap-6 z-[10] items-center justify-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto  bg-blur `}
        >
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`md:text-base text-sm hover:text-black text-dim`}
              >
                <a href={link.url}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-8 z-[10] h-full items-center">
        <Link to="/login">
          <button className="text-primary hover:text-black">Log In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-primary text-dim hover:text-white px-4 py-2 rounded-md box-shadow hover:scale-[0.95] transition-all duration-300">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
