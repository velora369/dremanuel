import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">

            <div className="font-montserrat font-bold text-xl mb-1">Dr. Emanuel Esposito</div>
            <p className="text-white/70 text-sm">Médico Nefrologista | CRM-PA: 9173</p>
            <p className="text-white/70 text-sm">RQE CM: 8787 | RQE NEFRO: 8786</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <motion.a 
                href="https://www.instagram.com/nefro.esposito?igsh=MTlpbDM5ZGc3aXJzZg==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#D8D2C0] transition-colors p-3 rounded-full bg-secondary/20 backdrop-blur-sm shadow-lg"
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -6, 0],
                  rotateZ: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              >
                <i className="fab fa-instagram text-2xl"></i>
              </motion.a>
              <motion.a 
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5593991674540" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-[#D8D2C0] transition-colors p-3 rounded-full bg-secondary/20 backdrop-blur-sm shadow-lg"
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -6, 0],
                  rotateZ: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut",
                  delay: 0.5 
                }}
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </motion.a>
            </div>
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} Dr. Emanuel Esposito. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
