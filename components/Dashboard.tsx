
import React from 'react';
import { LogOut, ShieldCheck, Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { THEME } from '../theme';

export const Dashboard: React.FC = () => {
  const { user, logout, token } = useAuth();
  const t = THEME.content.dashboard;

  return (
    <div className="w-full h-full flex flex-col justify-center animate-in fade-in zoom-in duration-500">
        <div className="mb-8">
            <h1 className={`text-4xl font-extrabold mb-2 text-gray-900 ${THEME.typography.headerFont}`}>
                {t.welcome} <span style={{ color: THEME.colors.primary }}>{user?.name}</span>
            </h1>
            <div className="flex items-center gap-2 text-green-600 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
                <ShieldCheck size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Session Active & Sécurisée</span>
            </div>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 mb-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4 text-gray-500">
                    <Wallet size={20} />
                    <span className={`text-sm font-bold uppercase tracking-widest ${THEME.typography.headerFont}`}>{t.balanceTitle}</span>
                </div>
                <div className={`text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-8 ${THEME.typography.headerFont}`}>
                    {t.balanceValue}
                </div>

                <div className="flex gap-4">
                    <button className="flex-1 bg-black text-white py-4 rounded-[1.25rem] font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                        <ArrowUpRight size={20} />
                        Envoyer
                    </button>
                    <button className="flex-1 bg-orange-50 text-[#FF4D00] py-4 rounded-[1.25rem] font-bold flex items-center justify-center gap-2 hover:bg-orange-100 transition-colors">
                        <ArrowDownLeft size={20} />
                        Recevoir
                    </button>
                </div>
            </div>
        </div>

        {/* Token Debug Info (Technical Proof) */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-200 break-all">
            <p className="text-[10px] text-gray-400 font-mono uppercase mb-2">JWT Token (LocalStorage):</p>
            <p className="text-[10px] text-gray-600 font-mono leading-relaxed">{token?.substring(0, 50)}...{token?.substring(token.length - 20)}</p>
        </div>

        <button 
            onClick={logout}
            className={`w-full py-4 rounded-[1.25rem] border-2 border-gray-200 font-bold text-gray-600 flex items-center justify-center gap-2 hover:border-[#FF4D00] hover:text-[#FF4D00] hover:bg-white transition-all ${THEME.typography.headerFont}`}
        >
            <LogOut size={20} />
            {t.logout}
        </button>
    </div>
  );
};
