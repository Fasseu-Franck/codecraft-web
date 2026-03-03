// Basé sur codecraft-style.md — Formulaire de réinitialisation du mot de passe
// Pattern visuel identique à Signup.jsx (champs mot de passe côte à côte, validation)
// Conforme au design system avec support dark/light mode
import logo from "@/src/assets/logo.png";
import { ModeToggle } from "@/src/components/mode-toggle";
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
import { Check, Eye, EyeOff, KeyRound, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Critères de sécurité du mot de passe — Affichage dynamique
const passwordCriteria = [
  {
    id: "length",
    label: "Au moins 8 caractères",
    test: (pw) => pw.length >= 8,
  },
  {
    id: "uppercase",
    label: "Une lettre majuscule",
    test: (pw) => /[A-Z]/.test(pw),
  },
  {
    id: "lowercase",
    label: "Une lettre minuscule",
    test: (pw) => /[a-z]/.test(pw),
  },
  {
    id: "number",
    label: "Un chiffre",
    test: (pw) => /[0-9]/.test(pw),
  },
  {
    id: "special",
    label: "Un caractère spécial (!@#$...)",
    test: (pw) => /[^A-Za-z0-9]/.test(pw),
  },
];

export function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Évaluation dynamique des critères de sécurité
  const criteriaResults = useMemo(() => {
    return passwordCriteria.map((c) => ({
      ...c,
      passed: c.test(newPassword),
    }));
  }, [newPassword]);

  // Indicateur de force du mot de passe
  const strength = useMemo(() => {
    const passedCount = criteriaResults.filter((c) => c.passed).length;
    if (passedCount === 0) return { label: "", color: "", percent: 0 };
    if (passedCount <= 2)
      return {
        label: "Faible",
        color: "bg-destructive",
        percent: 33,
      };
    if (passedCount <= 4)
      return {
        label: "Moyen",
        color: "bg-[#f59e0b]",
        percent: 66,
      };
    return {
      label: "Fort",
      color: "bg-[var(--color-frozen-water-600)]",
      percent: 100,
    };
  }, [criteriaResults]);

  // État des erreurs de correspondance
  const passwordMismatch =
    confirmPassword.length > 0 && newPassword !== confirmPassword;
  const allCriteriaPassed = criteriaResults.every((c) => c.passed);
  const isFormValid =
    allCriteriaPassed && confirmPassword && newPassword === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    // Simulation de la modification du mot de passe
    setTimeout(() => {
      setIsLoading(false);
      navigate("/mot-de-passe-modifie");
    }, 1500);
  };

  return (
    // Utilisation de bg-background et text-foreground — support dark/light mode
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Décorations de fond — Cohérent avec les autres pages auth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      {/* Toggle dark/light mode */}
      <div className="absolute top-4 right-4 z-20">
        <ModeToggle />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link to="/">
            <img src={logo} alt="Codecraft" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Card — Variables sémantiques pour dark/light mode */}
        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center pb-2">
            {/* Icône — Clé de sécurité */}
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <KeyRound className="h-7 w-7 text-primary" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-foreground">
              Créez votre nouveau mot de passe
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Choisissez un mot de passe sécurisé que vous n'utilisez pas
              ailleurs. Votre compte sera protégé immédiatement.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nouveau mot de passe — Style identique à Signup.jsx */}
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-foreground">
                  Nouveau mot de passe
                </Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary pr-10"
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

                {/* Barre de force du mot de passe — Feedback visuel */}
                {newPassword.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${strength.color}`}
                          style={{ width: `${strength.percent}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium min-w-[40px]">
                        {strength.label}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Critères de sécurité — Affichage dynamique */}
              {newPassword.length > 0 && (
                <div className="p-3 rounded-xl bg-secondary/30 border border-border space-y-2">
                  <p className="text-xs font-semibold text-foreground mb-1">
                    Critères de sécurité
                  </p>
                  {criteriaResults.map((criterion) => (
                    <div key={criterion.id} className="flex items-center gap-2">
                      {criterion.passed ? (
                        <Check className="h-3.5 w-3.5 text-highlight-text shrink-0" />
                      ) : (
                        <X className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      )}
                      <span
                        className={`text-xs transition-colors ${
                          criterion.passed
                            ? "text-highlight-text"
                            : "text-muted-foreground"
                        }`}
                      >
                        {criterion.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Confirmer le mot de passe */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirm-new-password"
                  className="text-foreground"
                >
                  Confirmer le nouveau mot de passe
                </Label>
                <div className="relative">
                  <Input
                    id="confirm-new-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    aria-invalid={passwordMismatch}
                    className={`bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary pr-10 ${
                      passwordMismatch ? "border-destructive" : ""
                    }`}
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
                {/* Message d'erreur — Mots de passe différents */}
                {passwordMismatch && (
                  <p className="text-destructive text-xs flex items-center gap-1.5">
                    <span className="inline-block w-1 h-1 rounded-full bg-destructive shrink-0" />
                    Les mots de passe ne correspondent pas.
                  </p>
                )}
              </div>

              {/* Bouton CTA principal — Pas de dégradé (règle utilisateur) */}
              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full font-medium cursor-pointer"
              >
                {isLoading
                  ? "Modification en cours..."
                  : "Réinitialiser mon mot de passe"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Mention de sécurité */}
        <p className="text-center text-muted-foreground/60 text-xs mt-6 px-4">
          Votre mot de passe est chiffré et protégé. Nous ne pouvons jamais le
          voir.
        </p>
      </div>
    </div>
  );
}
