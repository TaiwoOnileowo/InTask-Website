import React from "react";

import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Vacancy from "../components/Home/Vacancy";
import Jobs from "../components/Home/Jobs";
import NewsLetter from "../components/Home/NewsLetter";
import HowItWorks from "../components/Home/HowItWorks";

const App = () => {
  return (
    <div className="bg-white relative z-[10] overflow-hidden">
      <Hero />
      <HowItWorks />
      <Categories />
      <Vacancy />
      <Jobs />
      <NewsLetter />
    </div>
  );
};

export default App;
