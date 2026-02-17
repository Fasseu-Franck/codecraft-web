# Product Requirements Document (PRD) : CodeCraft

## Résumé exécutif & vision produit

CodeCraft est une application web modulaire conçue pour combler le fossé entre la formation théorique en informatique et les compétences pratiques requises par le marché de l'emploi en Afrique. La vision est de démocratiser l'accès à une formation technique de qualité, en s'appuyant sur la méthodologie du « Learning by doing » (apprendre en faisant). La plateforme vise à équiper les apprenants autodidactes et les centres de formation avec les outils nécessaires pour acquérir des compétences concrètes et immédiatement employables, contribuant ainsi à l'essor des talents numériques locaux. CodeCraft se positionne comme un écosystème complet pour la gestion et le suivi des parcours de formation en ligne, intégrant des projets concrets, une forte dimension communautaire et des outils d'administration pour les institutions éducatives.

## Problème à résoudre & opportunité business

Le marché de l'emploi en Afrique, et particulièrement au Cameroun, connaît une demande exponentielle de professionnels de l'informatique qualifiés. Cependant, les modèles d'apprentissage traditionnels peinent à fournir les compétences pratiques nécessaires, créant un **décalage significatif entre la formation théorique et les exigences du marché du travail** [1]. De nombreux diplômés ne sont pas considérés comme immédiatement opérationnels faute d'expérience sur des cas réels.

Cette lacune représente une **opportunité majeure** pour une plateforme comme CodeCraft. En se concentrant sur le « Learning by doing », CodeCraft répond à un impératif éducatif mondial, particulièrement en Afrique, où la qualité et la pertinence des enseignements sont cruciales. La plateforme vise à transformer les profils des jeunes en professionnels qualifiés et immédiatement employables, validant ainsi une forte pertinence économique et sociétale du projet [1].

## Objectifs business et objectifs produit

### Objectifs Business

- **Démocratiser l'accès à une formation technique de qualité** en Afrique, contribuant ainsi à l'essor des compétences numériques locales.
- **Répondre à la demande croissante de talents numériques** en formant des professionnels qualifiés et immédiatement employables.
- **Assurer la pérennité économique** du projet en couvrant les coûts d'exploitation et de maintenance grâce à des partenariats stratégiques.

### Objectifs Produit

- **Fournir une plateforme d'apprentissage modulaire** et interactive, centrée sur la méthodologie du « Learning by doing ».
- **Permettre aux apprenants autodidactes** de suivre des parcours de formation modernes, axés sur la réalisation de projets concrets et l'entraide communautaire.
- **Offrir aux centres de formation** des outils robustes pour la gestion, l'administration et le suivi des cursus de leurs étudiants.
- **Garantir une expérience utilisateur dynamique et fiable** grâce à une architecture technique moderne (React, Node.js, MySQL).
- **Créer un écosystème collaboratif** favorisant la motivation, la pratique et l'accessibilité pour tous les utilisateurs.

## Utilisateurs cibles / personas

CodeCraft s'adresse à deux catégories principales d'utilisateurs, chacun avec des besoins et des motivations spécifiques :

### 1. Apprenants (Autodidactes et Étudiants de Centres de Formation)

**Description :** Individus désireux d'acquérir ou de renforcer leurs compétences en programmation et en informatique. Ils peuvent être des autodidactes cherchant des parcours structurés et un soutien communautaire, ou des étudiants inscrits dans des centres de formation utilisant CodeCraft pour leur cursus.

**Besoins :**

- Accès à des parcours de formation pratiques et axés sur des projets concrets.
- Un environnement d'apprentissage interactif et engageant.
- Possibilité de suivre leur progression et d'obtenir des certifications.
- Accès à une communauté pour l'entraide, le mentorat et la résolution de problèmes.
- Des outils pour soumettre des exercices et recevoir des retours constructifs.

**Motivations :**

- Devenir immédiatement employable sur le marché du travail.
- Acquérir des compétences techniques à jour et pertinentes.
- Développer un portfolio de projets réels.
- Échanger avec d'autres apprenants et des experts.

### 2. Centres de Formation (Administrateurs et Formateurs)

**Description :** Institutions éducatives ou formateurs indépendants souhaitant digitaliser et optimiser la gestion de leurs parcours de formation en ligne. Ils utilisent CodeCraft pour administrer les cursus, suivre les étudiants et gérer les ressources pédagogiques.

**Besoins :**

- Outils pour créer, gérer et organiser des parcours de formation.
- Fonctionnalités d'administration pour ajouter des apprenants, assigner des mentors et suivre la progression.
- Interfaces de correction et d'évaluation des travaux des étudiants.
- Tableaux de bord analytiques pour suivre les performances globales et individuelles.
- Capacité à publier des annonces et communiquer avec les apprenants.

**Motivations :**

- Améliorer la qualité et l'efficacité de leurs programmes de formation.
- Offrir une expérience d'apprentissage moderne et engageante à leurs étudiants.
- Optimiser la gestion administrative et pédagogique.
- Contribuer à la formation de professionnels qualifiés.

## Besoins utilisateurs & cas d’usage clés

Les besoins des utilisateurs se traduisent par les cas d'usage suivants, qui décrivent les interactions clés avec la plateforme CodeCraft.

| Cas d'usage                    | Acteur(s)                                    | Description                                                                                                                                     | Objectif                                                                        |
| :----------------------------- | :------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------ |
| **S'authentifier**             | Apprenant, Mentor, Formateur, Administrateur | L'utilisateur accède à son espace personnel en vérifiant son identité via un identifiant et un mot de passe.                                    | Accéder aux fonctionnalités et données personnalisées de la plateforme.         |
| **S'inscrire à un parcours**   | Apprenant                                    | L'apprenant parcourt le catalogue des formations, sélectionne un parcours et s'y inscrit pour commencer son apprentissage.                      | Démarrer un nouveau parcours de formation et accéder à son contenu.             |
| **Créer un parcours**          | Administrateur Centre de Formation           | L'administrateur définit un nouveau programme de formation (nom, description, modules, projets) et le rend disponible sur la plateforme.        | Enrichir l'offre de formation du centre et la proposer aux apprenants.          |
| **Gérer les utilisateurs**     | Administrateur Centre de Formation           | L'administrateur ajoute des apprenants à son espace, les organise en groupes et leur assigne des parcours et des mentors.                       | Structurer les cohortes d'apprentissage et assurer un suivi adéquat.            |
| **Soumettre un exercice**      | Apprenant                                    | L'apprenant répond à des QCM ou réalise des exercices de code dans un environnement de type Code Sandbox et soumet son travail pour évaluation. | Valider sa compréhension des concepts et obtenir un retour sur ses compétences. |
| **Corriger et évaluer**        | Formateur                                    | Le formateur accède aux soumissions des apprenants, les évalue, attribue des notes et fournit des feedbacks détaillés.                          | Évaluer la progression des apprenants et les guider dans leur apprentissage.    |
| **Participer à la communauté** | Apprenant, Mentor                            | Les utilisateurs posent des questions, répondent à celles des autres, et partagent des ressources sur les forums d'entraide.                    | Favoriser l'apprentissage collaboratif et la résolution de problèmes en groupe. |

## Périmètre du produit

### In scope

Le périmètre initial de CodeCraft inclut les modules et fonctionnalités suivants, essentiels pour répondre aux objectifs définis :

- **Module d'Authentification et de Gestion des Profils :** Permettant aux utilisateurs (apprenants, mentors, formateurs, administrateurs) de s'inscrire, se connecter, gérer leur profil et leurs rôles.
- **Module Centres de Formation :** Offrant aux centres la possibilité de gérer leurs apprenants, d'organiser des groupes, d'assigner des parcours et des mentors, et de suivre la progression.
- **Module Apprentissage (Apprenants) :** Incluant un catalogue de parcours publics, l'inscription aux parcours, le suivi des leçons (vidéos, textes), la soumission d'exercices (QCM, Code Sandbox), le suivi de progression personnel et la gestion des certifications.
- **Module Communauté et Mentorat :** Comprenant un forum d'entraide par parcours/technologie, la possibilité de répondre aux questions, un système de mentorat (consultation de mentors, chat privé, évaluation) et la promotion au statut de mentor.
- **Module Gamification et Motivation :** Intégrant un système de points et niveaux, des badges et récompenses, des « streaks » (séries d'activité) et des classements.
- **Module Communication :** Proposant une messagerie interne (apprenants-formateurs, mentor-apprenant, centres-apprenants) et un système d'annonces et de notifications.
- **Module Administration :** Permettant au SuperAdmin de gérer les centres (validation, suspension, statistiques, abonnements), de modérer le contenu et d'accéder à des analytics et rapports globaux.

### Out of scope

Les éléments suivants sont considérés comme hors du périmètre pour la version initiale de CodeCraft, mais pourraient être envisagés dans des phases ultérieures :

- **Développement d'applications mobiles natives** (au-delà de l'implémentation initiale en Flutter mentionnée dans le cahier des charges, qui semble être une exploration plutôt qu'une fonctionnalité complète).
- **Intégration avec des systèmes de paiement tiers** complexes pour les parcours payants (une solution simple de gestion des abonnements est prévue, mais pas une place de marché complète).
- **Fonctionnalités avancées de personnalisation des parcours** par les apprenants eux-mêmes.
- **Outils de création de contenu pédagogique** directement intégrés à la plateforme pour les formateurs (la création de contenu est supposée être faite en amont).
- **Support multilingue** étendu au-delà du français et de l'anglais.

## Fonctionnalités & exigences fonctionnelles

Les fonctionnalités de CodeCraft sont regroupées par module et classées par priorité (Must, Should, Could) pour guider le développement.

### A. Module d'Authentification et de Gestion des Profils

| Fonctionnalité                    | Description                                                                                                     | Priorité |
| :-------------------------------- | :-------------------------------------------------------------------------------------------------------------- | :------- |
| **Inscription utilisateur**       | Permettre aux nouveaux utilisateurs de créer un compte (apprenant, mentor, centre de formation).                | Must     |
| **Connexion / Déconnexion**       | Permettre aux utilisateurs de se connecter et de se déconnecter de la plateforme.                               | Must     |
| **Gestion de profil**             | Permettre aux utilisateurs de consulter et modifier leurs informations personnelles (nom, email, mot de passe). | Must     |
| **Réinitialisation mot de passe** | Offrir une procédure sécurisée de réinitialisation de mot de passe en cas d'oubli.                              | Must     |

### B. Module Centres de Formation

| Fonctionnalité                      | Description                                                                                                        | Priorité |
| :---------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------- |
| **Gestion des apprenants**          | Ajouter, modifier, supprimer des apprenants au sein de l'espace du centre.                                         | Must     |
| **Organisation en groupes/espaces** | Organiser les apprenants en groupes ou espaces d'apprentissage dédiés.                                             | Must     |
| **Assignation de parcours**         | Attribuer des parcours de formation spécifiques aux apprenants ou groupes.                                         | Must     |
| **Assignation de mentors**          | Attribuer des mentors aux apprenants pour le suivi de leur progression.                                            | Must     |
| **Correction et évaluation**        | Interface pour corriger les QCM, exercices sur Code Sandbox, attribuer des notes et fournir des feedbacks.         | Must     |
| **Suivi de progression (centre)**   | Tableaux de bord analytiques pour suivre la progression par apprenant, groupe, taux de complétion, notes moyennes. | Must     |

### C. Module Apprentissage (Apprenants)

| Fonctionnalité                     | Description                                                                                                                               | Priorité |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| **Catalogue de parcours publics**  | Afficher une bibliothèque de parcours disponibles avec filtres (catégorie, niveau, durée, prix) et recherche par mot-clé.                 | Must     |
| **Inscription aux parcours**       | Permettre aux apprenants de s'inscrire aux parcours (gratuits ou payants), gérer leurs favoris, consulter syllabus, objectifs, prérequis. | Must     |
| **Suivi des leçons**               | Accéder aux contenus pédagogiques (vidéo, texte), marquer les leçons comme en cours ou complètes.                                         | Must     |
| **Soumission d'exercices**         | Répondre aux QCM, faire des devoirs sur Code Sandbox, afficher l'historique des tentatives et notes.                                      | Must     |
| **Suivi de progression personnel** | Afficher pourcentage de complétion, modules/leçons terminés, notes par exercice, temps passé, et définition d'objectifs personnels.       | Must     |
| **Gestion des certifications**     | Afficher critères d'obtention, progression vers le certificat, téléchargement PDF, partage sur réseaux sociaux.                           | Should   |

### D. Module Communauté et Mentorat

| Fonctionnalité                     | Description                                                                                                                 | Priorité |
| :--------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :------- |
| **Forum d'entraide**               | Poser des questions, rechercher des questions similaires, marquer comme résolue (par parcours ou technologie).              | Must     |
| **Réponses communautaires**        | Répondre aux questions, accepter une réponse comme solution officielle.                                                     | Must     |
| **Système de mentorat**            | Consulter la liste des mentors (bio, note, nombre d'apprenants aidés), demander de l'aide en chat privé, évaluer le mentor. | Should   |
| **Promotion au statut mentor**     | Candidature au statut mentor après complétion d'un parcours avec excellence, validation, définition des disponibilités.     | Could    |
| **Galerie de tutoriels (mentors)** | Publier des tutoriels complémentaires (texte, code, images), liker, commenter, mettre en favoris.                           | Could    |

### E. Module Gamification et Motivation

| Fonctionnalité                   | Description                                                                                              | Priorité |
| :------------------------------- | :------------------------------------------------------------------------------------------------------- | :------- |
| **Système de points et niveaux** | Attribution automatique de points pour actions accomplies, calcul du niveau global.                      | Should   |
| **Badges et récompenses**        | Déblocage automatique de badges pour niveaux atteints, affichage sur profil.                             | Should   |
| **Streaks (séries d'activité)**  | Enregistrement du nombre de jours consécutifs d'activité, affichage du streak actuel et record, rappels. | Could    |
| **Classements et compétition**   | Affichage de classements optionnels par parcours.                                                        | Could    |

### F. Module Communication

| Fonctionnalité                | Description                                                                                                        | Priorité |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------- |
| **Messagerie interne**        | Échanges entre apprenants et formateurs, conversations privées mentor-apprenant, messages centres vers apprenants. | Must     |
| **Annonces et notifications** | Publication d'annonces importantes par centres/formateurs, notifications push/email pour événements clés.          | Must     |

### G. Module Administration

| Fonctionnalité                             | Description                                                                                                          | Priorité |
| :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------- | :------- |
| **Gestion des centres**                    | Valider/rejeter demandes d'inscription, suspendre/réactiver centres, consulter statistiques, gérer abonnements.      | Must     |
| **Modération du contenu**                  | Modérer les parcours, supprimer le contenu non conforme.                                                             | Must     |
| **Analytics et rapports**                  | Tableaux de bord globaux avec KPIs (utilisateurs actifs, taux inscription/complétion, revenus, parcours populaires). | Must     |
| **Gestion des catégories et technologies** | Création/modification de catégories de parcours de formation.                                                        | Must     |

## Exigences non fonctionnelles

Les exigences non fonctionnelles définissent la qualité et les contraintes techniques du système, assurant son bon fonctionnement et son adoption par les utilisateurs.

| Catégorie             | Exigence                                  | Description                                                                                                                                                                                                                                                |
| :-------------------- | :---------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Performance**       | Temps de chargement rapide                | L'application doit être rapide et fluide. Le temps de chargement des écrans ne doit pas dépasser **10 secondes** [1].                                                                                                                                      |
| **Sécurité**          | Protection des données utilisateur        | Les données des utilisateurs (mots de passe, adresses e-mail) doivent être chiffrées et protégées conformément aux réglementations **RGPD**. L'application doit résister aux attaques courantes (XSS, SQL injection, etc.) [1].                            |
| **Ergonomie (UX/UI)** | Interface intuitive et agréable           | L'interface doit être simple à utiliser, même pour un débutant. Le design doit être épuré et agréable, et l'expérience utilisateur ne doit pas nécessiter de formations spécifiques. L'onboarding doit être de qualité pour faciliter l'apprentissage [1]. |
| **Accessibilité**     | Utilisation par des personnes handicapées | L'application doit être utilisable par des personnes ayant des handicaps (par exemple, contraste élevé pour les malvoyants) [1].                                                                                                                           |
| **Disponibilité**     | Haute disponibilité                       | L'application doit être disponible **99.8%** du temps [1].                                                                                                                                                                                                 |
| **Évolutivité**       | Capacité à gérer la croissance            | Le système doit être capable de gérer une augmentation du nombre d'utilisateurs et de défis sans perte de performance [1].                                                                                                                                 |

## Contraintes & dépendances

Le développement et le déploiement de CodeCraft sont soumis à plusieurs contraintes et dépendances, notamment en termes de ressources, de budget et de délais.

### Contraintes

- **Budget :** Le coût global estimé pour la mise en place de la solution est d'environ **5 885 807,511 XAF**, incluant les ressources humaines, matérielles, logicielles et les imprévus [1].
- **Délais :** Le projet est planifié sur une durée totale de **200 jours**, incluant une marge de 10 jours pour les imprévus [1].
- **Ressources humaines :** L'équipe de développement est composée d'un chef de projet, d'un analyste, d'un concepteur, de programmeurs, d'un designer Front-End, d'un testeur et d'un support/documentation [1].
- **Ressources matérielles :** Nécessite des ordinateurs portables pour les développeurs, un serveur ou hébergement web pour la disponibilité en ligne, et une connexion internet stable [1].
- **Ressources logicielles :** Dépendances logicielles incluent Windows 11, Microsoft Office, Sybase Power AMC, Astah Professional, Google Chrome, et Visual Studio Code [1].

### Dépendances

- **Partenariats :** Les coûts futurs d'exploitation et de maintenance (hébergement, support) seront couverts par des entreprises partenaires, dont l'engagement est crucial pour la pérennité du projet [1].
- **Compétences techniques :** La faisabilité du projet repose sur la maîtrise des frameworks (React JS, Node.js, Express JS) et des langages (MySQL, JavaScript) par l'équipe de développement [1].
- **Stabilité de l'environnement :** La qualité de la connexion internet et la disponibilité du personnel administratif sont des facteurs externes qui peuvent influencer le déroulement du projet [1].

## Critères de succès & métriques (KPI)

Les critères de succès de CodeCraft seront mesurés à travers les indicateurs clés de performance (KPI) suivants, qui permettront d'évaluer l'atteinte des objectifs business et produit.

| Critère de Succès                            | Métrique (KPI)                                   | Objectif Cible (si applicable)                            | Fréquence de Mesure       |
| :------------------------------------------- | :----------------------------------------------- | :-------------------------------------------------------- | :------------------------ |
| **Adoption et Croissance Utilisateur**       | Nombre d'apprenants inscrits                     | Augmentation de 20% par trimestre                         | Mensuelle / Trimestrielle |
|                                              | Nombre de centres de formation partenaires       | 10 nouveaux centres par an                                | Trimestrielle             |
| **Engagement et Rétention**                  | Taux de complétion des parcours                  | > 70% pour les parcours terminés                          | Mensuelle                 |
|                                              | Taux d'activité sur le forum                     | > 50% des utilisateurs actifs par mois                    | Mensuelle                 |
|                                              | Nombre d'interactions mentor-apprenant           | Augmentation de 15% par mois                              | Mensuelle                 |
| **Qualité de la Formation et Employabilité** | Taux de satisfaction des apprenants              | > 85% (via enquêtes)                                      | Trimestrielle             |
|                                              | Taux de placement des diplômés (si mesurable)    | > 60% dans les 6 mois post-formation                      | Annuelle                  |
| **Performance Technique**                    | Disponibilité de la plateforme                   | 99.8% d'uptime [1]                                        | Mensuelle                 |
|                                              | Temps de chargement des pages                    | < 10 secondes [1]                                         | Mensuelle                 |
| **Viabilité Économique**                     | Revenus générés par les abonnements/partenariats | Couverture des coûts d'exploitation et de maintenance [1] | Trimestrielle             |

## Risques, hypothèses & points ouverts

### Risques

- **Adoption limitée par les utilisateurs :** Si la plateforme ne répond pas aux attentes des apprenants ou des centres, l'adoption pourrait être faible.
- **Concurrence :** Existence de nombreuses plateformes d'apprentissage en ligne, nécessitant une différenciation forte de CodeCraft.
- **Stabilité technique :** Problèmes de performance ou de sécurité pouvant nuire à l'expérience utilisateur et à la réputation.
- **Dépendance aux partenaires :** La couverture des coûts futurs dépend de l'engagement des entreprises partenaires.
- **Évolution des technologies :** Nécessité d'adapter constamment la plateforme aux nouvelles technologies et aux besoins du marché.

### Hypothèses

- Les apprenants sont motivés par le « Learning by doing » et la dimension communautaire.
- Les centres de formation sont prêts à intégrer une nouvelle plateforme pour gérer leurs cursus.
- Les entreprises partenaires sont prêtes à investir dans la formation de jeunes développeurs.
- La connexion internet et la disponibilité du personnel administratif seront stables et suffisantes pour le bon déroulement du projet.

### Points ouverts

- **Modèle de monétisation détaillé :** Bien que des abonnements et partenariats soient évoqués, une stratégie de monétisation plus fine reste à définir.
- **Stratégie de marketing et d'acquisition utilisateur :** Comment CodeCraft sera-t-il promu auprès des apprenants et des centres de formation ?
- **Plan de support et de maintenance :** Détails sur le support technique et la maintenance continue de la plateforme.
- **Intégration avec des outils externes :** Possibilité d'intégrer d'autres outils ou API pour enrichir les fonctionnalités (ex: outils de développement, plateformes de certification).

## Références

[1] FASSEU TCHOFFO FRANCK OBADIA. (2025/2026). _Conception Et Réalisation d’Une Application Web de Gestion et Suivi des Parcours de Formations en Ligne : eScrutin_. ESMATA – Cycle BTS Génie Logiciel.
