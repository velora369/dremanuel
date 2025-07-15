import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGES, createWhatsAppURL, SOCIAL_LINKS } from '@/lib/constants';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
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
        <div className="flex items-center">
          <div className="h-14 w-auto">
            <img 
              src={logoImage} 
              alt="Logo Dr. Emanuel Esposito" 
              className="h-full w-auto object-contain"
              style={{ transform: 'scale(1.8)' }}
            />
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
      
      {/* Simple Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-40"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="space-y-2">
                {[
                  { label: 'Sobre', id: 'sobre' },
                  { label: 'Especialidades', id: 'especialidades' },
                  { label: 'Atendimento', id: 'atendimento' },
                  { label: 'Consultoria', id: 'consultoria' },
                  { label: 'Curso POCUS', id: 'curso' },
                  { label: 'Entrevistas', id: 'na-midia' },
                  { label: 'Podcasts', id: 'podcasts' },
                  { label: 'Aulas', id: 'aulas' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavLinkClick(item.id)}
                    className="block w-full text-left py-3 px-4 text-primary hover:text-secondary hover:bg-secondary/5 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Quick contact */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                <a 
                  href={createWhatsAppURL(WHATSAPP_MESSAGES.TEAM_CONSULTATION)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="default" size="sm" className="w-full flex items-center justify-center gap-2">
                    <FaWhatsapp className="text-sm" />
                    WhatsApp
                  </Button>
                </a>
                <a 
                  href={SOCIAL_LINKS.INSTAGRAM} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                    <FaInstagram className="text-sm" />
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
