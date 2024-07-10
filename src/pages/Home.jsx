import React from "react";

import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Vacancy from "../components/Home/Vacancy";
import Jobs from "../components/Home/Jobs";
import NewsLetter from "../components/Home/NewsLetter";
import HowItWorks from "../components/Home/HowItWorks";
import CTA from "../components/Home/CTA";
import TestimonialSection from "../components/Home/Testimonials";
import Done from "../components/Home/Done";
import Trusted from "../components/Home/Trusted";
const App = () => {
  return (
    <div className="bg-white relative z-[10] overflow-hidden">
      <Hero />
      <Done />
      <HowItWorks />
      <Categories />
      <Trusted />
      <CTA />
      <NewsLetter />
    </div>
  );
};

export default App;
