import React from 'react';
import { motion } from 'framer-motion';

interface CustomEmojiProps {
  type: 'success' | 'care' | 'technology' | 'award' | 'heart' | 'shield' | 'star' | 'medical';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
  className?: string;
}

const CustomEmoji: React.FC<CustomEmojiProps> = ({ 
  type, 
  size = 'md', 
  animated = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const emojiDesigns = {
    success: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="successGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#7BAF96" />
            <stop offset="100%" stopColor="#23362B" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#successGrad)" stroke="#D8D2C0" strokeWidth="2"/>
        <circle cx="35" cy="40" r="4" fill="#D8D2C0"/>
        <circle cx="65" cy="40" r="4" fill="#D8D2C0"/>
        <path d="M 30 60 Q 50 75 70 60" stroke="#D8D2C0" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="25" cy="25" r="3" fill="#D8D2C0" opacity="0.6"/>
      </svg>
    ),
    care: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="careGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#7BAF96" />
            <stop offset="100%" stopColor="#23362B" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#careGrad)" stroke="#D8D2C0" strokeWidth="2"/>
        <path d="M 50 30 C 40 20, 20 20, 20 40 C 20 60, 50 75, 50 75 C 50 75, 80 60, 80 40 C 80 20, 60 20, 50 30 Z" fill="#D8D2C0"/>
        <circle cx="25" cy="25" r="2" fill="#D8D2C0" opacity="0.7"/>
        <circle cx="75" cy="30" r="1.5" fill="#D8D2C0" opacity="0.5"/>
      </svg>
    ),
    technology: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7BAF96" />
            <stop offset="100%" stopColor="#23362B" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="80" height="80" rx="15" fill="url(#techGrad)" stroke="#D8D2C0" strokeWidth="2"/>
        <circle cx="30" cy="35" r="3" fill="#D8D2C0"/>
        <circle cx="70" cy="35" r="3" fill="#D8D2C0"/>
        <rect x="35" y="55" width="30" height="4" rx="2" fill="#D8D2C0"/>
        <circle cx="20" cy="20" r="2" fill="#D8D2C0" opacity="0.6"/>
        <circle cx="80" cy="25" r="1.5" fill="#D8D2C0" opacity="0.4"/>
      </svg>
    ),
    award: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="awardGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#D8D2C0" />
            <stop offset="100%" stopColor="#7BAF96" />
          </radialGradient>
        </defs>
        <polygon points="50,10 60,35 85,35 67,52 75,78 50,65 25,78 33,52 15,35 40,35" fill="url(#awardGrad)" stroke="#23362B" strokeWidth="2"/>
        <circle cx="50" cy="45" r="8" fill="#23362B"/>
        <circle cx="25" cy="25" r="2" fill="#D8D2C0" opacity="0.8"/>
        <circle cx="75" cy="20" r="1.5" fill="#D8D2C0" opacity="0.6"/>
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="heartGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#7BAF96" />
            <stop offset="100%" stopColor="#23362B" />
          </radialGradient>
        </defs>
        <path d="M 50 25 C 40 10, 10 10, 10 40 C 10 70, 50 85, 50 85 C 50 85, 90 70, 90 40 C 90 10, 60 10, 50 25 Z" fill="url(#heartGrad)" stroke="#D8D2C0" strokeWidth="2"/>
        <circle cx="30" cy="30" r="2" fill="#D8D2C0" opacity="0.7"/>
        <circle cx="70" cy="35" r="1.5" fill="#D8D2C0" opacity="0.5"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7BAF96" />
            <stop offset="100%" stopColor="#23362B" />
          </linearGradient>
        </defs>
        <path d="M 50 10 L 80 25 L 80 50 C 80 70, 50 85, 50 85 C 50 85, 20 70, 20 50 L 20 25 Z" fill="url(#shieldGrad)" stroke="#D8D2C0" strokeWidth="2"/>
        <path d="M 40 45 L 47 52 L 62 37" stroke="#D8D2C0" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="25" cy="20" r="1.5" fill="#D8D2C0" opacity="0.6"/>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="starGrad" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#D8D2C0" />
            <stop offset="100%" stopColor="#7BAF96" />
          </radialGradient>
        </defs>
        <polygon points="50,5 62,35 95,35 70,55 82,85 50,65 18,85 30,55 5,35 38,35" fill="url(#starGrad)" stroke="#23362B" strokeWidth="2"/>
        <circle cx="20" cy="20" r="2" fill="#D8D2C0" opacity="0.7"/>
        <circle cx="80" cy="25" r="1.5" fill="#D8D2C0" opacity="0.5"/>
      </svg>
    ),
    medical: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="medicalGrad" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#7BAF96" />
            <stop offset="100%" stopColor="#23362B" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#medicalGrad)" stroke="#D8D2C0" strokeWidth="2"/>
        <rect x="40" y="25" width="20" height="50" rx="2" fill="#D8D2C0"/>
        <rect x="25" y="40" width="50" height="20" rx="2" fill="#D8D2C0"/>
        <circle cx="25" cy="25" r="2" fill="#D8D2C0" opacity="0.6"/>
        <circle cx="75" cy="30" r="1.5" fill="#D8D2C0" opacity="0.4"/>
      </svg>
    )
  };

  const animationProps = animated ? {
    animate: {
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className} flex-shrink-0`}
      whileHover={animated ? { scale: 1.1, rotate: 10 } : {}}
      {...animationProps}
    >
      {emojiDesigns[type]}
    </motion.div>
  );
};

export default CustomEmoji;