import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
            Histórias que provam a diferença.
          </h2>
          <p className="text-lg text-primary/80">
            Veja o que nossos pacientes dizem sobre o atendimento do Dr. Emanuel Esposito
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div 
                key={index}
                className={`testimonial-slide bg-white rounded-xl p-8 shadow-sm mb-8 ${index === activeIndex ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-[#D8D2C0]/30 flex items-center justify-center text-primary text-2xl mb-2">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="text-center">
                      <div className="text-secondary">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p className="text-sm text-primary/70 mt-1">{testimonial.type}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <p className="text-lg italic text-primary/80 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-montserrat font-semibold text-primary">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="flex justify-center space-x-2 mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-secondary' : 'bg-secondary/30'}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
