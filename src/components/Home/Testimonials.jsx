import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

const testimonials = [
  {
    name: "John Doe",
    text: "InTask helped me kickstart my freelance career. The platform is amazing!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    text: "The best platform for young talents. I've found so many great projects here.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Sam Wilson",
    text: "InTask is a game-changer for freelancers. Highly recommend it!",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Lisa Brown",
    text: "I've connected with amazing startups and companies thanks to InTask.",
    avatar: "https://via.placeholder.com/100",
  },
  {
    name: "Mike Johnson",
    text: "The opportunities here are endless. Perfect for young freelancers.",
    avatar: "https://via.placeholder.com/100",
  },
];

const TestimonialSection = () => {
  return (
    <div className="relative z-[10] flex flex-col items-center py-24 bg-gradient-4 overflow-hidden w-full">
      <div className="absolute w-[60%] h-[80%] z-[0] -right-[30%] -top-16 blur opacity-80 rounded-full bg-gradient-4" />
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="testimonial-slide">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <p className="text-gray-600 mt-2">{testimonial.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
