import React from "react";
import facebook from "../../assets/SignUpLogin/Facebook.svg";
import google from "../../assets/SignUpLogin/Google.svg";
import Form from "./Form";

const SignUpForm = ({clickedIndex}) => {
  const signUpOptions = [
    { icon: facebook, title: "Continue with facebook" },
    { icon: google, title: "Continue with Google" },
  ];
  return (
    <main className="w-full h-full flex-col flex items-center pt-10 mb-32">
      <h1 className="text-3xl mb-10 font-medium">Sign up to start {clickedIndex ===  0 ? " hiring" : "working"}</h1>
      <div className="flex w-[500px] justify-between mb-6">
        {signUpOptions.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 cursor-pointer transition-all ease hover:bg-blue-400 hover:border-none hover:text-white items-center mb-4 bg-white p-1 px-2 rounded-md border-gray-500 border"
            >
              <img src={item.icon} alt="" className="w-8 h-8" />
              <p className="text-sm">{item.title}</p>
            </div>
          );
        })}
      </div>
      <div className="w-[500px] flex gap-4 items-center justify-center">
        <hr className="w-[50%] border-gray-300" />
        <p>or</p>
        <hr className="w-[50%] border-gray-300" />
      </div>
      <Form/>
    </main>
  );
};

export default SignUpForm;
