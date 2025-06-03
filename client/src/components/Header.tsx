import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGES, createWhatsAppURL } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
// Importando o logo diretamente como um módulo
import logoImage from '../assets/logo-emanuel-novo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      setIsScrolling(true);

      // Clear the previous timer
      clearTimeout(scrollTimer);

      // Set a new timer to detect when scrolling stops
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // Adjust delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full glass-nav z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="h-14 w-auto">
            <img 
              src={logoImage} 
              alt="Logo Dr. Emanuel Esposito" 
              className="h-full w-auto object-contain"
              style={{ transform: 'scale(1.8)' }}
            />
          </div>
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isScrolling ? 'opacity-0 max-w-0' : 'opacity-100 max-w-xs'
            }`}
          >
            <h1 className="text-primary font-montserrat font-semibold text-lg whitespace-nowrap">
              Emanuel Esposito
              <span className="block text-sm font-normal text-primary/70">Nefrologista</span>
            </h1>
          </div>
        </div>
        
        {/* Desktop menu hidden - only shown on mobile when menu is open */}
        <nav className="hidden">
          <button onClick={() => handleNavLinkClick('sobre')} className="text-primary hover:text-secondary transition-colors">
            Sobre
          </button>
          <button onClick={() => handleNavLinkClick('especialidades')} className="text-primary hover:text-secondary transition-colors">
            Especialidades
          </button>
          <button onClick={() => handleNavLinkClick('atendimento')} className="text-primary hover:text-secondary transition-colors">
            Atendimento
          </button>
          <button onClick={() => handleNavLinkClick('curso')} className="text-primary hover:text-secondary transition-colors">
            Curso POCUS
          </button>
          <button onClick={() => handleNavLinkClick('na-midia')} className="text-primary hover:text-secondary transition-colors">
            Entrevistas
          </button>
          <button onClick={() => handleNavLinkClick('podcasts')} className="text-primary hover:text-secondary transition-colors">
            Podcasts
          </button>
        </nav>
        
        <div className="flex">
          <button 
            className="text-primary p-2" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3 font-montserrat text-sm">
            <button onClick={() => handleNavLinkClick('sobre')} className="text-primary hover:text-secondary transition-colors py-2 text-left">
              Sobre
            </button>
            <button onClick={() => handleNavLinkClick('especialidades')} className="text-primary hover:text-secondary transition-colors py-2 text-left">
              Especialidades
            </button>
            <button onClick={() => handleNavLinkClick('atendimento')} className="text-primary hover:text-secondary transition-colors py-2 text-left">
              Atendimento
            </button>
            <button onClick={() => handleNavLinkClick('curso')} className="text-primary hover:text-secondary transition-colors py-2 text-left">
              Curso POCUS
            </button>
            <button onClick={() => handleNavLinkClick('na-midia')} className="text-primary hover:text-secondary transition-colors py-2 text-left">
              Entrevistas
            </button>
            <button onClick={() => handleNavLinkClick('podcasts')} className="text-primary hover:text-secondary transition-colors py-2 text-left">
              Podcasts
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
