
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, User, Smartphone, Loader2 } from 'lucide-react';
import { THEME } from '../theme';
import { useAuth } from '../context/AuthContext';

export const SignupForm: React.FC = () => {
  const { signup, isLoading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const t = THEME.content.signup;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({ name, phone, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div className="space-y-2.5">
        <label className={`text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ${THEME.typography.headerFont}`}>
          {t.nameLabel} <span style={{ color: THEME.colors.primary }}>*</span>
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#FF4D00] transition-colors" />
          </div>
          <div className="absolute inset-y-4 left-[3.25rem] border-l border-gray-200" />
          <input
            type="text"
            required
            disabled={isLoading}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            className={`block w-full pl-16 pr-5 py-5 bg-gray-100/50 border-none rounded-[1.25rem] focus:ring-2 focus:ring-[#FF4D00] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400 font-medium ${THEME.typography.bodyFont} disabled:opacity-50`}
          />
        </div>
      </div>

      {/* Phone Field */}
      <div className="space-y-2.5">
        <label className={`text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] ${THEME.typography.headerFont}`}>
          {t.phoneLabel} <span style={{ color: THEME.colors.primary }}>*</span>
        </label>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Smartphone className="h-5 w-5 text-gray-400 group-focus-within:text-[#FF4D00] transition-colors" />
          </div>
          <div className="absolute inset-y-4 left-[3.25rem] border-l border-gray-200" />
          <input
            type="tel"
            required
            disabled={isLoading}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={t.phonePlaceholder}
            className={`block w-full pl-16 pr-5 py-5 bg-gray-100/50 border-none rounded-[1.25rem] focus:ring-2 focus:ring-[#FF4D00] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400 font-medium ${THEME.typography.bodyFont} disabled:opacity-50`}
          />
        </div>
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
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className={`block w-full pl-16 pr-5 py-5 bg-gray-100/50 border-none rounded-[1.25rem] focus:ring-2 focus:ring-[#FF4D00] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400 font-medium ${THEME.typography.bodyFont} disabled:opacity-50`}
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
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t.passwordPlaceholder}
            className={`block w-full pl-16 pr-14 py-5 bg-gray-100/50 border-none rounded-[1.25rem] focus:ring-2 focus:ring-[#FF4D00] focus:bg-white transition-all outline-none text-gray-900 placeholder-gray-400 font-medium ${THEME.typography.bodyFont} disabled:opacity-50`}
          />
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-[#FF4D00] transition-colors disabled:opacity-50"
          >
            {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        style={{ backgroundColor: THEME.colors.primary }}
        className={`w-full hover:brightness-90 text-white font-extrabold text-xl py-5.5 px-6 rounded-[1.25rem] flex items-center justify-center gap-3 transform active:scale-[0.98] transition-all shadow-2xl shadow-orange-500/25 mt-8 ${THEME.typography.headerFont} disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {isLoading ? (
             <>
                <Loader2 className="animate-spin" size={24} />
                {t.loadingBtn}
            </>
        ) : (
            <>
                {t.submitBtn}
                <ArrowRight size={24} strokeWidth={3} />
            </>
        )}
      </button>
    </form>
  );
};
