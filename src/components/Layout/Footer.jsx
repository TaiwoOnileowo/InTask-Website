import React from "react";
import { footerLinks, footer, socials } from "../../data";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col bg-dark items-center px-8 text-white ts:px-24 py-14 justify-center font-roboto-mono">
      <h1 className="font-bold text-background text-6xl font-poppins">
        {" "}
        <span className="text-primary">In</span>Task
      </h1>
      <div className="mt-8 w-full ts:w-[80%] ">
        {footerLinks.map((link) => (
          <div className="flex ts:text-base text-xs justify-between border-b border-dim text-white py-2 font-roboto-mono">
            <p>{link.text1}</p>
            <p className="cursor-pointer hover:scale-[0.9] items-center transition-all duration-300 hover:text-primary ease">
              <Link to={link.link} className="inline-flex gap-4 ">
                {link.text2}
                <span className="">
                  <FaArrowRight />
                </span>
              </Link>
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 ts:flex  items-center gap-8 ts:gap-16 ts:px-0 mt-20 w-full ts:justify-center">
        {footer.map((item) => (
          <div>
            <h3 className="text-xl">{item.heading}</h3>
            <ul className="mt-4">
              {item.text.map((link) => (
                <li className="text-light text-sm py-1 hover:text-primary cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        {socials.map((item) => (
          <div className="text-xl border rounded-full p-2 cursor-pointer hover:text-primary hover:border-primary">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
