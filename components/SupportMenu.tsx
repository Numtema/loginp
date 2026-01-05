
import React from 'react';
import { X, MessageCircle, Send, Phone, UserRound, Smartphone } from 'lucide-react';
import { THEME } from '../theme';

interface SupportMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportMenu: React.FC<SupportMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const tc = THEME.colors.support;
  const content = THEME.content.support;

  const options = [
    {
      name: 'Mbuntu',
      icon: (
        <div className="w-8 h-8 bg-[#FF4D00] rounded-full flex items-center justify-center text-white font-bold text-xs italic">
          M
        </div>
      ),
      bgColor: `bg-[${tc.mbuntu.bg}]`,
      textColor: `text-[${tc.mbuntu.text}]`,
      iconBg: 'bg-white shadow-md'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-7 h-7 text-[#25D366] fill-[#25D366]/10" />,
      bgColor: `bg-[${tc.whatsapp.bg}]`,
      textColor: `text-[${tc.whatsapp.text}]`,
      iconBg: 'bg-white shadow-md'
    },
    {
      name: 'Telegram',
      icon: <Send className="w-7 h-7 text-[#0088CC] fill-[#0088CC]/10" />,
      bgColor: `bg-[${tc.telegram.bg}]`,
      textColor: `text-[${tc.telegram.text}]`,
      iconBg: 'bg-white shadow-md'
    },
    {
      name: 'Appelez-nous',
      icon: <Phone className="w-7 h-7 text-[#00A859] fill-[#00A859]/10" />,
      bgColor: `bg-[${tc.calls.bg}]`,
      textColor: `text-[${tc.calls.text}]`,
      iconBg: 'bg-white shadow-md'
    },
    {
      name: 'Appelez Agent assistant',
      icon: <UserRound className="w-7 h-7 text-[#FF4D00] fill-[#FF4D00]/10" />,
      bgColor: `bg-[${tc.agent.bg}]`,
      textColor: `text-[${tc.agent.text}]`,
      iconBg: 'bg-white shadow-md'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-[#F9F9F9] rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden transform animate-slide-up">
        {/* Header */}
        <div style={{ backgroundColor: THEME.colors.primary }} className="p-7 text-white relative">
          <button onClick={onClose} className="absolute top-7 right-7 hover:bg-white/20 p-1.5 rounded-full transition-all active:scale-90">
            <X size={26} strokeWidth={2.5} />
          </button>
          <h2 className={`text-2xl font-bold tracking-tight ${THEME.typography.headerFont}`}>{content.headerTitle}</h2>
          <p className={`text-[15px] opacity-90 mt-0.5 ${THEME.typography.bodyFont}`}>{content.headerSub}</p>
        </div>

        {/* Options */}
        <div className="p-8 md:p-10 pb-12">
          <h3 className={`text-[1.85rem] leading-[1.1] font-extrabold text-[#111111] mb-10 max-w-[90%] ${THEME.typography.headerFont}`}>
            {content.mainQuestion}
          </h3>

          <div className="space-y-4 flex flex-col">
            {options.map((option) => (
              <button
                key={option.name}
                className={`w-full ${option.bgColor} hover:brightness-95 active:scale-[0.98] transition-all flex items-center gap-5 p-5 rounded-[2rem] shadow-sm border border-black/5 text-left group`}
              >
                <div className={`w-14 h-14 flex items-center justify-center rounded-full ${option.iconBg} shrink-0`}>
                  {option.icon}
                </div>
                <span className={`text-2xl font-bold ${option.textColor} ${THEME.typography.headerFont}`}>
                  {option.name}
                </span>
              </button>
            ))}
          </div>

          <footer className="mt-12 text-center px-4">
            <p className={`text-[13px] italic text-gray-400 font-medium leading-relaxed ${THEME.typography.bodyFont}`}>
              {content.availability}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
