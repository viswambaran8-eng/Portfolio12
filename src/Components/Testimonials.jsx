import React, { useState } from "react";

import Profile from "../assets/profile.png";
import Profile2 from "../assets/profile2.png";

const testimonials = [
  {
    id: "01",
    quote:
      "Working with Randa was an absolute pleasure! Her exceptional talent in UI/UX design truly shone through in every aspect of our project. Not only did she demonstrate a deep understanding of user needs, but she also s",
    author: "Carolyn Willms",
    role: "Global Accountability Officer",
    image: Profile2,
  },
  {
    id: "02",
    quote:
      "Randa completely transformed our platform's interface. Her structured design systems and thoughtful attention to mobile workflows drastically increased our conversion metrics within weeks.",
    author: "Marcus Vance",
    role: "Product Director",
    image: Profile,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeTestimonial = testimonials[currentIndex];

  const totalItems = 20;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const formatIndex = (index) => String(index + 1).padStart(2, "0");

  return (
    <section className="bg-[#FAF8F5] px-6 py-12 md:px-16 lg:px-24 font-sans text-[#1A1A1A]">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">
            <span className="w-6 h-[2px] bg-gray-600"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            what Our Client <br /> Says
          </h2>
        </div>
        <button className="self-start sm:self-auto bg-[#2C2C2C] text-white hover:bg-black transition-colors px-6 py-3 rounded-full font-medium text-sm tracking-wide">
          Become a Client
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col justify-between h-full w-full order-2 lg:order-1">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100/50 relative mb-8">
            <div className="text-6xl font-serif text-gray-200 absolute top-4 left-6 leading-none select-none">
              “
            </div>

            <div className="relative z-10 pl-4">
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-normal mb-8">
                {activeTestimonial.quote}
              </p>

              <div>
                <h4 className="text-xl font-serif font-bold text-gray-800">
                  {activeTestimonial.author}
                </h4>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 select-none pl-4">
            <button
              onClick={handlePrev}
              className="text-gray-800 hover:text-black transition-colors p-2 text-xl font-light"
              aria-label="Previous testimonial"
            >
              &#10216;
            </button>

            <div className="text-center">
              <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-0.5">
                Swipe
              </span>
              <div className="flex items-baseline justify-center gap-1 font-serif">
                <span className="text-2xl font-bold text-gray-800">
                  {formatIndex(currentIndex)}
                </span>
                <span className="text-sm text-gray-400">
                  / {String(totalItems).padStart(2, "0")}
                </span>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="text-gray-800 hover:text-black transition-colors p-2 text-xl font-light"
              aria-label="Next testimonial"
            >
              &#10217;
            </button>
          </div>
        </div>

        <div className="w-full aspect-square sm:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-sm order-1 lg:order-2">
          <img
            src={activeTestimonial.image}
            alt={`Portrait profile photo of client ${activeTestimonial.author}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
