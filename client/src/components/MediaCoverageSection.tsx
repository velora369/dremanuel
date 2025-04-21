import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const MediaCoverageSection: React.FC = () => {
  const mediaItems = [
    {
      title: 'G1: Modelo de captação e transplante de rim é apresentado por médico do HRBA em congresso brasileiro',
      url: '#',
      icon: '📌'
    },
    {
      title: 'Globoplay: Conheça história de paciente que recebeu um rim e teve esperanças renovadas (saúde renal)',
      url: '#',
      icon: '📌'
    },
    {
      title: 'Globoplay: 2ª corrida \'Doando Pela Vida\' é realizada em Santarém (Evento organizado pelo Dr. Emanuel Esposito)',
      url: '#',
      icon: '📌'
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
    <section id="na-midia" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Na Mídia: Reconhecimento que atravessa fronteiras.
          </h2>
          <p className="text-lg text-primary/80">
            Reportagens e entrevistas com o Dr. Emanuel Esposito em grandes portais e emissoras. Destaque nacional para sua atuação em transplantes renais e inovação em nefrologia.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {mediaItems.map((media, index) => (
            <motion.a 
              href={media.url} 
              key={index}
              className="bg-[#F8F7F4] rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover h-full"
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="text-4xl mb-4">
                {media.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-primary mb-4">{media.title}</h3>
              <Button variant="link" className="text-secondary mt-auto">
                Ler matéria
                <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;