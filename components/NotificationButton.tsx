
import React from 'react';
import { Gift } from 'lucide-react';
import { THEME } from '../theme';

interface NotificationButtonProps {
  onClick: () => void;
  count?: number;
}

export const NotificationButton: React.FC<NotificationButtonProps> = ({ onClick, count = 1 }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-28 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#FF4D00] shadow-xl shadow-orange-900/10 hover:scale-105 transition-all active:scale-95 z-50 group border border-gray-100 animate-in zoom-in slide-in-from-right-8 duration-500"
      aria-label="Voir les notifications"
    >
      <div className="relative">
        <Gift size={24} className="group-hover:rotate-12 transition-transform duration-300" />
        {count > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </div>
      
      {/* Tooltip / Label */}
      <span className={`absolute right-16 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap ${THEME.typography.headerFont}`}>
        {THEME.content.notification.label}
      </span>
    </button>
  );
};
