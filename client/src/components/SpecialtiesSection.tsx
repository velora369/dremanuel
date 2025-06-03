import React from 'react';
import { motion } from 'framer-motion';
import { SPECIALTIES, WHATSAPP_MESSAGES, createWhatsAppURL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import kidneyIcon from '../assets/icons/new-kidney-icon.webp';
import { 
  Gem, 
  HeartPulse, 
  Bug, 
  ShieldAlert, 
  Syringe, 
  Network 
} from 'lucide-react';

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
    <section id="especialidades" className="py-16 bg-[#D8D2C0]/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Principais condições atendidas em consultório:
          </h2>
          <p className="text-lg text-primary/80">
            Atendimento especializado em problemas renais e condições relacionadas
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {SPECIALTIES.map((specialty, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover ${index === SPECIALTIES.length - 1 ? 'lg:col-start-2' : ''}`}
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="bg-secondary/20 p-3 rounded-full text-secondary mb-3 flex items-center justify-center">
                {getSpecialtyIcon(specialty.icon)}
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-primary mb-1">{specialty.title}</h3>
                <p className="text-sm text-primary/70">{specialty.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
