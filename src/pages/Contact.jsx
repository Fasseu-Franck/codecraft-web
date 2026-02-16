import { useState } from "react";
import { MapPin, MessageCircle, Mail, Clock, Linkedin, Twitter, Youtube, Github, GraduationCap } from "lucide-react";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Field, FieldGroup, FieldLabel } from "@/src/components/ui/field";

const contactCards = [
  {
    icon: MapPin,
    title: "Notre adresse",
    content: "Fourgerole, Yaoundé, Cameroun",
    href: null,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+237 671 76 15 03",
    href: "https://wa.me/237671761503",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contactcondecraft@gmail.com",
    href: "mailto:contactcondecraft@gmail.com",
  },
  {
    icon: Clock,
    title: "Support client",
    content: "Lun–Sam, 9h–20h",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implémenter la soumission du formulaire
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1: Hero Split-Screen */}
      <section className="pt-20 pb-12 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Colonne Gauche: Informations & Contact */}
            <div className="flex flex-col gap-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
              {/* Titre principal */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Contactez-nous
                </h1>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Nous sommes là pour vous accompagner dans votre parcours d'apprentissage. 
                  N'hésitez pas à nous contacter pour toute question ou demande.
                </p>
              </div>

              {/* 3 éléments pour lesquels on peut nous contacter */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    <strong className="font-medium">Partenariat :</strong> Pour les collaborations et partenariats stratégiques
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    <strong className="font-medium">Support Technique :</strong> Pour toute assistance technique ou problème rencontré
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">
                    <strong className="font-medium">Questions générales :</strong> Pour toute autre question ou information
                  </p>
                </div>
              </div>

              {/* Grille 2×2 de cartes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactCards.map((card, index) => {
                  const Icon = card.icon;
                  const CardWrapper = card.href ? "a" : "div";
                  
                  return (
                    <CardWrapper
                      key={index}
                      href={card.href}
                      target={card.href?.startsWith("http") ? "_blank" : undefined}
                      rel={card.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={card.href ? "cursor-pointer" : ""}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-sm hover:border-primary/20 border-border/50">
                        <CardContent className="p-4 flex flex-col gap-2.5">
                          <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-medium text-sm text-foreground">{card.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{card.content}</p>
                        </CardContent>
                      </Card>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>

            {/* Colonne Droite: Formulaire de Contact */}
            <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
              <Card className="shadow-sm border-border/50">
                <CardContent className="p-5 md:p-6">
                  <h2 className="text-xl font-semibold mb-5 text-foreground">
                    Envoyez-nous un message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <FieldGroup>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Field>
                          <FieldLabel htmlFor="firstName" className="text-sm">Prénom</FieldLabel>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Votre prénom"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="h-9"
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="lastName" className="text-sm">Nom</FieldLabel>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Votre nom"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="h-9"
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="email" className="text-sm">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-9"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="subject" className="text-sm">Sujet</FieldLabel>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Objet de votre message"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="h-9"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message" className="text-sm">Message</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Décrivez votre demande en détail..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Field>
                      <Field>
                        <Button type="submit" className="w-full" size="default">
                          Envoyer le message
                        </Button>
                      </Field>
                    </FieldGroup>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CTA Pleine largeur - Séparée du footer */}
      <section className="bg-[var(--color-indigo-velvet-950)] text-white py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bloc 1: Réseaux Sociaux */}
            <div className="space-y-4 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
              <h3 className="text-xl font-semibold">Suivez-nous</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Rejoignez notre communauté sur les réseaux sociaux pour rester informé 
                des dernières actualités et formations.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[var(--color-frozen-water-500)] hover:text-[var(--color-frozen-water-950)] transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bloc 2: Formations (MIS EN AVANT) */}
            <div className="space-y-4 p-5 rounded-lg bg-gradient-to-br from-[var(--color-frozen-water-500)]/15 to-[var(--color-frozen-water-600)]/10 border border-[var(--color-frozen-water-500)]/20 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-frozen-water-500)] flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-[var(--color-frozen-water-950)]" />
                </div>
                <h3 className="text-xl font-semibold">Découvrez nos formations</h3>
              </div>
              <p className="text-sm text-white/85 leading-relaxed">
                Explorez notre catalogue de formations pratiques et modernes, conçues 
                pour vous rendre immédiatement opérationnel sur le marché du travail.
              </p>
              <Button
                variant="default"
                size="default"
                className="bg-[var(--color-frozen-water-500)] text-[var(--color-frozen-water-950)] hover:bg-[var(--color-frozen-water-400)] font-medium transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#formations">Voir les formations</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Espacement distinct entre CTA et Footer */}
      <div className="h-px bg-border/50" />

      <Footer />
    </div>
  );
}
