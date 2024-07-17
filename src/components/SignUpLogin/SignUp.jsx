import React, { useState } from "react";
import ClientOrFreelancer from "./ClientOrFreelancer";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const [showForm, setShowForm] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);
  return (
    <div className="w-full bg-background h-screen px-10 overflow-y-scroll ">
      <header className="h-[10%] flex items-center justify-between">
        <h1 className="font-bold animate-fade-in text-dark text-2xl font-poppins">
          {" "}
          <span className="text-primary ">In</span>Task
        </h1>
        {showForm && (
          <>
            {clickedIndex === 0 ? (
              <p className="text-sm flex gap-4">
                Want to work?{" "}
                <span className="text-primary hover:text-secondary cursor-pointer" onClick={()=>setClickedIndex(1)}>
                  Join as a Freelancer
                </span>
              </p>
            ) : (
              <p className="text-sm flex gap-4">
                Want to hire talent?{" "}
                <span className="text-primary hover:text-secondary cursor-pointer" onClick={()=>setClickedIndex(0)}>
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
