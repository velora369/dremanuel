import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';
// Try to import the logo as a module
import logoPath from '../../assets/logo-emanuel-atualizado.webp';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-12 w-auto">
            <img 
              src="/images/logo-emanuel-atualizado.webp" 
              alt="Logo Dr. Emanuel Esposito" 
              className="h-full w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error("Falha ao carregar a imagem:", target.src);
                // Tente usar um caminho relativo como alternativa
                target.src = "images/logo-emanuel-atualizado.webp";
              }}
            />
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-6 font-montserrat text-sm">
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
        </nav>
        
        <div className="flex">
          <button 
            className="text-primary" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
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
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
