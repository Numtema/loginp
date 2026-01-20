
import React, { useState, useEffect } from 'react';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';
import { SidebarImage } from './components/SidebarImage';
import { Logo } from './components/Logo';
import { SupportButton } from './components/SupportButton';
import { SupportMenu } from './components/SupportMenu';
import { NotificationButton } from './components/NotificationButton';
import { THEME } from './theme';
import { useAuth } from './context/AuthContext';
import { Dashboard } from './components/Dashboard';

type AuthMode = 'login' | 'signup' | 'forgot-password';

const App: React.FC = () => {
  const { user } = useAuth(); // Récupération de l'utilisateur connecté
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  
  // État pour gérer la présence d'une notification
  const [hasNotification, setHasNotification] = useState(false);

  // Simulation: Une notification arrive 1.5s après le chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasNotification(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleNotificationClick = () => {
    // Action simple : afficher une alerte et masquer la notification (marquée comme lue)
    alert(`${THEME.content.notification.alertTitle}\n${THEME.content.notification.alertMessage}`);
    setHasNotification(false);
  };

  const toggleAuthMode = () => {
    setAuthMode(prev => prev === 'login' ? 'signup' : 'login');
  };

  const getHeaderContent = () => {
    if (authMode === 'login') {
      return {
        title: THEME.content.login.title,
        prompt: THEME.content.login.signupPrompt,
        link: THEME.content.login.signupLink,
        action: toggleAuthMode
      };
    }
    if (authMode === 'signup') {
      return {
        title: THEME.content.signup.title,
        prompt: THEME.content.signup.loginPrompt,
        link: THEME.content.signup.loginLink,
        action: toggleAuthMode
      };
    }
    // forgot-password
    return {
      title: THEME.content.forgotPassword.title,
      prompt: null,
      link: null,
      action: () => {}
    };
  };

  const headerContent = getHeaderContent();

  return (
    <main className="min-h-screen flex flex-col md:flex-row p-4 md:p-6 lg:p-8 bg-[#fef8f4] relative">
      {/* Left Column: Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-24 py-8">
        <div className="max-w-md w-full mx-auto md:mx-0">
          <header className="mb-10">
            <Logo />
          </header>
          
          {/* Si utilisateur connecté, on affiche le dashboard, sinon le flow d'auth */}
          {user ? (
            <Dashboard />
          ) : (
            <>
              <div className="mb-8 animate-in fade-in duration-300" key={authMode}>
                <h1 className={`text-3xl md:text-4xl font-extrabold mb-2 tracking-tight ${THEME.typography.headerFont}`}>
                  {headerContent.title}
                </h1>
                
                {headerContent.prompt && (
                  <p className={`text-sm md:text-base font-medium text-gray-600 ${THEME.typography.bodyFont}`}>
                    {headerContent.prompt}{' '}
                    <button 
                      onClick={headerContent.action}
                      className="underline font-bold text-gray-900 hover:text-orange-600 transition-colors cursor-pointer"
                    >
                      {headerContent.link}
                    </button>
                  </p>
                )}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-500 fade-in" key={`${authMode}-form`}>
                {authMode === 'login' && (
                  <LoginForm onForgotPassword={() => setAuthMode('forgot-password')} />
                )}
                {authMode === 'signup' && (
                  <SignupForm />
                )}
                {authMode === 'forgot-password' && (
                  <ForgotPasswordForm onBack={() => setAuthMode('login')} />
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Column: Visual Section */}
      <div className="hidden md:flex w-1/2 items-stretch">
        <SidebarImage />
      </div>

      {/* Floating Actions */}
      {/* La notification s'affiche uniquement si hasNotification est true */}
      {hasNotification && (
        <NotificationButton onClick={handleNotificationClick} />
      )}
      
      <SupportButton onClick={() => setIsSupportOpen(true)} />
      <SupportMenu isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  );
};

export default App;
