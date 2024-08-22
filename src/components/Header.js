// src/components/Header.js
import React, { useState, useEffect } from 'react';

function Header({ scrollToSection, scrollToTop }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-purple-haze bg-opacity-90' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-bold gradient-text cursor-pointer" 
          onClick={scrollToTop}
        >
          Mixtape Mavericks
        </div>
        <nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">메뉴 열기</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className="hidden md:flex space-x-4">
            <li><button onClick={() => handleNavClick('about')} className="text-neon-pink hover:text-electric-blue transition-colors duration-300">About</button></li>
            <li><button onClick={() => handleNavClick('lineup')} className="text-acid-green hover:text-cyber-yellow transition-colors duration-300">Lineup</button></li>
            <li><button onClick={() => handleNavClick('tickets')} className="text-cyber-yellow hover:text-neon-pink transition-colors duration-300">Tickets</button></li>
            <li><button onClick={() => handleNavClick('contact')} className="text-electric-blue hover:text-acid-green transition-colors duration-300">Contact</button></li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-purple-haze bg-opacity-90">
          <ul>
            <li><button onClick={() => handleNavClick('about')} className="block w-full text-left px-4 py-2 text-neon-pink hover:bg-electric-blue hover:text-purple-haze transition-colors duration-300">About</button></li>
            <li><button onClick={() => handleNavClick('lineup')} className="block w-full text-left px-4 py-2 text-acid-green hover:bg-cyber-yellow hover:text-purple-haze transition-colors duration-300">Lineup</button></li>
            <li><button onClick={() => handleNavClick('tickets')} className="block w-full text-left px-4 py-2 text-cyber-yellow hover:bg-neon-pink hover:text-purple-haze transition-colors duration-300">Tickets</button></li>
            <li><button onClick={() => handleNavClick('contact')} className="block w-full text-left px-4 py-2 text-electric-blue hover:bg-acid-green hover:text-purple-haze transition-colors duration-300">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;