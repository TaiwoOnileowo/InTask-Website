import React from "react";
import { footerLinks, footer, socials } from "../../data";
import { FaArrowRight } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex flex-col bg-dark items-center text-white px-24 py-14 justify-center font-roboto-mono">
      <h1 className="font-bold text-background text-6xl font-poppins">
        {" "}
        <span className="text-primary">In</span>Task
      </h1>
      <div className="mt-8 w-[80%] ">
        {footerLinks.map((link) => (
          <div className="flex justify-between border-b border-dim text-white py-2 font-roboto-mono">
            <p>{link.text1}</p>
            <p className="inline-flex gap-4 cursor-pointer hover:scale-[0.9] items-center transition-all duration-300 ease">{link.text2}<span className="hover:text-primary"><FaArrowRight/></span></p>
          </div>
        ))}
      </div>
      <div className="flex gap-16 mt-20 w-full justify-center">
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
          <div className="text-xl border rounded-full p-2 cursor-pointer hover:text-primary hover:border-primary">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
