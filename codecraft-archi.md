# Document d'Architecture Technique (DAT) : CodeCraft

## Résumé exécutif & objectifs techniques

Ce Document d'Architecture Technique (DAT) décrit la conception technique de **CodeCraft**, une application web modulaire visant à combler le fossé entre la formation théorique et les compétences pratiques en informatique en Afrique. L'objectif est de fournir une plateforme robuste, scalable et sécurisée, capable de supporter une expérience d'apprentissage interactive pour les apprenants et des outils d'administration efficaces pour les centres de formation.

Les objectifs techniques principaux sont :

*   **Développer une architecture Full-Stack** en utilisant des technologies modernes et éprouvées (React pour le Front-End, Node.js/Express.js pour le Back-End, MySQL pour la base de données) [1].
*   **Assurer la performance** de l'application avec des temps de chargement rapides (moins de 10 secondes) [1].
*   **Garantir la sécurité** des données utilisateurs et de la plateforme contre les vulnérabilités courantes (XSS, SQL injection) et la conformité RGPD [1].
*   **Concevoir une solution scalable** capable de gérer une augmentation significative du nombre d'utilisateurs sans dégradation des performances [1].
*   **Mettre en place une infrastructure de déploiement** et de monitoring fiable pour assurer une haute disponibilité (99.8% d'uptime) [1].
*   **Faciliter la maintenabilité et l'évolutivité** du code grâce à des patterns de conception clairs et une documentation technique exhaustive.

## Contexte & exigences principales du PRD

Le projet CodeCraft vise à résoudre la problématique du décalage entre la formation théorique en informatique et les compétences pratiques requises par le marché de l'emploi en Afrique. Le Product Requirements Document (PRD) a identifié les exigences clés suivantes :

### Problème Principal

*   **Écart entre la théorie et la pratique :** Les formations existantes ne préparent pas suffisamment les apprenants aux réalités du marché du travail, entraînant un manque de professionnels immédiatement opérationnels [1].

### Utilisateurs Cibles

*   **Apprenants :** Autodidactes et étudiants de centres de formation cherchant des parcours pratiques, un suivi de progression, une communauté d'entraide et des certifications [1].
*   **Centres de Formation :** Institutions souhaitant gérer, administrer et suivre les cursus de leurs étudiants, avec des outils d'évaluation et de communication [1].

### Fonctionnalités Clés (extraits du PRD)

Le PRD a détaillé un ensemble de fonctionnalités réparties en plusieurs modules. Les exigences fonctionnelles principales incluent :

*   **Authentification et Gestion des Profils :** Inscription, connexion, gestion de profil, réinitialisation de mot de passe [1].
*   **Gestion des Centres de Formation :** Ajout/modification/suppression d'apprenants, organisation en groupes, assignation de parcours et mentors, correction/évaluation, suivi de progression [1].
*   **Apprentissage :** Catalogue de parcours, inscription, suivi des leçons, soumission d'exercices, suivi de progression personnel, gestion des certifications [1].
*   **Communauté et Mentorat :** Forum d'entraide, réponses communautaires, système de mentorat, promotion au statut de mentor, galerie de tutoriels [1].
*   **Gamification et Motivation :** Système de points/niveaux, badges/récompenses, streaks, classements [1].
*   **Communication :** Messagerie interne, annonces et notifications [1].
*   **Administration :** Gestion des centres, modération de contenu, analytics et rapports, gestion des catégories/technologies [1].

### Exigences Non Fonctionnelles

*   **Performance :** Temps de chargement des écrans inférieur à 10 secondes [1].
*   **Sécurité :** Chiffrement des données, protection contre les attaques XSS/SQL injection, conformité RGPD [1].
*   **Ergonomie (UX/UI) :** Interface simple, intuitive et agréable, s'appuyant sur la librairie **shadcn/ui** pour des composants cohérents et accessibles, sans besoin de formation spécifique [1].
*   **Accessibilité :** Utilisation possible par des personnes handicapées (ex: contraste élevé) [1].
*   **Disponibilité :** 99.8% d'uptime [1].
*   **Évolutivité :** Capacité à gérer l'augmentation du nombre d'utilisateurs sans perte de performance [1].

Ces exigences guideront les choix architecturaux pour assurer que la solution technique réponde pleinement aux besoins métier et utilisateur.
## Architecture globale du système

L'architecture de CodeCraft sera basée sur une approche **Full-Stack** avec une séparation claire entre le Front-End, le Back-End et la base de données. Cette architecture en trois couches permet une meilleure scalabilité, maintenabilité et flexibilité dans le choix des technologies. Le système sera conçu pour être modulaire, permettant l'ajout ou la modification de fonctionnalités sans impacter l'ensemble de l'application.

### Composants et modules principaux

1.  **Client (Front-End) :** L'interface utilisateur de l'application web, accessible via un navigateur web. Il est responsable de la présentation des données et de l'interaction avec l'utilisateur.
2.  **Serveur (Back-End) :** Le cœur de la logique métier de l'application. Il gère les requêtes des clients, interagit avec la base de données, implémente les règles métier et expose des APIs pour le Front-End et d'éventuels services externes.
3.  **Base de Données :** Stocke toutes les données persistantes de l'application, y compris les informations utilisateurs, les parcours de formation, les exercices, les interactions communautaires, etc.
4.  **Services Externes (optionnel) :** Intégrations potentielles avec des services tiers pour des fonctionnalités spécifiques (ex: services de paiement, outils d'analyse, plateformes de communication).


**Description du diagramme :**

*   L'utilisateur interagit avec l'application via un **navigateur web**.
*   Le **Front-End (React JS)** est l'interface utilisateur qui envoie des requêtes au Back-End.
*   Le **Back-End (Node.js / Express JS)** traite la logique métier, communique avec la base de données et les services externes.
*   La **Base de Données (MySQL)** stocke toutes les informations de l'application.
*   Les **Services Externes** peuvent être utilisés par le Back-End pour envoyer des notifications ou des emails aux utilisateurs.

## Technologies et frameworks

Les choix technologiques pour CodeCraft sont guidés par les exigences de performance, scalabilité, sécurité et maintenabilité, tout en s'appuyant sur des technologies modernes et largement adoptées par la communauté de développement.

### Langages

*   **JavaScript/TypeScript :** Langage principal pour le développement Front-End (React JS) et Back-End (Node.js/Express JS). TypeScript sera privilégié pour sa robustesse et sa capacité à améliorer la maintenabilité du code [1].
*   **SQL :** Langage de requête standard pour interagir avec la base de données MySQL [1].

### Bases de données

*   **MySQL :** Base de données relationnelle choisie pour sa fiabilité, ses performances et sa maturité. Elle sera utilisée pour stocker toutes les données structurées de l'application (utilisateurs, parcours, exercices, etc.) [1].

### Frameworks et librairies

*   **Front-End : React JS :** Librairie JavaScript pour la construction d'interfaces utilisateur dynamiques et réactives. Elle offre une approche basée sur les composants, facilitant le développement et la réutilisation du code [1].
*   **UI Library : shadcn/ui :** Collection de composants réutilisables construits avec Radix UI et Tailwind CSS. Elle sera utilisée pour garantir une interface utilisateur moderne, accessible et hautement personnalisable, tout en accélérant le cycle de développement.
*   **Back-End : Node.js & Express JS :** Node.js est un environnement d'exécution JavaScript côté serveur, et Express JS est un framework web minimaliste et flexible pour Node.js, idéal pour construire des APIs RESTful [1].
*   **Modélisation : UML :** Langage de modélisation unifié pour la conception et la documentation du système (diagrammes de cas d'utilisation, de classes, de séquences) [1].

## Patterns de conception

Pour assurer la robustesse, la maintenabilité et l'évolutivité de CodeCraft, plusieurs patterns de conception seront appliqués :

*   **Architecture en couches (Layered Architecture) :** Le système sera structuré en couches distinctes (présentation, application, domaine, infrastructure) pour séparer les préoccupations et faciliter la gestion des dépendances. Cela inclut :
    *   **Couche de Présentation (Front-End) :** Gérée par React JS, responsable de l'interface utilisateur et de l'interaction avec l'utilisateur.
    *   **Couche Application (Back-End) :** Gérée par Node.js/Express JS, contenant la logique métier et orchestrant les interactions entre la couche de présentation et la couche de données.
    *   **Couche de Données (Base de Données) :** Gérée par MySQL, responsable de la persistance et de la récupération des données.

*   **API RESTful :** Le Back-End exposera une API RESTful pour permettre la communication stateless entre le Front-End et le Back-End. Cela garantira une flexibilité et une interopérabilité avec d'autres clients potentiels à l'avenir.

*   **Modèle-Vue-Contrôleur (MVC) ou Modèle-Vue-Présentateur (MVP) :** Bien que React JS utilise une approche basée sur les composants, les principes de séparation des préoccupations du MVC/MVP seront appliqués au niveau du Front-End pour organiser le code de manière logique (composants pour la Vue, hooks/logique pour le Contrôleur/Présentateur, gestion d'état pour le Modèle).

*   **Injection de Dépendances :** Pour le Back-End, l'utilisation de l'injection de dépendances facilitera la testabilité, la modularité et la gestion des services.

*   **Design Pattern Observateur :** Pour la gestion des notifications et des mises à jour en temps réel (par exemple, pour les messages de chat ou les annonces), le pattern Observateur pourrait être envisagé pour une communication efficace entre les composants.

## Flux de données & intégrations

Les flux de données au sein de CodeCraft sont essentiels pour orchestrer les interactions entre les différents composants du système et assurer une expérience utilisateur fluide. Les intégrations externes permettront d'étendre les capacités de la plateforme.

**Description du flux :**

1.  L'**Utilisateur** initie une action via le **Front-End** (ex: connexion, inscription à un parcours, soumission d'exercice).
2.  Le **Front-End** envoie une requête API (REST) au **Back-End**.
3.  Le **Back-End** traite la requête, effectue des validations et interagit avec la **Base de Données MySQL** pour récupérer ou persister des informations.
4.  La **Base de Données** renvoie les résultats au **Back-End**.
5.  Le **Back-End** formate la réponse (généralement en JSON) et la renvoie au **Front-End**.
6.  Le **Front-End** met à jour l'interface utilisateur et affiche les informations pertinentes à l'**Utilisateur**.
7.  Pour certaines actions (ex: inscription, correction d'exercice, rappel de streak), le **Back-End** peut interagir avec un **Service de Notification/Email** externe pour informer l'**Utilisateur**.
8.  L'**Utilisateur** reçoit la notification ou l'email.
9.  Pour des fonctionnalités spécifiques (ex: gestion des paiements pour les parcours payants), le **Back-End** peut appeler des **Services Tiers** via leurs APIs.
10. Le **Service Tiers** renvoie une réponse au **Back-End**.

### API et interactions externes

*   **API RESTful interne :** Le Back-End exposera une série d'endpoints RESTful pour toutes les opérations CRUD (Create, Read, Update, Delete) nécessaires aux fonctionnalités de l'application. L'authentification et l'autorisation seront gérées via des tokens (JWT par exemple) pour sécuriser l'accès aux ressources.
*   **Services de notification :** Intégration avec un service tiers (ex: SendGrid, Mailgun) pour l'envoi d'emails transactionnels (confirmation d'inscription, réinitialisation de mot de passe, notifications de cours) et potentiellement des notifications push.
*   **Services de paiement :** Pour les parcours payants, une intégration avec une passerelle de paiement (ex: Stripe, PayPal) sera nécessaire pour gérer les transactions de manière sécurisée. Cette intégration sera gérée par le Back-End pour des raisons de sécurité et de conformité.
*   **Environnement Code Sandbox :** Pour la soumission d'exercices de code, une intégration avec un environnement de type Code Sandbox (ex: Judge0, Glot.io ou une solution custom) sera envisagée pour permettre l'exécution et l'évaluation du code soumis par les apprenants. Cette intégration sera critique pour la fonctionnalité de « Learning by doing ».
## Infrastructure & déploiement

L'infrastructure de CodeCraft sera conçue pour garantir la haute disponibilité, la scalabilité et la sécurité de l'application. Le déploiement s'appuiera sur des pratiques modernes de CI/CD pour automatiser les processus et minimiser les erreurs.

### Cloud / serveurs / conteneurs

*   **Hébergement Cloud :** L'application sera déployée sur une plateforme cloud (ex: AWS, Google Cloud Platform, Azure) pour bénéficier de sa flexibilité, de sa scalabilité et de sa résilience. Le choix spécifique de la plateforme dépendra des coûts, des services disponibles et de l'expertise de l'équipe.
*   **Conteneurisation (Docker) :** Tous les composants de l'application (Front-End, Back-End) seront conteneurisés à l'aide de Docker. Cela garantira la portabilité de l'application entre les environnements de développement, de test et de production, et facilitera le déploiement.
*   **Orchestration de Conteneurs (Kubernetes) :** Pour gérer le déploiement, la scalabilité et la haute disponibilité des conteneurs en production, un orchestrateur comme Kubernetes sera utilisé. Cela permettra de gérer automatiquement la charge, les mises à jour et la résilience des services.
*   **Base de Données Managée :** La base de données MySQL sera déployée en tant que service managé (ex: AWS RDS, Google Cloud SQL) pour déléguer la gestion de l'infrastructure, les sauvegardes, les mises à jour et la scalabilité à la plateforme cloud, réduisant ainsi la charge opérationnelle.

### CI/CD, monitoring, backup

*   **Intégration Continue / Déploiement Continu (CI/CD) :**
    *   **Intégration Continue (CI) :** Un pipeline CI (ex: GitHub Actions, GitLab CI, Jenkins) sera mis en place pour automatiser la compilation du code, l'exécution des tests unitaires et d'intégration, et la création des images Docker à chaque push sur le dépôt de code.
    *   **Déploiement Continu (CD) :** Un pipeline CD automatisera le déploiement des nouvelles versions de l'application sur les environnements de staging et de production après validation. Cela inclura la mise à jour des conteneurs sur Kubernetes et l'application des migrations de base de données.
*   **Monitoring et Alerting :**
    *   **Monitoring des performances :** Des outils de monitoring (ex: Prometheus, Grafana, New Relic) seront utilisés pour collecter des métriques sur la performance de l'application (temps de réponse, utilisation CPU/mémoire, erreurs) et de l'infrastructure.
    *   **Logging centralisé :** Les logs de tous les services seront centralisés (ex: ELK Stack, Grafana Loki) pour faciliter le débogage et l'analyse des incidents.
    *   **Alerting :** Des alertes seront configurées pour notifier l'équipe en cas de dégradation des performances, d'erreurs critiques ou de problèmes de disponibilité.
*   **Sauvegardes (Backup) :**
    *   **Base de données :** Des sauvegardes automatiques et régulières de la base de données seront configurées via le service managé, avec une stratégie de rétention définie et des tests de restauration périodiques.
    *   **Code et Configuration :** Le code source sera versionné dans un dépôt Git (ex: GitHub, GitLab), et les configurations de déploiement seront également versionnées pour permettre une restauration rapide en cas de problème.

## Sécurité, performance & scalabilité

Ces trois piliers sont fondamentaux pour le succès de CodeCraft et seront intégrés à chaque étape de la conception et du développement.

### Sécurité

*   **Authentification et Autorisation :**
    *   **Authentification :** Utilisation de mécanismes d'authentification robustes (ex: JWT - JSON Web Tokens) pour sécuriser l'accès aux APIs. Les mots de passe seront hachés et salés avant stockage en base de données.
    *   **Autorisation :** Implémentation d'un contrôle d'accès basé sur les rôles (RBAC - Role-Based Access Control) pour garantir que seuls les utilisateurs autorisés peuvent accéder à des fonctionnalités ou des données spécifiques (ex: un apprenant ne peut pas accéder aux outils d'administration d'un centre) [1].
*   **Protection des données :**
    *   **Chiffrement :** Toutes les données sensibles (mots de passe, informations personnelles) seront chiffrées au repos et en transit (HTTPS pour toutes les communications) [1].
    *   **Conformité RGPD :** Mise en œuvre des meilleures pratiques pour la protection des données personnelles, y compris le droit à l'oubli, l'accès aux données et la portabilité [1].
*   **Sécurité des APIs :**
    *   **Validation des entrées :** Toutes les données reçues via les APIs seront rigoureusement validées pour prévenir les attaques par injection (SQL injection, XSS) [1].
    *   **Limitation de débit (Rate Limiting) :** Mise en place de mécanismes pour limiter le nombre de requêtes qu'un utilisateur ou une adresse IP peut effectuer sur une période donnée, afin de prévenir les attaques par déni de service (DoS).
*   **Sécurité de l'infrastructure :**
    *   **Mises à jour régulières :** Tous les composants logiciels (système d'exploitation, librairies, frameworks) seront maintenus à jour pour corriger les vulnérabilités connues.
    *   **Isolation des environnements :** Les environnements de développement, de staging et de production seront isolés pour minimiser les risques de propagation de vulnérabilités.

### Performance

*   **Optimisation du Front-End :**
    *   **Chargement paresseux (Lazy Loading) :** Les composants et ressources non essentiels seront chargés à la demande pour réduire le temps de chargement initial de la page.
    *   **Optimisation des images :** Utilisation de formats d'image modernes et de techniques de compression pour réduire la taille des fichiers.
    *   **Mise en cache (Caching) :** Mise en cache des ressources statiques (CSS, JavaScript, images) au niveau du navigateur et du CDN.
*   **Optimisation du Back-End :**
    *   **Requêtes de base de données optimisées :** Utilisation d'index appropriés, optimisation des requêtes SQL et minimisation du nombre de requêtes pour chaque opération.
    *   **Mise en cache côté serveur :** Mise en cache des résultats de requêtes fréquemment utilisées ou de données statiques pour réduire la charge sur la base de données.
    *   **Asynchronisme :** Utilisation des opérations asynchrones dans Node.js pour gérer un grand nombre de requêtes concurrentes sans bloquer le serveur.
*   **Infrastructure :**
    *   **CDN (Content Delivery Network) :** Utilisation d'un CDN pour distribuer les ressources statiques géographiquement plus près des utilisateurs, réduisant ainsi la latence.
    *   **Load Balancing :** Répartition de la charge de trafic entre plusieurs instances du Back-End pour améliorer la réactivité et la disponibilité.

