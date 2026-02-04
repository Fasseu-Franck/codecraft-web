# Guide : Écrire du Code React/JavaScript Concis et Clair

## Table des Matières
1. [Comprendre le Code Verbeux](#comprendre-le-code-verbeux)
2. [Principes Fondamentaux](#principes-fondamentaux)
3. [Guide Procédural](#guide-procédural)
4. [Techniques Détaillées](#techniques-détaillées)
5. [Checklist et Bonnes Pratiques](#checklist-rapide)

---

## Comprendre le Code Verbeux

### Qu'est-ce que le code verbeux ?

Le **code verbeux** est du code qui utilise plus de lignes, de mots ou d'instructions que nécessaire pour accomplir une tâche. C'est comme expliquer quelque chose en 10 phrases alors que 2 suffiraient.

**Caractéristiques du code verbeux :**
- Répétitions inutiles
- Variables intermédiaires sans valeur ajoutée
- Structures de contrôle (if/else) complexes pour des logiques simples
- Manque d'utilisation des fonctionnalités modernes du langage
- Code qui "parle trop" pour ce qu'il fait réellement

### Pourquoi éviter le code verbeux ?

1. **Maintenance difficile** : Plus de code = plus de bugs potentiels
2. **Lecture ralentie** : Les développeurs doivent lire plus pour comprendre moins
3. **Duplication** : Plus de chances de répéter la même logique
4. **Tests complexes** : Plus de code = plus de cas à tester

### Le juste équilibre

⚠️ **Attention** : Concis ne veut pas dire obscur !

```javascript
// ❌ Trop verbeux
function getUserName(user) {
    if (user !== null && user !== undefined) {
        if (user.name !== null && user.name !== undefined) {
            return user.name;
        } else {
            return 'Anonyme';
        }
    } else {
        return 'Anonyme';
    }
}

// ❌ Trop concis (obscur)
const n = u?.n ?? 'A';

// ✅ Concis ET clair
const getUserName = (user) => user?.name ?? 'Anonyme';
```

---

## Principes Fondamentaux

**La règle d'or** : Concis ≠ Obscur
- Privilégier la **lisibilité** avant tout
- Utiliser des noms de variables **explicites**
- Une **responsabilité** par fonction
- Découper en **petits composants** réutilisables

### Les 5 piliers du code concis et clair

1. **EXPRESSIVITÉ** : Le code se lit comme une phrase en langage naturel
2. **SIMPLICITÉ** : Utiliser la solution la plus simple qui fonctionne sans perdre en qualité ou en sécurité
3. **COHÉRENCE** : Mêmes patterns dans tout le projet pour garder cohérence et maintabilité
4. **INTENTION** : Le "pourquoi" est évident, pas seulement le "comment" veille à toujours à prioriser le bon  code et non le code qui marche d'abord 
5. **MODERNITÉ** : Utiliser les fonctionnalités récentes du langage qui garantissent sécurité et maintabilité en veillant au bon code.

---

## Guide Procédural

### Comment refactoriser du code verbeux ? (Étape par étape)

#### ÉTAPE 1 : Identifier le code verbeux

Posez-vous ces questions :
- ✓ Y a-t-il des variables utilisées une seule fois ?
- ✓ Y a-t-il des répétitions de logique ?
- ✓ Les conditions peuvent-elles être simplifiées ?
- ✓ Y a-t-il des vérifications de null/undefined répétitives ?

#### ÉTAPE 2 : Analyser la fonction du code

Avant de simplifier, comprenez :
1. **Qu'est-ce que ce code fait ?** (son objectif)
2. **Quelles sont les entrées ?** (paramètres, props, état)
3. **Quelle est la sortie ?** (retour, effet de bord)
4. **Y a-t-il des cas limites ?** (null, undefined, tableau vide)

#### ÉTAPE 3 : Appliquer les transformations

Suivez cet ordre de priorité :

1. Destructuration → Simplifie l'accès aux données
2. Valeurs par défaut → Réduit les vérifications null
3. Optional chaining → Élimine les vérifications imbriquées
4. Return implicite → Réduit les lignes pour les fonctions simples
5. Array methods → Remplace les boucles for
6. Template literals → Remplace la concaténation
7. Ternaires/Short-circuit → Simplifie les if/else
8. Extraction de fonctions → Réduit la complexité

#### ÉTAPE 4 : Exemple de refactorisation complète

**Code de départ (verbeux) :**
```javascript
function UserCard(props) {
    const user = props.user;
    const showEmail = props.showEmail;
    
    let displayName;
    if (user.firstName && user.lastName) {
        displayName = user.firstName + ' ' + user.lastName;
    } else if (user.firstName) {
        displayName = user.firstName;
    } else {
        displayName = 'Utilisateur';
    }
    
    let email = null;
    if (showEmail === true) {
        if (user.email) {
            email = user.email;
        }
    }
    
    let roleText;
    if (user.role === 'admin') {
        roleText = 'Administrateur';
    } else if (user.role === 'editor') {
        roleText = 'Éditeur';
    } else {
        roleText = 'Utilisateur';
    }
    
    return (
        <div className="user-card">
            <h3>{displayName}</h3>
            <p>{roleText}</p>
            {email && <p>{email}</p>}
        </div>
    );
}
```

**Application des transformations :**

**Transformation 1 : Destructuration**
```javascript
function UserCard({ user, showEmail }) {
    // Le reste du code reste identique
    const { firstName, lastName, email, role } = user;
    // ...
}
```

**Transformation 2 : Simplifier displayName avec template literals et nullish coalescing**
```javascript
const displayName = firstName && lastName 
    ? `${firstName} ${lastName}` 
    : firstName ?? 'Utilisateur';
```

**Transformation 3 : Remplacer les if/else de roleText par un objet**
```javascript
const ROLE_LABELS = {
    admin: 'Administrateur',
    editor: 'Éditeur',
    default: 'Utilisateur'
};
const roleText = ROLE_LABELS[role] ?? ROLE_LABELS.default;
```

**Transformation 4 : Simplifier la logique email**
```javascript
const displayEmail = showEmail && email;
```

**Code final (concis et clair) :**
```javascript
const ROLE_LABELS = {
    admin: 'Administrateur',
    editor: 'Éditeur',
    default: 'Utilisateur'
};

const UserCard = ({ user, showEmail }) => {
    const { firstName, lastName, email, role } = user;
    
    const displayName = firstName && lastName 
        ? `${firstName} ${lastName}` 
        : firstName ?? 'Utilisateur';
    
    const roleText = ROLE_LABELS[role] ?? ROLE_LABELS.default;
    const displayEmail = showEmail && email;
    
    return (
        <div className="user-card">
            <h3>{displayName}</h3>
            <p>{roleText}</p>
            {displayEmail && <p>{displayEmail}</p>}
        </div>
    );
};
```

**Résultat :** 
- Réduction de ~30 lignes à ~20 lignes
- Plus facile à lire et maintenir
- Logique plus claire

#### ÉTAPE 5 : Tester et valider

Après la refactorisation :
1. ✓ Le code fait-il toujours la même chose ?
2. ✓ Est-il plus facile à comprendre ?
3. ✓ Les cas limites sont-ils gérés ?
4. ✓ Les tests passent-ils toujours ?
5. ✓ Est-il sécurisé, maintenable, et cohérent 

---

## Techniques Détaillées

### Processus de pensée pour chaque technique

---

## 1. Destructuration

### Qu'est-ce que la destructuration ?

La **destructuration** est une syntaxe JavaScript qui permet d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables de manière concise.

**Pourquoi l'utiliser ?**
- Évite la répétition de `props.` ou `user.` partout
- Rend le code plus lisible
- Montre clairement quelles données sont utilisées

### Processus de destructuration

**ÉTAPE 1 : Identifier les accès répétés**
```javascript
// Code avec répétitions
function UserProfile(props) {
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>{props.user.email}</p>
            <span>{props.user.role}</span>
        </div>
    );
}
```
→ On accède 3 fois à `props.user.XXX`

**ÉTAPE 2 : Destructurer au niveau approprié**
```javascript
// Option 1 : Destructurer les props
function UserProfile(props) {
    const { user } = props;
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <span>{user.role}</span>
        </div>
    );
}

// Option 2 : Destructurer directement dans les paramètres (MEILLEUR)
function UserProfile({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <span>{user.role}</span>
        </div>
    );
}
```

**ÉTAPE 3 : Destructurer en profondeur si nécessaire**
```javascript
// Si on accède souvent aux propriétés de user
function UserProfile({ user: { name, email, role } }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <span>{role}</span>
        </div>
    );
}
```

### Props et objets
```javascript
// ❌ À éviter
function UserProfile(props) {
    return (
        <div>
            {props.user.name} - {props.user.email}
            {props.user.role}
        </div>
    );
}

// ✅ Recommandé
function UserProfile({ user: { name, email, role } }) {
    return <div>{name} - {email} - {role}</div>;
}
```

### État et hooks
```javascript
// ❌ À éviter
const userState = useState(null);
const user = userState[0];
const setUser = userState[1];

// ✅ Recommandé
const [user, setUser] = useState(null);
```
---

## 2. Return Implicite

### Qu'est-ce qu'un return implicite ?

Avec les **fonctions fléchées** (`=>`), si le corps de la fonction ne contient qu'une seule expression, vous pouvez omettre les accolades `{}` et le mot-clé `return`. Le résultat est retourné automatiquement.

**Pourquoi l'utiliser ?**
- Réduit le bruit visuel
- Parfait pour les composants React simples
- Rend l'intention immédiate

### Processus de transformation

**ÉTAPE 1 : Identifier les fonctions à une seule instruction**
```javascript
// Fonction avec return explicite
const Button = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};
```
→ Une seule instruction : le JSX

**ÉTAPE 2 : Retirer les accolades et le return**
```javascript
const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);
```
→ Utilisez des parenthèses `()` pour le JSX multiligne

**ÉTAPE 3 : Pour une ligne, même les parenthèses sont optionnelles**
```javascript
const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;
```

### Quand NE PAS utiliser le return implicite

❌ **Plusieurs instructions**
```javascript
// IMPOSSIBLE avec return implicite
const processUser = (user) => {
    console.log('Processing:', user);
    return user.name;
};
```

❌ **Logique conditionnelle complexe**
```javascript
// Gardez les accolades pour plus de clarté
const getStatus = (user) => {
    if (user.isActive) {
        console.log('Active user');
        return 'active';
    }
    return 'inactive';
};
```

✅ **Parfait pour les transformations simples**
```javascript
const double = (x) => x * 2;
const getNames = (users) => users.map(u => u.name);
const isAdult = (age) => age >= 18;
```

### Composants simples
```javascript
// ❌ À éviter
const Button = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

// ✅ Recommandé
const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
);
```

### Fonctions fléchées
```javascript
// ❌ À éviter
const double = (x) => {
    return x * 2;
};

// ✅ Recommandé
const double = (x) => x * 2;
```

---

## 3. Conditions et Affichage Conditionnel

### Comprendre les opérateurs conditionnels

JavaScript et React offrent plusieurs façons d'écrire des conditions. Chacune a son cas d'usage optimal.

### L'opérateur ternaire (condition ? vrai : faux)

**Quand l'utiliser :** Lorsque vous devez choisir entre deux valeurs basées sur une condition.

**Processus de transformation :**

**ÉTAPE 1 : Identifier le pattern if/else simple**
```javascript
// Pattern à transformer
function Message({ isLoggedIn }) {
    if (isLoggedIn) {
        return <div>Bienvenue</div>;
    } else {
        return <div>Connectez-vous</div>;
    }
}
```

**ÉTAPE 2 : Reconnaître la structure**
- Une condition : `isLoggedIn`
- Deux résultats possibles : "Bienvenue" ou "Connectez-vous"
- Les deux branches retournent quelque chose

**ÉTAPE 3 : Convertir en ternaire**
```javascript
const Message = ({ isLoggedIn }) => (
    <div>{isLoggedIn ? 'Bienvenue' : 'Connectez-vous'}</div>
);
```

**Structure :** `condition ? valeurSiVrai : valeurSiFaux`

### L'opérateur short-circuit (&&)

**Quand l'utiliser :** Lorsque vous voulez afficher quelque chose SEULEMENT si une condition est vraie (pas d'alternative).

**Comment ça fonctionne :**
- `true && expression` → retourne `expression`
- `false && expression` → retourne `false` (rien ne s'affiche en React)

**Processus de transformation :**

**ÉTAPE 1 : Identifier le pattern "affichage conditionnel"**
```javascript
// Pattern à transformer
function Alert({ error }) {
    if (error) {
        return <div className="error">{error}</div>;
    }
    return null;
}
```

**ÉTAPE 2 : Reconnaître la structure**
- Une condition : `error`
- Affichage SI condition vraie
- Rien (null) SI condition fausse

**ÉTAPE 3 : Convertir en short-circuit**
```javascript
const Alert = ({ error }) => error && <div className="error">{error}</div>;
```

**Attention aux valeurs falsy :**
```javascript
// ❌ PIÈGE : affichera "0" si count = 0
const Count = ({ count }) => count && <div>{count}</div>;

// ✅ CORRECT : vérification explicite
const Count = ({ count }) => count > 0 && <div>{count}</div>;
// OU
const Count = ({ count }) => count !== undefined && <div>{count}</div>;
```

### Choisir la bonne approche

| Situation | Opérateur | Exemple |
|-----------|-----------|---------|
| Afficher A ou B selon condition | Ternaire `? :` | `{isOnline ? 'En ligne' : 'Hors ligne'}` |
| Afficher quelque chose OU rien | Short-circuit `&&` | `{error && <Error msg={error} />}` |
| Logique complexe (3+ branches) | if/else ou switch | Garder les accolades |
| Valeur par défaut | Nullish `??` | `{name ?? 'Anonyme'}` |

### Ternaire simple
```javascript
// ❌ À éviter
function Message({ isLoggedIn }) {
    if (isLoggedIn) {
        return <div>Bienvenue</div>;
    } else {
        return <div>Connectez-vous</div>;
    }
}

// ✅ Recommandé
const Message = ({ isLoggedIn }) => (
    <div>{isLoggedIn ? 'Bienvenue' : 'Connectez-vous'}</div>
);
```

### Short-circuit (&&)
```javascript
// ❌ À éviter
function Alert({ error }) {
    if (error) {
        return <div className="error">{error}</div>;
    }
    return null;
}

// ✅ Recommandé
const Alert = ({ error }) => error && <div className="error">{error}</div>;
```

### Éviter les comparaisons inutiles
```javascript
// ❌ À éviter
if (user.isActive === true) {
    return true;
} else {
    return false;
}

// ✅ Recommandé
return user.isActive;
```

---

## 4. Template Literals

```javascript
// ❌ À éviter
const greeting = 'Bonjour ' + user.firstName + ' ' + user.lastName;
const url = '/api/users/' + userId + '/posts/' + postId;

// ✅ Recommandé
const greeting = `Bonjour ${user.firstName} ${user.lastName}`;
const url = `/api/users/${userId}/posts/${postId}`;
```

---

## 5. Valeurs Par Défaut

### Paramètres de fonction
```javascript
// ❌ À éviter
function Profile({ userName, role }) {
    const displayName = userName ? userName : 'Invité';
    const userRole = role ? role : 'Utilisateur';
}

// ✅ Recommandé
function Profile({ userName = 'Invité', role = 'Utilisateur' }) {
    // Directement utilisables
}
```

### Destructuration avec défaut
```javascript
// ❌ À éviter
const config = props.config || {};
const theme = config.theme || 'light';

// ✅ Recommandé
const { config: { theme = 'light' } = {} } = props;
```

---

## 6. Éviter les Variables Inutiles

```javascript
// ❌ À éviter
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData();
    const isValid = validateData(formData);
    if (isValid) {
        submitData(formData);
    }
};

// ✅ Recommandé
const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData();
    if (validateData(formData)) {
        submitData(formData);
    }
};
```

---

## 7. Array Methods au Lieu de Boucles

### Pourquoi utiliser les méthodes de tableau ?

Les **array methods** (`map`, `filter`, `reduce`, etc.) sont :
- ✅ Plus déclaratifs (décrivent CE QUI doit être fait, pas COMMENT)
- ✅ Plus lisibles (intention claire)
- ✅ Moins sujets aux erreurs (pas d'index à gérer)
- ✅ Fonctionnels (pas d'effets de bord)
- ✅ Chainables (peuvent être combinés)

### Les 3 méthodes essentielles

#### 1. **filter()** - Filtrer des éléments

**Objectif :** Créer un nouveau tableau contenant SEULEMENT les éléments qui passent un test.

**Processus de transformation :**

**ÉTAPE 1 : Identifier le pattern de boucle avec condition**
```javascript
// Boucle for avec condition
const activeUsers = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
        activeUsers.push(users[i]);
    }
}
```

**ÉTAPE 2 : Extraire la condition**
- Test : `users[i].isActive`
- On garde l'élément SI le test est vrai

**ÉTAPE 3 : Convertir en filter**
```javascript
const activeUsers = users.filter(user => user.isActive);
```

**Structure :** `array.filter(element => condition)`

**Autres exemples :**
```javascript
// Filtrer par âge
const adults = users.filter(user => user.age >= 18);

// Filtrer par plusieurs conditions
const premiumActiveUsers = users.filter(user => 
    user.isActive && user.isPremium
);

// Filtrer avec une fonction externe
const isValid = (user) => user.email && user.name;
const validUsers = users.filter(isValid);
```

#### 2. **map()** - Transformer des éléments

**Objectif :** Créer un nouveau tableau en transformant CHAQUE élément.

**Processus de transformation :**

**ÉTAPE 1 : Identifier le pattern de transformation**
```javascript
// Boucle for avec transformation
const userNames = [];
for (let i = 0; i < users.length; i++) {
    userNames.push(users[i].name);
}
```

**ÉTAPE 2 : Extraire la transformation**
- Transformation : `users[i].name`
- On transforme CHAQUE élément

**ÉTAPE 3 : Convertir en map**
```javascript
const userNames = users.map(user => user.name);
```

**Structure :** `array.map(element => transformation)`

**Autres exemples :**
```javascript
// Créer des objets transformés
const userCards = users.map(user => ({
    id: user.id,
    displayName: `${user.firstName} ${user.lastName}`,
    isAdmin: user.role === 'admin'
}));

// Transformer en JSX (très courant en React)
const userList = users.map(user => (
    <UserCard key={user.id} user={user} />
));

// Transformation mathématique
const doubled = numbers.map(n => n * 2);
```

#### 3. **reduce()** - Accumuler/Réduire

**Objectif :** Réduire un tableau à une SEULE valeur (nombre, objet, etc.).

**Quand l'utiliser :**
- Calculer une somme/moyenne
- Compter des occurrences
- Grouper des éléments
- Transformer un tableau en objet

**Structure :** `array.reduce((accumulateur, element) => nouvelAccumulateur, valeurInitiale)`

**Exemples :**
```javascript
// Somme
const total = prices.reduce((sum, price) => sum + price, 0);

// Grouper par catégorie
const grouped = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = acc[category] || [];
    acc[category].push(product);
    return acc;
}, {});

// Compter les occurrences
const count = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
}, {});
```

### Combiner les méthodes (Chaining)

**Processus :** Les méthodes peuvent être chainées car elles retournent un nouveau tableau.

```javascript
// ❌ Verbeux - plusieurs boucles
const activeUsers = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].isActive && users[i].age > 18) {
        activeUsers.push(users[i]);
    }
}

const names = [];
for (let i = 0; i < activeUsers.length; i++) {
    names.push(activeUsers[i].name.toUpperCase());
}

// ✅ Concis - chainage
const names = users
    .filter(user => user.isActive && user.age > 18)
    .map(user => user.name.toUpperCase());
```

**Ordre d'exécution :**
1. `filter` : garde seulement les utilisateurs actifs de plus de 18 ans
2. `map` : transforme les utilisateurs restants en noms en majuscules

### Guide de décision rapide

```
Besoin de...
├─ Filtrer certains éléments → filter()
├─ Transformer chaque élément → map()
├─ Trouver un élément → find()
├─ Vérifier si un élément existe → some()
├─ Vérifier si tous correspondent → every()
└─ Réduire à une valeur → reduce()
```

### Filter
```javascript
// ❌ À éviter
const activeUsers = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].isActive) {
        activeUsers.push(users[i]);
    }
}

// ✅ Recommandé
const activeUsers = users.filter(user => user.isActive);
```

### Map
```javascript
// ❌ À éviter
const userNames = [];
for (let i = 0; i < users.length; i++) {
    userNames.push(users[i].name);
}

// ✅ Recommandé
const userNames = users.map(user => user.name);
```

### Combinaisons
```javascript
// ❌ À éviter
const result = [];
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        result.push(users[i].name.toUpperCase());
    }
}

// ✅ Recommandé
const result = users
    .filter(user => user.age > 18)
    .map(user => user.name.toUpperCase());
```

---

## 8. Optional Chaining (?.) et Nullish Coalescing (??)

### Comprendre les problèmes de null/undefined

En JavaScript, accéder à une propriété d'un objet `null` ou `undefined` cause une erreur :

```javascript
const user = null;
const city = user.address.city; // ❌ TypeError: Cannot read property 'address' of null
```

**Solution traditionnelle (verbeux) :**
```javascript
const city = user && user.address && user.address.city;
```

### Optional Chaining (?.)

**Qu'est-ce que c'est ?**
L'opérateur `?.` permet d'accéder à des propriétés imbriquées sans générer d'erreur si une valeur intermédiaire est `null` ou `undefined`.

**Comment ça fonctionne :**
- Si la valeur AVANT `?.` est `null` ou `undefined` → retourne `undefined`
- Sinon → continue l'accès normalement

**Processus de transformation :**

**ÉTAPE 1 : Identifier les vérifications imbriquées**
```javascript
// Pattern à transformer
let city;
if (user && user.address && user.address.city) {
    city = user.address.city;
}
```

**ÉTAPE 2 : Repérer la chaîne d'accès**
- `user` → `address` → `city`
- Chaque niveau peut être null/undefined

**ÉTAPE 3 : Remplacer par optional chaining**
```javascript
const city = user?.address?.city;
```

**Cas d'usage :**

```javascript
// Accès aux propriétés
const name = user?.profile?.name;

// Appel de méthodes
const result = user?.getName?.();

// Accès aux tableaux
const firstItem = items?.[0];
const value = obj?.[dynamicKey];
```

### Nullish Coalescing (??)

**Qu'est-ce que c'est ?**
L'opérateur `??` retourne la valeur de DROITE si la valeur de GAUCHE est `null` ou `undefined`.

**Différence avec || (OR) :**

```javascript
const count = 0;

// Avec || (problématique)
const display1 = count || 10; // → 10 (car 0 est falsy)

// Avec ?? (correct)
const display2 = count ?? 10; // → 0 (car 0 n'est ni null ni undefined)
```

**Valeurs traitées différemment :**
- `||` considère comme "fausse" : `false`, `0`, `''`, `null`, `undefined`, `NaN`
- `??` considère comme "absente" : SEULEMENT `null` et `undefined`

**Processus de transformation :**

**ÉTAPE 1 : Identifier les vérifications de null/undefined avec fallback**
```javascript
// Pattern à transformer
let name;
if (user.name !== null && user.name !== undefined) {
    name = user.name;
} else {
    name = 'Anonyme';
}
```

**ÉTAPE 2 : Convertir en nullish coalescing**
```javascript
const name = user.name ?? 'Anonyme';
```

**Cas d'usage :**

```javascript
// Valeurs par défaut
const port = config.port ?? 3000;
const title = post.title ?? 'Sans titre';

// Avec des nombres (où || serait problématique)
const quantity = product.stock ?? 0; // 0 est une valeur valide
const score = game.score ?? 0; // 0 est un score valide

// Avec des chaînes vides (où || serait problématique)
const search = query.search ?? ''; // '' est valide pour "pas de recherche"
```

### Combinaison des deux (Pattern très courant)

**Le pattern parfait pour les données potentiellement manquantes :**

```javascript
// ❌ Verbeux
let city;
if (user && user.address && user.address.city) {
    city = user.address.city;
} else {
    city = 'Non renseigné';
}

// ✅ Concis et sûr
const city = user?.address?.city ?? 'Non renseigné';
```

**Explication étape par étape :**
1. `user?.address?.city` → essaie d'accéder à city
   - Si `user` est null/undefined → retourne `undefined`
   - Si `user.address` est null/undefined → retourne `undefined`
   - Sinon → retourne `user.address.city`
2. `?? 'Non renseigné'` → si le résultat est `undefined` (ou `null`), utilise 'Non renseigné'

**Exemples pratiques en React :**

```javascript
// Affichage de données utilisateur
const UserProfile = ({ user }) => (
    <div>
        <h1>{user?.name ?? 'Utilisateur'}</h1>
        <p>{user?.email ?? 'Email non fourni'}</p>
        <span>{user?.address?.city ?? 'Ville inconnue'}</span>
    </div>
);

// Configuration avec valeurs par défaut
const config = {
    theme: apiResponse?.settings?.theme ?? 'light',
    language: apiResponse?.settings?.language ?? 'fr',
    notifications: apiResponse?.settings?.notifications ?? true
};

// Appel d'API avec gestion d'erreur
const fetchUser = async (id) => {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    return {
        name: data?.user?.name ?? 'Inconnu',
        avatar: data?.user?.avatar ?? '/default-avatar.png'
    };
};
```

### Tableau récapitulatif

| Opérateur | Utilisation | Quand l'utiliser |
|-----------|-------------|------------------|
| `?.` | Accès sécurisé | Propriétés potentiellement absentes |
| `??` | Valeur par défaut | Remplacer null/undefined seulement |
| `\|\|` | Valeur par défaut | Remplacer toute valeur falsy (moins sûr) |

### Optional chaining
```javascript
// ❌ À éviter
const city = user && user.address && user.address.city;

// ✅ Recommandé
const city = user?.address?.city;
```

### Nullish coalescing
```javascript
// ❌ À éviter
const name = user.name !== null && user.name !== undefined 
    ? user.name 
    : 'Anonyme';

// ✅ Recommandé
const name = user.name ?? 'Anonyme';
```

### Combinaison
```javascript
// ❌ À éviter
let city;
if (user && user.address && user.address.city) {
    city = user.address.city;
} else {
    city = 'Non renseigné';
}

// ✅ Recommandé
const city = user?.address?.city ?? 'Non renseigné';
```

---

## 9. Props Spreading

### Spreading judicieux
```javascript
// ❌ À éviter (si toutes les props sont dans un objet)
<Input 
    type={inputProps.type}
    placeholder={inputProps.placeholder}
    value={inputProps.value}
    onChange={inputProps.onChange}
    disabled={inputProps.disabled}
/>

// ✅ Recommandé
<Input {...inputProps} />
```

### Spreading avec override
```javascript
// ✅ Recommandé
<Input {...inputProps} className="custom-input" />
// className override les props de inputProps
```

### Extraction et rest
```javascript
// ✅ Recommandé
const Button = ({ variant, children, ...rest }) => (
    <button className={`btn-${variant}`} {...rest}>
        {children}
    </button>
);
```

---

## 10. Nommage Explicite (Éviter les Commentaires Évidents)

```javascript
// ❌ À éviter
// Fonction qui récupère les utilisateurs
const getUsers = () => fetchUsers();

// Incrémente le compteur
const inc = () => setCount(count + 1);

// ✅ Recommandé (le nom est explicite)
const getUsers = () => fetchUsers();
const incrementCounter = () => setCount(count + 1);
```

### Variables booléennes
```javascript
// ❌ À éviter
const flag = true;
const check = user.age > 18;

// ✅ Recommandé
const isVisible = true;
const isAdult = user.age > 18;
const hasPermission = user.role === 'admin';
```

---

## 11. Hooks Personnalisés

### Qu'est-ce qu'un hook personnalisé ?

Un **hook personnalisé** est une fonction JavaScript qui :
- Commence par le mot `use` (convention React)
- Peut utiliser d'autres hooks React (useState, useEffect, etc.)
- Extrait et réutilise de la logique entre composants

**Pourquoi créer des hooks personnalisés ?**
- ✅ Éviter la duplication de code
- ✅ Séparer la logique de l'interface
- ✅ Rendre le code testable
- ✅ Faciliter la maintenance

### Processus de création d'un hook personnalisé

#### ÉTAPE 1 : Identifier la logique répétée

Regardez votre code et cherchez :
- Même combinaison de useState/useEffect dans plusieurs composants
- Logique métier utilisée à plusieurs endroits
- Gestion d'état complexe répétée

**Exemple - Code répété dans plusieurs composants :**
```javascript
// Dans UserList.jsx
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
            .then(res => res.json())
            .then(setUsers)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error.message}</div>;
    return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// Dans PostList.jsx - MÊME logique répétée !
function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('/api/posts')
            .then(res => res.json())
            .then(setPosts)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error.message}</div>;
    return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

#### ÉTAPE 2 : Extraire la logique commune

**Identifiez ce qui change :**
- URL différente : `/api/users` vs `/api/posts`

**Identifiez ce qui reste identique :**
- Structure d'état : data, loading, error
- Logique de fetch
- Gestion des erreurs

#### ÉTAPE 3 : Créer le hook personnalisé

```javascript
// hooks/useFetch.js
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Reset sur changement d'URL
        setLoading(true);
        setError(null);
        
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error('Erreur réseau');
                return res.json();
            })
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]); // Dépendance : refetch si URL change

    return { data, loading, error };
}
```

#### ÉTAPE 4 : Utiliser le hook dans les composants

```javascript
// UserList.jsx - SIMPLIFIÉ
function UserList() {
    const { data: users, loading, error } = useFetch('/api/users');

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error.message}</div>;
    return <ul>{users?.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// PostList.jsx - SIMPLIFIÉ
function PostList() {
    const { data: posts, loading, error } = useFetch('/api/posts');

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error.message}</div>;
    return <ul>{posts?.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}
```

**Résultat :**
- Code réduit de ~20 lignes à ~6 lignes par composant
- Logique de fetch centralisée
- Un seul endroit à maintenir

### Exemples de hooks personnalisés courants

#### 1. Hook de gestion de formulaire

```javascript
// hooks/useForm.js
function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const reset = () => setValues(initialValues);

    return { values, handleChange, reset };
}

// Utilisation
function LoginForm() {
    const { values, handleChange, reset } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="email" value={values.email} onChange={handleChange} />
            <input name="password" value={values.password} onChange={handleChange} />
            <button type="submit">Connexion</button>
        </form>
    );
}
```

#### 2. Hook de stockage local

```javascript
// hooks/useLocalStorage.js
function useLocalStorage(key, initialValue) {
    // Initialisation depuis localStorage
    const [value, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    // Synchronisation avec localStorage
    const setStoredValue = (newValue) => {
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.error(error);
        }
    };

    return [value, setStoredValue];
}

// Utilisation
function ThemeToggle() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');

    return (
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Thème: {theme}
        </button>
    );
}
```

#### 3. Hook de debounce (recherche)

```javascript
// hooks/useDebounce.js
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

// Utilisation
function SearchBar() {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        if (debouncedSearch) {
            // Appel API seulement après 500ms sans frappe
            fetch(`/api/search?q=${debouncedSearch}`)
                .then(res => res.json())
                .then(console.log);
        }
    }, [debouncedSearch]);

    return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
```

### Règles des hooks personnalisés

1. **Nommage :** Toujours commencer par `use`
   ```javascript
   ✅ useFetch, useForm, useAuth
   ❌ fetchData, formHandler, auth
   ```

2. **Suivre les règles des hooks :**
   - Appeler uniquement au niveau supérieur (pas dans des boucles/conditions)
   - Appeler uniquement depuis des composants React ou d'autres hooks

3. **Retourner des valeurs utiles :**
   ```javascript
   // ✅ Bon - Retourne ce dont le composant a besoin
   return { data, loading, error, refetch };
   
   // ❌ Mauvais - Retourne trop de détails internes
   return { 
       internalState1, 
       internalState2, 
       helperFunction1,
       // ... 10 autres choses
   };
   ```

### Éviter la répétition
```javascript
// ❌ À éviter (répété dans plusieurs composants)
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
            .then(res => res.json())
            .then(setUsers)
            .catch(setError)
            .finally(() => setLoading(false));
    }, []);

    // ...
}

// ✅ Recommandé (hook personnalisé réutilisable)
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, loading, error };
}

// Utilisation
function UserList() {
    const { data: users, loading, error } = useFetch('/api/users');
    // ...
}
```

---

## 12. Object et Array Shorthand

### Object property shorthand
```javascript
// ❌ À éviter
const name = 'John';
const age = 30;
const user = { name: name, age: age };

// ✅ Recommandé
const name = 'John';
const age = 30;
const user = { name, age };
```

### Method shorthand
```javascript
// ❌ À éviter
const obj = {
    getName: function() {
        return this.name;
    }
};

// ✅ Recommandé
const obj = {
    getName() {
        return this.name;
    }
};
```

---

## 13. Early Return (Guard Clauses)

```javascript
// ❌ À éviter
function processUser(user) {
    if (user) {
        if (user.isActive) {
            if (user.hasPermission) {
                // Logique principale
                return doSomething(user);
            } else {
                return null;
            }
        } else {
            return null;
        }
    } else {
        return null;
    }
}

// ✅ Recommandé
function processUser(user) {
    if (!user) return null;
    if (!user.isActive) return null;
    if (!user.hasPermission) return null;
    
    return doSomething(user);
}
```

---

## 14. Éviter les Chaînes de If/Else

### Utiliser des objets de mapping
```javascript
// ❌ À éviter
function getStatusColor(status) {
    if (status === 'pending') {
        return 'yellow';
    } else if (status === 'approved') {
        return 'green';
    } else if (status === 'rejected') {
        return 'red';
    } else {
        return 'gray';
    }
}

// ✅ Recommandé
const STATUS_COLORS = {
    pending: 'yellow',
    approved: 'green',
    rejected: 'red',
    default: 'gray'
};

const getStatusColor = (status) => STATUS_COLORS[status] || STATUS_COLORS.default;
```

---

## 15. Composants Concis

```javascript
// ❌ À éviter
function LoadingSpinner() {
    return (
        <div className="spinner">
            Chargement...
        </div>
    );
}

// ✅ Recommandé
const LoadingSpinner = () => (
    <div className="spinner">Chargement...</div>
);

// Encore mieux pour les composants très simples
const LoadingSpinner = () => <div className="spinner">Chargement...</div>;
```

---

## 16. Éviter les Conversions Inutiles

```javascript
// ❌ À éviter
const count = Number(userInput.toString());
const items = Array.from(itemsArray);

// ✅ Recommandé
const count = Number(userInput);
const items = [...itemsArray]; // ou directement itemsArray si déjà un array
```

---

## 17. Utiliser les Méthodes Modernes

### Array.includes au lieu de multiples ===
```javascript
// ❌ À éviter
if (role === 'admin' || role === 'moderator' || role === 'editor') {
    // ...
}

// ✅ Recommandé
if (['admin', 'moderator', 'editor'].includes(role)) {
    // ...
}
```

### Object.entries/keys/values
```javascript
// ❌ À éviter
const keys = [];
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        keys.push(key);
    }
}

// ✅ Recommandé
const keys = Object.keys(obj);
```

---

## 18. Async/Await au lieu de Chaînes de .then()

```javascript
// ❌ À éviter
function getUser(id) {
    return fetch(`/api/users/${id}`)
        .then(response => response.json())
        .then(user => {
            return fetch(`/api/posts/${user.id}`)
                .then(response => response.json())
                .then(posts => {
                    return { user, posts };
                });
        });
}

// ✅ Recommandé
async function getUser(id) {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    
    const postsResponse = await fetch(`/api/posts/${user.id}`);
    const posts = await postsResponse.json();
    
    return { user, posts };
}
```

---

## Exercices Pratiques

### Exercice 1 : Refactorisation complète

**Code de départ :**
```javascript
function ProductCard(props) {
    const product = props.product;
    const onAddToCart = props.onAddToCart;
    
    let priceDisplay;
    if (product.discount) {
        const discountedPrice = product.price - (product.price * product.discount / 100);
        priceDisplay = discountedPrice + '€';
    } else {
        priceDisplay = product.price + '€';
    }
    
    let stockStatus;
    if (product.stock > 10) {
        stockStatus = 'En stock';
    } else if (product.stock > 0) {
        stockStatus = 'Stock limité';
    } else {
        stockStatus = 'Rupture';
    }
    
    const handleClick = () => {
        if (product.stock > 0) {
            onAddToCart(product);
        }
    };
    
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>{priceDisplay}</p>
            <p>{stockStatus}</p>
            {product.stock > 0 && (
                <button onClick={handleClick}>Ajouter</button>
            )}
        </div>
    );
}
```

**Votre mission :**
1. Destructurer les props
2. Simplifier `priceDisplay` avec un ternaire
3. Remplacer les if/else de `stockStatus` par un objet de mapping
4. Simplifier `handleClick`
5. Utiliser return implicite si possible

**Solution :**
```javascript
const STOCK_STATUS = {
    abundant: 'En stock',
    limited: 'Stock limité',
    empty: 'Rupture'
};

const ProductCard = ({ product, onAddToCart }) => {
    const { name, price, discount, stock } = product;
    
    const priceDisplay = discount
        ? `${price - (price * discount / 100)}€`
        : `${price}€`;
    
    const stockStatus = stock > 10 
        ? STOCK_STATUS.abundant
        : stock > 0 
            ? STOCK_STATUS.limited 
            : STOCK_STATUS.empty;
    
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{priceDisplay}</p>
            <p>{stockStatus}</p>
            {stock > 0 && (
                <button onClick={() => onAddToCart(product)}>
                    Ajouter
                </button>
            )}
        </div>
    );
};
```

### Exercice 2 : Créer un hook personnalisé

**Scénario :** Vous avez plusieurs composants qui gèrent des modales.

**Code répété :**
```javascript
function ProfileModal() {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(!isOpen);
    
    // ... utilisation de isOpen, open, close, toggle
}

function SettingsModal() {
    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(!isOpen);
    
    // ... utilisation de isOpen, open, close, toggle
}
```

**Créez le hook `useModal` :**
```javascript
function useModal(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);
    
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prev => !prev);
    
    return { isOpen, open, close, toggle };
}

// Utilisation
function ProfileModal() {
    const modal = useModal();
    
    return (
        <>
            <button onClick={modal.open}>Ouvrir profil</button>
            {modal.isOpen && (
                <div className="modal">
                    <button onClick={modal.close}>Fermer</button>
                    {/* Contenu */}
                </div>
            )}
        </>
    );
}
```

---

## Workflow Complet de Refactorisation

### Phase 1 : Audit (15 min)

1. **Lire le code sans le modifier**
2. **Identifier les red flags :**
   - Variables utilisées une seule fois
   - Répétitions de `props.xxx` ou `object.xxx`
   - Boucles `for` qui pourraient être des `map`/`filter`
   - Chaînes de if/else pour des valeurs simples
   - Vérifications de null répétées
   - Logique dupliquée entre composants

### Phase 2 : Planification (10 min)

**Créer une checklist :**
```
[ ] Destructurer props/objets
[ ] Remplacer boucles for par array methods
[ ] Simplifier conditions (ternaires, short-circuit)
[ ] Ajouter optional chaining pour null-safety
[ ] Extraire constantes réutilisées
[ ] Créer hooks personnalisés si duplication
[ ] Utiliser return implicite si applicable
```

### Phase 3 : Refactorisation (30-45 min)

**Ordre recommandé :**

1. **Destructuration** (rapide, améliore lisibilité immédiate)
2. **Optional chaining** (sécurise le code)
3. **Simplification des conditions** (réduit la complexité)
4. **Array methods** (rend le code fonctionnel)
5. **Extraction de fonctions/hooks** (améliore réutilisabilité)
6. **Return implicite** (dernière touche esthétique)

### Phase 4 : Validation (10 min)

**Checklist de validation :**
```
[ ] Le code fait-il toujours la même chose ?
[ ] Les tests passent-ils ?
[ ] Le code est-il plus lisible ?
[ ] Y a-t-il moins de répétitions ?
[ ] Les noms sont-ils explicites ?
[ ] Le code est-il maintenable ?
```

### Exemple complet de workflow

**Avant (Code verbeux) :**
```javascript
function UserDashboard(props) {
    const user = props.user;
    const posts = props.posts;
    const loading = props.loading;
    
    const activePosts = [];
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].status === 'active') {
            activePosts.push(posts[i]);
        }
    }
    
    let userName;
    if (user && user.firstName && user.lastName) {
        userName = user.firstName + ' ' + user.lastName;
    } else if (user && user.firstName) {
        userName = user.firstName;
    } else {
        userName = 'Utilisateur';
    }
    
    let postCount;
    if (activePosts.length === 0) {
        postCount = 'Aucun article';
    } else if (activePosts.length === 1) {
        postCount = '1 article';
    } else {
        postCount = activePosts.length + ' articles';
    }
    
    if (loading === true) {
        return <div>Chargement...</div>;
    }
    
    return (
        <div>
            <h1>{userName}</h1>
            <p>{postCount}</p>
            <ul>
                {activePosts.map(function(post) {
                    return <li key={post.id}>{post.title}</li>;
                })}
            </ul>
        </div>
    );
}
```

**Application du workflow :**

**Étape 1 - Destructuration :**
```javascript
function UserDashboard({ user, posts, loading }) {
    const { firstName, lastName } = user || {};
    // ...
}
```

**Étape 2 - Array methods :**
```javascript
const activePosts = posts.filter(post => post.status === 'active');
```

**Étape 3 - Template literals et simplification :**
```javascript
const userName = firstName && lastName 
    ? `${firstName} ${lastName}`
    : firstName ?? 'Utilisateur';
```

**Étape 4 - Fonction helper pour postCount :**
```javascript
const getPostCount = (count) => {
    if (count === 0) return 'Aucun article';
    if (count === 1) return '1 article';
    return `${count} articles`;
};
```

**Étape 5 - Return implicite et early return :**

**Après (Code concis et clair) :**
```javascript
const getPostCount = (count) => {
    if (count === 0) return 'Aucun article';
    if (count === 1) return '1 article';
    return `${count} articles`;
};

const UserDashboard = ({ user, posts, loading }) => {
    if (loading) return <div>Chargement...</div>;
    
    const { firstName, lastName } = user || {};
    const activePosts = posts.filter(post => post.status === 'active');
    
    const userName = firstName && lastName 
        ? `${firstName} ${lastName}`
        : firstName ?? 'Utilisateur';
    
    const postCount = getPostCount(activePosts.length);
    
    return (
        <div>
            <h1>{userName}</h1>
            <p>{postCount}</p>
            <ul>
                {activePosts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};
```

**Métriques d'amélioration :**
- Lignes de code : 42 → 25 (-40%)
- Complexité cyclomatique : Réduite
- Lisibilité : Améliorée
- Maintenabilité : Améliorée

---

## Checklist Rapide

Avant de commit ton code, vérifie :

- [ ] J'ai destructuré les props et objets quand c'est pertinent
- [ ] J'ai utilisé des returns implicites pour les fonctions simples
- [ ] J'ai remplacé les if/else par des ternaires ou short-circuit quand approprié
- [ ] J'ai utilisé les template literals pour la concaténation
- [ ] J'ai défini des valeurs par défaut dans les paramètres
- [ ] J'ai évité les variables intermédiaires inutiles
- [ ] J'ai utilisé les méthodes d'array (map, filter, reduce) au lieu de boucles
- [ ] J'ai utilisé optional chaining (?.) et nullish coalescing (??)
- [ ] Mes noms de variables/fonctions sont explicites
- [ ] J'ai créé des hooks personnalisés pour la logique répétée
- [ ] J'ai utilisé async/await au lieu de .then()
- [ ] Mon code reste **lisible** malgré la concision

---

## Attention aux Pièges

### Ne pas sacrifier la lisibilité
```javascript
// ❌ Trop concis = obscur
const x = u?.a?.b?.c?.d?.e || d;

// ✅ Concis mais clair
const userCity = user?.address?.city || defaultCity;
```

### Ne pas abuser du spreading
```javascript
// ❌ À éviter (on ne sait pas ce qui est passé)
<Component {...props} {...moreProps} {...evenMoreProps} />

// ✅ Recommandé (explicite)
<Component 
    {...baseProps} 
    onCustomEvent={handleCustomEvent}
    className="specific-class"
/>
```

### Garder les ternaires simples
```javascript
// ❌ À éviter (ternaire imbriqué complexe)
const result = condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4;

// ✅ Recommandé (utiliser if/else ou un objet de mapping)
const getValue = () => {
    if (condition1) return value1;
    if (condition2) return value2;
    if (condition3) return value3;
    return value4;
};


## Conclusion

Un bon code est :
- **Concis** : pas de répétition inutile
- **Clair** : facilement compréhensible
- **Cohérent** : suit les mêmes patterns dans tout le projet
- **Maintenable** : facile à modifier et débugger

**Privilégie toujours la clarté sur la concision extrême, ou le langage verbeux !**
