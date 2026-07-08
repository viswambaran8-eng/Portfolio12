import React from 'react';

 function ContactCTA() {
  return (
    <section className="relative overflow-hidden w-full bg-[#2E2E2E] py-2 px-6 sm:py-28 md:px-16 flex flex-col items-center justify-center text-center">
      
     
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.12) 30%, transparent 31%),
            radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.06) 55%, transparent 56%),
            radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 75%, transparent 76%)
          `
        }}
      />

      <div className="absolute left-[10%] bottom-[20%] sm:bottom-[25%] opacity-40 select-none animate-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
          <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
        </svg>
      </div>


      <div className="absolute right-[10%] top-[25%] sm:top-[30%] opacity-40 select-none animate-pulse">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white fill-current">
          <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" />
        </svg>
      </div>


      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#FDFBF7] tracking-tight leading-tight mb-8">
          Let's Get In Touch
        </h2>
        
        <button className="bg-[#FDFBF7] text-[#2E2E2E] hover:bg-white transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 px-8 py-4 rounded-full font-serif font-bold text-sm sm:text-base shadow-lg">
          Become a Client
        </button>
      </div>

    </section>
  );
}

export default ContactCTA;