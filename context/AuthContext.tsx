
import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthService } from '../services/auth';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: any) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Vérification du localStorage au chargement initial
  useEffect(() => {
    const storedToken = localStorage.getItem('tara_jwt');
    const storedUser = localStorage.getItem('tara_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await AuthService.login(email, password);
      
      // Stockage du JWT
      localStorage.setItem('tara_jwt', response.token);
      localStorage.setItem('tara_user', JSON.stringify(response.user));
      
      setToken(response.token);
      setUser(response.user);
    } catch (err: any) {
      console.error(err);
      if (err.message === 'INVALID_CREDENTIALS') {
        setError('Email ou mot de passe incorrect (Essayez: demo@tara.com / password123)');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
      throw err; // Propager l'erreur si nécessaire
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (data: any) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await AuthService.signup(data);
      
      localStorage.setItem('tara_jwt', response.token);
      localStorage.setItem('tara_user', JSON.stringify(response.user));
      
      setToken(response.token);
      setUser(response.user);
    } catch (err) {
      setError("Impossible de créer le compte pour le moment.");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('tara_jwt');
    localStorage.removeItem('tara_user');
    setToken(null);
    setUser(null);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ user, token, isLoading, error, login, signup, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte facilement
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
