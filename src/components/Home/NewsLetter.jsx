import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex items-center overflow-hidden flex-col p-6 md:p-24 bg-gradient-4">
      <div className="w-full md:w-[50%] bg-white p-6 md:p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800">
          Keep Yourself Up to Date
        </h1>
        <p className="text-center text-gray-600 mt-4 font-inter">
          Stay ahead of the curve with the latest updates on new projects, industry trends, career tips, and success stories directly in your inbox. Don't miss out on exclusive opportunities to connect with startups and companies seeking young talent like you.
        </p>
        <div className="mt-8 flex justify-center">
          <input
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            className="w-[70%] p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="p-3 bg-primary text-white font-bold rounded-r-lg hover:bg-accent transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
