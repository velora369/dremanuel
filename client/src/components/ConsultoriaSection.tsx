import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_MESSAGES, createWhatsAppURL } from '@/lib/constants';
import { Building2, Users, ClipboardCheck, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const ConsultoriaSection: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Planejamento e Licenciamento",
      description: "Suporte completo desde a concepção até aprovação dos órgãos reguladores",
      detailedDescription: "Oferecemos análise de viabilidade técnica e econômica, elaboração de projetos arquitetônicos e de engenharia, assessoria na obtenção de licenças sanitárias junto à ANVISA, acompanhamento dos processos de aprovação em órgãos reguladores e suporte na documentação necessária para credenciamento junto ao SUS."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Treinamento de Equipes",
      description: "Capacitação especializada para profissionais de saúde em nefrologia",
      detailedDescription: "Desenvolvemos programas de capacitação customizados para médicos, enfermeiros e técnicos, incluindo treinamento em protocolos clínicos de hemodiálise, manejo de complicações, uso de equipamentos especializados, e implementação de boas práticas de segurança e qualidade no atendimento nefrológico."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Implementação Operacional",
      description: "Acompanhamento completo do início das operações e processos",
      detailedDescription: "Acompanhamos todo o processo de startup da unidade, desde a instalação e calibração de equipamentos, desenvolvimento de protocolos operacionais padrão, implementação de sistemas de gestão de qualidade, até o início efetivo das atividades com supervisão técnica especializada."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Experiência Comprovada",
      description: "Sucesso na transformação de serviços de nefrologia no Pará",
      detailedDescription: "Com mais de uma década de experiência, participamos da implementação e coordenação de serviços de nefrologia de referência no Pará, desenvolvendo modelos de atendimento que se tornaram benchmarks regionais em qualidade assistencial e eficiência operacional."
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
              dos serviços de nefrologia no Pará.
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
              className={`bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center card-hover cursor-pointer transition-all duration-300 ${
                expandedCard === index ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              variants={item}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 } 
              }}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl mb-4 ring-4 ring-secondary/10">
                {feature.icon}
              </div>
              <h3 className="font-montserrat font-semibold text-primary mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-xs text-primary/70 leading-relaxed mb-3">
                {feature.description}
              </p>
              
              {expandedCard === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <div className="border-t border-primary/10 pt-3 mt-3">
                    <p className="text-xs text-primary/80 leading-relaxed text-left">
                      {feature.detailedDescription}
                    </p>
                  </div>
                </motion.div>
              )}
              
              <div className="flex items-center justify-center mt-2 text-primary/50">
                {expandedCard === index ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </div>
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