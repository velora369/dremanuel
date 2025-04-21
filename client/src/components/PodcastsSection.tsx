import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import voxcastImage from '../assets/podcasts/voxcast-esposito.webp';

const PodcastsSection: React.FC = () => {
  const podcasts = [
    {
      title: 'MedTalks Ep. 11 Saúde Renal em Foco: Como Cuidar dos Seus Rins',
      url: '#',
      icon: '🎧'
    },
    {
      title: 'MedTalks #05 Transplante – Panorama dos Pacientes Renais Crônicos e o Transplante Renal no Brasil',
      url: '#',
      icon: '🎧'
    },
    {
      title: 'VoxCast #028 POCUS na prática médica — Dr. Emanuel Esposito & Luan Moraes',
      url: '#',
      icon: '🎧'
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
    <section id="podcasts" className="py-16 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Podcasts: Bate-papos que educam, inspiram e transformam.
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Dr. Emanuel Esposito em conversas profundas sobre saúde renal, transplantes e o futuro da medicina nefrológica.
          </p>

          <div className="max-w-lg mx-auto mb-12">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src={voxcastImage} 
                alt="Dr. Emanuel Esposito no VoxCast" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {podcasts.map((podcast, index) => (
            <motion.a 
              href={podcast.url} 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover h-full"
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="text-4xl mb-4">
                {podcast.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-primary mb-4">{podcast.title}</h3>
              <Button variant="link" className="text-secondary mt-auto">
                Ouvir episódio
                <i className="fas fa-headphones ml-2"></i>
              </Button>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastsSection;