// Contact information
export const WHATSAPP_PHONE = "5593991674540";
export const WHATSAPP_BASE_URL = "https://api.whatsapp.com/send";

// Social Media Links
export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/nefro.esposito?igsh=MTlpbDM5ZGc3aXJzZg==",
  WHATSAPP: `https://api.whatsapp.com/send?1=pt_BR&phone=${WHATSAPP_PHONE}`
};

// WhatsApp Messages
export const WHATSAPP_MESSAGES = {
  // Mensagens para tipos de consulta
  CONSULTATION_PRESENCIAL: "Olá, tenho interesse em agendar uma consulta presencial com o Dr. Emanuel Esposito.",
  CONSULTATION_TELEMEDICINA: "Olá, tenho interesse em agendar uma consulta online (telemedicina) com o Dr. Emanuel Esposito.",
  
  // Mensagens por especialidade
  DOENCA_RENAL_CRONICA: "Olá! Gostaria de agendar uma consulta sobre doença renal crônica com o Dr. Emanuel Esposito.",
  LITIASE_RENAL: "Olá! Tenho interesse em consulta para tratamento de pedras nos rins com o Dr. Emanuel Esposito.",
  HIPERTENSAO: "Olá! Gostaria de agendar consulta para controle de hipertensão arterial com o Dr. Emanuel Esposito.",
  INFECCAO_URINARIA: "Olá! Preciso de consulta para tratamento de infecção urinária com o Dr. Emanuel Esposito.",
  NEFRITES: "Olá! Gostaria de agendar consulta sobre nefrites com o Dr. Emanuel Esposito.",
  DIABETES_RENAL: "Olá! Tenho interesse em consulta para doença renal do diabetes com o Dr. Emanuel Esposito.",
  CISTOS_RENAIS: "Olá! Gostaria de agendar consulta sobre cistos renais com o Dr. Emanuel Esposito.",
  TRANSPLANTE_RENAL: "Olá! Gostaria de agendar consulta sobre transplante renal com o Dr. Emanuel Esposito.",
  
  // Outras mensagens
  COURSE_POCUS: "Olá! Tenho interesse no curso de POCUS do Dr. Emanuel Esposito. Gostaria de mais informações.",
  TECHNOLOGY_APPOINTMENT: "Olá! Tenho interesse em conhecer as tecnologias avançadas do consultório do Dr. Emanuel Esposito.",
  
  // Mensagem para conversar com equipe
  TEAM_CONSULTATION: "Olá, gostaria de saber qual é o melhor formato de atendimento para meu caso.",
  
  // Mensagem geral (fallback)
  GENERAL_INFO: "Olá! Gostaria de mais informações sobre os serviços do Dr. Emanuel Esposito."
};

// Helper function to create WhatsApp URL
export const createWhatsAppURL = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `${WHATSAPP_BASE_URL}?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;
};

// Award information
export const AWARDS = [
  {
    icon: "award",
    title: "Cidadão Santareno",
    description: "Câmara Municipal de Santarém (2021)"
  },
  {
    icon: "graduation-cap",
    title: "Professor Homenageado",
    description: "UEPA – Turma 2013.2 (2019)"
  },
  {
    icon: "medal",
    title: "Medalha da Solidariedade",
    description: "ALEPA, Doador de Órgãos (2019)"
  },
  {
    icon: "heart-handshake",
    title: "Moção de Louvor",
    description: "Primeiro Transplante de Rim no HRBA (2016)"
  }
];

export const MORE_AWARDS = [
  {
    icon: "trophy",
    title: "Menção Honrosa - 3º Lugar",
    description: "II Salão Científico de Medicina – UEPA (2018)"
  },
  {
    icon: "crown",
    title: "Menção Honrosa - 1º Lugar",
    description: "II Salão Científico de Medicina – UEPA (2018)"
  },
  {
    icon: "file-check",
    title: "Certificação Profissional",
    description: "AMB + SBN (2012)"
  },
  {
    icon: "scroll",
    title: "Título de Especialista",
    description: "Nefrologia – SBN (2006)"
  }
];

// Specialties
export const SPECIALTIES = [
  {
    icon: "kidney",
    title: "Doença renal crônica",
    description: "Diagnóstico precoce e tratamento para retardar a progressão",
    detailedDescription: "A doença renal crônica é uma condição progressiva que afeta a capacidade dos rins de filtrar adequadamente o sangue. O diagnóstico precoce é fundamental para retardar sua progressão e evitar a necessidade de diálise ou transplante. O tratamento inclui controle rigoroso da pressão arterial, diabetes, uso de medicações específicas e acompanhamento nutricional especializado."
  },
  {
    icon: "gem",
    title: "Litíase renal",
    description: "Tratamento e prevenção de pedras nos rins",
    detailedDescription: "As pedras nos rins (cálculos renais) são formações sólidas que se desenvolvem quando substâncias como cálcio, oxalato e ácido úrico se concentram na urina. O tratamento varia desde mudanças dietéticas e aumento da ingestão de líquidos até procedimentos minimamente invasivos como litotripsia. A prevenção é fundamental através de orientação nutricional personalizada."
  },
  {
    icon: "heart-pulse",
    title: "Hipertensão arterial",
    description: "Controle especializado com monitoramento MAPA",
    detailedDescription: "A hipertensão arterial é uma das principais causas de doença renal. O controle adequado da pressão arterial é essencial para proteger os rins e o coração. Utilizamos monitoramento ambulatorial da pressão arterial (MAPA) para avaliação precisa e ajuste personalizado das medicações, garantindo controle otimizado 24 horas por dia."
  },
  {
    icon: "bug",
    title: "Infecção urinária",
    description: "Tratamento de infecções complexas e recorrentes",
    detailedDescription: "Infecções urinárias de repetição ou complicadas requerem investigação especializada para identificar fatores predisponentes. O tratamento vai além dos antibióticos, incluindo correção de alterações anatômicas, orientações preventivas e, quando necessário, profilaxia específica. Casos complexos podem estar relacionados a problemas estruturais do trato urinário."
  },
  {
    icon: "shield-alert",
    title: "Nefrites",
    description: "Diagnóstico e tratamento de inflamações renais",
    detailedDescription: "As nefrites são inflamações dos glomérulos renais que podem ser causadas por doenças autoimunes, infecções ou outras condições sistêmicas. O diagnóstico precoce através de exames especializados e, quando necessário, biópsia renal, permite tratamento direcionado com imunossupressores ou outras terapias específicas para preservar a função renal."
  },
  {
    icon: "syringe",
    title: "Doença renal do diabetes",
    description: "Cuidado especializado da nefropatia diabética",
    detailedDescription: "A nefropatia diabética é uma complicação comum do diabetes que afeta os rins. O controle rigoroso da glicemia e pressão arterial, associado ao uso de medicações específicas como inibidores da ECA ou bloqueadores do receptor de angiotensina, pode prevenir ou retardar significativamente a progressão para insuficiência renal terminal."
  },
  {
    icon: "network",
    title: "Cistos renais",
    description: "Diagnóstico, acompanhamento e tratamento de cistos renais",
    detailedDescription: "Os cistos renais podem ser simples (benignos) ou complexos (requerendo investigação adicional). A avaliação inclui ultrassonografia, tomografia ou ressonância magnética para caracterização adequada. Cistos simples geralmente apenas necessitam acompanhamento, enquanto cistos complexos podem requerer biópsia ou tratamento cirúrgico dependendo das características encontradas."
  },
  {
    icon: "heart-handshake",
    title: "Transplante Renal",
    description: "Avaliação pré-transplante, acompanhamento pós-operatório e manejo de imunossupressão.",
    detailedDescription: "O transplante renal é a melhor opção de tratamento para pacientes com doença renal terminal. Oferecemos avaliação completa pré-transplante, incluindo exames de compatibilidade e preparação do paciente. Após o transplante, realizamos acompanhamento especializado com ajuste da imunossupressão, prevenção de rejeição e manejo de complicações, garantindo a melhor sobrevida do enxerto."
  }
];

// Course features
export const COURSE_FEATURES = [
  "Acesso por 1 ano",
  "Videoaulas gravadas",
  "Certificado incluso",
  "Ensino direto com especialistas"
];

export const COURSE_TOPICS = [
  {
    title: "Fundamentos do POCUS",
    description: "Princípios básicos da ultrassonografia point-of-care"
  },
  {
    title: "Aplicações Clínicas",
    description: "Uso prático em diferentes condições e especialidades"
  },
  {
    title: "Interpretação de Imagens",
    description: "Como identificar alterações e fazer diagnósticos precisos"
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    quote: "O Dr. Emanuel me salvou da diálise. Atuação precisa, humana e com tecnologia que nunca vi em outro consultório.",
    author: "Maria Silva",
    type: "Avaliação Google",
    rating: 5,
    isGoogle: true
  },
  {
    quote: "Médico extremamente profissional e atencioso. Encontrei no Dr. Emanuel o apoio necessário para tratar minha condição renal. Recomendo fortemente!",
    author: "João Pereira",
    type: "Avaliação Google",
    rating: 5,
    isGoogle: true
  },
  {
    quote: "Atendimento humanizado e de alta qualidade. O Dr. Emanuel explica tudo com clareza e paciência. Finalmente entendi minha condição e como tratá-la.",
    author: "Ana Carla Santos",
    type: "Avaliação Google",
    rating: 5,
    isGoogle: true
  }
];

// Theme colors
export const COLORS = {
  primary: "#23362B",
  secondary: "#7BAF96",
  tertiary: "#D8D2C0",
  lightBg: "#F8F7F4"
};
