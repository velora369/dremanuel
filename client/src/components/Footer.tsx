import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="font-montserrat font-bold text-xl mb-1">Dr. Emanuel Esposito</div>
            <p className="text-white/70 text-sm">Médico Nefrologista | CRM-PA: 9173</p>
            <p className="text-white/70 text-sm">RQE CM: 8787 | RQE NEFRO: 8786</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-3">
              <a href="#" className="text-white hover:text-[#D8D2C0] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#D8D2C0] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#D8D2C0] transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-white hover:text-[#D8D2C0] transition-colors">
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
