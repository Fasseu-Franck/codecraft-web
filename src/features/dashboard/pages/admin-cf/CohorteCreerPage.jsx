// Wizard Création Cohorte — Admin CF (5 étapes)
// Étape 1: Infos générales
// Étape 2: Choix du parcours
// Étape 3: Planification (dates + prix)
// Étape 4: Formateur
// Étape 5: Résumé + Création
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import {
  MOCK_FORMATEURS,
  MOCK_MODULES,
  MOCK_PARCOURS,
} from "@/src/data/mock-parcours";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  GraduationCap,
  Layers,
  Star,
  User,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const STEPS = [
  { id: 1, label: "Général", icon: GraduationCap },
  { id: 2, label: "Parcours", icon: BookOpen },
  { id: 3, label: "Planification", icon: CalendarDays },
  { id: 4, label: "Formateur", icon: User },
  { id: 5, label: "Résumé", icon: CheckCircle2 },
];

// ─── Étape 1 : Informations générales ────────────────────────────────────────
function Step1({ data, onChange }) {
  return (
    <div className="max-w-xl space-y-5">
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">
          Nom de la cohorte *
        </label>
        <Input
          placeholder="Ex : Promo WebDev Mars 2026"
          value={data.nom}
          onChange={(e) => onChange("nom", e.target.value)}
          className="h-11"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">
          Description
        </label>
        <Textarea
          placeholder="Décrivez brièvement cette cohorte..."
          value={data.description}
          onChange={(e) => onChange("description", e.target.value)}
          className="min-h-[90px] resize-none"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">
          Nombre maximum d'apprenants *
        </label>
        <Input
          type="number"
          placeholder="Ex : 20"
          value={data.capaciteMax}
          onChange={(e) => onChange("capaciteMax", e.target.value)}
          className="h-11 max-w-[200px]"
          min={1}
          max={200}
        />
      </div>
    </div>
  );
}

// ─── Étape 2 : Choix du parcours ─────────────────────────────────────────────
function Step2({ data, onChange }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Sélectionnez le parcours de formation associé à cette cohorte.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_PARCOURS.map((parcours) => {
          const modules = parcours.modules
            .map((id) => MOCK_MODULES.find((m) => m.id === id))
            .filter(Boolean);
          const totalSessions = modules.reduce(
            (acc, m) => acc + m.sessions.length,
            0,
          );
          const isSelected = data.parcoursId === parcours.id;

          return (
            <button
              key={parcours.id}
              onClick={() => onChange("parcoursId", parcours.id)}
              className={`text-left p-5 rounded-xl border-2 transition-all duration-200 ${
                isSelected
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/40 hover:bg-secondary/20"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-semibold text-foreground leading-tight">
                  {parcours.titre}
                </h4>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                    isSelected ? "border-primary bg-primary" : "border-border"
                  }`}
                >
                  {isSelected && <Check size={11} className="text-white" />}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {parcours.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Layers size={11} />
                  {modules.length} modules
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={11} />
                  {totalSessions} sessions
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays size={11} />
                  {parcours.dureeEstimee}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Étape 3 : Planification ──────────────────────────────────────────────────
function Step3({ data, onChange }) {
  return (
    <div className="max-w-xl space-y-5">
      <div>
        <label className="text-sm font-medium text-foreground mb-2 block">
          Prix de la cohorte (FCFA) *
        </label>
        <Input
          type="number"
          placeholder="Ex : 150000"
          value={data.prix}
          onChange={(e) => onChange("prix", e.target.value)}
          className="h-11"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Prix que paieront les apprenants pour rejoindre cette cohorte.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Date de début *
          </label>
          <Input
            type="date"
            value={data.dateDebut}
            onChange={(e) => onChange("dateDebut", e.target.value)}
            className="h-11"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Date de fin *
          </label>
          <Input
            type="date"
            value={data.dateFin}
            onChange={(e) => onChange("dateFin", e.target.value)}
            className="h-11"
          />
        </div>
      </div>

      {/* Aperçu durée */}
      {data.dateDebut && data.dateFin && (
        <div className="bg-secondary/40 rounded-xl p-4 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays size={14} className="text-primary" />
            <span className="text-sm font-medium text-foreground">
              Aperçu de la période
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              {new Date(data.dateDebut).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <ArrowRight size={13} />
            <span>
              {new Date(data.dateFin).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          {data.dateDebut && data.dateFin && (
            <p className="text-xs text-primary font-medium mt-1">
              {Math.ceil(
                (new Date(data.dateFin) - new Date(data.dateDebut)) /
                  (1000 * 60 * 60 * 24 * 7),
              )}{" "}
              semaines de formation
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Étape 4 : Attribution du formateur ──────────────────────────────────────
function FormateurCard({ formateur, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-4 rounded-xl border-2 transition-all duration-200 ${
        isSelected
          ? "border-primary bg-primary/5"
          : "border-border bg-card hover:border-primary/40 hover:bg-secondary/20"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
          {formateur.initiales}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-foreground">{formateur.nom}</p>
              <p className="text-xs text-muted-foreground">
                {formateur.specialite}
              </p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                isSelected ? "border-primary bg-primary" : "border-border"
              }`}
            >
              {isSelected && <Check size={11} className="text-white" />}
            </div>
          </div>
          <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star size={11} className="text-yellow-500" />
              {formateur.rating}/5
            </span>
            <span className="flex items-center gap-1">
              <GraduationCap size={11} />
              {formateur.cohortesPrecedentes} cohortes
            </span>
            <span>{formateur.experience}</span>
          </div>
        </div>
      </div>
    </button>
  );
}

function Step4({ data, onChange }) {
  const [searchFormateur, setSearch] = useState("");
  const filteredFormateurs = MOCK_FORMATEURS.filter(
    (f) =>
      f.nom.toLowerCase().includes(searchFormateur.toLowerCase()) ||
      f.specialite.toLowerCase().includes(searchFormateur.toLowerCase()),
  );

  return (
    <div className="space-y-4 max-w-2xl">
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un formateur..."
          value={searchFormateur}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="space-y-3">
        {filteredFormateurs.map((f) => (
          <FormateurCard
            key={f.id}
            formateur={f}
            isSelected={data.formateurId === f.id}
            onClick={() => onChange("formateurId", f.id)}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Étape 5 : Résumé ─────────────────────────────────────────────────────────
function Step5({ data, onCreate }) {
  const parcours = MOCK_PARCOURS.find((p) => p.id === data.parcoursId);
  const formateur = MOCK_FORMATEURS.find((f) => f.id === data.formateurId);

  const formatDate = (d) => {
    if (!d) return "—";
    return new Date(d).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-2xl space-y-5">
      <Card className="border border-border bg-card">
        <CardHeader className="pb-2">
          <h4 className="text-base font-semibold text-foreground flex items-center gap-2">
            <GraduationCap size={16} className="text-primary" />
            Résumé de la cohorte
          </h4>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Nom */}
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Nom</span>
            <span className="text-sm font-medium text-foreground">
              {data.nom || "—"}
            </span>
          </div>
          {/* Capacité */}
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Capacité max</span>
            <span className="text-sm font-medium text-foreground">
              {data.capaciteMax || "—"} apprenants
            </span>
          </div>
          {/* Parcours */}
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Parcours</span>
            <span className="text-sm font-medium text-foreground">
              {parcours?.titre || "—"}
            </span>
          </div>
          {/* Dates */}
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Période</span>
            <span className="text-sm font-medium text-foreground">
              {formatDate(data.dateDebut)} → {formatDate(data.dateFin)}
            </span>
          </div>
          {/* Prix */}
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-sm text-muted-foreground">Prix</span>
            <span className="text-sm font-bold text-foreground">
              {data.prix
                ? `${parseInt(data.prix).toLocaleString("fr-FR")} FCFA`
                : "—"}
            </span>
          </div>
          {/* Formateur */}
          <div className="flex justify-between py-2">
            <span className="text-sm text-muted-foreground">Formateur</span>
            <span className="text-sm font-medium text-foreground">
              {formateur?.nom || "—"}
            </span>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={onCreate}
        className="w-full py-3 gap-2 text-base"
        disabled={
          !data.nom || !data.parcoursId || !data.formateurId || !data.dateDebut
        }
      >
        <CheckCircle2 size={18} />
        Créer la cohorte
      </Button>
    </div>
  );
}

// ─── Wizard principal ─────────────────────────────────────────────────────────
export function CohorteCreerPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    nom: "",
    description: "",
    capaciteMax: "",
    parcoursId: "",
    prix: "",
    dateDebut: "",
    dateFin: "",
    formateurId: "",
  });

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canGoNext = () => {
    if (step === 1)
      return formData.nom.trim() !== "" && formData.capaciteMax !== "";
    if (step === 2) return formData.parcoursId !== "";
    if (step === 3)
      return (
        formData.prix !== "" &&
        formData.dateDebut !== "" &&
        formData.dateFin !== ""
      );
    if (step === 4) return formData.formateurId !== "";
    return true;
  };

  const handleCreate = () => {
    // Ici on simule la création
    navigate("/dashboard/cohortes");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/dashboard/cohortes")}
          className="gap-2"
        >
          <ArrowLeft size={15} />
          Retour
        </Button>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground">
            Créer une nouvelle cohorte
          </h2>
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

      {/* Contenu */}
      <div className="min-h-[400px]">
        {step === 1 && <Step1 data={formData} onChange={updateField} />}
        {step === 2 && <Step2 data={formData} onChange={updateField} />}
        {step === 3 && <Step3 data={formData} onChange={updateField} />}
        {step === 4 && <Step4 data={formData} onChange={updateField} />}
        {step === 5 && <Step5 data={formData} onCreate={handleCreate} />}
      </div>

      {/* Navigation */}
      {step < 5 && (
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
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={!canGoNext()}
            className="gap-2"
          >
            Suivant
            <ArrowRight size={15} />
          </Button>
        </div>
      )}
    </div>
  );
}
