// Basé sur codecraft-archi.md — Routing de l'application
// Organisation par fonctionnalités avec routes protégées (RBAC)
import { ThemeProvider } from "@/src/components/theme-provider";
import { ProtectedRoute } from "@/src/features/auth/components/ProtectedRoute";
import { AuthProvider } from "@/src/features/auth/context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

// Auth pages — Basé sur codecraft-prd.md : Module d'Authentification
import { ForgotPasswordPage } from "@/src/pages/ForgotPassword";
import { ForgotPasswordConfirmationPage } from "@/src/pages/ForgotPasswordConfirmation";
import { PasswordChangedPage } from "@/src/pages/PasswordChanged";
import { ResetPasswordPage } from "@/src/pages/ResetPassword";
import { SigninPage } from "@/src/pages/Signin";
import { SignupPage } from "@/src/pages/Signup";

// Landing pages
import { Contact } from "@/src/pages/Contact";
import { Formations } from "@/src/pages/Formations";
import { Home } from "@/src/pages/Home";
import { HowItWorks } from "@/src/pages/HowItWorks";
import { Pricing } from "@/src/pages/Pricing";

// Dashboard — Basé sur codecraft-prd.md : Module Centres de Formation
import { DashboardLayout } from "@/src/features/dashboard/components/DashboardLayout";
import { PlaceholderPage } from "@/src/features/dashboard/components/PlaceholderPage";
import { DashboardHome } from "@/src/features/dashboard/pages/admin-cf/DashboardHome";
import { ProfileEdit } from "@/src/features/dashboard/pages/admin-cf/ProfileEdit";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Landing Page */}
            <Route path="/" element={<Home />} />

            {/* Pages d'authentification */}
            <Route path="/register" element={<SignupPage />} />
            <Route path="/login" element={<SigninPage />} />

            {/* Mot de passe oublié / Réinitialisation */}
            <Route
              path="/mot-de-passe-oublie"
              element={<ForgotPasswordPage />}
            />
            <Route
              path="/mot-de-passe-oublie/confirmation"
              element={<ForgotPasswordConfirmationPage />}
            />
            <Route
              path="/reinitialiser-mot-de-passe"
              element={<ResetPasswordPage />}
            />
            <Route
              path="/mot-de-passe-modifie"
              element={<PasswordChangedPage />}
            />

            {/* Pages comment ça marche */}
            <Route path="/comment-ca-marche" element={<HowItWorks />} />

            {/* Page Tarification */}
            <Route path="/tarifs" element={<Pricing />} />

            {/* Bibliothèque des formations */}
            <Route path="/formations" element={<Formations />} />

            {/* Page Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Dashboard — Routes protégées avec RBAC */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin-cf"]}>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              {/* Page d'accueil du dashboard */}
              <Route index element={<DashboardHome />} />

              {/* Profil utilisateur */}
              <Route path="profil" element={<ProfileEdit />} />

              {/* Pages placeholder pour les sections à développer */}
              <Route
                path="cohortes"
                element={
                  <PlaceholderPage
                    title="Gestion des Cohortes"
                    description="Organisez vos apprenants en groupes et gérez les sessions de formation."
                  />
                }
              />
              <Route
                path="formations"
                element={
                  <PlaceholderPage
                    title="Catalogue des Formations"
                    description="Créez et gérez vos parcours de formation pédagogiques."
                  />
                }
              />
              <Route
                path="projets"
                element={
                  <PlaceholderPage
                    title="Suivi des Projets"
                    description="Suivez l'avancement des projets soumis par vos apprenants."
                  />
                }
              />
              <Route
                path="formateurs"
                element={
                  <PlaceholderPage
                    title="Personnel Formateur"
                    description="Gérez votre équipe de formateurs et mentors."
                  />
                }
              />
              <Route
                path="apprenants"
                element={
                  <PlaceholderPage
                    title="Base des Apprenants"
                    description="Consultez et gérez l'ensemble de vos apprenants inscrits."
                  />
                }
              />
              <Route
                path="analytics"
                element={
                  <PlaceholderPage
                    title="Analytics & Finances"
                    description="Analysez les performances et gérez les aspects financiers."
                  />
                }
              />
              <Route
                path="parametres"
                element={
                  <PlaceholderPage
                    title="Paramètres"
                    description="Configurez les paramètres de votre centre de formation."
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
