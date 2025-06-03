import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';
import { Calendar, GraduationCap, Sparkles, ChevronDown } from 'lucide-react';
import Icon3D from '@/components/ui/icon-3d';
import CustomEmoji from '@/components/ui/custom-emoji';

const HeroSection: React.FC = () => {
  const floatingElements = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/04/ponta-do-cururu-em-alter-do-chao.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#23362B]/95 via-[#23362B]/90 to-[#7BAF96]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#23362B]/80 to-transparent" />
      </div>

      {/* Floating Animated Elements */}
      {floatingElements.map((index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <div className="w-2 h-2 bg-white/30 rounded-full blur-sm" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10 flex flex-col justify-center min-h-screen">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Medical Icons */}
          <div className="absolute -top-20 left-0 right-0 hidden md:flex justify-between items-center opacity-50">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Icon3D size="lg" variant="glassmorphism">
                <CustomEmoji type="medical" size="lg" />
              </Icon3D>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <Icon3D size="lg" variant="glassmorphism">
                <CustomEmoji type="heart" size="lg" />
              </Icon3D>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Icon3D size="lg" variant="glassmorphism">
                <CustomEmoji type="technology" size="lg" />
              </Icon3D>
            </motion.div>
          </div>

          {/* Main Headline */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-[#D8D2C0] mr-3" />
              </motion.div>
              <span className="text-[#D8D2C0] text-sm md:text-base font-medium tracking-wide uppercase">
                Medicina de Excelência
              </span>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8 text-[#D8D2C0] ml-3" />
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-white via-[#D8D2C0] to-white bg-clip-text text-transparent">
                Transformando a
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#7BAF96] to-[#D8D2C0] bg-clip-text text-transparent">
                medicina renal
              </span>
              <br />
              <span className="text-white">
                no Baixo Amazonas
              </span>
            </motion.h1>
          </motion.div>
          
          {/* Enhanced Description */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-3xl mx-auto">
              <span className="font-semibold text-[#D8D2C0]">Dr. Emanuel Esposito</span> — 
              Médico nefrologista premiado, com mais de 
              <span className="font-bold text-[#7BAF96]"> 120 transplantes renais</span> realizados, 
              atendimento completo e tecnologia de ponta.
            </p>
            <p className="text-lg md:text-xl text-white/80">
              Presencial ou por telemedicina • Santarém, Pará
            </p>
          </motion.div>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#7BAF96] to-[#5a9c7e] hover:from-[#5a9c7e] hover:to-[#7BAF96] 
                          text-white shadow-2xl hover:shadow-[#7BAF96]/25 transition-all duration-300 
                          px-8 py-4 text-lg font-semibold rounded-xl border border-white/20"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Agendar Consulta
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 
                          hover:border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 
                          px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => {
                  const courseElement = document.getElementById('curso');
                  if (courseElement) {
                    courseElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <GraduationCap className="w-6 h-6 mr-3" />
                Curso POCUS
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats/Achievement Badges */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "120+", label: "Transplantes Renais", emoji: "medical" },
              { number: "15+", label: "Anos de Experiência", emoji: "award" },
              { number: "100%", label: "Dedicação aos Pacientes", emoji: "heart" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(123,175,150,0.2)"
                }}
              >
                <div className="flex items-center justify-center mb-3">
                  <CustomEmoji type={stat.emoji as any} size="md" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center text-white/60 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => {
                const aboutElement = document.getElementById('sobre');
                if (aboutElement) {
                  aboutElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="text-sm mb-2">Conheça mais</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
