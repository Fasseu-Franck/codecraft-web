// Basé sur task-1.md - Section 8: FAQ (Foire Aux Questions)
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'

const faqs = [
  {
    question: 'À qui s\'adresse Codecraft ?',
    answer: `Codecraft s'adresse à tous ceux qui souhaitent apprendre à coder de manière pratique et collaborative :
• Débutants complets en reconversion professionnelle
• Étudiants qui veulent compléter leurs cours théoriques
• Développeurs juniors cherchant à consolider leurs bases
• Centres de formation souhaitant moderniser leur pédagogie

Que vous ayez 0 ou plusieurs années d'expérience, nos parcours s'adaptent à votre niveau.`,
  },
  {
    question: 'Comment fonctionnent les parcours de formation ?',
    answer: `Chaque parcours est structuré en projets progressifs qui couvrent une compétence ou une technologie spécifique (HTML/CSS, JavaScript, React, etc.).

Pour chaque projet :
1. Vous consultez les instructions et objectifs pédagogiques
2. Vous codez directement dans l'éditeur intégré
3. Vous voyez le résultat en temps réel dans la zone de prévisualisation
4. Vous échangez avec la communauté en cas de blocage
5. Vous validez le projet et passez au suivant`,
  },
  {
    question: 'Est-ce adapté aux débutants complets ?',
    answer: `Absolument ! Codecraft a été conçu dès le départ pour les débutants.

Nos parcours "Fondamentaux" commencent par les bases absolues : Qu'est-ce que le HTML ? Comment fonctionne le web ? Votre première page web en 15 minutes.

L'environnement de code intégré évite la complexité de l'installation d'outils. Vous commencez à coder en un clic, sans configuration.`,
  },
  {
    question: 'Les formations sont-elles certifiantes ?',
    answer: `Codecraft délivre des attestations de complétion pour chaque parcours terminé, qui valident les compétences acquises et les projets réalisés.

Ces attestations sont un excellent complément à votre CV et peuvent être partagées sur LinkedIn.

Nous travaillons également sur des partenariats avec des organismes de certification reconnus.`,
  },
  {
    question: 'Puis-je apprendre à mon rythme ?',
    answer: `Oui, totalement. Codecraft fonctionne en apprentissage asynchrone : vous apprenez quand vous voulez, à votre rythme.

Pas de deadline imposée, pas de cours en direct obligatoires. Vous avancez selon votre disponibilité : 1h par jour, 10h le week-end, c'est vous qui décidez.`,
  },
  {
    question: 'Quel est le prix de Codecraft ?',
    answer: `Nous proposons plusieurs formules :

• Formule Gratuite : Accès à 5 parcours de base et à la communauté
• Formule Premium (19€/mois) : Accès illimité à tous les parcours, projets avancés et suivi personnalisé
• Formule Centre de Formation : Tarif sur devis

Vous pouvez essayer gratuitement pendant 14 jours sans engagement.`,
  },
  {
    question: 'Ai-je besoin d\'installer des logiciels ?',
    answer: `Non, absolument rien à installer !

Codecraft fonctionne 100% dans votre navigateur web. Vous avez juste besoin d'un ordinateur (PC, Mac ou Linux), d'une connexion internet et d'un navigateur récent (Chrome, Firefox, Safari, Edge).

Idéal pour commencer sans se perdre dans des configurations techniques.`,
  },
]

export function FAQ() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tout ce que vous devez savoir sur Codecraft
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-[var(--color-indigo-velvet-500)]/30"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
