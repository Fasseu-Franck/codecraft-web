// Page Bibliothèque des Modules — Admin CF
// Basé sur mock-parcours.js — Modules réutilisables
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { MOCK_MODULES, MOCK_SESSIONS } from "@/src/data/mock-parcours";
import {
  BookOpen,
  Clock,
  Code2,
  Eye,
  Layers,
  Plus,
  Search,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NIVEAU_COLORS = {
  Débutant:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Intermédiaire:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  Avancé: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

function ModuleCard({ module, onClick }) {
  const sessions = module.sessions
    .map((id) => MOCK_SESSIONS[id])
    .filter(Boolean);
  const totalMinutes = sessions.reduce((acc, s) => acc + s.dureeMinutes, 0);
  const totalHeures = Math.round(totalMinutes / 60);

  return (
    <Card
      className="group cursor-pointer border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 bg-card"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
            style={{ backgroundColor: module.couleur + "20" }}
          >
            <Layers size={18} style={{ color: module.couleur }} />
          </div>
          <Badge
            className={`text-xs font-medium border-0 ${NIVEAU_COLORS[module.niveau]}`}
          >
            {module.niveau}
          </Badge>
        </div>
        <div className="mt-3">
          <h3 className="font-semibold text-foreground text-base leading-tight group-hover:text-primary transition-colors">
            {module.titre}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {module.objectifPedagogique}
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* Mini-projet */}
        <div className="bg-secondary/40 rounded-lg p-3 mb-4 border border-border">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            Mini-projet
          </p>
          <p className="text-xs text-foreground line-clamp-2">
            {module.miniProjet}
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <BookOpen size={13} />
            <span>{sessions.length} sessions</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={13} />
            <span>{totalHeures}h</span>
          </div>
          <div className="flex items-center gap-1">
            <Code2 size={13} />
            <span>{sessions.length} challenges</span>
          </div>
        </div>

        {/* Sessions list */}
        <div className="mt-4 space-y-1.5">
          {sessions.map((s, i) => (
            <div
              key={s.id}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{
                  backgroundColor: module.couleur + "20",
                  color: module.couleur,
                }}
              >
                {i + 1}
              </div>
              <span className="truncate">{s.titre}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5 text-xs"
          >
            <Eye size={13} />
            Voir
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5 text-xs"
          >
            <Plus size={13} />
            Utiliser
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({ onClear }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-4">
        <Layers size={28} className="text-muted-foreground" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        Aucun module trouvé
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-4">
        Aucun module ne correspond à votre recherche. Essayez d'autres termes ou
        créez un nouveau module.
      </p>
      <Button variant="outline" size="sm" onClick={onClear}>
        Effacer la recherche
      </Button>
    </div>
  );
}

export function ModulesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = MOCK_MODULES.filter(
    (m) =>
      m.titre.toLowerCase().includes(search.toLowerCase()) ||
      m.objectifPedagogique.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Bibliothèque des Modules
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            {MOCK_MODULES.length} module{MOCK_MODULES.length > 1 ? "s" : ""}{" "}
            disponible{MOCK_MODULES.length > 1 ? "s" : ""}
          </p>
        </div>
        <Button className="gap-2 shrink-0">
          <Plus size={16} />
          Créer un module
        </Button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un module..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <EmptyState onClear={() => setSearch("")} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onClick={() => navigate(`/dashboard/modules/${module.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
