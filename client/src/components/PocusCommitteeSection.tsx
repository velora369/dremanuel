import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Users, Award } from 'lucide-react';

const PocusCommitteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Icon/Visual Element */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <Stethoscope size={60} className="text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-[#1f3c2f] mb-4 font-montserrat">
                Nomeação Oficial em Comitê da Sociedade Brasileira de Nefrologia
              </h2>
              
              <p className="text-base text-[#444] mb-4 leading-relaxed font-inter">
                <span className="font-medium text-primary">Avanço relevante na trajetória do Dr. Emanuel Espósito</span>, agora membro do Comitê de POCUS – Ultrassonografia à Beira-leito em Nefrologia.
              </p>
              
              <p className="text-base text-[#444] leading-relaxed font-inter">
                A Sociedade Brasileira de Nefrologia anunciou a criação do Comitê de POCUS – Ultrassonografia à Beira-leito em Nefrologia, com o objetivo de ampliar o uso qualificado dessa tecnologia na prática clínica. O Dr. Emanuel Pinheiro Espósito foi nomeado membro oficial desse comitê, reforçando seu papel de liderança no uso de tecnologias de ponta para o cuidado renal.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PocusCommitteeSection;