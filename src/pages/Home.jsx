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
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
const App = () => {
  return (
    <div className="bg-white relative z-[10] overflow-hidden">
      <Navbar/>
      <Hero />
      <Done />
      <HowItWorks />
      <Categories />
      <Trusted />
      <CTA />
      <NewsLetter />
      <Footer/>
    </div>
  );
};

export default App;
