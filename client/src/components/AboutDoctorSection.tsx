import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';
import { Calendar, GraduationCap, ChevronLeft, ChevronRight, Award, Users, Microscope, HeartHandshake } from 'lucide-react';
import Icon3D from '@/components/ui/icon-3d';
import CustomEmoji from '@/components/ui/custom-emoji';

// Importar imagens do carrossel
import doctorImage1 from '../assets/images/doctor/nova3topdr.webp';
import doctorImage2 from '../assets/images/doctor/novatopdr.webp';
import doctorImage3 from '../assets/images/doctor/nova2topdr.webp';
import doctorImage4 from '../assets/images/doctor/mariaedr.webp';

const AboutDoctorSection: React.FC = () => {
  const stats = [
    { value: "120+", label: "Transplantes realizados", icon: "medical", color: "gradient" },
    { value: "15+", label: "Anos de experiência", icon: "award", color: "primary" },
    { value: "5000+", label: "Pacientes atendidos", icon: "care", color: "secondary" },
    { value: "150+", label: "Artigos publicados", icon: "star", color: "accent" },
    { value: "25+", label: "Prêmios recebidos", icon: "award", color: "gradient" },
    { value: "10+", label: "Projetos de pesquisa", icon: "technology", color: "primary" }
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
    <section id="sobre" className="py-24 bg-gradient-to-br from-white via-[#F8F7F4] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#7BAF96] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#23362B] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Icon3D size="md" variant="glassmorphism">
              <CustomEmoji type="medical" size="md" />
            </Icon3D>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-4">
            Conheça o Dr. Emanuel
          </h2>
          <p className="text-xl text-[#23362B]/70 max-w-2xl mx-auto">
            Excelência médica e inovação a serviço da nefrologia amazônica
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Enhanced 3D Image Carousel */}
          <motion.div
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Main image container with 3D effects */}
              <div className="relative overflow-hidden rounded-3xl h-[600px] shadow-2xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/30">
                {doctorImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 h-full w-full"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: currentDoctorImage === index ? 1 : 0,
                      scale: currentDoctorImage === index ? 1 : 1.1,
                      zIndex: currentDoctorImage === index ? 10 : 0 
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <img 
                      src={image} 
                      alt={`Dr. Emanuel Esposito - Imagem ${index + 1}`} 
                      className="h-full w-full object-cover" 
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#23362B]/30 via-transparent to-transparent" />
                  </motion.div>
                ))}
                
                {/* Enhanced navigation controls */}
                <motion.button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  onClick={() => setCurrentDoctorImage((prev) => (prev === 0 ? doctorImages.length - 1 : prev - 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                
                <motion.button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                  onClick={() => setCurrentDoctorImage((prev) => (prev + 1) % doctorImages.length)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
                
                {/* Modern indicator dots */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                  {doctorImages.map((_, index) => (
                    <motion.button 
                      key={index}
                      className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                        currentDoctorImage === index 
                          ? 'bg-white border-white scale-125' 
                          : 'bg-white/30 border-white/50 hover:bg-white/60'
                      }`}
                      onClick={() => setCurrentDoctorImage(index)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ver imagem ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Floating 3D accent elements */}
                <div className="absolute -top-6 -right-6 opacity-30">
                  <Icon3D size="lg" variant="glassmorphism">
                    <CustomEmoji type="medical" size="lg" />
                  </Icon3D>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Enhanced Doctor Information */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Title Section */}
            <div className="mb-8">
              <motion.h3 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Dr. Emanuel Esposito
              </motion.h3>
              
              <motion.div
                className="space-y-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-xl font-semibold text-[#7BAF96]">
                  Médico Nefrologista
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-[#23362B]/70">
                  <span className="bg-[#7BAF96]/10 px-3 py-1 rounded-full">Diretor Clínico HRBA</span>
                  <span className="bg-[#7BAF96]/10 px-3 py-1 rounded-full">Professor UEPA</span>
                  <span className="bg-[#7BAF96]/10 px-3 py-1 rounded-full">Mestrando UFOPA</span>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg text-[#23362B]/80 leading-relaxed mb-4">
                O Dr. Emanuel atua desde 2002, com foco em nefrologia, transplantes e inovação médica. 
                Especialista em Clínica Médica e Nefrologia pela UERJ.
              </p>
              <p className="text-lg text-[#23362B]/80 leading-relaxed">
                Coordena o serviço de nefrologia do HRBA, transformando a realidade da saúde renal 
                na região amazônica através de tecnologia de ponta e cuidado humanizado.
              </p>
            </motion.div>
            
            {/* Enhanced Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#7BAF96]/20 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                    {/* 3D Icon */}
                    <div className="flex justify-center mb-3">
                      <Icon3D size="sm" variant={stat.color as any}>
                        <CustomEmoji type={stat.icon as any} size="sm" />
                      </Icon3D>
                    </div>
                    
                    {/* Stats content */}
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <p className="text-sm text-[#23362B]/70 leading-tight">
                        {stat.label}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7BAF96]/10 to-[#23362B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-[#7BAF96] to-[#5a9c7e] hover:from-[#5a9c7e] hover:to-[#7BAF96] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-3 text-base font-semibold rounded-xl"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>
              </motion.a>
              
              <motion.a 
                href="http://lattes.cnpq.br/4046885474500580" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-[#7BAF96] text-[#23362B] hover:bg-[#7BAF96] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3 text-base font-semibold rounded-xl"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Perfil Acadêmico
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctorSection;
