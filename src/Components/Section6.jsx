import React, { useState } from 'react';
import Analytics from '../assets/Analytics.png';

const services = [
  {
    id: "01",
    title: "User Experience (UX)",
    description: "A dedicated UI/UX designer passionate about creating captivating digital experiences. With a keen eye for detail and a love for problem-solving.",
    bullets: ["Persona", "Persona", "Persona", "Persona"]
  },
  {
    id: "02",
    title: "Front-End Development",
    description: "Bringing designs to life with clean, semantic, and highly performant frontend systems.",
    bullets: ["React / Next.js", "Tailwind CSS", "Responsive Design", "Performance"]
  },
  {
    id: "03",
    title: "User Experience (UX)",
    description: "Deep dive research, user flows, testing, and continuous feedback loop implementations.",
    bullets: ["User Research", "Wireframing", "Usability Testing", "Information Architecture"]
  },
  {
    id: "04",
    title: "Website Optimization",
    description: "Enhancing speeds, SEO rankings, and accessible web configurations for broader reach.",
    bullets: ["SEO Strategy", "Speed Optimization", "Accessibility (WCAG)", "Core Web Vitals"]
  },
  {
    id: "05",
    title: "User Interface (UI) Design",
    description: "Creating aesthetically stunning and responsive modern layouts customized for your brand ecosystem.",
    bullets: ["Visual Systems", "Design Systems", "Typography", "Component Libraries"]
  }
];

function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#FAF8F5] px-6 py-12 md:px-16 lg:px-24 font-sans text-[#1A1A1A]">
      
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">
            <span className="w-6 h-[2px] bg-gray-600"></span>
            My Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Unmatched Services <br /> for Your Needs
          </h2>
        </div>
        <button className="self-start sm:self-auto bg-[#2C2C2C] text-white hover:bg-black transition-colors px-6 py-3 rounded-full font-medium text-sm tracking-wide">
          Start a Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start w-full">
        
        <div className="w-full aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden">
          <img 
            src={Analytics} 
            alt="Design process and wireframing workspace" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col w-full">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className="border-t border-gray-300 py-6 cursor-pointer group transition-all"
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 flex items-center gap-3">
                    <span className="text-gray-600">—</span> {service.title}
                  </h3>
                  <span className="text-xl font-serif font-medium text-gray-300 group-hover:text-gray-500 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-gray-500 max-w-xl mb-4">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 max-w-md">
                      {service.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-gray-500">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-gray-300"></div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;