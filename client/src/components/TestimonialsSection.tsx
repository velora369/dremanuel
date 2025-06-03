import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Icon3D from '@/components/ui/icon-3d';
import CustomEmoji from '@/components/ui/custom-emoji';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#23362B] via-[#2a4034] to-[#23362B] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#7BAF96] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D8D2C0] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Icon3D size="lg" variant="glassmorphism">
              <CustomEmoji type="heart" size="lg" />
            </Icon3D>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#D8D2C0] bg-clip-text text-transparent mb-6">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Depoimentos reais de pacientes que encontraram esperança e cura
          </p>
        </motion.div>
        
        {/* Enhanced 3D Testimonial Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-80 md:h-64">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                className={`absolute inset-0 ${index === activeIndex ? 'z-10' : 'z-0'}`}
                initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
                animate={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  scale: index === activeIndex ? 1 : 0.9,
                  rotateX: index === activeIndex ? 0 : -15
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/30 h-full">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <Icon3D size="md" variant="gradient">
                      <Quote className="w-6 h-6 text-white" />
                    </Icon3D>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 h-full">
                    {/* User Info */}
                    <div className="md:w-1/3 flex flex-col items-center justify-center">
                      {testimonial.isGoogle ? (
                        <motion.div 
                          className="text-center mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="bg-gradient-to-r from-[#7BAF96] to-[#23362B] rounded-full p-4 mb-4 mx-auto w-fit">
                            <div className="text-white text-2xl">
                              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="text-lg font-semibold text-[#23362B] mb-1">Google Reviews</div>
                          <p className="text-sm text-[#23362B]/60">
                            Baseado em 46+ avaliações verificadas
                          </p>
                        </motion.div>
                      ) : (
                        <div className="bg-gradient-to-r from-[#7BAF96] to-[#23362B] rounded-full p-6 mb-4">
                          <CustomEmoji type="success" size="lg" />
                        </div>
                      )}

                      {/* Star Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-[#7BAF96] text-[#7BAF96]" />
                          </motion.div>
                        ))}
                      </div>
                      
                      <p className="text-sm text-[#23362B]/60 font-medium">{testimonial.type}</p>
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="md:w-2/3 flex flex-col justify-center">
                      <motion.blockquote 
                        className="text-lg md:text-xl text-[#23362B] leading-relaxed italic mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        "{testimonial.quote}"
                      </motion.blockquote>
                      
                      <motion.cite 
                        className="text-lg font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent not-italic"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        — {testimonial.author}
                      </motion.cite>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-2 -right-2 opacity-20">
                    <Icon3D size="sm" variant="glassmorphism">
                      <CustomEmoji type="heart" size="sm" />
                    </Icon3D>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-3">
              {TESTIMONIALS.map((_, index) => (
                <motion.button 
                  key={index}
                  className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[#7BAF96] border-[#7BAF96] scale-125' 
                      : 'bg-white/30 border-white/50 hover:bg-white/60'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View testimonial ${index + 1}`}
                >
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
