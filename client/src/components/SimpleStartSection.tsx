import React from 'react';
import { motion } from 'framer-motion';

const SimpleStartSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Enfermeira nefrologista realizando anamnese" 
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
              O cuidado começa antes da consulta.
            </h2>
            
            <p className="text-lg text-primary/80 mb-8">
              Na clínica do Dr. Emanuel, o primeiro contato é com uma enfermeira nefrologista especializada. Ela realiza uma anamnese pré-consulta, faz os primeiros esclarecimentos e segue disponível via WhatsApp no pós-consulta. A consulta com o Dr. é a segunda fase de um atendimento completo, seguro e humano.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-[#F8F7F4] p-5 rounded-lg card-hover"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-secondary text-2xl mb-2">
                  <i className="fas fa-clipboard-check"></i>
                </div>
                <h3 className="font-montserrat font-semibold text-primary mb-2">Anamnese especializada</h3>
                <p className="text-sm text-primary/70">Avaliação inicial completa para otimizar sua consulta</p>
              </motion.div>
              
              <motion.div 
                className="bg-[#F8F7F4] p-5 rounded-lg card-hover"
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-secondary text-2xl mb-2">
                  <i className="fas fa-comments"></i>
                </div>
                <h3 className="font-montserrat font-semibold text-primary mb-2">Suporte contínuo</h3>
                <p className="text-sm text-primary/70">Acompanhamento pós-consulta via WhatsApp</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SimpleStartSection;
