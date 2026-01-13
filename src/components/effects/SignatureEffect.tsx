import React from 'react';

interface SignatureEffectProps {
  effect: 'grid-background' | 'status-ping' | 'glass-glow';
  className?: string;
}

export const SignatureEffect: React.FC<SignatureEffectProps> = ({ effect, className = '' }) => {
  if (effect === 'grid-background') {
    return (
      <div 
        className={`absolute inset-0 z-0 opacity-10 pointer-events-none ${className}`}
        style={{ 
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
    );
  }

  if (effect === 'status-ping') {
    return (
      <span className={`relative flex h-2 w-2 ${className}`}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
    );
  }

  if (effect === 'glass-glow') {
    return (
      <div className={`absolute top-0 right-0 w-64 h-64 bg-[#00f2ff] blur-[120px] opacity-20 ${className}`}></div>
    );
  }

  return null;
};
