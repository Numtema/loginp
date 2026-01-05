
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <div className="flex items-center gap-1.5">
        <div className="relative w-11 h-11">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path 
              d="M30 40 L70 20 L85 45 L45 65 Z" 
              fill="#FF4D00" 
            />
            <path 
              d="M20 50 L60 30 L75 55 L35 75 Z" 
              fill="white" 
              stroke="#FF4D00" 
              strokeWidth="5"
            />
            <path 
              d="M10 60 L50 40 L65 65 L25 85 Z" 
              fill="#FF4D00" 
            />
          </svg>
        </div>
        <span className="text-4xl font-black tracking-tighter text-gray-900 leading-none font-degular">
          tara
        </span>
      </div>
      <div className="flex justify-between w-[95px] pl-[48px]">
        {['M', 'O', 'N', 'E', 'Y'].map((char) => (
          <span key={char} className="text-[9px] font-black tracking-[0.25em] text-gray-400 font-helvetica">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
