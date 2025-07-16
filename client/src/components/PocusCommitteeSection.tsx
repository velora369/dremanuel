import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PocusCommitteeSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      url: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/04/cursopocus-4.webp',
      alt: 'Curso POCUS - Imagem 1'
    },
    {
      url: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/04/nova2cursopocus.webp',
      alt: 'Curso POCUS - Imagem 2'
    },
    {
      url: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/04/sobreimg-2-dr.webp',
      alt: 'Dr. Emanuel Espósito - Imagem 3'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Automatic rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

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
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Carousel */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full max-w-md">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                    onClick={openModal}
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 transition-all duration-300 shadow-md"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 transition-all duration-300 shadow-md"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
                
                {/* Dots Indicator */}
                <div className="flex justify-center mt-4 space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-primary scale-110' 
                          : 'bg-primary/30 hover:bg-primary/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-[#1f3c2f] mb-4 font-montserrat">
                Nomeação Oficial em Comitê da Sociedade Brasileira de Nefrologia
              </h2>
              
              <p className="text-base text-[#444] mb-4 leading-relaxed font-inter">
                <span className="font-medium text-primary">Avanço relevante na trajetória do Dr. Emanuel Espósito</span>, agora membro do Comitê de POCUS – Ultrassonografia à Beira-leito em Nefrologia.
              </p>
              
              <p className="text-base text-[#444] leading-relaxed font-inter">
                A Sociedade Brasileira de Nefrologia anunciou a criação do Comitê de POCUS – Ultrassonografia à Beira-leito em Nefrologia, com o objetivo de ampliar o uso qualificado dessa tecnologia na prática clínica. O Dr. Emanuel Pinheiro Espósito foi nomeado membro oficial desse comitê, reforçando seu papel de liderança no uso de tecnologias de ponta para o cuidado renal.
              </p>
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
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
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

export default PocusCommitteeSection;