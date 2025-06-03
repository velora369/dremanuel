import React from 'react';
import { motion } from 'framer-motion';

interface Icon3DProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  variant?: 'primary' | 'secondary' | 'accent' | 'gradient' | 'glassmorphism';
  className?: string;
  interactive?: boolean;
  glowEffect?: boolean;
}

const Icon3D: React.FC<Icon3DProps> = ({ 
  children, 
  size = 'md', 
  variant = 'glassmorphism',
  className = '',
  interactive = true,
  glowEffect = true
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12 p-3 text-sm',
    md: 'w-16 h-16 p-4 text-base',
    lg: 'w-20 h-20 p-5 text-lg',
    xl: 'w-24 h-24 p-6 text-xl',
    xxl: 'w-32 h-32 p-8 text-2xl'
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-br from-[#23362B] to-[#1a2820]
      text-white shadow-xl border border-[#7BAF96]/20
      hover:shadow-[0_0_30px_rgba(123,175,150,0.3)]
    `,
    secondary: `
      bg-gradient-to-br from-[#7BAF96] to-[#6a9c85]
      text-white shadow-xl border border-[#23362B]/20
      hover:shadow-[0_0_30px_rgba(35,54,43,0.3)]
    `,
    accent: `
      bg-gradient-to-br from-[#D8D2C0] to-[#c7c0ac]
      text-[#23362B] shadow-xl border border-[#7BAF96]/30
      hover:shadow-[0_0_30px_rgba(216,210,192,0.4)]
    `,
    gradient: `
      bg-gradient-to-br from-[#7BAF96] via-[#8bc4a3] to-[#23362B]
      text-white shadow-2xl border border-white/20
      hover:shadow-[0_0_40px_rgba(123,175,150,0.5)]
    `,
    glassmorphism: `
      bg-white/10 backdrop-blur-md
      text-[#23362B] shadow-2xl
      border border-white/20
      hover:bg-white/20 hover:border-[#7BAF96]/40
      hover:shadow-[0_0_30px_rgba(123,175,150,0.3)]
    `
  };

  const hoverAnimations = interactive ? {
    scale: [1, 1.05, 1.02],
    rotateY: [0, 10, 0],
    rotateX: [0, -5, 0],
    transition: { 
      duration: 0.6,
      ease: "easeInOut"
    }
  } : {};

  const glowVariants = {
    initial: { 
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)" 
    },
    hover: glowEffect ? { 
      boxShadow: [
        "0 10px 25px rgba(0,0,0,0.1)",
        "0 15px 35px rgba(123,175,150,0.3), 0 0 20px rgba(123,175,150,0.2)",
        "0 10px 30px rgba(123,175,150,0.25)"
      ],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    } : {}
  };

  return (
    <motion.div
      className={`
        relative rounded-2xl flex items-center justify-center
        transform-gpu transition-all duration-300
        ${sizeClasses[size]}
        ${variantStyles[variant]}
        ${className}
      `}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={hoverAnimations}
      whileTap={interactive ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={glowVariants}
    >
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-40" />
      
      {/* 3D depth shadow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-black/10 transform translate-y-1 translate-x-1 -z-10" />
      
      {/* Icon content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
      
      {/* Floating particles effect for premium feel */}
      {glowEffect && (
        <motion.div
          className="absolute -inset-2 rounded-2xl opacity-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(123,175,150,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(35,54,43,0.1) 0%, transparent 50%)
            `
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
};

export default Icon3D;