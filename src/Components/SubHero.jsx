import React from 'react';

import verizon from '../assets/verizon.png';
import lenovo from '../assets/lenovo.png';
import slack from '../assets/slack.png';
import youtube from '../assets/youtube.png';
import amazon from '../assets/amazon.png';
import google from '../assets/google.png';
import microsoft from '../assets/microsoft.png';

function SubHero() {
  const clientLogos = [
    { src: verizon, name: 'Verizon' },
    { src: lenovo, name: 'Lenovo' },
    { src: slack, name: 'Slack' },
    { src: youtube, name: 'YouTube' },
    { src: amazon, name: 'Amazon' },
    { src: google, name: 'Google' },
    { src: microsoft, name: 'Microsoft' },
  ];

  return (
    <section className="bg-[#FAF6F3] py-14 px-6 md:px-12 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Title Header Section */}
        <div className="flex items-center space-x-3 text-gray-800 justify-center md:justify-start">
          <span className="w-8 h-[1.5px] bg-gray-800 inline-block"></span>
          <span className="font-serif italic text-base md:text-lg tracking-wide text-gray-900">
            +240 satisfied clients
          </span>
        </div>

        {/* Responsive Grid System (Replaced the Marquee Carousel) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center h-10 w-full transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={logo.src} 
                alt={`${logo.name} logo`} 
                className="max-h-8 md:max-h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SubHero;