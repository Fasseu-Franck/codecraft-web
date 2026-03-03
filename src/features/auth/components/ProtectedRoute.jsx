// Basé sur codecraft-archi.md — Sécurité : RBAC (Role-Based Access Control)
// Composant de route protégée qui redirige vers /login si non authentifié
import { useAuth } from "@/src/features/auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children, allowedRoles }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Afficher un loader pendant la vérification de session
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground text-sm">Chargement...</p>
        </div>
      </div>
    );
  }

  // Rediriger vers login si non authentifié
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Vérifier le rôle si des rôles autorisés sont spécifiés
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
