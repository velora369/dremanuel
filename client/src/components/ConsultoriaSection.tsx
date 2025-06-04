import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGES, createWhatsAppURL } from '@/lib/constants';
import { Building2, Users, ClipboardCheck, GraduationCap } from 'lucide-react';

const ConsultoriaSection: React.FC = () => {
  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Planejamento e Licenciamento",
      description: "Suporte completo desde a concepção até aprovação dos órgãos reguladores"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Treinamento de Equipes",
      description: "Capacitação especializada para profissionais de saúde em nefrologia"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Implementação Operacional",
      description: "Acompanhamento completo do início das operações e processos"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Experiência Comprovada",
      description: "Sucesso na transformação de serviços de nefrologia em Rondônia"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold font-montserrat text-primary mb-6">
            Consultoria Especializada: Implementação de Serviços de Hemodiálise e Transplante Renal
          </h2>
          <div className="prose prose-lg max-w-none text-primary/80">
            <p className="mb-4">
              Com <strong>vasta experiência na estruturação e gestão de serviços de nefrologia de alta complexidade</strong>, 
              o Dr. Emanuel Esposito oferece consultoria especializada para a implementação de unidades de hemodiálise 
              e programas de transplante renal em novas localidades.
            </p>
            <p className="mb-4">
              Auxiliamos hospitais e clínicas em todo o processo, desde o <strong>planejamento e licenciamento</strong> até o 
              <strong> treinamento de equipes e início das operações</strong>, replicando o sucesso alcançado na transformação 
              dos serviços de nefrologia em Rondônia.
            </p>
            <p>
              Nossa abordagem integrada garante que novos centros de tratamento renal sejam estabelecidos com os mais altos 
              padrões de qualidade e eficiência, proporcionando cuidados especializados onde são mais necessários.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover"
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl mb-4 ring-4 ring-secondary/10">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-primary mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-xs text-primary/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href={createWhatsAppURL(WHATSAPP_MESSAGES.TEAM_CONSULTATION)} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg" className="btn-primary">
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              Solicitar Consultoria Especializada
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultoriaSection;