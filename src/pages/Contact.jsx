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
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Colonne Gauche: Informations & Contact */}
            <div className="flex flex-col gap-8">
              {/* Titre principal */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Contactez-nous
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous sommes là pour vous accompagner dans votre parcours d'apprentissage. 
                  N'hésitez pas à nous contacter pour toute question ou demande.
                </p>
              </div>

              {/* 3 éléments pour lesquels on peut nous contacter */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">
                    <strong>Partenariat :</strong> Pour les collaborations et partenariats stratégiques
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">
                    <strong>Support Technique :</strong> Pour toute assistance technique ou problème rencontré
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/90">
                    <strong>Questions générales :</strong> Pour toute autre question ou information
                  </p>
                </div>
              </div>

              {/* Grille 2×2 de cartes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
                        <CardContent className="p-6 flex flex-col gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground">{card.title}</h3>
                          <p className="text-sm text-muted-foreground">{card.content}</p>
                        </CardContent>
                      </Card>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>

            {/* Colonne Droite: Formulaire de Contact */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    Envoyez-nous un message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <FieldGroup>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="firstName">Prénom</FieldLabel>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Votre prénom"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="lastName">Nom</FieldLabel>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Votre nom"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Field>
                      </div>
                      <Field>
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="subject">Sujet</FieldLabel>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Objet de votre message"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="message">Message</FieldLabel>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Décrivez votre demande en détail..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Field>
                      <Field>
                        <Button type="submit" className="w-full" size="lg">
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

      {/* Section 2: CTA Pleine largeur */}
      <section className="bg-[var(--color-indigo-velvet-950)] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bloc 1: Réseaux Sociaux */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Suivez-nous</h3>
              <p className="text-white/70">
                Rejoignez notre communauté sur les réseaux sociaux pour rester informé 
                des dernières actualités et formations.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-frozen-water-500)] hover:text-[var(--color-frozen-water-950)] transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bloc 2: Formations (MIS EN AVANT) */}
            <div className="space-y-6 p-8 rounded-xl bg-gradient-to-br from-[var(--color-frozen-water-500)]/20 to-[var(--color-frozen-water-600)]/20 border border-[var(--color-frozen-water-500)]/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--color-frozen-water-500)] flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-[var(--color-frozen-water-950)]" />
                </div>
                <h3 className="text-2xl font-bold">Découvrez nos formations</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Explorez notre catalogue de formations pratiques et modernes, conçues 
                pour vous rendre immédiatement opérationnel sur le marché du travail.
              </p>
              <Button
                variant="default"
                size="lg"
                className="bg-[var(--color-frozen-water-500)] text-[var(--color-frozen-water-950)] hover:bg-[var(--color-frozen-water-400)] font-semibold"
                asChild
              >
                <a href="#formations">Voir les formations</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
