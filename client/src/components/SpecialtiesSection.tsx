import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPECIALTIES, WHATSAPP_MESSAGES, createWhatsAppURL } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import kidneyIcon from '../assets/icons/new-kidney-icon.webp';
import { 
  Gem, 
  HeartPulse, 
  Bug, 
  ShieldAlert, 
  Syringe, 
  Network,
  ChevronDown,
  ChevronUp,
  HeartHandshake
} from 'lucide-react';

const SpecialtiesSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const getSpecialtyIcon = (iconName: string) => {
    const iconComponents: { [key: string]: React.ReactNode } = {
      'kidney': <img src={kidneyIcon} alt="Doença renal crônica" className="w-6 h-6 object-contain" />,
      'gem': <Gem size={24} />,
      'heart-pulse': <HeartPulse size={24} />,
      'bug': <Bug size={24} />,
      'shield-alert': <ShieldAlert size={24} />,
      'syringe': <Syringe size={24} />,
      'network': <Network size={24} />,
      'heart-handshake': <HeartHandshake size={24} />
    };
    return iconComponents[iconName] || <Network size={24} />;
  };

  const getSpecialtyMessage = (title: string) => {
    const messageMap: { [key: string]: string } = {
      'Doença renal crônica': WHATSAPP_MESSAGES.DOENCA_RENAL_CRONICA,
      'Litíase renal': WHATSAPP_MESSAGES.LITIASE_RENAL,
      'Hipertensão arterial': WHATSAPP_MESSAGES.HIPERTENSAO,
      'Infecção urinária': WHATSAPP_MESSAGES.INFECCAO_URINARIA,
      'Nefrites': WHATSAPP_MESSAGES.NEFRITES,
      'Doença renal do diabetes': WHATSAPP_MESSAGES.DIABETES_RENAL,
      'Cistos renais': WHATSAPP_MESSAGES.CISTOS_RENAIS
    };
    return messageMap[title] || WHATSAPP_MESSAGES.GENERAL_INFO;
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
              className={`bg-white rounded-xl p-6 shadow-sm flex flex-col text-center card-hover cursor-pointer transition-all duration-300 ${
                index === SPECIALTIES.length - 1 ? 'lg:col-start-2' : ''
              } ${expandedCard === index ? 'lg:col-span-2' : ''}`}
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
              onClick={() => toggleCard(index)}
              layout
            >
              <div className="flex flex-col items-center">
                <div className="bg-secondary/20 p-3 rounded-full text-secondary mb-3 flex items-center justify-center">
                  {getSpecialtyIcon(specialty.icon)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="font-montserrat font-semibold text-primary mb-1">{specialty.title}</h3>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-secondary"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                  <p className="text-sm text-primary/70 mb-3">{specialty.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {expandedCard === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <p className="text-sm text-primary/80 text-left leading-relaxed mb-4">
                        {specialty.detailedDescription}
                      </p>
                      <div className="flex justify-center">
                        <a href={createWhatsAppURL(getSpecialtyMessage(specialty.title))} target="_blank" rel="noopener noreferrer">
                          <Button variant="default" size="sm" className="btn-primary">
                            <i className="fab fa-whatsapp mr-2"></i> Agendar consulta
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
