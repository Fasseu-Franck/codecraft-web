// Basé sur codecraft-style.md — Confirmation de modification du mot de passe
// Pattern visuel identique à ForgotPasswordConfirmation.jsx (Card, layout)
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
import { LogIn, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function PasswordChangedPage() {
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

        {/* Card de confirmation réussie */}
        <Card className="border-border bg-card shadow-lg">
          <CardHeader className="text-center pb-2">
            {/* Icône de succès — Feedback positif et rassurant */}
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-2xl bg-highlight-bg flex items-center justify-center">
                <ShieldCheck className="h-7 w-7 text-highlight-text" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-foreground">
              Mot de passe modifié avec succès !
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Votre mot de passe a été mis à jour en toute sécurité. Vous pouvez
              maintenant vous connecter avec vos nouveaux identifiants. Votre
              compte est protégé.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Message de réassurance — Sécurité perçue */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p>
                  Si vous n'êtes pas à l'origine de cette modification,{" "}
                  <Link
                    to="/contact"
                    className="text-primary hover:underline font-medium"
                  >
                    contactez-nous immédiatement
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Bouton CTA — Se connecter */}
            <Link to="/login" className="block">
              <Button className="w-full font-medium cursor-pointer">
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
