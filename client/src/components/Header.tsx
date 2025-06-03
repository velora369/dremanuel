import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGES, createWhatsAppURL, SOCIAL_LINKS } from '@/lib/constants';
import { Menu, X, Instagram } from 'lucide-react';
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
      
      {/* Modern Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 top-[80px] bg-white z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="container mx-auto px-6 py-8 h-full flex flex-col">
              {/* Navigation Items */}
              <nav className="flex-1">
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, staggerChildren: 0.1 }}
                >
                  {[
                    { label: 'Sobre', id: 'sobre', icon: 'fas fa-user-md' },
                    { label: 'Especialidades', id: 'especialidades', icon: 'fas fa-stethoscope' },
                    { label: 'Atendimento', id: 'atendimento', icon: 'fas fa-calendar-check' },
                    { label: 'Curso POCUS', id: 'curso', icon: 'fas fa-graduation-cap' },
                    { label: 'Entrevistas', id: 'na-midia', icon: 'fas fa-microphone' },
                    { label: 'Podcasts', id: 'podcasts', icon: 'fas fa-podcast' }
                  ].map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavLinkClick(item.id)}
                      className="w-full text-left py-4 px-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-secondary/10 hover:to-secondary/20 transition-all duration-300 group border border-gray-100 hover:border-secondary/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                          <i className={`${item.icon} text-secondary text-lg`}></i>
                        </div>
                        <span className="text-primary font-montserrat font-medium text-lg group-hover:text-secondary transition-colors">
                          {item.label}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </motion.div>
              </nav>

              {/* Social Media Section */}
              <motion.div 
                className="border-t border-gray-200 pt-6 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-primary font-montserrat font-semibold text-lg mb-4 text-center">
                  Conecte-se conosco
                </h3>
                <div className="flex justify-center space-x-6">
                  <motion.a
                    href={SOCIAL_LINKS.WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="fab fa-instagram text-xl"></i>
                  </motion.a>
                </div>
                
                {/* Quick Contact Button */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href={createWhatsAppURL(WHATSAPP_MESSAGES.TEAM_CONSULTATION)} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="default" 
                      className="w-full btn-primary text-lg py-4 rounded-xl shadow-lg hover:shadow-xl"
                    >
                      <i className="fab fa-whatsapp mr-3 text-xl"></i>
                      Fale conosco
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
