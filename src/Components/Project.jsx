import React from 'react';

import Image1 from '../assets/img1.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img3.png'
import Image4 from '../assets/img4.png'
import Image5 from '../assets/img5.png'
import Image6 from '../assets/img6.png'


const projects = [
  {
    id: "01",
    title: "Portflio",
    tags: ["UI-UX Designer", "Product Design"],
    image: Image1, 
  },
  {
    id: "02",
    title: "fashion App",
    tags: ["UI-UX Designer", "Product Design"],
    image: Image2,
  },
  {
    id: "03",
    title: "Real State web",
    tags: ["UI-UX Designer", "Product Design"],
    image: Image3,
  },
  {
    id: "03", 
    title: "Mangement Web",
    tags: ["UI Design", "Prototyping"],
    image: Image4,
  },
  {
    id: "04",
    title: "fashion App",
    tags: ["UI-UX Designer", "Product Design"],
    image: Image5,
  },
  {
    id: "06",
    title: "Pet App",
    tags: ["UI-UX Designer", "Product Design"],
    image: Image6,
  },
];

 function ProjectGrid() {
  return (
    <section className="bg-[#FAF8F5] min-h-screen px-6 py-12 md:px-16 lg:px-24 font-sans text-[#1A1A1A]">
      
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-600 mb-2">
            <span className="w-6 h-[2px] bg-gray-600"></span>
            Latest Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Projects and <br /> practice
          </h2>
        </div>
        <button className="self-start sm:self-auto bg-[#111111] text-white hover:bg-gray-800 transition-colors px-6 py-3 rounded-full font-medium text-sm">
          See More
        </button>
      </div>

      {/* Grid Section with Media Queries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div>
              {/* Project ID */}
              <span className="block text-2xl font-light text-gray-300 mb-2">
                {project.id}
              </span>
              
              {/* Title */}
              <h3 className="text-2xl font-medium text-gray-700 mb-3 capitalize">
                {project.title}
              </h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs text-gray-500 border border-gray-300 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Image Container */}
              <div className="bg-[#F7F7F9] rounded-xl overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Action Button */}
            <button className="self-start bg-[#111111] text-white hover:bg-gray-800 transition-colors text-xs font-medium px-4 py-2.5 rounded-full">
              View project
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default ProjectGrid;