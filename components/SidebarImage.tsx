
import React from 'react';

export const SidebarImage: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
        alt="Tara Money Customer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {/* Image Text or Accents if needed (optional) */}
      <div className="absolute bottom-12 left-12 right-12 text-white">
        <div className="backdrop-blur-md bg-white/10 p-6 rounded-2xl border border-white/20">
          <p className="text-lg font-medium">Simplifiez vos transferts avec Tara Money.</p>
          <p className="text-sm opacity-80">Rejoignez des milliers d'utilisateurs satisfaits.</p>
        </div>
      </div>
    </div>
  );
};
