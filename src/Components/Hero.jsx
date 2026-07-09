import React from 'react';
import Profile1 from '../assets/Profile.png';

function Hero() {
  return (
    <section className="min-h-[85vh] bg-[#FAF6F3] flex items-center px-6 md:px-8 py-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
       
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10 items-center text-center lg:items-start lg:text-left">
         
         
          <div className="flex items-center space-x-2 text-gray-800">
            <span className="w-6 h-[2px] bg-gray-800 inline-block"></span>
            <span className="font-medium text-sm tracking-wider uppercase">Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight tracking-tight">
            Loujain <br />
            Muhammed
          </h1>

          <p className="text-gray-600 max-w-full md:max-w-[75%] text-base md:text-lg leading-relaxed font-sans">
            Welcome to 'Designing where innovation knows no bounds. With a passion for pushing the boundaries of UI/UX design.
          </p>

          
          <div className="relative inline-block my-4 mx-auto lg:mx-0">
           
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#E5B842] border border-gray-800"></div>
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#E5B842] border border-gray-800"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#E5B842] border border-gray-800"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#E5B842] border border-gray-800"></div>
            
            <div className="border border-gray-400 px-6 py-4 md:px-12 md:py-6 bg-[#FAF6F3]">
              <span className="text-3xl md:text-5xl font-sans font-bold text-gray-800 tracking-tight block">
                UI-UX Designer
              </span>
            </div>
          </div>

          <div className="pt-2">
            <button className="bg-[#111] hover:bg-red-900 text-white font-medium px-8 py-4 rounded-full transition-colors duration-300 shadow-md text-sm md:text-base">
              Become a Client
            </button>
          </div>
        </div>

    
        <div className="lg:col-span-5 flex justify-center items-center relative mt-12 lg:mt-0">
          
          <div className="absolute left-[-40px] md:left-[-100px] lg:left-[-120px] top-[40%] -translate-y-1/2 z-20 w-24 h-24 md:w-32 md:h-32 hidden sm:flex items-center justify-center">
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] flex items-center justify-center max-lg:hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-700 font-serif text-[9px] tracking-widest">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text fill="currentColor">
                  <textPath href="#circlePath">UI • UX • INNOVATION • DESIGN • CREATIVITY • </textPath>
                </text>
              </svg>
            </div>
            <span className="text-yellow-500 text-lg md:text-xl">♥</span>
          </div>

          <div className="relative w-[280px] sm:w-[340px] md:w-[360px] lg:w-[400px] aspect-[4/5] border border-gray-400 rounded-[120px_120px_100px_100px] p-2">
            
            <div className="w-full h-full rounded-[110px_110px_90px_90px] overflow-hidden bg-gray-200">
              <img 
                src={Profile1} 
                alt="Loujain Muhammed Profile" 
                className="w-full h-full object-cover object-center grayscale-[20%]"
              />
            </div>

            <div className="absolute -top-3 -right-3 md:-right-6 bg-white border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-4 py-2 rounded-full z-20">
              <span className="text-xs md:text-sm font-medium text-black whitespace-nowrap">Let's Connect</span>
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-10 max-w-[220px] sm:max-w-[260px] bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded-xl z-20">
              <p className="text-xs md:text-sm text-gray-700 font-serif leading-relaxed">
                "Working with Loujain for our UI/UX design needs was an absolute game-changer for our project."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;