import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import logoImage from '../assets/logo-emanuel-novo.png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Update active section for navigation highlighting
      const sections = ['hero', 'sobre', 'especialidades', 'atendimento', 'curso', 'na-midia', 'podcasts'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'especialidades', label: 'Especialidades' },
    { id: 'atendimento', label: 'Atendimento' },
    { id: 'curso', label: 'Curso POCUS' },
    { id: 'na-midia', label: 'Entrevistas' },
    { id: 'podcasts', label: 'Podcasts' }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-xl shadow-xl border-b border-[#7BAF96]/20' 
          : 'py-4 bg-white/80 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleNavLinkClick('hero')}
        >
          <div className={`transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'} w-auto`}>
            <img 
              src={logoImage} 
              alt="Logo Dr. Emanuel Esposito" 
              className="h-full w-auto object-contain filter drop-shadow-lg"
              style={{ transform: 'scale(1.6)' }}
            />
          </div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavLinkClick(item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                ${activeSection === item.id 
                  ? 'text-white bg-gradient-to-r from-[#7BAF96] to-[#23362B] shadow-lg' 
                  : 'text-[#23362B] hover:text-[#7BAF96] hover:bg-white/50'
                }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(123,175,150,0.3)"
              }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7BAF96] to-[#23362B]"
                  layoutId="activeTab"
                />
              )}
            </motion.button>
          ))}
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Button 
              variant="outline" 
              size="sm"
              className="border-[#7BAF96] text-[#23362B] hover:bg-[#7BAF96] hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </Button>
          </motion.a>
          
          <motion.a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              className="bg-gradient-to-r from-[#7BAF96] to-[#23362B] hover:from-[#23362B] hover:to-[#7BAF96] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Agendar
            </Button>
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="lg:hidden p-2 rounded-lg bg-white/50 backdrop-blur-sm border border-[#7BAF96]/30 hover:bg-[#7BAF96]/10 transition-all duration-300" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMobileMenuOpen ? 
              <X size={24} className="text-[#23362B]" /> : 
              <Menu size={24} className="text-[#23362B]" />
            }
          </motion.div>
        </motion.button>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <motion.div 
        className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}
        initial={false}
        animate={{ 
          maxHeight: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-[#7BAF96]/20 shadow-xl">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavLinkClick(item.id)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-300
                    ${activeSection === item.id 
                      ? 'bg-gradient-to-r from-[#7BAF96] to-[#23362B] text-white shadow-lg' 
                      : 'text-[#23362B] hover:bg-[#7BAF96]/10 hover:text-[#7BAF96]'
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-3 pt-4 border-t border-[#7BAF96]/20">
                <motion.a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button 
                    variant="outline" 
                    className="w-full border-[#7BAF96] text-[#23362B] hover:bg-[#7BAF96] hover:text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </motion.a>
                
                <motion.a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-[#7BAF96] to-[#23362B] hover:from-[#23362B] hover:to-[#7BAF96] text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Consulta
                  </Button>
                </motion.a>
              </div>
            </nav>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
