
/**
 * TARA MONEY - DESIGN SYSTEM & CONFIGURATION
 * -----------------------------------------
 * This file serves as the single source of truth for the application's look and feel.
 * To change the visual identity, update the tokens below.
 */

export const THEME = {
  colors: {
    primary: "#FF4D00", // The iconic Tara Orange
    primaryHover: "#e64500",
    background: "#fef8f4", // Light cream background
    surface: "#f3f4f6", // Light gray for inputs/panels
    textMain: "#111111",
    textMuted: "#666666",
    textFaded: "#9ca3af",
    white: "#FFFFFF",
    
    // Support Menu Specific Colors
    support: {
      mbuntu: { bg: "#FFF1F1", text: "#FF4D00", stroke: "rgba(255, 77, 0, 0.1)" },
      whatsapp: { bg: "#E8FBF4", text: "#00A859", stroke: "rgba(37, 211, 102, 0.1)" },
      telegram: { bg: "#EEF7FF", text: "#007AB8", stroke: "rgba(0, 136, 204, 0.1)" },
      calls: { bg: "#E8FBF4", text: "#00A859", stroke: "rgba(0, 168, 89, 0.1)" },
      agent: { bg: "#FFF1F1", text: "#FF4D00", stroke: "rgba(255, 77, 0, 0.1)" },
    }
  },

  typography: {
    // Families are defined in index.html, but referenced here for consistency
    headerFont: "font-degular", // Plus Jakarta Sans / Degular simulation
    bodyFont: "font-helvetica", // Helvetica Neue / Sans-serif
    
    letterSpacing: {
      tight: "-0.04em",
      normal: "0em",
      wide: "0.15em",
      logo: "0.25em"
    }
  },

  spacing: {
    borderRadius: {
      small: "0.75rem",
      medium: "1.25rem",
      large: "1.75rem",
      full: "2.5rem"
    },
    padding: {
      input: "1.25rem",
      button: "1.35rem",
      card: "2rem"
    }
  },

  content: {
    login: {
      title: "Connectez-vous!",
      signupPrompt: "Vous n'avez pas de compte ?",
      signupLink: "Créez un compte",
      emailLabel: "Adresse e-mail",
      emailPlaceholder: "Saisissez votre e-mail",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "Saisissez votre mot de passe",
      rememberMe: "Rester connecté",
      rememberMeSub: "Garder ma session active",
      forgotPassword: "Mot de passe oublié ?",
      submitBtn: "Se connecter"
    },
    support: {
      headerTitle: "Support Client",
      headerSub: "Nous sommes là pour vous aider",
      mainQuestion: "Par quel moyen souhaitez-vous contacter notre équipe ?",
      availability: "Notre équipe est disponible 24/7 pour vous accompagner.",
      helpLabel: "Besoin d'aide ?"
    }
  }
};
