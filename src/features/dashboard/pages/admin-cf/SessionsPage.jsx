// Page Bibliothèque des Sessions — Admin CF
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import {
  MOCK_CHALLENGES,
  MOCK_MODULES,
  MOCK_SESSIONS,
} from "@/src/data/mock-parcours";
import {
  BookOpen,
  Clock,
  Code2,
  Eye,
  FileText,
  Plus,
  Search,
  Video,
  Zap,
} from "lucide-react";
import { useState } from "react";

const CONTENT_TYPE_ICONS = {
  texte: FileText,
  code: Code2,
  video: Video,
  documentation: BookOpen,
};

const CONTENT_TYPE_COLORS = {
  texte: "text-blue-500",
  code: "text-purple-500",
  video: "text-red-500",
  documentation: "text-green-500",
};

function SessionCard({ session, moduleCouleur, moduleNom }) {
  const challenge = MOCK_CHALLENGES[session.challengeId];
  const types = [...new Set(session.contenu.map((c) => c.type))];

  return (
    <Card className="border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: moduleCouleur + "20" }}
          >
            <BookOpen size={14} style={{ color: moduleCouleur }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-muted-foreground mb-0.5">{moduleNom}</p>
            <h3 className="font-semibold text-foreground text-sm leading-tight">
              {session.titre}
            </h3>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
          {session.objectif}
        </p>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        {/* Types de contenu */}
        <div className="flex gap-1.5 flex-wrap">
          {types.map((type) => {
            const Icon = CONTENT_TYPE_ICONS[type] || FileText;
            return (
              <div
                key={type}
                className="flex items-center gap-1 bg-secondary/50 rounded-md px-2 py-0.5 text-xs"
              >
                <Icon size={11} className={CONTENT_TYPE_COLORS[type]} />
                <span className="capitalize text-muted-foreground">{type}</span>
              </div>
            );
          })}
        </div>

        {/* Exemples pratiques */}
        {session.exemplesPratiques.length > 0 && (
          <div>
            <p className="text-xs font-medium text-muted-foreground mb-1">
              Exemples pratiques
            </p>
            <ul className="space-y-0.5">
              {session.exemplesPratiques.slice(0, 2).map((ex, i) => (
                <li
                  key={i}
                  className="text-xs text-foreground flex items-center gap-1.5"
                >
                  <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenge associé */}
        {challenge && (
          <div className="bg-secondary/40 rounded-lg p-2.5 border border-border">
            <div className="flex items-center gap-1.5 mb-1">
              <Zap size={12} className="text-yellow-500" />
              <span className="text-xs font-medium text-foreground">
                Challenge
              </span>
            </div>
            <p className="text-xs text-muted-foreground line-clamp-1">
              {challenge.titre}
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock size={12} />
            <span>{session.dureeMinutes} min</span>
          </div>
          <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
            <Eye size={12} />
            Voir le contenu
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function SessionsPage() {
  const [search, setSearch] = useState("");

  // Construire la liste de toutes les sessions avec leur module
  const allSessions = MOCK_MODULES.flatMap((module) =>
    module.sessions.map((sId) => ({
      session: MOCK_SESSIONS[sId],
      module,
    })),
  ).filter(({ session }) => session);

  const filtered = allSessions.filter(
    ({ session, module }) =>
      session.titre.toLowerCase().includes(search.toLowerCase()) ||
      module.titre.toLowerCase().includes(search.toLowerCase()) ||
      session.objectif.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Bibliothèque des Sessions
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            {allSessions.length} sessions au total
          </p>
        </div>
        <Button className="gap-2 shrink-0">
          <Plus size={16} />
          Créer une session
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher une session..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Regroupé par module */}
      <div className="space-y-8">
        {MOCK_MODULES.map((module) => {
          const moduleSessions = module.sessions
            .map((sId) => MOCK_SESSIONS[sId])
            .filter(
              (s) =>
                s &&
                (search === "" ||
                  s.titre.toLowerCase().includes(search.toLowerCase()) ||
                  s.objectif.toLowerCase().includes(search.toLowerCase()) ||
                  module.titre.toLowerCase().includes(search.toLowerCase())),
            );

          if (moduleSessions.length === 0) return null;

          return (
            <div key={module.id}>
              {/* Module header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: module.couleur }}
                />
                <h3 className="text-base font-semibold text-foreground">
                  {module.titre}
                </h3>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground shrink-0">
                  {moduleSessions.length} session
                  {moduleSessions.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {moduleSessions.map((session) => (
                  <SessionCard
                    key={session.id}
                    session={session}
                    moduleCouleur={module.couleur}
                    moduleNom={module.titre}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
