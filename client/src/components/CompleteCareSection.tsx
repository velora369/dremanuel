import React from 'react';
import { motion } from 'framer-motion';
import pocusIcon from '../assets/icons/new-pocus-icon.webp';

const CompleteCareSection: React.FC = () => {
  const services = [
    {
      icon: "fa-heartbeat",
      title: "MAPA",
      description: "Monitoramento Ambulatorial da Pressão Arterial por 24h",
      useCustomIcon: false
    },
    {
      title: "Ultrassonografia",
      description: "POCUS durante a consulta para diagnóstico imediato",
      useCustomIcon: true,
      customIcon: pocusIcon
    },
    {
      icon: "fa-user-nurse",
      title: "Enfermeira Especializada",
      description: "Suporte no pré e pós-consulta para atendimento completo",
      useCustomIcon: false
    },
    {
      icon: "fa-mobile-alt",
      title: "Suporte via WhatsApp",
      description: "Acesso direto à equipe para dúvidas e acompanhamento",
      useCustomIcon: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Diagnóstico, tecnologia e suporte completo num só lugar.
          </h2>
          <p className="text-lg text-primary/80">
            Aqui você encontra muito mais do que uma consulta:
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover"
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl mb-4">
                {service.useCustomIcon ? (
                  <img src={service.customIcon} alt={service.title} className="w-6 h-6 object-contain" />
                ) : (
                  <i className={`fas ${service.icon}`}></i>
                )}
              </div>
              <h3 className="font-montserrat font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-primary/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompleteCareSection;
