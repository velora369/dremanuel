import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AWARDS, MORE_AWARDS } from '@/lib/constants';
import { 
  Award, 
  GraduationCap, 
  Medal, 
  HeartHandshake, 
  Trophy, 
  Crown, 
  FileCheck, 
  ScrollText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [showMoreAwards, setShowMoreAwards] = useState(false);

  const toggleMoreAwards = () => {
    setShowMoreAwards(!showMoreAwards);
  };

  const getIcon = (iconName: string) => {
    const iconComponents: { [key: string]: React.ReactNode } = {
      'award': <Award size={32} />,
      'graduation-cap': <GraduationCap size={32} />,
      'medal': <Medal size={32} />,
      'heart-handshake': <HeartHandshake size={32} />,
      'trophy': <Trophy size={32} />,
      'crown': <Crown size={32} />,
      'file-check': <FileCheck size={32} />,
      'scroll': <ScrollText size={32} />
    };
    return iconComponents[iconName] || <Award size={32} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experiencia" className="py-16 bg-[#F8F7F4]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-4">
            Reconhecimento de uma trajetória que salva vidas.
          </h2>
          <p className="text-lg text-primary/80 font-inter">
            Ao longo de sua carreira, Dr. Emanuel Esposito recebeu diversos prêmios, honrarias e homenagens que refletem não só sua competência, mas seu impacto na vida de milhares de pacientes e no desenvolvimento da medicina no norte do país.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {AWARDS.map((award, index) => (
            <motion.div 
              key={index}
              className="award-badge bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center card-hover"
              variants={itemVariants}
            >
              <div className="text-secondary mb-3">{getIcon(award.icon)}</div>
              <h3 className="font-montserrat font-semibold text-primary">{award.title}</h3>
              <p className="text-sm text-primary/70 mt-2">{award.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <button 
            className="text-secondary font-medium flex items-center hover:underline focus:outline-none"
            onClick={toggleMoreAwards}
          >
            <span>{showMoreAwards ? 'Ver menos reconhecimentos' : 'Ver mais reconhecimentos'}</span>
            <div className="ml-2">
              {showMoreAwards ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </button>
        </div>
        
        {showMoreAwards && (
          <motion.div 
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            variants={containerVariants}
          >
            {MORE_AWARDS.map((award, index) => (
              <motion.div 
                key={index}
                className="award-badge bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center card-hover"
                variants={itemVariants}
              >
                <div className="text-secondary mb-3">{getIcon(award.icon)}</div>
                <h3 className="font-montserrat font-semibold text-primary">{award.title}</h3>
                <p className="text-sm text-primary/70 mt-2">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
