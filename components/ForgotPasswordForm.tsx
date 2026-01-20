
import React, { useState } from 'react';
import { Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { THEME } from '../theme';

interface ForgotPasswordFormProps {
  onBack: () => void;
}

export const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const t = THEME.content.forgotPassword;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-7">
      <div className={`text-base text-gray-600 mb-6 font-medium leading-relaxed ${THEME.typography.bodyFont}`}>
        {t.instruction}
      </div>

      {/* Email Field */}
      <div className="space-y-2.5">
        <label className={`text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ${THEME.typography.headerFont}`}>
          {t.emailLabel} <span style={{ color: THEME.colors.primary }}>*</span>
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#FF4D00] transition-colors" />
          </div>
          <div className="absolute inset-y-4 left-[3.25rem] border-l border-gray-200" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className={`block w-full pl-16 pr-5 py-5 bg-gray-100/50 border-none rounded-[1.25rem] focus:ring-2 focus:ring-[#FF4D00] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400 font-medium ${THEME.typography.bodyFont}`}
          />
        </div>
      </div>

      <button
        type="submit"
        style={{ backgroundColor: THEME.colors.primary }}
        className={`w-full hover:brightness-90 text-white font-extrabold text-xl py-5.5 px-6 rounded-[1.25rem] flex items-center justify-center gap-3 transform active:scale-[0.98] transition-all shadow-2xl shadow-orange-500/25 mt-4 ${THEME.typography.headerFont}`}
      >
        {t.submitBtn}
        <ArrowRight size={24} strokeWidth={3} />
      </button>

      <div className="flex justify-center mt-6">
        <button
          type="button"
          onClick={onBack}
          className={`flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors ${THEME.typography.headerFont} tracking-wide`}
        >
          <ArrowLeft size={16} strokeWidth={3} />
          {t.backToLogin}
        </button>
      </div>
    </form>
  );
};
