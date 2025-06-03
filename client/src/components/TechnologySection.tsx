import React from 'react';
import { motion } from 'framer-motion';

const TechnologySection: React.FC = () => {
  const features = [
    {
      icon: "fa-search-plus",
      title: "Diagnóstico rápido e preciso",
      description: "Visualização em tempo real dos órgãos durante a consulta"
    },
    {
      icon: "fa-stethoscope",
      title: "Monitoramento contínuo",
      description: "Acompanhamento detalhado da evolução do tratamento"
    },
    {
      icon: "fa-book-medical",
      title: "Educação do paciente",
      description: "Visualização que facilita o entendimento da sua condição"
    }
  ];

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
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Ultrassonografia POCUS sendo realizada" 
              className="w-full h-auto object-cover rounded-xl shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
              Tecnologia a serviço da sua saúde renal.
            </h2>
            
            <p className="text-lg text-primary/80 mb-8">
              Através da ultrassonografia POCUS, exames como MAPA e equipamentos modernos, o diagnóstico e acompanhamento são muito mais precisos. Com isso, evitam-se complicações graves, internações e avanço de doenças.
            </p>
            
            <motion.div 
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-4 bg-[#F8F7F4] rounded-lg card-hover"
                  variants={item}
                  whileHover={{ 
                    y: -3, 
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="text-secondary text-xl mr-4">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-primary">{feature.title}</h3>
                    <p className="text-sm text-primary/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
