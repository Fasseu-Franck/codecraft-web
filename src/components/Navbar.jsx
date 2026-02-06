// Basé sur task-1.md - Section 1: BARRE DE NAVIGATION
import logo from "@/src/assets/logo.png";
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Formations", href: "#formations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Codecraft" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation - Centré */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/connexion">
              <Button variant="ghost" size="sm" className="rounded-full">
                Connexion
              </Button>
            </Link>
            <Link to="/inscription">
              <Button variant="default" size="sm" className="rounded-full">
                S'inscrire
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-background/95 backdrop-blur-md rounded-2xl border border-border shadow-xl md:hidden mx-4 animate-in slide-in-from-top-4 fade-in duration-200">
          <div className="space-y-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col w-full gap-2 mt-2">
              <Link to="/connexion" className="w-full">
                <Button variant="outline" className="w-full rounded-full">
                  Connexion
                </Button>
              </Link>
              <Link to="/inscription" className="w-full">
                <Button variant="default" className="w-full rounded-full">
                  S'inscrire
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
