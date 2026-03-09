// Page Gestion des Challenges — Admin CF
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import {
  MOCK_CHALLENGES,
  MOCK_MODULES,
  MOCK_SESSIONS,
} from "@/src/data/mock-parcours";
import { Code2, Eye, Pencil, Plus, Search, Zap } from "lucide-react";
import { useState } from "react";

// Associer chaque challenge à sa session et son module
function buildChallengeMap() {
  const map = [];
  MOCK_MODULES.forEach((module) => {
    module.sessions.forEach((sId) => {
      const session = MOCK_SESSIONS[sId];
      if (session && session.challengeId) {
        const challenge = MOCK_CHALLENGES[session.challengeId];
        if (challenge) {
          map.push({ challenge, session, module });
        }
      }
    });
  });
  return map;
}

function ChallengeCard({ challenge, session, module: mod }) {
  return (
    <Card className="border border-border hover:border-primary/30 hover:shadow-md transition-all duration-200 bg-card">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 flex items-center justify-center flex-shrink-0">
            <Zap size={16} className="text-yellow-600 dark:text-yellow-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: mod.couleur }}
              />
              <p className="text-xs text-muted-foreground truncate">
                {mod.titre} · {session.titre}
              </p>
            </div>
            <h3 className="font-semibold text-foreground text-sm leading-tight">
              {challenge.titre}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-3">
        {/* Consignes */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">
            Consignes
          </p>
          <p className="text-xs text-foreground line-clamp-3">
            {challenge.consignes}
          </p>
        </div>

        {/* Code de départ */}
        {challenge.codeDepart && (
          <div className="bg-[hsl(240,4.8%,10%)] dark:bg-[hsl(240,4.8%,8%)] rounded-lg p-3 border border-border">
            <div className="flex items-center gap-1.5 mb-2">
              <Code2 size={11} className="text-purple-400" />
              <span className="text-xs text-muted-foreground font-medium">
                Code de départ
              </span>
            </div>
            <pre className="text-xs text-green-400 font-mono overflow-x-auto whitespace-pre-wrap line-clamp-3">
              {challenge.codeDepart}
            </pre>
          </div>
        )}

        {/* Résultat attendu */}
        <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-2.5 border border-green-200 dark:border-green-900/40">
          <p className="text-xs font-medium text-green-700 dark:text-green-400 mb-1">
            Résultat attendu
          </p>
          <p className="text-xs text-green-800 dark:text-green-300 line-clamp-2">
            {challenge.resultatAttendu}
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5 text-xs"
          >
            <Eye size={12} />
            Voir
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5 text-xs"
          >
            <Pencil size={12} />
            Modifier
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ChallengesPage() {
  const [search, setSearch] = useState("");
  const challengeMap = buildChallengeMap();

  const filtered = challengeMap.filter(
    ({ challenge, session, module: mod }) =>
      challenge.titre.toLowerCase().includes(search.toLowerCase()) ||
      session.titre.toLowerCase().includes(search.toLowerCase()) ||
      mod.titre.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Gestion des Challenges
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            {challengeMap.length} challenges — un par session
          </p>
        </div>
        <Button className="gap-2 shrink-0">
          <Plus size={16} />
          Créer un challenge
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {MOCK_MODULES.map((mod) => {
          const count = mod.sessions.filter(
            (sId) => MOCK_SESSIONS[sId]?.challengeId,
          ).length;
          return (
            <div
              key={mod.id}
              className="rounded-xl border border-border bg-card p-4 flex items-center gap-3"
            >
              <div
                className="w-3 h-12 rounded-full flex-shrink-0"
                style={{ backgroundColor: mod.couleur }}
              />
              <div>
                <p className="text-xs text-muted-foreground">{mod.titre}</p>
                <p className="text-2xl font-bold text-foreground">{count}</p>
                <p className="text-xs text-muted-foreground">challenges</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un challenge..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(({ challenge, session, module: mod }) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            session={session}
            module={mod}
          />
        ))}
      </div>
    </div>
  );
}
