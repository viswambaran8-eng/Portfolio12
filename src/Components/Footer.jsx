import React, { useState } from "react";

import Insta from "../assets/instagram.png";
import Facebook from "../assets/facebook-01.png";
import Twitter from "../assets/new-twitter.png";

function ContactAndFooter() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-[#FAF8F5] font-sans text-[#1A1A1A] flex flex-col justify-between ">
      <section className="px-6 py-5 md:px-10 lg:px-20 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col justify-center h-full">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">
              <span className="w-6 h-[2px] bg-gray-600"></span>
              Testimonials
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Let's Get in <br /> Touch
            </h2>

            <p className="text-gray-500 font-serif text-lg leading-relaxed max-w-md mb-10">
              Have a question, feedback, or interested in collaborating? We'd
              love to hear from you!
            </p>

            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">Follow</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#medium"
                  className="flex items-center gap-2 border border-gray-300 text-xs text-gray-600 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">
                    M
                  </span>
                  Meduim
                </a>
                <a
                  href="#dribbble"
                  className="flex items-center gap-2 border border-gray-300 text-xs text-gray-600 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">
                    D
                  </span>
                  Dripple
                </a>
                <a
                  href="#behance"
                  className="flex items-center gap-2 border border-gray-300 text-xs text-gray-600 rounded-full px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[10px]">
                    B
                  </span>
                  Behance
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF8F5] lg:bg-transparent rounded-3xl p-0 sm:p-8 lg:p-0 w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAF8F5] border border-gray-200/60 rounded-[2rem] p-8 md:p-12 shadow-sm flex flex-col gap-8"
            >
              <div className="relative border-b border-gray-300 pb-2 focus-within:border-gray-800 transition-colors">
                <label className="block text-xs font-serif text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none outline-none text-sm text-gray-800 p-0 focus:ring-0"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="relative border-b border-gray-300 pb-2 focus-within:border-gray-800 transition-colors">
                  <label className="block text-xs font-serif text-gray-400 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none outline-none text-sm text-gray-800 p-0 focus:ring-0"
                  />
                </div>
                <div className="relative border-b border-gray-300 pb-2 focus-within:border-gray-800 transition-colors">
                  <label className="block text-xs font-serif text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-none outline-none text-sm text-gray-800 p-0 focus:ring-0"
                    required
                  />
                </div>
              </div>

              <div className="relative border-b border-gray-300 pb-2 focus-within:border-gray-800 transition-colors">
                <label className="block text-xs font-serif text-gray-400 mb-1">
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-none outline-none text-sm text-gray-800 p-0 focus:ring-0"
                  required
                />
              </div>

              <button
                type="submit"
                className="self-start bg-[#2C2C2C] text-white hover:bg-black transition-all font-serif font-medium px-8 py-3.5 rounded-full text-sm mt-4 tracking-wide shadow-md"
              >
                Send a Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-[#FAF8F5] px-6 py-8 md:px-16 lg:px-24 w-full">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-400 order-3 md:order-1 text-center md:text-left">
            All rights reserved by the user frameup.io.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-serif font-medium text-gray-600 order-1 md:order-2">
            <a href="#pages" className="hover:text-black transition-colors">
              Pages
            </a>
            <a href="#pages" className="hover:text-black transition-colors">
              Pages
            </a>
            <a href="#pages" className="hover:text-black transition-colors">
              Pages
            </a>
            <a href="#pages" className="hover:text-black transition-colors">
              Pages
            </a>
            <a href="#pages" className="hover:text-black transition-colors">
              Pages
            </a>
          </div>

          <div className="flex items-center gap-4 text-gray-600 order-2 md:order-3">
            <a
              href="#facebook"
              className="hover:text-black transition-colors text-sm"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="#x"
              className="hover:text-black transition-colors text-sm"
              aria-label="X (Twitter)"
            >
              <img src={Twitter} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="#instagram"
              className="hover:text-black transition-colors text-sm"
              aria-label="Instagram"
            >
              <img src={Insta} alt="Facebook" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactAndFooter;
