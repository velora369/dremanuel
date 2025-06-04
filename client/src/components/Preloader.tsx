import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo-emanuel-novo.png';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Wait a bit before starting fade out
          setTimeout(() => {
            setIsVisible(false);
            // Call onLoadingComplete after fade out animation
            setTimeout(onLoadingComplete, 500);
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#F8F7F4] to-white flex flex-col items-center justify-center"
        >
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <img 
                  src={logoImage} 
                  alt="Logo Dr. Emanuel Esposito" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <div className="mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#23362B] font-montserrat">
                  Dr. Emanuel Esposito
                </h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg text-[#7BAF96] font-medium"
              >
                Nefrologia & Medicina Interna
              </motion.p>
            </div>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-80 max-w-[90vw]"
          >
            {/* Progress Bar Container */}
            <div className="relative">
              <div className="w-full h-2 bg-[#D8D2C0]/50 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#7BAF96] to-[#23362B] rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              
              {/* Animated glow effect */}
              <motion.div
                className="absolute top-0 left-0 h-2 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                animate={{ 
                  x: [`-64px`, `${(progress / 100) * 320}px`],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-4"
            >
              <span className="text-[#23362B] font-medium text-sm">
                {Math.round(progress)}%
              </span>
            </motion.div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <motion.p
              animate={{ 
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#7BAF96] text-sm font-medium"
            >
              Carregando experiência médica especializada...
            </motion.p>
          </motion.div>


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;