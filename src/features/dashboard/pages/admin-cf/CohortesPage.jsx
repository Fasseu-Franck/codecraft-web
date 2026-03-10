// Page Liste des Cohortes — Admin CF
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import {
  MOCK_COHORTES,
  MOCK_FORMATEURS,
  MOCK_PARCOURS,
} from "@/src/data/mock-parcours";
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const STATUT_STYLES = {
  "en cours":
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "à venir": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  terminée: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

function CohorteCard({ cohorte, onClick }) {
  const parcours = MOCK_PARCOURS.find((p) => p.id === cohorte.parcoursId);
  const formateur = MOCK_FORMATEURS.find((f) => f.id === cohorte.formateurId);
  const taux = Math.round((cohorte.nbInscrits / cohorte.capaciteMax) * 100);
  const dateD = new Date(cohorte.dateDebut).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const dateF = new Date(cohorte.dateFin).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Card
      className="group cursor-pointer border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 bg-card"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                className={`text-xs font-medium border-0 ${
                  STATUT_STYLES[cohorte.statut] || STATUT_STYLES["à venir"]
                }`}
              >
                {cohorte.statut}
              </Badge>
            </div>
            <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
              {cohorte.nom}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
              {cohorte.description}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 space-y-4">
        {/* Parcours associé */}
        {parcours && (
          <div className="flex items-center gap-2 text-sm">
            <BookOpen size={13} className="text-primary shrink-0" />
            <span className="text-muted-foreground truncate">
              {parcours.titre}
            </span>
          </div>
        )}

        {/* Formateur */}
        {formateur && (
          <div className="flex items-center gap-2 text-sm">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary shrink-0">
              {formateur.initiales}
            </div>
            <span className="text-muted-foreground truncate">
              {formateur.nom}
            </span>
          </div>
        )}

        {/* Dates */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays size={12} className="shrink-0" />
          <span>
            {dateD} → {dateF}
          </span>
        </div>

        {/* Capacité */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Users size={12} />
              <span>
                {cohorte.nbInscrits} / {cohorte.capaciteMax} apprenants
              </span>
            </div>
            <span className="text-xs font-medium text-foreground">{taux}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                taux >= 90
                  ? "bg-red-500"
                  : taux >= 70
                    ? "bg-yellow-500"
                    : "bg-green-500"
              }`}
              style={{ width: `${taux}%` }}
            />
          </div>
        </div>

        {/* Prix */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-foreground">
            {cohorte.prix.toLocaleString("fr-FR")} FCFA
          </span>
          <Button variant="outline" size="sm" className="text-xs gap-1.5">
            Voir les détails
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
        <GraduationCap size={36} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">
        Aucune cohorte créée
      </h3>
      <p className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed">
        Une cohorte représente un groupe d'apprenants qui suivent ensemble un
        parcours de formation durant une période donnée.
      </p>
      <Button onClick={onCreate} className="gap-2">
        <Plus size={16} />
        Créer ma première cohorte
      </Button>
    </div>
  );
}

export function CohortesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = MOCK_COHORTES.filter(
    (c) =>
      c.nom.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()),
  );

  // Stats
  const enCours = MOCK_COHORTES.filter((c) => c.statut === "en cours").length;
  const aVenir = MOCK_COHORTES.filter((c) => c.statut === "à venir").length;
  const total = MOCK_COHORTES.reduce((acc, c) => acc + c.nbInscrits, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Cohortes</h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            {MOCK_COHORTES.length} cohortes au total
          </p>
        </div>
        <Button
          onClick={() => navigate("/dashboard/cohortes/creer")}
          className="gap-2 shrink-0"
        >
          <Plus size={16} />
          Créer une cohorte
        </Button>
      </div>

      {/* Stats rapides */}
      {MOCK_COHORTES.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "En cours", value: enCours, color: "text-green-600" },
            { label: "À venir", value: aVenir, color: "text-blue-600" },
            { label: "Apprenants actifs", value: total, color: "text-primary" },
          ].map(({ label, value, color }) => (
            <Card key={label} className="border border-border bg-card">
              <CardContent className="p-4 text-center">
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Recherche */}
      {MOCK_COHORTES.length > 0 && (
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher une cohorte..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      )}

      {/* Contenu */}
      {MOCK_COHORTES.length === 0 ? (
        <EmptyState onCreate={() => navigate("/dashboard/cohortes/creer")} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((cohorte) => (
            <CohorteCard
              key={cohorte.id}
              cohorte={cohorte}
              onClick={() => navigate(`/dashboard/cohortes/${cohorte.id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
