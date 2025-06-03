import React from 'react';
import { motion } from 'framer-motion';
import { Search, Stethoscope, BookOpen, Zap, Monitor, Heart } from 'lucide-react';
import Icon3D from '@/components/ui/icon-3d';
import CustomEmoji from '@/components/ui/custom-emoji';

const TechnologySection: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Diagnóstico rápido e preciso",
      description: "Visualização em tempo real dos órgãos durante a consulta",
      emoji: "technology"
    },
    {
      icon: Stethoscope,
      title: "Monitoramento contínuo",
      description: "Acompanhamento detalhado da evolução do tratamento",
      emoji: "medical"
    },
    {
      icon: BookOpen,
      title: "Educação do paciente",
      description: "Visualização que facilita o entendimento da sua condição",
      emoji: "care"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F8F7F4] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-64 h-64 bg-[#7BAF96] rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-[#23362B] rounded-full blur-3xl" />
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
          <div className="flex items-center justify-center mb-6">
            <Icon3D size="lg" variant="gradient">
              <CustomEmoji type="technology" size="lg" />
            </Icon3D>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-6">
            Tecnologia POCUS
          </h2>
          <p className="text-xl text-[#23362B]/70 max-w-3xl mx-auto leading-relaxed">
            Ultrassonografia Point-of-Care revolucionando o diagnóstico médico em tempo real
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm border border-white/30">
                <img 
                  src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Ultrassonografia POCUS sendo realizada" 
                  className="w-full h-96 object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#23362B]/20 to-transparent" />
                
                {/* Floating 3D elements */}
                <div className="absolute -top-4 -right-4 opacity-40">
                  <Icon3D size="md" variant="glassmorphism">
                    <CustomEmoji type="technology" size="md" />
                  </Icon3D>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Tecnologia a serviço da sua saúde renal
            </motion.h3>
            
            <motion.p 
              className="text-lg text-[#23362B]/80 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Através da ultrassonografia POCUS, exames como MAPA e equipamentos modernos, 
              o diagnóstico e acompanhamento são muito mais precisos. Com isso, evitam-se 
              complicações graves, internações e avanço de doenças.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="group relative"
                  variants={item}
                >
                  <div className="flex items-start gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#7BAF96]/20 hover:shadow-xl transition-all duration-500 group-hover:scale-102 group-hover:bg-white">
                    {/* Enhanced 3D Icon */}
                    <div className="flex-shrink-0">
                      <Icon3D size="lg" variant="gradient" glowEffect={true}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </Icon3D>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold bg-gradient-to-r from-[#23362B] to-[#7BAF96] bg-clip-text text-transparent mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-[#23362B]/70 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                      <CustomEmoji type={feature.emoji as any} size="sm" animated={false} />
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#7BAF96]/5 to-[#23362B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
