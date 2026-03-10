// Wizard Création de Parcours — Admin CF (4 étapes)
// Étape 1: Infos générales + aperçu live
// Étape 2: Infos pédagogiques
// Étape 3: Projet final
// Étape 4: Curriculum Builder (modules)
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Textarea } from "@/src/components/ui/textarea";
import { MOCK_MODULES } from "@/src/data/mock-parcours";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Eye,
  GripVertical,
  Layers,
  Monitor,
  Plus,
  Star,
  Target,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const STEPS = [
  { id: 1, label: "Informations", icon: BookOpen },
  { id: 2, label: "Pédagogie", icon: Target },
  { id: 3, label: "Projet Final", icon: Star },
  { id: 4, label: "Curriculum", icon: Layers },
];

const CATEGORIES = [
  "Développement Web",
  "Développement Mobile",
  "Data Science",
  "UX/UI Design",
  "Cybersécurité",
  "DevOps",
  "Intelligence Artificielle",
  "Marketing Digital",
];

// ─── Composant aperçu carte parcours ─────────────────────────────────────────
function ParcoursPreviewCard({ data }) {
  return (
    <div className="sticky top-4">
      <p className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-1.5">
        <Monitor size={12} />
        Aperçu en temps réel
      </p>
      <Card className="border-2 border-primary/20 bg-card overflow-hidden">
        <div className="h-1.5 w-full bg-primary" />
        <CardHeader className="pb-3">
          <div className="flex gap-2 mb-2">
            <Badge className="text-xs border-0 bg-secondary text-secondary-foreground">
              {data.categorie || "Catégorie"}
            </Badge>
            {data.type === "payant" && (
              <Badge className="text-xs border-0 bg-primary/10 text-primary">
                Payant
              </Badge>
            )}
            {data.type === "gratuit" && (
              <Badge className="text-xs border-0 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                Gratuit
              </Badge>
            )}
          </div>
          <h3 className="font-bold text-foreground text-base leading-tight">
            {data.titre || "Titre du parcours..."}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {data.description || "Description du parcours..."}
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-foreground">
              {data.type === "payant" && data.prix
                ? `${parseInt(data.prix || 0).toLocaleString("fr-FR")} FCFA`
                : data.type === "gratuit"
                  ? "Gratuit"
                  : "—"}
            </span>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} />
              <span>12 semaines</span>
            </div>
          </div>
          <Button className="w-full mt-3 text-xs" size="sm" disabled>
            S'inscrire
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Étape 1 : Informations générales ────────────────────────────────────────
function Step1({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Nom du parcours *
          </label>
          <Input
            placeholder="Ex : Développeur Web Full Stack"
            value={data.titre}
            onChange={(e) => onChange("titre", e.target.value)}
            className="h-11"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Description *
          </label>
          <Textarea
            placeholder="Décrivez votre parcours en quelques phrases..."
            value={data.description}
            onChange={(e) => onChange("description", e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Catégorie *
            </label>
            <Select
              value={data.categorie}
              onValueChange={(v) => onChange("categorie", v)}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Choisir..." />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Type de parcours *
            </label>
            <Select
              value={data.type}
              onValueChange={(v) => onChange("type", v)}
            >
              <SelectTrigger className="h-11">
                <SelectValue placeholder="Gratuit / Payant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gratuit">Gratuit</SelectItem>
                <SelectItem value="payant">Payant</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {data.type === "payant" && (
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Prix (FCFA) *
            </label>
            <Input
              type="number"
              placeholder="Ex : 150000"
              value={data.prix}
              onChange={(e) => onChange("prix", e.target.value)}
              className="h-11"
            />
          </div>
        )}
      </div>

      {/* Aperçu en direct */}
      <ParcoursPreviewCard data={data} />
    </div>
  );
}

// ─── Étape 2 : Informations pédagogiques ─────────────────────────────────────
function ListEditor({ label, items, onAdd, onRemove, placeholder }) {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const v = value.trim();
    if (v) {
      onAdd(v);
      setValue("");
    }
  };

  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-2 block">
        {label}
      </label>
      <div className="space-y-2 mb-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2 border border-border"
          >
            <Check size={13} className="text-primary shrink-0" />
            <span className="text-sm text-foreground flex-1">{item}</span>
            <button
              onClick={() => onRemove(i)}
              className="text-muted-foreground hover:text-destructive transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground italic">
            Aucun élément — ajoutez-en ci-dessous
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="h-9 text-sm"
        />
        <Button
          variant="outline"
          size="sm"
          onClick={handleAdd}
          className="gap-1.5 shrink-0"
        >
          <Plus size={13} />
          Ajouter
        </Button>
      </div>
    </div>
  );
}

function Step2({ data, onChange }) {
  const update = (field, list) => onChange(field, list);

  return (
    <div className="space-y-8">
      <div className="p-5 rounded-xl border border-border bg-card space-y-2">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
            <Check size={12} className="text-primary" />
          </div>
          Prérequis
        </h4>
        <p className="text-xs text-muted-foreground mb-4">
          Ce que les apprenants doivent savoir ou avoir avant de commencer.
        </p>
        <ListEditor
          label=""
          items={data.prerequis}
          onAdd={(v) => update("prerequis", [...data.prerequis, v])}
          onRemove={(i) =>
            update(
              "prerequis",
              data.prerequis.filter((_, j) => j !== i),
            )
          }
          placeholder="Ex : Notions de base en informatique..."
        />
      </div>

      <div className="p-5 rounded-xl border border-border bg-card space-y-2">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
            <Monitor size={12} className="text-primary" />
          </div>
          Matériel nécessaire
        </h4>
        <p className="text-xs text-muted-foreground mb-4">
          Outils, logiciels, équipements requis.
        </p>
        <ListEditor
          label=""
          items={data.materiel}
          onAdd={(v) => update("materiel", [...data.materiel, v])}
          onRemove={(i) =>
            update(
              "materiel",
              data.materiel.filter((_, j) => j !== i),
            )
          }
          placeholder="Ex : Ordinateur avec connexion internet..."
        />
      </div>

      <div className="p-5 rounded-xl border border-border bg-card space-y-2">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
            <Target size={12} className="text-primary" />
          </div>
          Objectifs pédagogiques
        </h4>
        <p className="text-xs text-muted-foreground mb-4">
          Ce que les apprenants seront capables de faire à la fin de la
          formation.
        </p>
        <ListEditor
          label=""
          items={data.objectifs}
          onAdd={(v) => update("objectifs", [...data.objectifs, v])}
          onRemove={(i) =>
            update(
              "objectifs",
              data.objectifs.filter((_, j) => j !== i),
            )
          }
          placeholder="Ex : Créer une application React complète..."
        />
      </div>
    </div>
  );
}

// ─── Étape 3 : Projet Final ───────────────────────────────────────────────────
function Step3({ data, onChange }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Titre du projet final *
          </label>
          <Input
            placeholder="Ex : Portfolio Développeur Web"
            value={data.titreProjet}
            onChange={(e) => onChange("titreProjet", e.target.value)}
            className="h-11"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Description du projet *
          </label>
          <Textarea
            placeholder="Décrivez ce que l'apprenant va construire..."
            value={data.descriptionProjet}
            onChange={(e) => onChange("descriptionProjet", e.target.value)}
            className="min-h-[100px] resize-none"
          />
        </div>

        <div>
          <ListEditor
            label="Livrables attendus"
            items={data.livrables}
            onAdd={(v) => onChange("livrables", [...data.livrables, v])}
            onRemove={(i) =>
              onChange(
                "livrables",
                data.livrables.filter((_, j) => j !== i),
              )
            }
            placeholder="Ex : Site déployé en ligne sur Vercel..."
          />
        </div>
      </div>

      {/* Aperçu carte projet final */}
      <div className="sticky top-4">
        <p className="text-xs font-medium text-muted-foreground mb-3 flex items-center gap-1.5">
          <Star size={12} />
          Aperçu du projet final
        </p>
        <Card className="border-2 border-yellow-200 dark:border-yellow-800/50 bg-card overflow-hidden">
          <div className="h-1.5 bg-yellow-400" />
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Star size={14} className="text-yellow-500" />
              <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
                Projet Final
              </span>
            </div>
            <h3 className="font-bold text-foreground">
              {data.titreProjet || "Titre du projet..."}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {data.descriptionProjet || "Description du projet..."}
            </p>
          </CardHeader>
          <CardContent className="pt-0">
            {data.livrables.length > 0 && (
              <div>
                <p className="text-xs font-semibold text-foreground mb-2">
                  Livrables ({data.livrables.length})
                </p>
                <ul className="space-y-1.5">
                  {data.livrables.map((l, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ─── Étape 4 : Curriculum Builder ────────────────────────────────────────────
function ModuleItem({ module, index, onRemove }) {
  const sessions = module.sessions || [];
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group">
      <div className="flex flex-col items-center gap-1 pt-1">
        <div className="cursor-grab text-muted-foreground hover:text-foreground">
          <GripVertical size={16} />
        </div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ backgroundColor: module.couleur }}
        >
          {index + 1}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-semibold text-foreground text-sm">
              {module.titre}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
              {module.objectifPedagogique}
            </p>
          </div>
          <button
            onClick={() => onRemove(module.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
          >
            <Trash2 size={14} />
          </button>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <BookOpen size={11} />
            {sessions.length} sessions
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock size={11} />
            {module.dureeEstimee}
          </span>
        </div>
        <p className="text-xs text-muted-foreground mt-1 italic line-clamp-1">
          Mini-projet : {module.miniProjet}
        </p>
      </div>
    </div>
  );
}

function Step4({ data, onChange }) {
  const selectedModules = data.modules
    .map((id) => MOCK_MODULES.find((m) => m.id === id))
    .filter(Boolean);

  const availableModules = MOCK_MODULES.filter(
    (m) => !data.modules.includes(m.id),
  );

  const addModule = (id) => onChange("modules", [...data.modules, id]);
  const removeModule = (id) =>
    onChange(
      "modules",
      data.modules.filter((mid) => mid !== id),
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Curriculum actuel */}
      <div className="lg:col-span-3 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-foreground">
            Programme ({selectedModules.length} module
            {selectedModules.length > 1 ? "s" : ""})
          </h4>
        </div>

        {selectedModules.length === 0 ? (
          <div className="border-2 border-dashed border-border rounded-xl p-10 text-center">
            <Layers size={32} className="text-muted-foreground mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground mb-1">
              Aucun module dans le curriculum
            </p>
            <p className="text-xs text-muted-foreground">
              Commencez à construire votre programme en ajoutant des modules
              depuis la liste à droite.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {selectedModules.map((m, i) => (
              <ModuleItem
                key={m.id}
                module={m}
                index={i}
                onRemove={removeModule}
              />
            ))}
          </div>
        )}
      </div>

      {/* Bibliothèque des modules */}
      <div className="lg:col-span-2">
        <h4 className="text-sm font-semibold text-foreground mb-4">
          Bibliothèque des modules
        </h4>
        {availableModules.length === 0 ? (
          <div className="border border-dashed border-border rounded-xl p-6 text-center">
            <Check size={24} className="text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">
              Tous les modules ont été ajoutés au curriculum.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {availableModules.map((m) => (
              <button
                key={m.id}
                onClick={() => addModule(m.id)}
                className="w-full text-left p-3 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/60 hover:border-primary/40 transition-all duration-150 group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: m.couleur + "20" }}
                  >
                    <Layers size={13} style={{ color: m.couleur }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-foreground truncate">
                      {m.titre}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {m.sessions.length} sessions
                    </p>
                  </div>
                  <Plus
                    size={14}
                    className="text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

        <Button
          variant="outline"
          size="sm"
          className="w-full mt-3 gap-2 text-xs"
        >
          <Plus size={13} />
          Créer un nouveau module
        </Button>
      </div>
    </div>
  );
}

// ─── Wizard principal ─────────────────────────────────────────────────────────
export function ParcoursCreerPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [saved, setSaved] = useState(false);

  const [formData, setFormData] = useState({
    // Étape 1
    titre: "",
    description: "",
    categorie: "",
    type: "payant",
    prix: "",
    // Étape 2
    prerequis: [],
    materiel: [],
    objectifs: [],
    // Étape 3
    titreProjet: "",
    descriptionProjet: "",
    livrables: [],
    // Étape 4
    modules: [],
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
    // Autosave simulé
    setTimeout(() => setSaved(true), 1000);
  };

  const isStep1Valid =
    formData.titre.trim() !== "" &&
    formData.categorie !== "" &&
    formData.type !== "" &&
    (formData.type === "gratuit" ||
      (formData.type === "payant" && formData.prix !== ""));

  const canGoNext = step === 1 ? isStep1Valid : true;

  const handlePublish = () => {
    navigate("/dashboard/parcours");
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/dashboard/parcours")}
          className="gap-2"
        >
          <ArrowLeft size={15} />
          Retour
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground">
            Créer un nouveau parcours
          </h2>
          {saved && (
            <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1 mt-0.5">
              <Check size={11} />
              Sauvegardé automatiquement
            </p>
          )}
        </div>
        <span className="text-sm text-muted-foreground">
          Étape {step} / {STEPS.length}
        </span>
      </div>

      {/* Stepper */}
      <div className="flex items-center gap-2">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isDone = step > s.id;
          const isActive = step === s.id;
          return (
            <div key={s.id} className="flex items-center gap-2 flex-1">
              <button
                onClick={() => isDone && setStep(s.id)}
                className={`flex items-center gap-2 shrink-0 rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : isDone
                      ? "bg-primary/10 text-primary cursor-pointer"
                      : "bg-secondary text-muted-foreground cursor-default"
                }`}
              >
                {isDone ? <Check size={13} /> : <Icon size={13} />}
                <span className="hidden sm:inline">{s.label}</span>
              </button>
              {i < STEPS.length - 1 && (
                <div
                  className={`flex-1 h-0.5 rounded-full ${
                    step > s.id ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Contenu de l'étape */}
      <div className="min-h-[400px]">
        {step === 1 && <Step1 data={formData} onChange={updateField} />}
        {step === 2 && <Step2 data={formData} onChange={updateField} />}
        {step === 3 && <Step3 data={formData} onChange={updateField} />}
        {step === 4 && <Step4 data={formData} onChange={updateField} />}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button
          variant="outline"
          onClick={() => setStep((s) => s - 1)}
          disabled={step === 1}
          className="gap-2"
        >
          <ArrowLeft size={15} />
          Précédent
        </Button>

        {step < STEPS.length ? (
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canGoNext}
            className="gap-2"
          >
            Suivant
            <ArrowRight size={15} />
          </Button>
        ) : (
          // Bouton Prévisualiser en rouge — la publication se fait sur la page de prévisualisation
          <Button
            onClick={() =>
              navigate("/dashboard/parcours/previsualiser", {
                state: { formData },
              })
            }
            className="gap-2 bg-red-600 hover:bg-red-700 text-white"
          >
            <Eye size={15} />
            Prévisualiser
          </Button>
        )}
      </div>
    </div>
  );
}
