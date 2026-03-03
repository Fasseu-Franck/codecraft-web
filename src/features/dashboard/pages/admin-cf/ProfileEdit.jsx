// Basé sur codecraft-prd.md — Module d'Authentification : Gestion de profil
// "Permettre aux utilisateurs de consulter et modifier leurs informations personnelles (nom, email, mot de passe)"
// + Module Centres de Formation : gestion des informations du centre
// Conforme au design system (codecraft-style.md) avec support dark/light mode
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import { Textarea } from "@/src/components/ui/textarea";
import { useAuth } from "@/src/features/auth/context/AuthContext";
import {
  AlertCircle,
  Building2,
  CheckCircle,
  Eye,
  EyeOff,
  Globe,
  Lock,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  Tags,
  User,
} from "lucide-react";
import { useState } from "react";

// Données mock du centre de formation — Basé sur codecraft-prd.md (Module Centres de Formation)
const MOCK_CENTER_DATA = {
  centerName: "Institut Numérique d'Afrique",
  description:
    "Centre de formation spécialisé dans les métiers du numérique, offrant des parcours pratiques en développement web, mobile et data science. Notre mission est de former la prochaine génération de talents tech en Afrique.",
  address: "123 Boulevard de la République",
  city: "Douala",
  country: "Cameroun",
  phone: "+237 6 99 12 34 56",
  website: "https://institut-numerique.cm",
  specialties: "Développement Web, Mobile, Data Science, UI/UX Design, DevOps",
};

export function ProfileEdit() {
  const { user, updateProfile } = useAuth();

  // ─── État : Informations personnelles ─────────────────────────────────────
  const [nom, setNom] = useState(user?.nom || "");
  const [email, setEmail] = useState(user?.email || "");

  // ─── État : Informations du centre de formation ──────────────────────────
  const [centerName, setCenterName] = useState(MOCK_CENTER_DATA.centerName);
  const [description, setDescription] = useState(MOCK_CENTER_DATA.description);
  const [address, setAddress] = useState(MOCK_CENTER_DATA.address);
  const [city, setCity] = useState(MOCK_CENTER_DATA.city);
  const [country, setCountry] = useState(MOCK_CENTER_DATA.country);
  const [phone, setPhone] = useState(MOCK_CENTER_DATA.phone);
  const [website, setWebsite] = useState(MOCK_CENTER_DATA.website);
  const [specialties, setSpecialties] = useState(MOCK_CENTER_DATA.specialties);

  // ─── État : Sécurité (mot de passe) ──────────────────────────────────────
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ─── État : Feedback de sauvegarde ────────────────────────────────────────
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileStatus, setProfileStatus] = useState(null);
  const [centerSaving, setCenterSaving] = useState(false);
  const [centerStatus, setCenterStatus] = useState(null);
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState(null);

  // Initiales pour l'avatar
  const initials = nom
    ? nom
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "U";

  // ─── Handlers ─────────────────────────────────────────────────────────────

  // Sauvegarde des informations personnelles
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setProfileSaving(true);
    setProfileStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updateProfile({ nom, email });
      setProfileStatus("success");
      setTimeout(() => setProfileStatus(null), 3000);
    } catch {
      setProfileStatus("error");
    } finally {
      setProfileSaving(false);
    }
  };

  // Sauvegarde des informations du centre de formation
  const handleSaveCenter = async (e) => {
    e.preventDefault();
    setCenterSaving(true);
    setCenterStatus(null);
    try {
      // Simulation de requête API — sera connecté au back-end
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCenterStatus("success");
      setTimeout(() => setCenterStatus(null), 3000);
    } catch {
      setCenterStatus("error");
    } finally {
      setCenterSaving(false);
    }
  };

  // Changement de mot de passe
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordStatus("mismatch");
      return;
    }
    if (newPassword.length < 8) {
      setPasswordStatus("weak");
      return;
    }
    setPasswordSaving(true);
    setPasswordStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPasswordStatus("success");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => setPasswordStatus(null), 3000);
    } catch {
      setPasswordStatus("error");
    } finally {
      setPasswordSaving(false);
    }
  };

  const isProfileValid = nom.trim() && email.trim();
  const isCenterValid = centerName.trim();
  const isPasswordValid = currentPassword && newPassword && confirmPassword;

  // ─── Composant réutilisable : Alerte de statut ────────────────────────────
  const StatusAlert = ({ status, successMsg, errorMsg }) => (
    <>
      {status === "success" && (
        <div className="flex items-center gap-2 text-sm text-frozen-water-700 bg-frozen-water-500/10 p-3 rounded-lg">
          <CheckCircle className="h-4 w-4 shrink-0" />
          {successMsg}
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}
    </>
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* ── En-tête de la page ─────────────────────────────────────────── */}
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-foreground tracking-tight">
          Mon Profil
        </h2>
        <p className="text-muted-foreground">
          Gérez vos informations personnelles et celles de votre centre de
          formation
        </p>
      </div>

      {/* ── Section Avatar et résumé ───────────────────────────────────── */}
      <Card className="py-5">
        <CardContent className="px-6 py-0">
          <div className="flex items-center gap-5">
            <Avatar className="h-20 w-20 border-3 border-primary/20">
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1.5">
              <h3 className="text-lg font-semibold text-foreground">
                {user?.nom || "Utilisateur"}
              </h3>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge
                  variant="secondary"
                  className="text-xs gap-1.5 font-medium"
                >
                  <Shield className="h-3 w-3" />
                  Administrateur Centre de Formation
                </Badge>
                <Badge
                  variant="outline"
                  className="text-xs gap-1.5 font-medium"
                >
                  <Building2 className="h-3 w-3" />
                  {centerName}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Informations du Centre de Formation ────────────────────────── */}
      {/* Basé sur codecraft-prd.md — Module Centres de Formation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Centre de Formation</CardTitle>
          </div>
          <CardDescription>
            Modifiez les informations publiques de votre centre de formation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveCenter} className="space-y-5">
            {/* Nom du centre */}
            <div className="space-y-2">
              <Label htmlFor="center-name" className="text-foreground">
                Nom du centre
              </Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="center-name"
                  type="text"
                  placeholder="Nom de votre centre de formation"
                  value={centerName}
                  onChange={(e) => setCenterName(e.target.value)}
                  required
                  className="pl-10 bg-secondary/30"
                />
              </div>
            </div>

            {/* Description / Présentation */}
            <div className="space-y-2">
              <Label htmlFor="center-description" className="text-foreground">
                Description
              </Label>
              <Textarea
                id="center-description"
                placeholder="Présentez votre centre de formation, sa mission et ses atouts..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="bg-secondary/30"
              />
              <p className="text-xs text-muted-foreground">
                Cette description sera visible sur votre page publique
              </p>
            </div>

            <Separator />

            {/* Adresse et Ville — Grille 2 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="center-address" className="text-foreground">
                  Adresse
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="center-address"
                    type="text"
                    placeholder="Adresse du centre"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-10 bg-secondary/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="center-city" className="text-foreground">
                  Ville
                </Label>
                <Input
                  id="center-city"
                  type="text"
                  placeholder="Ville"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="bg-secondary/30"
                />
              </div>
            </div>

            {/* Pays */}
            <div className="space-y-2">
              <Label htmlFor="center-country" className="text-foreground">
                Pays
              </Label>
              <Input
                id="center-country"
                type="text"
                placeholder="Pays"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-secondary/30"
              />
            </div>

            <Separator />

            {/* Téléphone et Site web — Grille 2 colonnes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="center-phone" className="text-foreground">
                  Téléphone
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="center-phone"
                    type="tel"
                    placeholder="+237 6 00 00 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 bg-secondary/30"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="center-website" className="text-foreground">
                  Site web
                </Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="center-website"
                    type="url"
                    placeholder="https://votre-site.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="pl-10 bg-secondary/30"
                  />
                </div>
              </div>
            </div>

            {/* Spécialités / Domaines */}
            <div className="space-y-2">
              <Label htmlFor="center-specialties" className="text-foreground">
                Spécialités / Domaines de formation
              </Label>
              <div className="relative">
                <Tags className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="center-specialties"
                  placeholder="Ex : Développement Web, Mobile, Data Science, UI/UX..."
                  value={specialties}
                  onChange={(e) => setSpecialties(e.target.value)}
                  rows={2}
                  className="pl-10 bg-secondary/30"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Séparez les spécialités par des virgules
              </p>
            </div>

            {/* Feedback de sauvegarde */}
            <StatusAlert
              status={centerStatus}
              successMsg="Informations du centre mises à jour avec succès !"
              errorMsg="Erreur lors de la mise à jour. Veuillez réessayer."
            />

            {/* Bouton de sauvegarde — Couleur solide, pas de dégradé */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={!isCenterValid || centerSaving}
                className="gap-2 min-w-[180px]"
              >
                <Save className="h-4 w-4" />
                {centerSaving
                  ? "Enregistrement..."
                  : "Sauvegarder les informations"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* ── Informations personnelles (Administrateur) ─────────────────── */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">
              Informations personnelles
            </CardTitle>
          </div>
          <CardDescription>
            Modifiez vos informations de connexion en tant qu'administrateur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveProfile} className="space-y-5">
            {/* Nom */}
            <div className="space-y-2">
              <Label htmlFor="profile-nom" className="text-foreground">
                Nom complet
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="profile-nom"
                  type="text"
                  placeholder="Votre nom complet"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  className="pl-10 bg-secondary/30"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="profile-email" className="text-foreground">
                Adresse email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="profile-email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-secondary/30"
                />
              </div>
            </div>

            {/* Feedback */}
            <StatusAlert
              status={profileStatus}
              successMsg="Profil mis à jour avec succès !"
              errorMsg="Erreur lors de la mise à jour. Veuillez réessayer."
            />

            {/* Bouton */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={!isProfileValid || profileSaving}
                className="gap-2 min-w-[180px]"
              >
                <Save className="h-4 w-4" />
                {profileSaving ? "Enregistrement..." : "Sauvegarder"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* ── Sécurité (Mot de passe) ────────────────────────────────────── */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Sécurité</CardTitle>
          </div>
          <CardDescription>
            Modifiez votre mot de passe pour sécuriser votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleChangePassword} className="space-y-5">
            {/* Mot de passe actuel */}
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-foreground">
                Mot de passe actuel
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="•••••••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="pl-10 pr-10 bg-secondary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Separator />

            {/* Nouveau mot de passe */}
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-foreground">
                Nouveau mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="•••••••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="pl-10 pr-10 bg-secondary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                Minimum 8 caractères requis
              </p>
            </div>

            {/* Confirmation */}
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-foreground">
                Confirmer le nouveau mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="•••••••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10 bg-secondary/30"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Messages de statut pour le mot de passe */}
            {passwordStatus === "mismatch" && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4" />
                Les mots de passe ne correspondent pas.
              </div>
            )}
            {passwordStatus === "weak" && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-3 rounded-lg">
                <AlertCircle className="h-4 w-4" />
                Le mot de passe doit contenir au moins 8 caractères.
              </div>
            )}
            <StatusAlert
              status={
                passwordStatus === "success" || passwordStatus === "error"
                  ? passwordStatus
                  : null
              }
              successMsg="Mot de passe modifié avec succès !"
              errorMsg="Erreur lors du changement de mot de passe."
            />

            {/* Bouton */}
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={!isPasswordValid || passwordSaving}
                className="gap-2 min-w-[180px]"
              >
                <Lock className="h-4 w-4" />
                {passwordSaving
                  ? "Modification..."
                  : "Modifier le mot de passe"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
