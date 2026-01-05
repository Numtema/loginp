
import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { SidebarImage } from './components/SidebarImage';
import { Logo } from './components/Logo';
import { SupportButton } from './components/SupportButton';
import { SupportMenu } from './components/SupportMenu';

const App: React.FC = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col md:flex-row p-4 md:p-6 lg:p-8 bg-[#fef8f4] relative">
      {/* Left Column: Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 lg:px-24 py-8">
        <div className="max-w-md w-full mx-auto md:mx-0">
          <header className="mb-10">
            <Logo />
          </header>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight font-degular">Connectez-vous!</h1>
            <p className="text-sm md:text-base font-medium text-gray-600">
              Vous n'avez pas de compte ?{' '}
              <a href="#" className="underline font-bold text-gray-900 hover:text-orange-600 transition-colors">
                Créez un compte
              </a>
            </p>
          </div>

          <LoginForm />
        </div>
      </div>

      {/* Right Column: Visual Section */}
      <div className="hidden md:flex w-1/2 items-stretch">
        <SidebarImage />
      </div>

      {/* Support UI */}
      <SupportButton onClick={() => setIsSupportOpen(true)} />
      <SupportMenu isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
    </main>
  );
};

export default App;
