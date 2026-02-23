// Données des formations — Source unique de vérité pour la bibliothèque
// Chaque formation respecte la structure définie par la demande utilisateur :
// icône, badge, titre, description, niveau, durée, projet, lien
import {
  Bot,
  BrainCircuit,
  Code2,
  Database,
  FileCode2,
  Globe,
  Layers,
  Layout,
  LineChart,
  Palette,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Wand2,
} from "lucide-react";

export const formations = [
  // ─── Développeurs ─────────────────────────────────────────
  {
    id: 1,
    icon: FileCode2,
    badge: "Populaire",
    title: "HTML & CSS — Les fondamentaux du web",
    description:
      "Apprenez à structurer et styliser vos premières pages web comme un professionnel.",
    level: "debutant",
    category: "developpeurs",
    duration: 20,
    project:
      "Créer un portfolio personnel responsive avec animations CSS modernes.",
    link: "#",
  },
  {
    id: 2,
    icon: Code2,
    badge: "Populaire",
    title: "JavaScript — Le langage du web",
    description:
      "Maîtrisez JavaScript de A à Z : variables, fonctions, DOM, APIs et plus.",
    level: "debutant",
    category: "developpeurs",
    duration: 35,
    project:
      "Développer une application de gestion de tâches interactive avec stockage local.",
    link: "#",
  },
  {
    id: 3,
    icon: Layers,
    badge: "Nouveau",
    title: "React.js — Interfaces modernes",
    description:
      "Créez des applications web dynamiques avec le framework le plus populaire.",
    level: "intermediaire",
    category: "developpeurs",
    duration: 40,
    project:
      "Construire un dashboard de suivi de projet avec composants réutilisables.",
    link: "#",
  },
  {
    id: 4,
    icon: Server,
    badge: null,
    title: "Node.js & Express — Back-end solide",
    description:
      "Développez des API robustes et serveurs performants côté serveur.",
    level: "intermediaire",
    category: "developpeurs",
    duration: 30,
    project:
      "Créer une API REST complète avec authentification JWT et base de données.",
    link: "#",
  },
  {
    id: 5,
    icon: Database,
    badge: null,
    title: "Bases de données — SQL & NoSQL",
    description:
      "Concevez et gérez des bases de données relationnelles et document.",
    level: "intermediaire",
    category: "developpeurs",
    duration: 25,
    project:
      "Modéliser et implémenter la base de données d'une plateforme e-commerce.",
    link: "#",
  },
  {
    id: 6,
    icon: Terminal,
    badge: "Nouveau",
    title: "DevOps — CI/CD et déploiement",
    description:
      "Automatisez vos pipelines de déploiement et gérez vos serveurs.",
    level: "avance",
    category: "developpeurs",
    duration: 28,
    project:
      "Mettre en place un pipeline CI/CD complet avec Docker et GitHub Actions.",
    link: "#",
  },

  // ─── Entrepreneurs ────────────────────────────────────────
  {
    id: 7,
    icon: Rocket,
    badge: "Populaire",
    title: "Lancer son produit digital",
    description:
      "De l'idée au MVP : validez, prototypez et lancez votre produit numérique.",
    level: "decouvrir",
    category: "entrepreneurs",
    duration: 15,
    project:
      "Créer une landing page de lancement avec formulaire de pré-inscription.",
    link: "#",
  },
  {
    id: 8,
    icon: LineChart,
    badge: null,
    title: "Growth Hacking — Croissance rapide",
    description:
      "Stratégies d'acquisition et de rétention pour faire croître votre startup.",
    level: "intermediaire",
    category: "entrepreneurs",
    duration: 18,
    project:
      "Élaborer un plan de croissance complet avec métriques et tunnel de conversion.",
    link: "#",
  },

  // ─── No-code ──────────────────────────────────────────────
  {
    id: 9,
    icon: Wand2,
    badge: "Nouveau",
    title: "No-code — Créer sans coder",
    description:
      "Construisez des applications fonctionnelles sans écrire une seule ligne de code.",
    level: "decouvrir",
    category: "nocode",
    duration: 12,
    project:
      "Construire un outil de gestion de projets complet avec Notion et Make.",
    link: "#",
  },
  {
    id: 10,
    icon: Globe,
    badge: null,
    title: "Créer son site web avec Webflow",
    description:
      "Designez et publiez un site professionnel sans compétences techniques.",
    level: "debutant",
    category: "nocode",
    duration: 16,
    project:
      "Réaliser un site vitrine d'agence avec animations et CMS intégré.",
    link: "#",
  },

  // ─── IA ───────────────────────────────────────────────────
  {
    id: 11,
    icon: BrainCircuit,
    badge: "Populaire",
    title: "Introduction à l'IA et au Machine Learning",
    description:
      "Comprenez les concepts fondamentaux de l'intelligence artificielle.",
    level: "decouvrir",
    category: "ia",
    duration: 20,
    project:
      "Entraîner un modèle de classification d'images avec un dataset réel.",
    link: "#",
  },
  {
    id: 12,
    icon: Bot,
    badge: "Nouveau",
    title: "Construire avec les LLMs — ChatGPT API",
    description:
      "Intégrez les modèles de langage dans vos applications et automatisations.",
    level: "avance",
    category: "ia",
    duration: 22,
    project:
      "Développer un assistant IA conversationnel intégré à une application web.",
    link: "#",
  },
  {
    id: 13,
    icon: Sparkles,
    badge: null,
    title: "Prompt Engineering — L'art du prompt",
    description:
      "Maîtrisez l'art de formuler des prompts efficaces pour tirer le meilleur de l'IA.",
    level: "debutant",
    category: "ia",
    duration: 8,
    project:
      "Créer un catalogue de prompts optimisés pour la génération de contenu.",
    link: "#",
  },

  // ─── UI/UX ────────────────────────────────────────────────
  {
    id: 14,
    icon: Palette,
    badge: "Populaire",
    title: "UI/UX Design — Les fondamentaux",
    description:
      "Maîtrisez les principes du design d'interfaces et de l'expérience utilisateur.",
    level: "debutant",
    category: "uiux",
    duration: 24,
    project: "Designer une maquette complète d'application mobile avec Figma.",
    link: "#",
  },
  {
    id: 15,
    icon: Layout,
    badge: null,
    title: "Design System — Créer à grande échelle",
    description:
      "Construisez un système de design cohérent et évolutif pour vos projets.",
    level: "avance",
    category: "uiux",
    duration: 20,
    project:
      "Créer un design system complet (tokens, composants, documentation).",
    link: "#",
  },
  {
    id: 16,
    icon: Smartphone,
    badge: "Nouveau",
    title: "Mobile First — Design responsive",
    description:
      "Concevez des interfaces adaptées à tous les écrans, du mobile au desktop.",
    level: "intermediaire",
    category: "uiux",
    duration: 16,
    project:
      "Redesigner l'interface d'une application existante en approche mobile-first.",
    link: "#",
  },
];
