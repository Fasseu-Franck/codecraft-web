// Basé sur codecraft-archi.md — Routing de l'application
// Organisation par fonctionnalités avec routes protégées (RBAC)
import { ThemeProvider } from "@/src/components/theme-provider";
import { ProtectedRoute } from "@/src/features/auth/components/ProtectedRoute";
import { AuthProvider } from "@/src/features/auth/context/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

// Auth pages
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

// Dashboard
import { DashboardLayout } from "@/src/features/dashboard/components/DashboardLayout";
import { PlaceholderPage } from "@/src/features/dashboard/components/PlaceholderPage";
import { DashboardHome } from "@/src/features/dashboard/pages/admin-cf/DashboardHome";
import { ProfileEdit } from "@/src/features/dashboard/pages/admin-cf/ProfileEdit";

// Pages Pédagogiques
import { ChallengesPage } from "@/src/features/dashboard/pages/admin-cf/ChallengesPage";
import { ModulesPage } from "@/src/features/dashboard/pages/admin-cf/ModulesPage";
import { ParcoursCreerPage } from "@/src/features/dashboard/pages/admin-cf/ParcoursCreerPage";
import { ParcoursDetailPage } from "@/src/features/dashboard/pages/admin-cf/ParcoursDetailPage";
import { ParcoursPage } from "@/src/features/dashboard/pages/admin-cf/ParcoursPage";
import { ProjetsPage } from "@/src/features/dashboard/pages/admin-cf/ProjetsPage";
import { SessionsPage } from "@/src/features/dashboard/pages/admin-cf/SessionsPage";

// Pages Cohortes
import { CohorteCreerPage } from "@/src/features/dashboard/pages/admin-cf/CohorteCreerPage";
import { CohortesPage } from "@/src/features/dashboard/pages/admin-cf/CohortesPage";

// Prévisualisation
import { ParcoursPreviewPage } from "@/src/features/dashboard/pages/admin-cf/ParcoursPreviewPage";

// Membres du centre
import { TrainersPage } from "@/src/features/dashboard/pages/admin-cf/TrainersPage";

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

            {/* Pages publiques */}
            <Route path="/comment-ca-marche" element={<HowItWorks />} />
            <Route path="/tarifs" element={<Pricing />} />
            <Route path="/formations" element={<Formations />} />
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
              <Route index element={<DashboardHome />} />
              <Route path="profil" element={<ProfileEdit />} />

              {/* Gestion Pédagogique */}
              <Route path="parcours" element={<ParcoursPage />} />
              <Route path="parcours/creer" element={<ParcoursCreerPage />} />
              <Route
                path="parcours/previsualiser"
                element={<ParcoursPreviewPage />}
              />
              <Route path="parcours/:id" element={<ParcoursDetailPage />} />
              <Route path="modules" element={<ModulesPage />} />
              <Route path="sessions" element={<SessionsPage />} />
              <Route path="challenges" element={<ChallengesPage />} />
              <Route path="projets" element={<ProjetsPage />} />

              {/* Cohortes */}
              <Route path="cohortes" element={<CohortesPage />} />
              <Route path="cohortes/creer" element={<CohorteCreerPage />} />
              <Route
                path="cohortes/:id"
                element={
                  <PlaceholderPage
                    title="Détail Cohorte"
                    description="Gérez les apprenants, annonces et suivi de cette cohorte."
                  />
                }
              />
              <Route
                path="cohortes/apprenants"
                element={
                  <PlaceholderPage
                    title="Apprenants de la cohorte"
                    description="Liste des inscrits et gestion des inscriptions."
                  />
                }
              />
              <Route
                path="cohortes/annonces"
                element={
                  <PlaceholderPage
                    title="Annonces de la cohorte"
                    description="Publiez des communications pour cette cohorte."
                  />
                }
              />
              <Route
                path="cohortes/suivi"
                element={
                  <PlaceholderPage
                    title="Suivi de la cohorte"
                    description="Progression collective et individuelle des apprenants."
                  />
                }
              />

              {/* Membres du centre */}
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
                path="formateurs"
                element={<TrainersPage />}
              />

              {/* Revenus */}
              <Route
                path="revenus"
                element={
                  <PlaceholderPage
                    title="Synthèse des Revenus"
                    description="Vue globale des revenus par mois, cohorte et parcours."
                  />
                }
              />
              <Route
                path="revenus/recus"
                element={
                  <PlaceholderPage
                    title="Paiements Reçus"
                    description="Liste des transactions effectuées par les apprenants."
                  />
                }
              />
              <Route
                path="revenus/attente"
                element={
                  <PlaceholderPage
                    title="Paiements en attente"
                    description="Suivi des impayés ou paiements en cours de validation."
                  />
                }
              />

              {/* Paramètres */}
              <Route
                path="parametres/centre"
                element={
                  <PlaceholderPage
                    title="Mon Centre"
                    description="Informations générales du centre : nom, logo, coordonnées, agrément."
                  />
                }
              />
              <Route
                path="parametres/utilisateurs"
                element={
                  <PlaceholderPage
                    title="Utilisateurs du Centre"
                    description="Gestion des comptes admins et formateurs."
                  />
                }
              />
              <Route
                path="parametres/facturation"
                element={
                  <PlaceholderPage
                    title="Facturation / Abonnement"
                    description="Configuration du mode de paiement et abonnement de la plateforme."
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
              <Route
                path="analytics"
                element={
                  <PlaceholderPage
                    title="Analytics & Finances"
                    description="Analysez les performances et gérez les aspects financiers."
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
