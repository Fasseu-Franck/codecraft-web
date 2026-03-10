// Page Liste des Parcours — Admin CF
// État vide pédagogique + cartes de parcours existants + accès au wizard de création
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { MOCK_MODULES, MOCK_PARCOURS } from "@/src/data/mock-parcours";
import {
  BookOpen,
  Clock,
  Edit3,
  Eye,
  Layers,
  Plus,
  Search,
  Star,
  Target,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const STATUT_STYLES = {
  publié:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  brouillon:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  archivé: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

function ParcoursCard({ parcours, onClick, onEdit }) {
  const modules = parcours.modules
    .map((id) => MOCK_MODULES.find((m) => m.id === id))
    .filter(Boolean);
  const totalSessions = modules.reduce((acc, m) => acc + m.sessions.length, 0);

  return (
    <Card className="group border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-200 bg-card overflow-hidden">
      {/* Barre colorée selon statut */}
      <div
        className={`h-1 w-full ${
          parcours.statut === "publié" ? "bg-green-500" : "bg-yellow-400"
        }`}
      />
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                className={`text-xs font-medium border-0 capitalize ${
                  STATUT_STYLES[parcours.statut]
                }`}
              >
                {parcours.statut}
              </Badge>
              <Badge
                variant="outline"
                className="text-xs font-medium border-border"
              >
                {parcours.categorie}
              </Badge>
            </div>
            <h3 className="font-bold text-foreground text-base leading-tight group-hover:text-primary transition-colors">
              {parcours.titre}
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
              {parcours.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Statistiques */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-2 rounded-lg bg-secondary/40 border border-border">
            <Layers size={14} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">
              {modules.length}
            </p>
            <p className="text-xs text-muted-foreground">Modules</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-secondary/40 border border-border">
            <BookOpen size={14} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-bold text-foreground">{totalSessions}</p>
            <p className="text-xs text-muted-foreground">Sessions</p>
          </div>
          <div className="text-center p-2 rounded-lg bg-secondary/40 border border-border">
            <Clock size={14} className="text-primary mx-auto mb-1" />
            <p className="text-sm font-bold text-foreground">
              {parcours.dureeEstimee}
            </p>
            <p className="text-xs text-muted-foreground">Durée</p>
          </div>
        </div>

        {/* Prix et niveau */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {parcours.type === "payant" ? (
              <span className="text-xl font-bold text-foreground">
                {parcours.prix.toLocaleString("fr-FR")} FCFA
              </span>
            ) : (
              <span className="text-lg font-bold text-green-600">Gratuit</span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {parcours.niveau}
          </span>
        </div>

        {/* Modules aperçu */}
        <div className="space-y-1.5 mb-4">
          {modules.slice(0, 3).map((m) => (
            <div
              key={m.id}
              className="flex items-center gap-2 text-xs text-muted-foreground"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: m.couleur }}
              />
              <span className="truncate">{m.titre}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1.5 text-xs"
            onClick={() => onClick(parcours.id)}
          >
            <Eye size={13} />
            Voir
          </Button>
          <Button
            size="sm"
            className="flex-1 gap-1.5 text-xs"
            onClick={() => onEdit(parcours.id)}
          >
            <Edit3 size={13} />
            Modifier
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function EmptyState({ onCreate }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-6">
        <BookOpen size={36} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">
        Commencez à construire vos formations
      </h3>
      <p className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
        Vous n'avez pas encore créé de parcours de formation. Un parcours
        rassemble des modules, des sessions et un projet final pour guider vos
        apprenants vers la réussite.
      </p>
      <div className="flex gap-3">
        <Button onClick={onCreate} className="gap-2">
          <Plus size={16} />
          Créer mon premier parcours
        </Button>
        <Button variant="outline" className="gap-2">
          <Layers size={16} />
          Voir les templates
        </Button>
      </div>

      {/* Fonctionnalités illustrées */}
      <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
        {[
          { icon: Target, label: "Objectifs pédagogiques" },
          { icon: Layers, label: "Curriculum par modules" },
          { icon: Star, label: "Projet final intégré" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon size={16} className="text-primary" />
            </div>
            <span className="text-xs text-muted-foreground text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ParcoursPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = MOCK_PARCOURS.filter(
    (p) =>
      p.titre.toLowerCase().includes(search.toLowerCase()) ||
      p.categorie.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Parcours de Formation
          </h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            {MOCK_PARCOURS.length} parcours{MOCK_PARCOURS.length > 1 ? "" : ""}
          </p>
        </div>
        <Button
          onClick={() => navigate("/dashboard/parcours/creer")}
          className="gap-2 shrink-0"
        >
          <Plus size={16} />
          Nouveau parcours
        </Button>
      </div>

      {/* Search (si des parcours existent) */}
      {MOCK_PARCOURS.length > 0 && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un parcours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      )}

      {/* Contenu */}
      {MOCK_PARCOURS.length === 0 ? (
        <EmptyState onCreate={() => navigate("/dashboard/parcours/creer")} />
      ) : filtered.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">
            Aucun parcours ne correspond à votre recherche.
          </p>
          <Button variant="link" onClick={() => setSearch("")} className="mt-2">
            Effacer la recherche
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((parcours) => (
            <ParcoursCard
              key={parcours.id}
              parcours={parcours}
              onClick={(id) => navigate(`/dashboard/parcours/${id}`)}
              onEdit={(id) => navigate(`/dashboard/parcours/${id}/modifier`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
