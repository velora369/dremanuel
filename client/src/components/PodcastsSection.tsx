import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Headphones, PlayCircle, GraduationCap } from 'lucide-react';
import voxcastImage from '../assets/podcasts/voxcast-esposito.webp';

const PodcastsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'podcasts' | 'lessons'>('podcasts');

  const podcasts = [
    {
      title: 'MedTalks Ep. 11 Saúde Renal em Foco: Como Cuidar dos Seus Rins',
      url: 'https://www.youtube.com/watch?v=vQZclujnIEI'
    },
    {
      title: 'MedTalks #05 Transplante – Panorama dos Pacientes Renais Crônicos e o Transplante Renal no Brasil',
      url: 'https://www.youtube.com/watch?v=whK1u9IT7so'
    },
    {
      title: 'VoxCast #028 POCUS na prática médica — Dr. Emanuel Esposito & Luan Moraes',
      url: 'https://www.youtube.com/watch?v=ZXRbcpKPYN4'
    }
  ];

  const lessons = [
    {
      title: 'Transplante Renal na Amazônia: Desafios e Avanços na Doença Renal Crônica',
      videoId: '3cmKJUY4ORk',
      url: 'https://www.youtube.com/watch?v=3cmKJUY4ORk',
      description: 'Explore os desafios e avanços na atenção primária, acesso à diálise e, principalmente, a logística e implementação de transplantes renais na Amazônia. Esta reunião clínica semanal foca na doença renal crônica no cenário de doação e transplante na região Norte do Brasil. A discussão abrange disparidades geográficas, a importância da tutoria em novos centros de transplante, e o impacto social e econômico desses programas, incluindo a conexão com a medicina preventiva e a educação médica continuada.'
    }
  ];

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

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
            Conteúdo Educacional: Podcasts e Aulas
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Dr. Emanuel Esposito compartilha conhecimento através de conversas profundas e aulas especializadas sobre saúde renal, transplantes e medicina nefrológica.
          </p>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('podcasts')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'podcasts' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                <Headphones size={20} />
                Podcasts
              </button>
              <button
                onClick={() => setActiveTab('lessons')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'lessons' 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-primary hover:bg-primary/10'
                }`}
              >
                <GraduationCap size={20} />
                Aulas
              </button>
            </div>
          </div>

          {/* Featured Image for Podcasts */}
          {activeTab === 'podcasts' && (
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
          )}
        </motion.div>
        
        {/* Podcasts Content */}
        {activeTab === 'podcasts' && (
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
                target="_blank"
                rel="noopener noreferrer" 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover h-full"
                variants={item}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="text-secondary mb-4">
                  <Headphones size={32} />
                </div>
                <h3 className="font-montserrat font-semibold text-primary mb-4">{podcast.title}</h3>
                <Button variant="link" className="text-secondary mt-auto flex items-center">
                  Ouvir episódio
                  <Headphones size={16} className="ml-2" />
                </Button>
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Lessons Content */}
        {activeTab === 'lessons' && (
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {lessons.map((lesson, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
                variants={item}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                  transition: { duration: 0.3 } 
                }}
              >
                <div className="md:flex">
                  {/* Video Thumbnail */}
                  <div className="md:w-1/2">
                    <a 
                      href={lesson.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative group"
                    >
                      <img 
                        src={getYouTubeThumbnail(lesson.videoId)}
                        alt={lesson.title}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle size={64} className="text-white" />
                      </div>
                    </a>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap size={24} className="text-secondary" />
                      <span className="text-sm font-medium text-secondary">Aula Especializada</span>
                    </div>
                    
                    <h3 className="text-xl font-bold font-montserrat text-primary mb-4">
                      {lesson.title}
                    </h3>
                    
                    <p className="text-primary/80 mb-6 leading-relaxed">
                      {lesson.description}
                    </p>
                    
                    <a 
                      href={lesson.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                        <PlayCircle size={20} />
                        Assistir aula
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PodcastsSection;