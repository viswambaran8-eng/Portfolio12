import React, { useState } from 'react';

function Header() {
  const [activeLink, setActiveLink] = useState('Home');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="flex justify-between items-center py-6 px-6 md:px-12 bg-white shadow-sm relative">
     
      <div className="text-2xl font-bold tracking-tight text-gray-900">
        <h3>logo</h3>
      </div>

      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;
            return (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setActiveLink(link.name)} 
                  className={`transition-colors duration-200 relative py-1 ${ 
                    isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-red-800' 
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-800 rounded-full animate-fadeIn" /> 
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <a 
          href="#connect" 
          className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-red-900 transition-colors duration-200"
        >
          Let’s Connect
        </a>

        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-gray-900">Menu</span>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-gray-600 hover:text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav>
          <ul className="flex flex-col space-y-4 text-base font-medium">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => {
                      setActiveLink(link.name);
                      setIsSidebarOpen(false); 
                    }} 
                    className={`block py-2 px-3 rounded-md transition-colors duration-200 ${ 
                      isActive 
                        ? 'bg-gray-100 text-black font-semibold border-l-4 border-gray-800' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-red-800' 
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <a 
            href="#connect" 
            onClick={() => setIsSidebarOpen(false)}
            className="flex w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-black rounded-md hover:bg-red-900 transition-colors duration-200"
          >
            Let’s Connect
          </a>
        </div>
      </div>
      
    </header>
  );
}

export default Header;