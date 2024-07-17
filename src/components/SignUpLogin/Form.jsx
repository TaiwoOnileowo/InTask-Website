import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <form action="" className="max-w-lg mt-6">
      <div className="flex justify-between gap-6">
        <Input type="text" label="First Name" />
        <Input type="text" label="Last Name" />
      </div>
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      {/* <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-3 border-2 border-gray-300 rounded-md mb-4"
      /> */}
      <div className="flex gap-2 text-sm my-4 items-center">
        <input
          type="checkbox"
          id="email-checkbox"
          className="hidden peer"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label
          htmlFor="email-checkbox"
          className={`w-6 h-6 border-2 border-gray-300 rounded-md flex items-center justify-center cursor-pointer ${
            isChecked ? "bg-primary" : ""
          }`}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 4.707a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 11.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </label>
        <p className="text-sm">
          Send me emails on how to find the best talents
        </p>
      </div>
      <div className="text-sm mt-10 w-[80%]  flex items-center flex-col gap-4 mx-auto">
        <p className="text-dim">
          By signing up you accept InTask's{" "}
          <a href="" className="underline">
            Terms of Service
          </a>
          . I have read and understood InTask's{" "}
          <a href="" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button className="bg-primary transition-all ease hover:shadow-md text-white text-base w-[200px] p-3 rounded-md">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Form;
