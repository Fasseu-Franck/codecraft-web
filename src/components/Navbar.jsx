// Basé sur task-1.md - Section 1: BARRE DE NAVIGATION
import logo from "@/src/assets/logo.png";
import { ModeToggle } from "@/src/components/mode-toggle";
import { Button } from "@/src/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Formations", href: "/formations" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
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
          ? "bg-background/95 backdrop-blur-md shadow-lg"
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
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("#");
              const Component = isExternal ? "a" : Link;
              return (
                <Component
                  key={link.href}
                  href={isExternal ? link.href : undefined}
                  to={!isExternal ? link.href : undefined}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </Component>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="sm" className="rounded-full" asChild>
              <Link to="/login" className="cursor-pointer">
                Connexion
              </Link>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-full"
              asChild
            >
              <Link to="/register" className="cursor-pointer">
                S'inscrire
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              className="p-2 text-foreground cursor-pointer"
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-background/95 backdrop-blur-md rounded-2xl border border-border shadow-xl md:hidden mx-4 animate-in slide-in-from-top-4 fade-in duration-200">
          <div className="space-y-3 flex flex-col items-center">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("#");
              const Component = isExternal ? "a" : Link;
              return (
                <Component
                  key={link.label}
                  href={isExternal ? link.href : undefined}
                  to={!isExternal ? link.href : undefined}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Component>
              );
            })}
            <div className="flex flex-col w-full gap-2 mt-2">
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link to="/login" className="w-full">
                  Connexion
                </Link>
              </Button>
              <Button variant="default" className="w-full rounded-full" asChild>
                <Link to="/register" className="w-full">
                  S'inscrire
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
