
// Simulation d'un délai réseau
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

// Mock Database
const MOCK_USER = {
  id: 'usr_123456',
  email: 'demo@tara.com',
  password: 'password123', // Pour tester
  name: 'Utilisateur Tara'
};

export const AuthService = {
  /**
   * Simule un appel POST /api/login
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    await delay(1500); // 1.5s de latence

    // Simulation de validation backend
    // Dans un vrai cas : if (await bcrypt.compare(password, user.hash))
    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      return {
        // Ceci est un Faux JWT pour l'exemple. En prod, le backend le signe avec une clé privée.
        token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlRhcmEgVXNlciIsImlhdCI6${Date.now()}`,
        user: {
          id: MOCK_USER.id,
          email: MOCK_USER.email,
          name: MOCK_USER.name
        }
      };
    }

    throw new Error('INVALID_CREDENTIALS');
  },

  /**
   * Simule un appel POST /api/signup
   */
  signup: async (data: any): Promise<AuthResponse> => {
    await delay(2000);
    
    // On accepte tout le monde dans la démo
    return {
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.simulated_signup_token.${Date.now()}`,
      user: {
        id: `usr_${Date.now()}`,
        email: data.email,
        name: data.name
      }
    };
  }
};
