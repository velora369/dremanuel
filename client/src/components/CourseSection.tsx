import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { COURSE_FEATURES, COURSE_TOPICS } from '@/lib/constants';

const CourseSection: React.FC = () => {
  // Estado para controlar as imagens do carrossel do curso
  const [currentCourseImage, setCurrentCourseImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const courseImages = [
    {
      url: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/04/pocus-curso-.webp',
      alt: 'Curso POCUS - Imagem 1'
    },
    {
      url: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/af0f8278-7d21-4089-90b8-6fc66064d8c3.webp',
      alt: 'Curso POCUS - Imagem 2'
    },
    {
      url: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/07/08334087-f62f-4c05-ba38-941ef9d5ffd6.webp',
      alt: 'Curso POCUS - Imagem 3'
    }
  ];
  
  // Efeito para alternar as imagens a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCourseImage((prev) => (prev + 1) % courseImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [courseImages.length]);

  // Handle modal open/close
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);
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
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScBB7A20kLP1zRyIXh8f7kTDrPR47B5G11Maf4_fx9nW_efHg/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto mx-auto text-center">
                    <Button variant="white" size="lg" className="btn-secondary w-full sm:w-auto mx-auto">
                      Lista de espera 2º Integra POCUS
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="lg:w-2/5">
                <div className="relative overflow-hidden rounded-xl shadow-lg h-[380px] group">
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
                        src={image.url} 
                        alt={image.alt} 
                        className="h-full w-full object-contain cursor-pointer" 
                        onClick={openModal}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Controles de navegação */}
                  <button 
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setCurrentCourseImage((prev) => (prev === 0 ? courseImages.length - 1 : prev - 1))}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  
                  <button 
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setCurrentCourseImage((prev) => (prev + 1) % courseImages.length)}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {/* Indicadores do carrossel */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {courseImages.map((_, index) => (
                      <button 
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentCourseImage === index ? 'bg-white' : 'bg-white/50'} hover:bg-white/90 transition-colors duration-200`}
                        onClick={() => setCurrentCourseImage(index)}
                        aria-label={`Ver imagem ${index + 1}`}
                      ></button>
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

      {/* Modal for expanded image view */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={courseImages[currentCourseImage].url}
              alt={courseImages[currentCourseImage].alt}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 z-10"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CourseSection;
