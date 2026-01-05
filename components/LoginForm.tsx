
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { THEME } from '../theme';

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const t = THEME.content.login;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-7">
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

      {/* Password Field */}
      <div className="space-y-2.5">
        <label className={`text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ${THEME.typography.headerFont}`}>
          {t.passwordLabel} <span style={{ color: THEME.colors.primary }}>*</span>
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#FF4D00] transition-colors" />
          </div>
          <div className="absolute inset-y-4 left-[3.25rem] border-l border-gray-200" />
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.passwordPlaceholder}
            className={`block w-full pl-16 pr-14 py-5 bg-gray-100/50 border-none rounded-[1.25rem] focus:ring-2 focus:ring-[#FF4D00] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400 font-medium ${THEME.typography.bodyFont}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-[#FF4D00] transition-colors"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>
      </div>

      {/* Toggle Section */}
      <div className="flex items-center justify-between py-4 px-6 bg-gray-100/40 rounded-[1.25rem] border border-black/5">
        <div className="flex flex-col">
          <span className={`text-[16px] font-bold text-gray-900 tracking-tight ${THEME.typography.headerFont}`}>
            {t.rememberMe}
          </span>
          <span className={`text-[12px] text-gray-500 font-medium ${THEME.typography.bodyFont}`}>
            {t.rememberMeSub}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setRememberMe(!rememberMe)}
          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
            rememberMe ? 'bg-[#FF4D00]' : 'bg-gray-300'
          }`}
        >
          <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 shadow-sm ${rememberMe ? 'translate-x-6' : 'translate-x-1'}`} />
        </button>
      </div>

      <div className="flex justify-end">
        <a href="#" className={`text-sm underline font-bold text-gray-900 hover:text-[#FF4D00] transition-colors ${THEME.typography.bodyFont}`}>
          {t.forgotPassword}
        </a>
      </div>

      <button
        type="submit"
        style={{ backgroundColor: THEME.colors.primary }}
        className={`w-full hover:brightness-90 text-white font-extrabold text-xl py-5.5 px-6 rounded-[1.25rem] flex items-center justify-center gap-3 transform active:scale-[0.98] transition-all shadow-2xl shadow-orange-500/25 ${THEME.typography.headerFont}`}
      >
        {t.submitBtn}
        <ArrowRight size={24} strokeWidth={3} />
      </button>
    </form>
  );
};
