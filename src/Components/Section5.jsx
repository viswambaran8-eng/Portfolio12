import React from 'react';

const skills = [
  { name: 'figma', logo: 'path-to-figma-icon.png' },
  { name: 'Xd', logo: 'path-to-xd-icon.png' },
  { name: 'Af effects', logo: 'path-to-after-effects-icon.png' },
  { name: 'Photoshop', logo: 'path-to-photoshop-icon.png' },
  { name: 'html5', logo: 'path-to-html5-icon.png' },
  { name: 'Css3', logo: 'path-to-css3-icon.png' },
];

 function SkillsSection() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-12 md:px-16 lg:px-24 font-sans text-[#1A1A1A]">
      
      {/* Header Title Section */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">
          <span className="w-6 h-[2px] bg-gray-600"></span>
          Skills
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
          Exploring My <br /> Diverse Skill Set
        </h2>
      </div>

      {/* Skills Grid / Scroll Container */}
      {/* On mobile, it allows clean horizontal scrolling; scales to a 3 to 6 column layout on larger viewports */}
      <div className="flex overflow-x-auto pb-4 gap-4 snap-x no-scrollbar sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:overflow-x-visible sm:pb-0">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center min-w-[140px] sm:min-w-0 aspect-square shadow-sm hover:shadow-md transition-shadow border border-gray-100/50 snap-center"
          >
            {/* Logo Container */}
            <div className="h-12 w-12 flex items-center justify-center mb-4">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Skill Name */}
            <span className="font-serif text-lg text-gray-800 text-center block">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default SkillsSection;