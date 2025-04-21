import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-primary/80">
            Estamos prontos para ajudar você com o melhor atendimento em nefrologia
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-[#F8F7F4] rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold font-montserrat text-primary mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-secondary text-xl mt-1">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Telefone</h4>
                    <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5593991674540" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-secondary transition-colors">
                      (93) 99167-4540
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-secondary text-xl mt-1">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Email</h4>
                    <p className="text-primary/70">espositodr@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-secondary text-xl mt-1">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Endereço</h4>
                    <a href="https://g.co/kgs/5yhFLSs" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-secondary transition-colors">
                      Clinica Integrativa Med Odonto. Sala 05.<br />
                      Rua Rosa Vermelha, número 763.<br />
                      Bairro Aeroporto Velho.
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#F8F7F4] rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold font-montserrat text-primary mb-6">
                Horário de Atendimento
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-primary">Segunda à Sexta</span>
                  <span className="text-primary font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary">Sábado</span>
                  <span className="text-primary font-medium">8:00 - 12:00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-primary">Domingo</span>
                  <span className="text-primary font-medium">Fechado</span>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-primary mb-2">Atendimento via WhatsApp</h4>
                <p className="text-primary/70 mb-4">
                  Agende sua consulta ou tire suas dúvidas através do nosso WhatsApp
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <button className="w-full py-3 px-4 bg-secondary text-white rounded-lg flex items-center justify-center">
                    <i className="fab fa-whatsapp mr-2 text-lg"></i> Iniciar conversa
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;