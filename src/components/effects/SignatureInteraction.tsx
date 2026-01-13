import React from 'react';
import { motion } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'marquee' | 'text-reveal' | 'hover-lift';
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const SignatureInteraction: React.FC<SignatureInteractionProps> = ({ 
  type, 
  children, 
  className = '',
  speed = 20
}) => {
  if (type === 'marquee') {
    return (
      <div className={`overflow-hidden flex ${className}`} style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        <motion.div
          className="flex flex-nowrap whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: speed 
          }}
        >
          {children}
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'text-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (type === 'hover-lift') {
    return (
      <motion.div
        whileHover={{ 
          y: -5, 
          borderColor: '#00f2ff',
          boxShadow: '0 10px 40px -10px rgba(0, 242, 255, 0.15)'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
