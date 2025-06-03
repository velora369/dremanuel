import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';

// Importar imagens do carrossel
import doctorImage1 from '../assets/images/doctor/nova3topdr.webp';
import doctorImage2 from '../assets/images/doctor/novatopdr.webp';
import doctorImage3 from '../assets/images/doctor/nova2topdr.webp';
import doctorImage4 from '../assets/images/doctor/mariaedr.webp';

const AboutDoctorSection: React.FC = () => {
  const stats = [
    { value: "120+", label: "Transplantes realizados" },
    { value: "20+", label: "Anos de experiência" },
    { value: "5000+", label: "Pacientes atendidos" },
    { value: "150+", label: "Artigos publicados" },
    { value: "25+", label: "Prêmios recebidos" },
    { value: "10+", label: "Projetos de pesquisa" }
  ];
  
  // Estado para controlar as imagens do carrossel
  const [currentDoctorImage, setCurrentDoctorImage] = useState(0);
  const doctorImages = [doctorImage1, doctorImage2, doctorImage3, doctorImage4];
  
  // Efeito para alternar as imagens a cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDoctorImage((prev) => (prev + 1) % doctorImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Carrossel de imagens */}
          <motion.div
            className="w-full md:w-2/5 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg h-[500px] group">
              {doctorImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: currentDoctorImage === index ? 1 : 0,
                    zIndex: currentDoctorImage === index ? 10 : 0 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={image} 
                    alt={`Dr. Emanuel Esposito - Imagem ${index + 1}`} 
                    className="h-full w-full object-cover" 
                  />
                </motion.div>
              ))}
              
              {/* Controles de navegação */}
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => setCurrentDoctorImage((prev) => (prev === 0 ? doctorImages.length - 1 : prev - 1))}
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={() => setCurrentDoctorImage((prev) => (prev + 1) % doctorImages.length)}
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              
              {/* Indicadores do carrossel */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {doctorImages.map((_, index) => (
                  <button 
                    key={index}
                    className={`h-2 w-2 rounded-full ${currentDoctorImage === index ? 'bg-white' : 'bg-white/50'} hover:bg-white/90 transition-colors duration-200`}
                    onClick={() => setCurrentDoctorImage(index)}
                    aria-label={`Ver imagem ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Informações do médico */}
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-montserrat text-primary mb-2">Dr. Emanuel Esposito</h2>
            <p className="text-lg font-medium text-secondary mb-6">
              Médico Nefrologista | Diretor Clínico do HRBA | Professor da UEPA | Preceptor | Mestrando pela UFOPA
            </p>
            
            <p className="text-lg text-primary/80 mb-6">
              O Dr. Emanuel atua desde 2002, com foco em nefrologia, transplantes e inovação médica. Especialista em Clínica Médica pelo Hospital da Piedade SUS/RJ e Nefrologia na Universidade do Estado do Rio de Janeiro (UERJ). Coordena o serviço de nefrologia do HRBA, transformando a realidade da saúde renal na região amazônica. É professor efetivo da graduação e preceptor da residência médica da UEPA. Atua também como pesquisador e mestrando em Inovação Terapêutica pela UFOPA.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center bg-[#F8F7F4] p-4 rounded-lg"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="text-3xl text-secondary font-bold">{stat.value}</div>
                  <p className="text-sm text-primary/70 text-center">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="btn-primary inline-block">
                  <i className="fab fa-whatsapp mr-2"></i> Agendar consulta
                </Button>
              </a>
              
              <a href="http://lattes.cnpq.br/4046885474500580" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border border-primary inline-block">
                  <i className="fas fa-graduation-cap mr-2"></i> Perfil acadêmico
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
