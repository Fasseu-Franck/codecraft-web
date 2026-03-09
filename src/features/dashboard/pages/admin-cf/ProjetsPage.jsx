// Page Projets — Admin CF (mini-projets modules + projet final parcours)
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { MOCK_MODULES, MOCK_PARCOURS } from "@/src/data/mock-parcours";
import { ArrowUpRight, CheckCircle2, Layers, Plus, Star } from "lucide-react";

function MiniProjetCard({ module }) {
  return (
    <Card className="border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: module.couleur + "20" }}
          >
            <Layers size={16} style={{ color: module.couleur }} />
          </div>
          <div>
            <Badge className="text-xs border-0 bg-secondary text-secondary-foreground mb-1">
              Mini-projet
            </Badge>
            <p className="text-xs text-muted-foreground">{module.titre}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm font-medium text-foreground mb-3">
          {module.miniProjet}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Layers size={11} />
            {module.sessions.length} sessions pour le compléter
          </span>
        </div>
        <Button variant="outline" size="sm" className="gap-1.5 text-xs w-full">
          <ArrowUpRight size={12} />
          Voir le projet
        </Button>
      </CardContent>
    </Card>
  );
}

function ProjetFinalCard({ parcours }) {
  return (
    <Card className="border-2 border-yellow-300 dark:border-yellow-700/50 bg-card hover:shadow-lg transition-all duration-200">
      <div className="h-1.5 bg-yellow-400" />
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Star size={16} className="text-yellow-500" />
          <Badge className="text-xs border-0 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
            Projet Final
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">{parcours.titre}</p>
        <h3 className="font-bold text-foreground mt-1">
          {parcours.projetFinal.titre}
        </h3>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <p className="text-sm text-muted-foreground">
          {parcours.projetFinal.description}
        </p>
        <div>
          <p className="text-xs font-semibold text-foreground mb-2">
            Livrables attendus :
          </p>
          <ul className="space-y-1.5">
            {parcours.projetFinal.livrables.map((l, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <CheckCircle2
                  size={12}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                {l}
              </li>
            ))}
          </ul>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="gap-1.5 text-xs w-full border-yellow-300 dark:border-yellow-700"
        >
          <ArrowUpRight size={12} />
          Voir les soumissions
        </Button>
      </CardContent>
    </Card>
  );
}

export function ProjetsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Projets</h2>
          <p className="text-muted-foreground text-sm mt-0.5">
            Mini-projets des modules et projets finaux des parcours
          </p>
        </div>
        <Button className="gap-2 shrink-0">
          <Plus size={16} />
          Nouveau projet
        </Button>
      </div>

      {/* Projets finaux */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Star size={16} className="text-yellow-500" />
          <h3 className="text-base font-semibold text-foreground">
            Projets finaux de parcours
          </h3>
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            {MOCK_PARCOURS.filter((p) => p.projetFinal).length} projet(s)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {MOCK_PARCOURS.filter((p) => p.projetFinal).map((p) => (
            <ProjetFinalCard key={p.id} parcours={p} />
          ))}
        </div>
      </div>

      {/* Mini-projets */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <Layers size={16} className="text-primary" />
          <h3 className="text-base font-semibold text-foreground">
            Mini-projets des modules
          </h3>
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">
            {MOCK_MODULES.length} projet(s)
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {MOCK_MODULES.map((m) => (
            <MiniProjetCard key={m.id} module={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
