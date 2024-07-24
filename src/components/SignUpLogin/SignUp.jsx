import React, { useState } from "react";
import ClientOrFreelancer from "./ClientOrFreelancer";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [showForm, setShowForm] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <div className="w-full bg-background h-screen px-8 ts:px-10 overflow-y-scroll ">
      <header className="h-[10%] flex items-center justify-between">
        <Link to="/">
          {" "}
          <h1 className="font-bold animate-fade-in text-dark text-2xl font-poppins">
            {" "}
            <span className="text-primary ">In</span>Task
          </h1>
        </Link>

        {showForm && (
          <>
            {clickedIndex === 0 ? (
              <p className="text-xs ts:text-sm flex gap-2 ts:gap-4">
                Want to work?{" "}
                <span
                  className="text-primary text-xs ts:text-sm hover:text-secondary cursor-pointer"
                  onClick={() => setClickedIndex(1)}
                >
                  Join as a Freelancer
                </span>
              </p>
            ) : (
              <p className="flex text-xs ts:text-sm gap-4">
                Want to hire talent?{" "}
                <span
                  className="text-xs ts:text-sm text-primary hover:text-secondary cursor-pointer"
                  onClick={() => setClickedIndex(0)}
                >
                  Join as a client
                </span>
              </p>
            )}
          </>
        )}
      </header>
      {showForm ? (
        <SignUpForm clickedIndex={clickedIndex} />
      ) : (
        <ClientOrFreelancer
          setClickedIndex={setClickedIndex}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default SignUp;
