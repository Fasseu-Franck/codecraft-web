// Basé sur codecraft-prd.md — Module d'Authentification : Connexion / Déconnexion
// Context d'authentification avec mock login pour développement
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// Utilisateurs mock — Basé sur les rôles définis dans codecraft-archi.md (RBAC)
const MOCK_USERS = [
  {
    id: "1",
    username: "test@gmail.com",
    password: "test-admin",
    email: "test@gmail.com",
    nom: "Admin CF",
    role: "admin-cf",
    avatar: null,
  },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Vérifier la session existante au montage
  useEffect(() => {
    const stored = localStorage.getItem("codecraft-auth");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("codecraft-auth");
      }
    }
    setIsLoading(false);
  }, []);

  // Fonction de connexion mock
  const login = useCallback(async (username, password) => {
    // Simuler un délai réseau
    await new Promise((resolve) => setTimeout(resolve, 800));

    const found = MOCK_USERS.find(
      (u) => u.username === username && u.password === password,
    );

    if (!found) {
      throw new Error("Identifiants incorrects");
    }

    // Ne stocker que les données sûres (pas le mot de passe)
    const userData = {
      id: found.id,
      username: found.username,
      email: found.email,
      nom: found.nom,
      role: found.role,
      avatar: found.avatar,
    };

    setUser(userData);
    localStorage.setItem("codecraft-auth", JSON.stringify(userData));
    return userData;
  }, []);

  // Fonction de déconnexion
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("codecraft-auth");
  }, []);

  // Mise à jour du profil
  const updateProfile = useCallback((updates) => {
    setUser((prev) => {
      const updated = { ...prev, ...updates };
      localStorage.setItem("codecraft-auth", JSON.stringify(updated));
      return updated;
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthProvider");
  }
  return context;
};
