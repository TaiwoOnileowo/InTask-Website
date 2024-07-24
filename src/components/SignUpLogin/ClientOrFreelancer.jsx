import React, { useState } from "react";
import { clientOrFreelancer } from "../../data";

const ClientOrFreelancer = ({ setShowForm, setClickedIndex }) => {
  const [disabled, setDisabled] = useState(true);
  const [index, setIndex] = useState();

  return (
    <main className="w-full flex items-center ts:p-10 h-[90%] overflow-hidden flex-col">
      <h1 className="text-xl ts:text-3xl font-medium">Join as a client or freelancer</h1>
      <div className="flex mt-16 gap-2 ts:gap-8">
        {clientOrFreelancer.map((item, i) => {
          const { description } = item;
          return (
            <article
              key={i}
              className={`w-[150px] ts:w-[250px] flex flex-col items-center cursor-pointer transition-all ease ${
                index === i
                  ? "bg-primary border-none text-white"
                  : " text-primary "
              } border-primary hover:text-white hover:shadow-xl hover:bg-primary border-2  p-4 ts:p-6 rounded-md`}
              onClick={() => {
                setIndex(i);
                setClickedIndex(i);
                setDisabled(false);
              }}
            >
              <h2 className="uppercase text-center ts:text-base text-xs font-semibold">
                {i === 0 ? (
                  <span dangerouslySetInnerHTML={{ __html: "I want to <br> hire a freelancer" }} />
                ) : (
                  <span>
                    I want to{" "}
                    <br className="md:block hidden" />
                    work as a freelancer
                  </span>
                )}
              </h2>
            </article>
          );
        })}
      </div>
      <button
        disabled={disabled}
        className={`${
          disabled
            ? "cursor-not-allowed acc-button bg-gray-400 text-gray-500 bg-opacity-50"
            : "bg-secondary cursor-pointer hover:shadow-xl text-white"
        } transition-all text-sm ease duration-300 rounded-md w-[160px] mt-14 p-2 ts:p-3`}
        onClick={() => setShowForm(true)}
      >
        Create an account
      </button>
      <p className="text-xs ts:text-sm mt-8">
        Already have an account{" "}
        <a href="/login" className="text-secondary hover:text-primary underline">
          Login
        </a>
      </p>
    </main>
  );
};

export default ClientOrFreelancer;
