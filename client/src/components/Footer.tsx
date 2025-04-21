import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start">
            <div className="h-16 w-auto mb-4">
              <img 
                src="/images/logo-emanuel-esposito.webp" 
                alt="Logo Dr. Emanuel Esposito" 
                className="h-full w-auto object-contain brightness-[1.5]"
              />
            </div>
            <div className="font-montserrat font-bold text-xl mb-1">Dr. Emanuel Esposito</div>
            <p className="text-white/70 text-sm">Médico Nefrologista | CRM-PA: 9173</p>
            <p className="text-white/70 text-sm">RQE CM: 8787 | RQE NEFRO: 8786</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <a href="https://www.instagram.com/nefro.esposito?igsh=MTlpbDM5ZGc3aXJzZg==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D8D2C0] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5593991674540" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#D8D2C0] transition-colors">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
            <p className="text-white/70 text-sm">© {new Date().getFullYear()} Dr. Emanuel Esposito. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
