import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { COURSE_FEATURES, COURSE_TOPICS } from '@/lib/constants';

// Importar imagens do carrossel do curso
import courseImage1 from '../assets/images/course/nova2cursopocus.webp';
import courseImage2 from '../assets/images/course/cursopocus4.webp';
import courseImage3 from '../assets/images/course/coursopocus3.webp';

const CourseSection: React.FC = () => {
  // Estado para controlar as imagens do carrossel do curso
  const [currentCourseImage, setCurrentCourseImage] = useState(0);
  const courseImages = [courseImage1, courseImage2, courseImage3];
  
  // Efeito para alternar as imagens a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourseImage((prev) => (prev + 1) % courseImages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="curso" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-bold font-montserrat mb-4">Curso Online: POCUS aplicado à clínica médica</h2>
                
                <p className="text-lg opacity-90 mb-6">
                  Junto com o Dr. Geraldo Pio Neto, Dr. Emanuel oferece um curso completo sobre ultrassonografia clínica, voltado para profissionais da saúde.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {COURSE_FEATURES.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-[#D8D2C0] mr-3">
                        <i className="fas fa-check-circle text-xl"></i>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mb-6">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScBB7A20kLP1zRyIXh8f7kTDrPR47B5G11Maf4_fx9nW_efHg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
                    <Button variant="white" size="lg" className="btn-secondary">
                      Lista de espera 2º Integra POCUS
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="relative overflow-hidden rounded-xl shadow-lg h-[300px]">
                  {courseImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="absolute inset-0 h-full w-full"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: currentCourseImage === index ? 1 : 0,
                        zIndex: currentCourseImage === index ? 10 : 0 
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={image} 
                        alt={`Curso POCUS aplicado à clínica médica - Imagem ${index + 1}`} 
                        className="h-full w-full object-cover" 
                      />
                    </motion.div>
                  ))}
                  
                  {/* Indicadores do carrossel */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {courseImages.map((_, index) => (
                      <div 
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentCourseImage === index ? 'bg-white' : 'bg-white/50'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="mt-10 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-montserrat font-semibold mb-4">O que você vai aprender:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {COURSE_TOPICS.map((topic, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/10 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <h4 className="font-montserrat font-medium mb-2">{topic.title}</h4>
                    <p className="text-sm opacity-80">{topic.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSection;
