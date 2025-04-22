import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';

const OnlineInPersonSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="atendimento" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat mb-6">Atendimentos onde você estiver.</h2>
          <p className="text-lg opacity-90">
            Com tecnologia de ponta e acolhimento profissional, você pode realizar sua consulta presencial em Santarém-PA ou de qualquer lugar do Brasil via telemedicina.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center card-hover"
            variants={item}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
              transition: { duration: 0.3 } 
            }}
          >
            <div className="text-4xl mb-4 text-[#D8D2C0]">
              <i className="fas fa-hospital"></i>
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3">Consulta Presencial</h3>
            <p className="mb-6 opacity-80">
              Atendimento completo em Santarém, com exames e procedimentos realizados no mesmo local.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="white" size="sm" className="btn-secondary inline-block w-48">
                <i className="fab fa-whatsapp mr-2"></i> Agendar Presencial
              </Button>
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center card-hover"
            variants={item}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
              transition: { duration: 0.3 } 
            }}
          >
            <div className="text-4xl mb-4 text-[#D8D2C0]">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="text-xl font-montserrat font-semibold mb-3">Telemedicina</h3>
            <p className="mb-6 opacity-80">
              Consulta online com a mesma qualidade, de qualquer lugar do Brasil e com total privacidade.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="white" size="sm" className="btn-secondary inline-block w-48">
                <i className="fab fa-whatsapp mr-2"></i> Agendar Telemedicina
              </Button>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg font-montserrat mb-4">Não consegue decidir qual formato é melhor para você?</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="white" className="btn-secondary inline-block">
              Converse com nossa equipe
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OnlineInPersonSection;
