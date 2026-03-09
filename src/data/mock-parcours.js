// Données mock — Parcours, Modules, Sessions, Challenges
// Basé sur le parcours "Développeur Web Front End"

export const MOCK_CHALLENGES = {
  c1: {
    id: "c1",
    titre: "Structure HTML d'une page blog",
    consignes:
      "Créez la structure HTML sémantique d'une page de blog avec un header, une navigation, un article principal et un aside.",
    codeDepart: `<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <title>Mon Blog</title>\n</head>\n<body>\n  <!-- Ajoutez votre code ici -->\n</body>\n</html>`,
    resultatAttendu:
      "Une page HTML valide avec les balises sémantiques appropriées : header, nav, main, article, aside, footer.",
    type: "code",
  },
  c2: {
    id: "c2",
    titre: "Mise en page avec Flexbox",
    consignes:
      "Reproduisez le layout d'une carte de profil en utilisant uniquement Flexbox. La carte doit contenir un avatar, un nom, une description et des boutons d'action.",
    codeDepart: `.card {\n  /* Utilisez flex ici */\n}\n\n.avatar {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n}`,
    resultatAttendu:
      "Une carte responsive centrée avec une disposition en colonne sur mobile et en ligne sur desktop.",
    type: "code",
  },
  c3: {
    id: "c3",
    titre: "Grid Layout — Dashboard",
    consignes:
      "Créez un layout de dashboard avec CSS Grid : une sidebar, un header, et une zone de contenu principale.",
    codeDepart: `.dashboard {\n  display: grid;\n  /* Définissez les colonnes et lignes ici */\n}`,
    resultatAttendu:
      "Un layout fonctionnel avec sidebar de 250px, header de 60px et contenu principal qui prend l'espace restant.",
    type: "code",
  },
  c4: {
    id: "c4",
    titre: "Responsive Navigation",
    consignes:
      "Créez un menu de navigation responsive qui devient un menu hamburger sur mobile.",
    codeDepart: `<nav class="navbar">\n  <!-- Votre menu ici -->\n</nav>`,
    resultatAttendu:
      "Navigation fonctionnelle avec breakpoint à 768px, animation de transition.",
    type: "code",
  },
  c5: {
    id: "c5",
    titre: "Variables et Types en JS",
    consignes:
      "Déclarez des variables de chaque type primitif en JavaScript, effectuez des conversions de types et affichez les résultats.",
    codeDepart: `// Votre code ici\nconst nom = "Alice";\n// Continuez...`,
    resultatAttendu:
      "Un script qui démontre la manipulation de string, number, boolean, null, undefined et symbol.",
    type: "code",
  },
  c6: {
    id: "c6",
    titre: "Manipulation du DOM",
    consignes:
      "Créez une liste de tâches interactive : ajouter une tâche, la marquer comme complète, la supprimer.",
    codeDepart: `const form = document.getElementById('todo-form');\n// Implémentez la logique ici`,
    resultatAttendu:
      "Application Todo List fonctionnelle avec localStorage pour la persistance.",
    type: "code",
  },
  c7: {
    id: "c7",
    titre: "Promesses et Fetch API",
    consignes:
      "Récupérez une liste d'utilisateurs depuis jsonplaceholder.typicode.com et affichez-les dans une liste stylée.",
    codeDepart: `async function fetchUsers() {\n  // Votre code ici\n}`,
    resultatAttendu:
      "Liste des 10 premiers utilisateurs avec nom, email et téléphone, avec gestion d'erreur.",
    type: "code",
  },
  c8: {
    id: "c8",
    titre: "Classes et Héritage",
    consignes:
      "Créez une hiérarchie de classes pour un système de véhicules : Vehicule, Voiture, Moto.",
    codeDepart: `class Vehicule {\n  constructor(marque, annee) {\n    // Votre code ici\n  }\n}`,
    resultatAttendu:
      "Classes avec constructeurs, méthodes, getters/setters et démonstration de l'héritage.",
    type: "code",
  },
  c9: {
    id: "c9",
    titre: "Composant Counter React",
    consignes:
      "Créez un compteur avec useState : boutons +1, -1, Reset. Appliquez des styles conditionnels selon la valeur.",
    codeDepart: `import { useState } from 'react';\n\nexport function Counter() {\n  // Votre code ici\n}`,
    resultatAttendu:
      "Compteur fonctionnel avec styles rouge si négatif, vert si positif, gris si zéro.",
    type: "code",
  },
  c10: {
    id: "c10",
    titre: "Fetch avec useEffect",
    consignes:
      "Créez un composant qui charge des posts depuis une API et affiche un état de chargement et d'erreur.",
    codeDepart: `import { useState, useEffect } from 'react';\n\nexport function PostsList() {\n  // Votre code ici\n}`,
    resultatAttendu:
      "Composant avec états loading/error/success, affichage de 10 posts maximum.",
    type: "code",
  },
  c11: {
    id: "c11",
    titre: "Context API — Thème global",
    consignes:
      "Implémentez un système de thème dark/light avec Context API, accessible depuis n'importe quel composant.",
    codeDepart: `import { createContext, useContext, useState } from 'react';\n\nexport const ThemeContext = createContext(null);`,
    resultatAttendu:
      "Provider de thème et un hook useTheme, bouton toggle qui change le thème de l'application.",
    type: "code",
  },
  c12: {
    id: "c12",
    titre: "Custom Hook useFetch",
    consignes:
      "Créez un hook personnalisé useFetch qui encapsule la logique de fetch avec loading, error et data.",
    codeDepart: `export function useFetch(url) {\n  // Votre code ici\n}`,
    resultatAttendu:
      "Hook réutilisable retournant { data, loading, error }, utilisé dans au moins 2 composants différents.",
    type: "code",
  },
};

export const MOCK_SESSIONS = {
  s1: {
    id: "s1",
    titre: "Introduction au HTML",
    objectif: "Maîtriser la structure de base d'une page web",
    contenu: [
      {
        type: "texte",
        titre: "Qu'est-ce que HTML ?",
        contenu:
          "HTML (HyperText Markup Language) est le langage de balisage standard pour créer des pages web. Il décrit la structure d'une page web sémantiquement.",
      },
      {
        type: "code",
        titre: "Structure de base",
        contenu: `<!DOCTYPE html>\n<html lang="fr">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Ma première page</title>\n</head>\n<body>\n  <h1>Bonjour le monde !</h1>\n  <p>Mon premier paragraphe.</p>\n</body>\n</html>`,
      },
      {
        type: "texte",
        titre: "Les balises sémantiques HTML5",
        contenu:
          "HTML5 introduit des balises sémantiques : header, nav, main, article, section, aside, footer. Ces balises donnent du sens au contenu et améliorent l'accessibilité et le SEO.",
      },
    ],
    exemplesPratiques: [
      "Créer la page d'accueil d'un restaurant",
      "Structurer un article de blog",
    ],
    dureeMinutes: 90,
    challengeId: "c1",
  },
  s2: {
    id: "s2",
    titre: "CSS Fondamentaux & Flexbox",
    objectif: "Styliser et mettre en page avec CSS et Flexbox",
    contenu: [
      {
        type: "texte",
        titre: "Le modèle de boîte CSS",
        contenu:
          "Chaque élément HTML est une boîte avec margin, border, padding et content. Comprendre ce modèle est essentiel pour la mise en page.",
      },
      {
        type: "code",
        titre: "Flexbox en pratique",
        contenu: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n\n.item {\n  flex: 1;\n}`,
      },
    ],
    exemplesPratiques: ["Centrer un élément avec Flexbox", "Créer une navbar"],
    dureeMinutes: 120,
    challengeId: "c2",
  },
  s3: {
    id: "s3",
    titre: "CSS Grid & Responsive Design",
    objectif: "Créer des layouts complexes et responsive",
    contenu: [
      {
        type: "texte",
        titre: "CSS Grid",
        contenu:
          "CSS Grid est un système de mise en page en deux dimensions. Il permet de créer des layouts complexes avec lignes et colonnes.",
      },
      {
        type: "code",
        titre: "Media Queries",
        contenu: `@media (max-width: 768px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}`,
      },
    ],
    exemplesPratiques: ["Dashboard responsive", "Galerie d'images"],
    dureeMinutes: 120,
    challengeId: "c3",
  },
  s4: {
    id: "s4",
    titre: "Animations CSS & UX",
    objectif: "Créer des animations fluides pour enrichir l'expérience",
    contenu: [
      {
        type: "texte",
        titre: "Transitions et Animations",
        contenu:
          "Les transitions CSS permettent des changements d'état fluides. Les animations @keyframes permettent des séquences complexes.",
      },
      {
        type: "code",
        titre: "Animation de bouton",
        contenu: `.btn {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\n.btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 20px rgba(0,0,0,0.15);\n}`,
      },
    ],
    exemplesPratiques: ["Loader animé", "Menu avec transitions"],
    dureeMinutes: 90,
    challengeId: "c4",
  },
  s5: {
    id: "s5",
    titre: "Variables, Types & Opérateurs JS",
    objectif: "Maîtriser les bases du langage JavaScript",
    contenu: [
      {
        type: "texte",
        titre: "var, let et const",
        contenu:
          "En JavaScript moderne, on privilégie const pour les valeurs constantes et let pour les variables mutables. var est déprécié en raison de son comportement de hoisting.",
      },
      {
        type: "code",
        titre: "Types primitifs",
        contenu: `const nom = "Alice";        // string\nconst age = 25;             // number\nconst actif = true;          // boolean\nconst valeur = null;         // null\nlet inconnu;                 // undefined`,
      },
    ],
    exemplesPratiques: [
      "Calculateur simple",
      "Manipulation de chaînes de caractères",
    ],
    dureeMinutes: 90,
    challengeId: "c5",
  },
  s6: {
    id: "s6",
    titre: "Fonctions, Tableaux & Objets",
    objectif: "Maîtriser les structures de données JavaScript",
    contenu: [
      {
        type: "texte",
        titre: "Fonctions fléchées",
        contenu:
          "Les fonctions fléchées (arrow functions) offrent une syntaxe concise et ne créent pas leur propre contexte 'this'.",
      },
      {
        type: "code",
        titre: "Méthodes de tableau",
        contenu: `const nombres = [1, 2, 3, 4, 5];\n\nconst doubles = nombres.map(n => n * 2);\nconst pairs = nombres.filter(n => n % 2 === 0);\nconst somme = nombres.reduce((acc, n) => acc + n, 0);`,
      },
    ],
    exemplesPratiques: ["Filtrage d'une liste de produits", "Tri de données"],
    dureeMinutes: 120,
    challengeId: "c6",
  },
  s7: {
    id: "s7",
    titre: "Asynchrone — Promesses & Async/Await",
    objectif: "Gérer les opérations asynchrones en JavaScript",
    contenu: [
      {
        type: "texte",
        titre: "Le modèle asynchrone",
        contenu:
          "JavaScript est single-threaded mais non-bloquant grâce à l'event loop. Les Promesses et async/await permettent de gérer le code asynchrone de manière lisible.",
      },
      {
        type: "code",
        titre: "Fetch API",
        contenu: `async function getUsers() {\n  try {\n    const response = await fetch('https://api.example.com/users');\n    if (!response.ok) throw new Error('Erreur réseau');\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error('Erreur:', error);\n  }\n}`,
      },
    ],
    exemplesPratiques: [
      "Appel à une API publique",
      "Gestion d'erreurs asynchrones",
    ],
    dureeMinutes: 120,
    challengeId: "c7",
  },
  s8: {
    id: "s8",
    titre: "POO — Classes et Modules ES6",
    objectif: "Maîtriser la programmation orientée objet en JavaScript",
    contenu: [
      {
        type: "texte",
        titre: "Classes ES6",
        contenu:
          "Les classes ES6 offrent une syntaxe claire pour la POO. Elles supportent l'héritage, les méthodes statiques et les accesseurs (getter/setter).",
      },
      {
        type: "code",
        titre: "Héritage",
        contenu: `class Animal {\n  constructor(nom) {\n    this.nom = nom;\n  }\n  parler() {\n    return \`\${this.nom} fait un bruit.\`;\n  }\n}\n\nclass Chien extends Animal {\n  parler() {\n    return \`\${this.nom} aboie.\`;\n  }\n}`,
      },
    ],
    exemplesPratiques: [
      "Système de gestion d'étudiants",
      "Bibliothèque de livres",
    ],
    dureeMinutes: 120,
    challengeId: "c8",
  },
  s9: {
    id: "s9",
    titre: "Introduction à React & JSX",
    objectif: "Comprendre les concepts fondamentaux de React",
    contenu: [
      {
        type: "texte",
        titre: "Qu'est-ce que React ?",
        contenu:
          "React est une bibliothèque JavaScript pour créer des interfaces utilisateur. Il repose sur des composants réutilisables et un DOM virtuel pour des mises à jour performantes.",
      },
      {
        type: "code",
        titre: "Premier composant",
        contenu: `import React from 'react';\n\nexport function Greeting({ name }) {\n  return (\n    <div className="greeting">\n      <h1>Bonjour, {name} !</h1>\n      <p>Bienvenue dans React.</p>\n    </div>\n  );\n}`,
      },
    ],
    exemplesPratiques: ["Composant de carte produit", "Liste dynamique"],
    dureeMinutes: 120,
    challengeId: "c9",
  },
  s10: {
    id: "s10",
    titre: "State & Effets avec Hooks",
    objectif: "Gérer l'état local et les effets de bord avec les Hooks React",
    contenu: [
      {
        type: "texte",
        titre: "useState et useEffect",
        contenu:
          "useState permet de déclarer un état local dans un composant fonctionnel. useEffect permet de synchroniser un composant avec des systèmes externes (API, DOM, etc.).",
      },
      {
        type: "code",
        titre: "useEffect avec fetch",
        contenu: `useEffect(() => {\n  let ignore = false;\n  \n  fetch(\`/api/user/\${userId}\`)\n    .then(res => res.json())\n    .then(data => {\n      if (!ignore) setUser(data);\n    });\n    \n  return () => { ignore = true; };\n}, [userId]);`,
      },
    ],
    exemplesPratiques: [
      "Tableau de bord avec données API",
      "Formulaire avec validation",
    ],
    dureeMinutes: 120,
    challengeId: "c10",
  },
  s11: {
    id: "s11",
    titre: "Context API & State Management",
    objectif: "Partager l'état global dans une application React",
    contenu: [
      {
        type: "texte",
        titre: "Prop Drilling vs Context",
        contenu:
          "Le prop drilling devient problématique dans les arbres de composants profonds. Context API permet de partager des données sans passer les props manuellement à chaque niveau.",
      },
      {
        type: "code",
        titre: "Créer un Context",
        contenu: `const AuthContext = createContext(null);\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState(null);\n  \n  return (\n    <AuthContext.Provider value={{ user, setUser }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}`,
      },
    ],
    exemplesPratiques: ["Panier d'achats global", "Système d'authentification"],
    dureeMinutes: 120,
    challengeId: "c11",
  },
  s12: {
    id: "s12",
    titre: "Custom Hooks & Patterns avancés",
    objectif: "Créer des hooks réutilisables et maîtriser les patterns React",
    contenu: [
      {
        type: "texte",
        titre: "Custom Hooks",
        contenu:
          "Un custom hook est une fonction JavaScript dont le nom commence par 'use' et qui peut appeler d'autres hooks. Ils permettent de réutiliser la logique de composant.",
      },
      {
        type: "code",
        titre: "Hook useLocalStorage",
        contenu: `function useLocalStorage(key, initialValue) {\n  const [value, setValue] = useState(() => {\n    const item = localStorage.getItem(key);\n    return item ? JSON.parse(item) : initialValue;\n  });\n  \n  const setStoredValue = (newValue) => {\n    setValue(newValue);\n    localStorage.setItem(key, JSON.stringify(newValue));\n  };\n  \n  return [value, setStoredValue];\n}`,
      },
    ],
    exemplesPratiques: [
      "Hook de formulaire réutilisable",
      "Hook de pagination",
    ],
    dureeMinutes: 120,
    challengeId: "c12",
  },
};

export const MOCK_MODULES = [
  {
    id: "m1",
    titre: "HTML & CSS Fondamentaux",
    objectifPedagogique:
      "Maîtriser la structure HTML sémantique et la mise en page CSS moderne",
    miniProjet: "Créer un portfolio statique avec HTML et CSS (Flexbox + Grid)",
    sessions: ["s1", "s2", "s3", "s4"],
    dureeEstimee: "4 semaines",
    niveau: "Débutant",
    couleur: "#5b3ec1",
  },
  {
    id: "m2",
    titre: "JavaScript Moderne",
    objectifPedagogique:
      "Maîtriser les fondamentaux et concepts avancés de JavaScript ES6+",
    miniProjet:
      "Développer une application de gestion de tâches avec LocalStorage",
    sessions: ["s5", "s6", "s7", "s8"],
    dureeEstimee: "4 semaines",
    niveau: "Intermédiaire",
    couleur: "#f59e0b",
  },
  {
    id: "m3",
    titre: "React & Composants",
    objectifPedagogique: "Construire des interfaces modernes avec React Hooks",
    miniProjet: "Développer une SPA e-commerce avec React et Context API",
    sessions: ["s9", "s10", "s11", "s12"],
    dureeEstimee: "4 semaines",
    niveau: "Intermédiaire",
    couleur: "#06b6d4",
  },
];

export const MOCK_PARCOURS = [
  {
    id: "p1",
    titre: "Développeur Web Front End",
    description:
      "Maîtrisez le développement web front end de zéro à l'employabilité : HTML, CSS, JavaScript moderne et React.",
    categorie: "Développement Web",
    type: "payant",
    prix: 1200,
    dureeEstimee: "12 semaines",
    niveau: "Débutant à Intermédiaire",
    statut: "publié",
    modules: ["m1", "m2", "m3"],
    prerequis: [
      "Notions de base en informatique",
      "Un ordinateur avec connexion internet",
      "Motivation et disponibilité (15h/semaine)",
    ],
    materielNecessaire: [
      "Ordinateur (Mac, Windows ou Linux)",
      "Compte GitHub",
      "VS Code ou tout éditeur de code",
      "Navigateur Chrome ou Firefox",
    ],
    objectifsPedagogiques: [
      "Créer des pages web structurées et sémantiques avec HTML5",
      "Styliser des interfaces modernes et responsives avec CSS3",
      "Programmer des interactions dynamiques avec JavaScript ES6+",
      "Développer des applications web avec React",
      "Versionner et collaborer avec Git & GitHub",
    ],
    projetFinal: {
      titre: "Portfolio Développeur Web",
      description:
        "Développez un portfolio professionnel complet en React démontrant toutes vos compétences acquises durant la formation.",
      livrables: [
        "Site portfolio deployé en ligne (Vercel ou Netlify)",
        "Code source sur GitHub avec README",
        "Au moins 3 projets personnels présentés",
        "Section About, Skills, Projects, Contact",
      ],
    },
    nbInscrits: 0,
    dateCreation: "2026-01-15",
    image: null,
  },
];

export const MOCK_FORMATEURS = [
  {
    id: "f1",
    nom: "Sophie Martin",
    specialite: "JavaScript & React",
    experience: "6 ans",
    cohortesPrecedentes: 4,
    avatar: null,
    initiales: "SM",
    email: "sophie.martin@example.com",
    rating: 4.9,
  },
  {
    id: "f2",
    nom: "Karim Benali",
    specialite: "HTML/CSS & UI Design",
    experience: "5 ans",
    cohortesPrecedentes: 3,
    avatar: null,
    initiales: "KB",
    email: "karim.benali@example.com",
    rating: 4.8,
  },
  {
    id: "f3",
    nom: "Claire Dupont",
    specialite: "React & Next.js",
    experience: "7 ans",
    cohortesPrecedentes: 6,
    avatar: null,
    initiales: "CD",
    email: "claire.dupont@example.com",
    rating: 4.9,
  },
];

export const MOCK_COHORTES = [
  {
    id: "co1",
    nom: "Promo WebDev Mars 2026",
    description: "Première promotion du parcours Dev Web Front End",
    capaciteMax: 20,
    parcoursId: "p1",
    formateurId: "f1",
    prix: 1200,
    dateDebut: "2026-03-15",
    dateFin: "2026-06-15",
    statut: "en cours",
    nbInscrits: 14,
    apprenants: [],
  },
];
