// Page Détail Parcours — Vue curriculum builder + Résumé + Publication
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
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
  FileText,
  Layers,
  Monitor,
  Star,
  Target,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CONTENT_TYPE_ICONS = {
  texte: FileText,
  code: Code2,
  video: Monitor,
};

function SessionItem({ session, modColor, sessionIndex }) {
  const [open, setOpen] = useState(false);
  const challenge = MOCK_CHALLENGES[session.challengeId];

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-3 hover:bg-secondary/40 transition-colors text-left"
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{ backgroundColor: modColor }}
        >
          {sessionIndex + 1}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            {session.titre}
          </p>
          <p className="text-xs text-muted-foreground">
            {session.dureeMinutes} min
          </p>
        </div>
        <div className="flex items-center gap-2">
          {challenge && (
            <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/20 rounded-md px-2 py-0.5">
              <Zap size={10} className="text-yellow-600 dark:text-yellow-400" />
              <span className="text-xs text-yellow-700 dark:text-yellow-400">
                Challenge
              </span>
            </div>
          )}
          {open ? (
            <ChevronDown size={15} className="text-muted-foreground" />
          ) : (
            <ChevronRight size={15} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-border pt-3">
          <p className="text-xs text-muted-foreground italic">
            {session.objectif}
          </p>

          {/* Contenu */}
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-foreground">Contenu :</p>
            {session.contenu.map((c, i) => {
              const Icon = CONTENT_TYPE_ICONS[c.type] || FileText;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <Icon size={12} className="text-primary shrink-0" />
                  <span>{c.titre}</span>
                </div>
              );
            })}
          </div>

          {/* Exemples pratiques */}
          {session.exemplesPratiques.length > 0 && (
            <div>
              <p className="text-xs font-medium text-foreground mb-1">
                Exemples pratiques :
              </p>
              <ul className="space-y-0.5">
                {session.exemplesPratiques.map((ex, i) => (
                  <li
                    key={i}
                    className="text-xs text-muted-foreground flex items-center gap-1.5"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenge */}
          {challenge && (
            <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-900/40">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Zap
                  size={13}
                  className="text-yellow-600 dark:text-yellow-400"
                />
                <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400">
                  {challenge.titre}
                </p>
              </div>
              <p className="text-xs text-yellow-800 dark:text-yellow-300 line-clamp-2">
                {challenge.consignes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ModuleSection({ module, moduleIndex }) {
  const [open, setOpen] = useState(true);
  const sessions = module.sessions
    .map((sId) => MOCK_SESSIONS[sId])
    .filter(Boolean);
  const totalMinutes = sessions.reduce((acc, s) => acc + s.dureeMinutes, 0);

  return (
    <div className="border border-border rounded-xl bg-card overflow-hidden">
      {/* Header module */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 hover:bg-secondary/30 transition-colors text-left"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0"
          style={{ backgroundColor: module.couleur }}
        >
          {moduleIndex + 1}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground">{module.titre}</p>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {module.objectifPedagogique}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <BookOpen size={12} />
              {sessions.length} sessions
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={12} />
              {Math.round(totalMinutes / 60)}h
            </span>
          </div>
          {open ? (
            <ChevronDown size={16} className="text-muted-foreground" />
          ) : (
            <ChevronRight size={16} className="text-muted-foreground" />
          )}
        </div>
      </button>

      {open && (
        <div className="px-4 pb-4 space-y-3 border-t border-border pt-4">
          {/* Mini-projet */}
          <div className="bg-secondary/40 rounded-lg px-3 py-2 border border-border">
            <p className="text-xs font-medium text-muted-foreground mb-0.5">
              Mini-projet
            </p>
            <p className="text-xs text-foreground">{module.miniProjet}</p>
          </div>

          {/* Sessions */}
          <div className="space-y-2">
            {sessions.map((session, i) => (
              <SessionItem
                key={session.id}
                session={session}
                modColor={module.couleur}
                sessionIndex={i}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ParcoursDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const parcours = MOCK_PARCOURS.find((p) => p.id === id) || MOCK_PARCOURS[0];
  const modules = parcours.modules
    .map((mId) => MOCK_MODULES.find((m) => m.id === mId))
    .filter(Boolean);

  const totalSessions = modules.reduce((acc, m) => acc + m.sessions.length, 0);
  const totalMinutes = modules.reduce((acc, m) => {
    const mSessions = m.sessions
      .map((sId) => MOCK_SESSIONS[sId])
      .filter(Boolean);
    return acc + mSessions.reduce((a, s) => a + s.dureeMinutes, 0);
  }, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/dashboard/parcours")}
          className="gap-2 mt-1"
        >
          <ArrowLeft size={15} />
          Retour
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Badge
              className={`text-xs border-0 ${
                parcours.statut === "publié"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
              }`}
            >
              {parcours.statut}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {parcours.categorie}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {parcours.titre}
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            {parcours.description}
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" className="gap-2">
            Modifier
          </Button>
          {parcours.statut === "brouillon" && (
            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700">
              <CheckCircle2 size={14} />
              Publier
            </Button>
          )}
        </div>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            label: "Modules",
            value: modules.length,
            icon: Layers,
            color: "#5b3ec1",
          },
          {
            label: "Sessions",
            value: totalSessions,
            icon: BookOpen,
            color: "#f59e0b",
          },
          {
            label: "Durée totale",
            value: `${Math.round(totalMinutes / 60)}h`,
            icon: Clock,
            color: "#06b6d4",
          },
          {
            label: "Challenges",
            value: totalSessions,
            icon: Zap,
            color: "#f59e0b",
          },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="border border-border bg-card">
            <CardContent className="p-4 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: color + "20" }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <p className="text-xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Curriculum */}
        <div className="xl:col-span-2 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Programme de la formation
          </h3>
          <div className="space-y-3">
            {modules.map((module, i) => (
              <ModuleSection key={module.id} module={module} moduleIndex={i} />
            ))}
          </div>
        </div>

        {/* Sidebar infos */}
        <div className="space-y-5">
          {/* Prix */}
          <Card className="border border-border bg-card">
            <CardContent className="p-5">
              <p className="text-2xl font-bold text-foreground">
                {parcours.type === "payant"
                  ? `${parcours.prix.toLocaleString("fr-FR")} FCFA`
                  : "Gratuit"}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {parcours.niveau}
              </p>
              <Button className="w-full mt-4" disabled>
                S'inscrire (Vue Apprenant)
              </Button>
            </CardContent>
          </Card>

          {/* Prérequis */}
          {parcours.prerequis && parcours.prerequis.length > 0 && (
            <Card className="border border-border bg-card">
              <CardHeader className="pb-2">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Check size={14} className="text-primary" />
                  Prérequis
                </h4>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {parcours.prerequis.map((p, i) => (
                    <li
                      key={i}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Objectifs pédagogiques */}
          {parcours.objectifsPedagogiques &&
            parcours.objectifsPedagogiques.length > 0 && (
              <Card className="border border-border bg-card">
                <CardHeader className="pb-2">
                  <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Target size={14} className="text-primary" />
                    Objectifs
                  </h4>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {parcours.objectifsPedagogiques.map((o, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={12}
                          className="text-green-500 mt-0.5 shrink-0"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

          {/* Projet final */}
          {parcours.projetFinal && (
            <Card className="border-2 border-yellow-200 dark:border-yellow-800/50 bg-card">
              <CardHeader className="pb-2">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Star size={14} className="text-yellow-500" />
                  Projet Final
                </h4>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm font-medium text-foreground mb-1">
                  {parcours.projetFinal.titre}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {parcours.projetFinal.description}
                </p>
                <div>
                  <p className="text-xs font-medium text-foreground mb-1.5">
                    Livrables :
                  </p>
                  <ul className="space-y-1">
                    {parcours.projetFinal.livrables.map((l, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted-foreground flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={11}
                          className="text-green-500 mt-0.5 shrink-0"
                        />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
