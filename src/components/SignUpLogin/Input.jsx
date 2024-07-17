import React from "react";

const Input = ( props) => {
    const {label} = props
  return (
    <div>
      <label htmlFor="" className="text-sm mb-2">{label}</label>
      <input
        className="w-full p-2 border-2 border-gray-300 rounded-md mb-4"
        {...props}
      />
    </div>
  );
};

export default Input;
