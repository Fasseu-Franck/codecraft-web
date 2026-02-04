Task 2 - Pages d'Authentification (Inscription & Connexion)
🎯 Objectif
Créer deux pages d'authentification complètes et fonctionnelles en français, avec une interface, en suivant les maquettes fournies.

⚠️ Contrainte importante
Toutes les chaînes de texte doivent être en français.
Aucun texte visible par l'utilisateur ne doit être en anglais.

📋 Pages à créer

1. Page Inscription (/signup ou /inscription)
2. Page Connexion (/signin ou /connexion)

📄 Spécifications - Page Inscription
Structure visuelle
┌─────────────────────────────────────────┐
│ [Logo ou Icône App] │
│ │
│ Créer un compte │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Email │ │
│ └───────────────────────────────────┘ │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Mot de passe │ │
│ └───────────────────────────────────┘ │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Confirmer le mot de passe │ │
│ └───────────────────────────────────┘ │
│ │
│ 💡 Le mot de passe doit contenir │
│ au moins 8 caractères │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Créer un compte │ │
│ └───────────────────────────────────┘ │
│ │
│ ────── Ou continuer avec ────── │
│ │
│ [🍎] [G] [Meta] │
│ │
│ Vous avez déjà un compte ? │
│ Se connecter │
│ │
│ En continuant, vous acceptez nos │
│ Conditions d'utilisation et notre │
│ Politique de confidentialité │
└─────────────────────────────────────────┘
Éléments requis
Titre

Texte : "Créer un compte"
Style : Police large (2xl-3xl), gras, centré

Champs de formulaire

Email

Type : email
Placeholder : "Votre email"
Validation : format email valide
Requis

Mot de passe

Type : password
Placeholder : "Votre mot de passe"
Validation : minimum 8 caractères
Icône : afficher/masquer le mot de passe
Requis

Confirmer le mot de passe

Type : password
Placeholder : "Confirmez votre mot de passe"
Validation : doit correspondre au mot de passe
Icône : afficher/masquer le mot de passe
Requis

Texte d'aide

Texte : "Le mot de passe doit contenir au moins 8 caractères"
Style : Petit texte, couleur secondaire/grisée
Icône : 💡 ou info icon (optionnel)

Bouton principal

Texte : "Créer un compte"
Style : Bouton pleine largeur, couleur primaire
États : Normal, Hover, Disabled, Loading

Séparateur

Texte : "Ou continuer avec"
Style : Ligne horizontale avec texte au centre

Boutons de connexion sociale

Apple : Icône Apple + texte optionnel
Google : Icône Google + texte optionnel
Meta : Icône Meta/Facebook + texte optionnel
Layout : 3 boutons côte à côte, même taille
Style : Fond transparent ou légèrement coloré, bordure

Lien de redirection

Texte : "Vous avez déjà un compte ? Se connecter"
Action : Redirection vers /connexion ou /signin
Style : "Se connecter" en gras ou souligné

Mention légale

Texte : "En continuant, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité"
Style : Petit texte, grisé
Liens : "Conditions d'utilisation" et "Politique de confidentialité" cliquables

📄 Spécifications - Page Connexion
Structure visuelle
┌─────────────────────────────────────────┐
│ [Logo ou Icône App] │
│ │
│ Bon retour parmi nous │
│ Connectez-vous à votre compte │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Email │ │
│ └───────────────────────────────────┘ │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Mot de passe │ │
│ └───────────────────────────────────┘ │
│ │
│ Mot de passe oublié ? │
│ │
│ ┌───────────────────────────────────┐ │
│ │ Se connecter │ │
│ └───────────────────────────────────┘ │
│ │
│ ────── Ou continuer avec ────── │
│ │
│ [🍎] [G] [Meta] │
│ │
│ Vous n'avez pas de compte ? │
│ Créer un compte │
│ │
│ En continuant, vous acceptez nos │
│ Conditions d'utilisation et notre │
│ Politique de confidentialité │
└─────────────────────────────────────────┘
Éléments requis
Titre et sous-titre

Titre : "Bon retour parmi nous"
Sous-titre : "Connectez-vous à votre compte"
Style : Titre en gras (2xl-3xl), sous-titre plus petit et grisé

Champs de formulaire

Email

Type : email
Placeholder : "Votre email"
Validation : format email valide
Requis

Mot de passe

Type : password
Placeholder : "Votre mot de passe"
Icône : afficher/masquer le mot de passe
Requis

Lien mot de passe oublié

Texte : "Mot de passe oublié ?"
Position : Aligné à droite sous le champ mot de passe
Action : Redirection vers /mot-de-passe-oublie ou modal
Style : Petit texte, couleur primaire ou lien souligné

Bouton principal

Texte : "Se connecter"
Style : Bouton pleine largeur, couleur primaire
États : Normal, Hover, Disabled, Loading

Séparateur

Texte : "Ou continuer avec"
Style : Ligne horizontale avec texte au centre

Boutons de connexion sociale

Apple : Icône Apple + texte optionnel
Google : Icône Google + texte optionnel
Meta : Icône Meta/Facebook + texte optionnel
Layout : 3 boutons côte à côte, même taille
Style : Fond transparent ou légèrement coloré, bordure

Lien de redirection

Texte : "Vous n'avez pas de compte ? Créer un compte"
Action : Redirection vers /inscription ou /signup
Style : "Créer un compte" en gras ou souligné

Mention légale

Texte : "En continuant, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité"
Style : Petit texte, grisé
Liens : "Conditions d'utilisation" et "Politique de confidentialité" cliquables
