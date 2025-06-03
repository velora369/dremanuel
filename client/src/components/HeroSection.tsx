import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGES, createWhatsAppURL } from '@/lib/constants';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 relative">
      <div 
        className="absolute inset-0 bg-primary/90 bg-blend-overlay"
        style={{ 
          backgroundImage: "url('https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/04/ponta-do-cururu-em-alter-do-chao.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8
        }}
      />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold text-white font-montserrat leading-tight mb-4 drop-shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transformando a medicina renal no Baixo Amazonas.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white mb-8 font-inter drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Dr. Emanuel Esposito — Médico nefrologista premiado, com mais de 120 transplantes renais realizados, atendimento completo e tecnologia de ponta. Presencial ou por telemedicina.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href={createWhatsAppURL(WHATSAPP_MESSAGES.GENERAL_INFO)} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="secondary" 
                size="lg" 
                className="btn-primary w-full sm:w-auto flex items-center justify-center"
              >
                <i className="fab fa-whatsapp mr-2 text-lg"></i> Agendar consulta
              </Button>
            </a>
            
            <Button 
              variant="white" 
              size="lg" 
              className="btn-secondary w-full sm:w-auto flex items-center justify-center"
              onClick={() => {
                const courseElement = document.getElementById('curso');
                if (courseElement) {
                  courseElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <i className="fas fa-graduation-cap mr-2"></i> Acessar curso de POCUS
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
