import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
        {/* Background Boxes */}
        <rect x="5" y="5" width="90" height="90" rx="25" stroke="#555555" strokeWidth="6" />
        <rect x="105" y="5" width="90" height="90" rx="25" stroke="#555555" strokeWidth="6" />
        <rect x="205" y="5" width="90" height="90" rx="25" stroke="#555555" strokeWidth="6" />
        
        {/* Q */}
        <path d="M35 30H65V60H55L65 70V75H55L45 65V60H35V30ZM45 40V50H55V40H45Z" fill="#00D100" />
        
        {/* N */}
        <path d="M125 30H135L165 60V30H175V70H165L135 40V70H125V30Z" fill="#555555" />
        
        {/* T */}
        <path d="M215 30H285V40H255V70H245V40H215V30Z" fill="#555555" />
      </svg>
      <span className="ml-2 text-2xl font-display font-bold text-brand-gray tracking-tighter">
        <span className="text-brand-green">Q</span>NT
      </span>
    </div>
  );
};
