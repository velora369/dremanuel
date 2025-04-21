import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';

const FinalCTASection: React.FC = () => {
  return (
    <section id="agendar" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Pronto para cuidar dos seus rins com quem mais entende do assunto?
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Agendamentos online e presenciais com suporte especializado e tecnologia de ponta.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg" className="btn-primary w-full sm:w-auto flex items-center justify-center">
                <i className="fab fa-whatsapp mr-2 text-lg"></i> Agendar consulta
              </Button>
            </a>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="btn-secondary w-full sm:w-auto flex items-center justify-center"
              onClick={() => {
                const courseElement = document.getElementById('curso');
                if (courseElement) {
                  courseElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <i className="fas fa-graduation-cap mr-2"></i> Acessar curso online
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-primary/60 text-sm">
            <a href="#" className="hover:text-secondary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-secondary transition-colors">Agendamentos e Cancelamentos</a>
            <a 
              href="#contato" 
              onClick={(e) => {
                e.preventDefault();
                const contactElement = document.getElementById('contato');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hover:text-secondary transition-colors"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
