import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, GraduationCap } from 'lucide-react';

const LessonsSection: React.FC = () => {
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
    <section id="aulas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Aulas Especializadas
          </h2>
          <p className="text-lg text-primary/80 mb-8">
            Conteúdo educacional aprofundado sobre transplante renal e nefrologia na região Norte do Brasil.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {lessons.map((lesson, index) => (
            <motion.div
              key={index}
              className="bg-[#F8F7F4] rounded-xl shadow-sm overflow-hidden"
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video">
                  <a 
                    href={lesson.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group h-full"
                  >
                    <img 
                      src={getYouTubeThumbnail(lesson.videoId)}
                      alt={lesson.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayCircle size={80} className="text-white" />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-primary" />
                        <span className="text-sm font-medium text-primary">Aula Especializada</span>
                      </div>
                    </div>
                  </a>
                </div>
                
                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">
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
                    <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 w-fit">
                      <PlayCircle size={20} />
                      Assistir aula
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LessonsSection;