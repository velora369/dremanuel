import React from 'react';
import { motion } from 'framer-motion';
import { SPECIALTIES } from '@/lib/constants';
import kidneyIcon from '../assets/icons/new-kidney-icon.webp';
import { 
  Gem, 
  HeartPulse, 
  Bug, 
  ShieldAlert, 
  Syringe, 
  Network 
} from 'lucide-react';
import Icon3D from '@/components/ui/icon-3d';
import CustomEmoji from '@/components/ui/custom-emoji';

const SpecialtiesSection: React.FC = () => {
  const getSpecialtyIcon = (iconName: string) => {
    const iconComponents: { [key: string]: React.ReactNode } = {
      'kidney': <img src={kidneyIcon} alt="Doença renal crônica" className="w-6 h-6 object-contain" />,
      'gem': <Gem size={24} />,
      'heart-pulse': <HeartPulse size={24} />,
      'bug': <Bug size={24} />,
      'shield-alert': <ShieldAlert size={24} />,
      'syringe': <Syringe size={24} />,
      'network': <Network size={24} />
    };
    return iconComponents[iconName] || <Network size={24} />;
  };

  const getEmojiType = (iconName: string) => {
    const emojiMap: { [key: string]: string } = {
      'kidney': 'medical',
      'gem': 'technology',
      'heart-pulse': 'heart',
      'bug': 'shield',
      'shield-alert': 'shield',
      'syringe': 'medical',
      'network': 'technology'
    };
    return emojiMap[iconName] || 'medical';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="especialidades" className="py-24 bg-gradient-to-br from-[#F8F7F4] via-white to-[#D8D2C0]/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-48 h-48 bg-[#7BAF96] rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-[#23362B] rounded-full blur-3xl" />
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
            <Icon3D size="lg" variant="gradient">
              <CustomEmoji type="medical" size="lg" />
            </Icon3D>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-6">
            Especialidades Médicas
          </h2>
          <p className="text-xl text-[#23362B]/70 leading-relaxed">
            Atendimento especializado em nefrologia com tecnologia de ponta e cuidado humanizado
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SPECIALTIES.map((specialty, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={item}
            >
              {/* Enhanced 3D Card */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#7BAF96]/20 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:bg-white">
                
                {/* 3D Icon Container */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    whileHover={{ 
                      rotateY: 15,
                      rotateX: -10,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon3D size="xl" variant="gradient" glowEffect={true}>
                      <CustomEmoji type={getEmojiType(specialty.icon) as any} size="xl" />
                    </Icon3D>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <motion.h3 
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {specialty.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[#23362B]/70 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  >
                    {specialty.description}
                  </motion.p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7BAF96]/5 to-[#23362B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Floating accent */}
                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#7BAF96] to-[#23362B] rounded-full animate-pulse" />
                </div>
              </div>

              {/* 3D shadow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent to-[#23362B]/10 transform translate-y-2 translate-x-2 -z-20 group-hover:translate-y-3 group-hover:translate-x-3 transition-transform duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
