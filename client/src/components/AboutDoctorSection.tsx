import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_URL } from '@/lib/constants';

const AboutDoctorSection: React.FC = () => {
  const stats = [
    { value: "120+", label: "Transplantes realizados" },
    { value: "20+", label: "Anos de experiência" },
    { value: "5000+", label: "Pacientes atendidos" },
    { value: "150+", label: "Artigos publicados" },
    { value: "25+", label: "Prêmios recebidos" },
    { value: "10+", label: "Projetos de pesquisa" }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div 
            className="max-w-3xl mx-auto"
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
              Nascido em Cuiabá/MT, Dr. Emanuel atua desde 2002, com foco em nefrologia, transplantes e inovação médica. Coordena o serviço de nefrologia do HRBA, transformando a realidade da saúde renal na região amazônica. É professor efetivo da graduação e preceptor da residência médica da UEPA. Atua também como pesquisador e mestrando em Inovação Terapêutica pela UFOPA.
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
