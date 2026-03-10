// Page Prévisualisation Parcours — Vue publique simulée (Admin CF)
// Reçoit formData depuis le wizard via location.state
// Si pas de state, affiche le mock Parcours "Dev Web Front End" comme démo
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  MOCK_CHALLENGES,
  MOCK_MODULES,
  MOCK_PARCOURS,
  MOCK_SESSIONS,
} from "@/src/data/mock-parcours";
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  Eye,
  FileText,
  Globe,
  Layers,
  Monitor,
  Send,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ─── Sessions expandables ─────────────────────────────────────────────────────
const CONTENT_ICONS = { texte: FileText, code: Code2, video: Monitor };

function SessionRow({ session, index, couleurModule }) {
  const [open, setOpen] = useState(false);
  const challenge =
    session.challengeId !== undefined
      ? MOCK_CHALLENGES[session.challengeId]
      : null;

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 py-3 px-4 hover:bg-secondary/30 transition-colors text-left"
      >
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
          style={{ backgroundColor: couleurModule }}
        >
          {index + 1}
        </div>
        <span className="flex-1 text-sm text-foreground font-medium">
          {session.titre}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          {challenge && (
            <span className="flex items-center gap-1 text-xs text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-950/30 px-1.5 py-0.5 rounded">
              <Zap size={10} />
              Challenge
            </span>
          )}
          <span className="text-xs text-muted-foreground">
            {session.dureeMinutes} min
          </span>
          {open ? (
            <ChevronDown size={14} className="text-muted-foreground" />
          ) : (
            <ChevronRight size={14} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 bg-secondary/10">
          <p className="text-xs text-muted-foreground italic">
            {session.objectif}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {session.contenu.map((c, i) => {
              const Icon = CONTENT_ICONS[c.type] || FileText;
              return (
                <span
                  key={i}
                  className="flex items-center gap-1 text-xs bg-card border border-border rounded-md px-2 py-1"
                >
                  <Icon size={11} className="text-primary" />
                  {c.titre}
                </span>
              );
            })}
          </div>
          {challenge && (
            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 flex items-center gap-1.5 mb-1">
                <Zap size={12} />
                {challenge.titre}
              </p>
              <p className="text-xs text-yellow-800 dark:text-yellow-300">
                {challenge.consignes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Accordéon module ─────────────────────────────────────────────────────────
function ModuleAccordion({ module, numero }) {
  const [open, setOpen] = useState(numero === 1);
  const sessions = (module.sessions || [])
    .map((sid) => MOCK_SESSIONS[sid])
    .filter(Boolean);
  const totalMin = sessions.reduce((a, s) => a + s.dureeMinutes, 0);

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-secondary/20 transition-colors text-left"
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm shrink-0"
          style={{ backgroundColor: module.couleur }}
        >
          {numero}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground">{module.titre}</p>
          <p className="text-xs text-muted-foreground mt-0.5 truncate">
            {module.objectifPedagogique}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
            <BookOpen size={12} />
            {sessions.length} sessions
          </span>
          <span className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
            <Clock size={12} />
            {Math.round(totalMin / 60)}h
          </span>
          {open ? (
            <ChevronDown size={16} className="text-muted-foreground" />
          ) : (
            <ChevronRight size={16} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {open && (
        <div className="border-t border-border">
          {/* Mini-projet */}
          <div className="px-5 py-3 bg-secondary/20 border-b border-border">
            <p className="text-xs text-muted-foreground font-medium">
              Mini-projet :{" "}
              <span className="text-foreground font-semibold">
                {module.miniProjet}
              </span>
            </p>
          </div>
          {/* Sessions */}
          {sessions.map((s, i) => (
            <SessionRow
              key={s.id}
              session={s}
              index={i}
              couleurModule={module.couleur}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Bloc liste check ─────────────────────────────────────────────────────────
function CheckList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2.5 text-sm text-foreground"
        >
          <CheckCircle2 size={15} className="text-green-500 mt-0.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
export function ParcoursPreviewPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [published, setPublished] = useState(false);

  // Données : depuis le wizard si disponibles, sinon mock "Dev Web Front End"
  const wizardData = location.state?.formData;
  const mockParcours = MOCK_PARCOURS[0]; // "Développeur Web Front End"

  // Construction de l'objet parcours fusionné (wizard ou mock)
  const parcours = wizardData
    ? {
        titre: wizardData.titre || mockParcours.titre,
        description: wizardData.description || mockParcours.description,
        categorie: wizardData.categorie || mockParcours.categorie,
        type: wizardData.type || mockParcours.type,
        prix: wizardData.prix ? parseInt(wizardData.prix) : mockParcours.prix,
        niveau: mockParcours.niveau,
        dureeEstimee: mockParcours.dureeEstimee,
        prerequis: wizardData.prerequis?.length
          ? wizardData.prerequis
          : mockParcours.prerequis,
        materiel: wizardData.materiel?.length
          ? wizardData.materiel
          : mockParcours.materielNecessaire,
        objectifsPedagogiques: wizardData.objectifs?.length
          ? wizardData.objectifs
          : mockParcours.objectifsPedagogiques,
        projetFinal: {
          titre: wizardData.titreProjet || mockParcours.projetFinal.titre,
          description:
            wizardData.descriptionProjet ||
            mockParcours.projetFinal.description,
          livrables: wizardData.livrables?.length
            ? wizardData.livrables
            : mockParcours.projetFinal.livrables,
        },
        modules: wizardData.modules?.length
          ? wizardData.modules
          : mockParcours.modules,
        statut: "brouillon",
      }
    : {
        ...mockParcours,
        // Normaliser materielNecessaire -> materiel pour l'affichage
        materiel: mockParcours.materielNecessaire,
        statut: "brouillon",
      };

  const modules = parcours.modules
    .map((id) => MOCK_MODULES.find((m) => m.id === id))
    .filter(Boolean);

  const totalSessions = modules.reduce(
    (acc, m) => acc + (m.sessions?.length || 0),
    0,
  );
  const totalMinutes = modules.reduce((acc, m) => {
    const sess = (m.sessions || [])
      .map((sid) => MOCK_SESSIONS[sid])
      .filter(Boolean);
    return acc + sess.reduce((a, s) => a + s.dureeMinutes, 0);
  }, 0);
  const totalChallenges = totalSessions; // 1 challenge par session

  const handlePublish = () => {
    setPublished(true);
    setTimeout(() => navigate("/dashboard/parcours"), 1200);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-0 relative">
      {/* ── Bandeau "mode prévisualisation" ── */}
      <div className="sticky top-0 z-30 flex items-center justify-between gap-3 px-5 py-3 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800/50 rounded-xl mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">
            <Eye size={14} className="text-orange-600 dark:text-orange-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-orange-800 dark:text-orange-200">
              Mode Prévisualisation
            </p>
            <p className="text-xs text-orange-600 dark:text-orange-400">
              Voici comment votre parcours apparaîtra aux apprenants
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900/40"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={14} />
            Modifier
          </Button>
          {published ? (
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
              <CheckCircle2 size={16} />
              Publié !
            </div>
          ) : (
            <Button
              size="sm"
              className="gap-2 bg-green-600 hover:bg-green-700 text-white"
              onClick={handlePublish}
            >
              <Send size={14} />
              Publier le parcours
            </Button>
          )}
        </div>
      </div>

      {/* ── Hero de la formation ── */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden mb-6">
        {/* Barre colorée */}
        <div className="h-2 bg-primary" />

        <div className="p-8">
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* Infos principales */}
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary border-0 text-xs">
                  {parcours.categorie}
                </Badge>
                <Badge
                  className={`border-0 text-xs ${
                    parcours.statut === "publié"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {parcours.statut === "publié" ? "Publié" : "Brouillon"}
                </Badge>
                <Badge className="bg-secondary text-secondary-foreground border-0 text-xs">
                  {parcours.niveau}
                </Badge>
              </div>

              <h1 className="text-3xl font-bold text-foreground leading-tight">
                {parcours.titre}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                {parcours.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  {
                    icon: Layers,
                    val: `${modules.length} modules`,
                    color: "#5b3ec1",
                  },
                  {
                    icon: BookOpen,
                    val: `${totalSessions} sessions`,
                    color: "#f59e0b",
                  },
                  {
                    icon: Clock,
                    val: `${Math.round(totalMinutes / 60)}h de contenu`,
                    color: "#06b6d4",
                  },
                  {
                    icon: Zap,
                    val: `${totalChallenges} challenges`,
                    color: "#f59e0b",
                  },
                ].map(({ icon: Icon, val, color }) => (
                  <div key={val} className="flex items-center gap-2">
                    <Icon size={16} style={{ color }} />
                    <span className="text-sm font-medium text-foreground">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Carte d'inscription */}
            <div className="mt-6 lg:mt-0 lg:w-72 shrink-0">
              <div className="border-2 border-primary/20 rounded-xl bg-card p-5 space-y-5 shadow-sm">
                <div>
                  <p className="text-3xl font-bold text-foreground">
                    {parcours.type === "payant"
                      ? `${parcours.prix.toLocaleString("fr-FR")} FCFA`
                      : "Gratuit"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {parcours.dureeEstimee} de formation intensive
                  </p>
                </div>
                <Button className="w-full gap-2" disabled>
                  <Users size={15} />
                  S'inscrire à la formation
                </Button>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {[
                    "Accès à vie au contenu",
                    "Communauté d'apprenants",
                    "Certificat de complétion",
                    "Support formateur inclus",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={12} className="text-green-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* ── Colonne principale : Programme ── */}
        <div className="xl:col-span-2 space-y-6">
          {/* Ce que vous allez apprendre */}
          {parcours.objectifsPedagogiques?.length > 0 && (
            <div className="border border-border rounded-xl bg-card p-6">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                <Target size={18} className="text-primary" />
                Ce que vous allez apprendre
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {parcours.objectifsPedagogiques.map((obj, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <Check
                      size={14}
                      className="text-green-500 mt-0.5 shrink-0"
                    />
                    <span className="text-foreground">{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Programme complet */}
          <div className="border border-border rounded-xl bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Layers size={18} className="text-primary" />
                Programme de la formation
              </h2>
              <span className="text-xs text-muted-foreground">
                {modules.length} modules · {totalSessions} sessions
              </span>
            </div>
            <div className="space-y-3">
              {modules.map((m, i) => (
                <ModuleAccordion key={m.id} module={m} numero={i + 1} />
              ))}
            </div>
          </div>

          {/* Projet Final */}
          {parcours.projetFinal && (
            <div className="border-2 border-yellow-200 dark:border-yellow-800/40 rounded-xl bg-card overflow-hidden">
              <div className="h-1.5 bg-yellow-400" />
              <div className="p-6">
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-1">
                  <Star size={18} className="text-yellow-500" />
                  Projet Final
                </h2>
                <h3 className="text-base font-semibold text-foreground mt-3 mb-2">
                  {parcours.projetFinal.titre}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {parcours.projetFinal.description}
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Livrables attendus
                  </p>
                  <ul className="space-y-2">
                    {parcours.projetFinal.livrables.map((l, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-green-500 mt-0.5 shrink-0"
                        />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Colonne latérale ── */}
        <div className="space-y-5">
          {/* Prérequis */}
          {parcours.prerequis?.length > 0 && (
            <div className="border border-border rounded-xl bg-card p-5">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2 mb-3">
                <Check size={15} className="text-primary" />
                Prérequis
              </h3>
              <CheckList items={parcours.prerequis} />
            </div>
          )}

          {/* Matériel nécessaire */}
          {parcours.materiel?.length > 0 && (
            <div className="border border-border rounded-xl bg-card p-5">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2 mb-3">
                <Monitor size={15} className="text-primary" />
                Matériel requis
              </h3>
              <CheckList items={parcours.materiel} />
            </div>
          )}

          {/* Ce que vous obtenez */}
          <div className="border border-border rounded-xl bg-card p-5">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2 mb-3">
              <Globe size={15} className="text-primary" />
              Inclus dans cette formation
            </h3>
            <ul className="space-y-2">
              {[
                `${modules.length} modules complets`,
                `${totalSessions} sessions de cours`,
                `${totalChallenges} défis pratiques`,
                "1 projet final certifiant",
                "Accès communauté Discord",
                "Suivi formateur personnalisé",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Barre de publication fixe en bas ── */}
      <div className="sticky bottom-4 mt-8 flex items-center justify-between gap-4 px-6 py-4 bg-card border border-border rounded-2xl shadow-lg">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Prêt à publier ?
          </p>
          <p className="text-xs text-muted-foreground">
            En publiant, ce parcours sera visible pour les centres de formation.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={15} />
            Retour au wizard
          </Button>
          {published ? (
            <div className="flex items-center gap-2 text-sm font-semibold text-green-600 dark:text-green-400">
              <CheckCircle2 size={18} />
              Parcours publié avec succès !
            </div>
          ) : (
            <Button
              className="gap-2 bg-green-600 hover:bg-green-700 text-white px-6"
              onClick={handlePublish}
            >
              <Send size={15} />
              Publier le parcours
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
