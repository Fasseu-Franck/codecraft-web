// Basé sur task-1.md - Section 10: FOOTER
import logo from "@/src/assets/logo.png";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  formations: {
    title: "Formations",
    links: [
      { label: "Parcours HTML/CSS", href: "#" },
      { label: "Parcours JavaScript", href: "#" },
      { label: "Parcours React", href: "#" },
      { label: "Parcours Python", href: "#" },
      { label: "Tous les parcours", href: "#" },
    ],
  },
  resources: {
    title: "Ressources",
    links: [
      { label: "À propos", href: "#about" },
      { label: "Comment ça marche", href: "#comment-ca-marche" },
      { label: "Blog", href: "#" },
      { label: "Centre d'aide", href: "#" },
      { label: "Communauté", href: "#" },
    ],
  },
  company: {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#about" },
      { label: "Pour les centres de formation", href: "#" },
      { label: "Tarifs", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },
  legal: {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-indigo-velvet-950)] text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Colonne 1 - À propos */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="Codecraft"
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              La plateforme collaborative qui transforme l'apprentissage du code
              en une expérience pratique, structurée et motivante dans un
              environnement pensé pour votre réussite.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-frozen-water-500)] hover:text-[var(--color-frozen-water-950)] transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Colonnes de liens */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-[var(--color-frozen-water-500)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bas de footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © 2025 Codecraft. Tous droits réservés.
          </p>
          <p className="text-sm text-white/40">
            La solution pensé pour les développeurs de demain !
          </p>
        </div>
      </div>
    </footer>
  );
}
