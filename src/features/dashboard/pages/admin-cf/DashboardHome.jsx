// Basé sur codecraft-prd.md — Module Administration : Analytics et rapports
// Page d'accueil du dashboard admin-cf avec KPI, graphiques et classements
// Conforme au design system (codecraft-style.md) avec support dark/light mode
import { Avatar, AvatarFallback } from "@/src/components/ui/avatar";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  GraduationCap,
  TrendingDown,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Données mock pour les KPI — Basé sur les métriques du PRD
const KPI_DATA = [
  {
    label: "Taux de Connexion",
    value: "78.5%",
    change: "+12.3%",
    trend: "up",
    icon: Wifi,
    description: "Apprenants actifs ce mois",
    color: "text-frozen-water-600",
    bgColor: "bg-frozen-water-500/10",
  },
  {
    label: "Formations en cours",
    value: "24",
    change: "+3",
    trend: "up",
    icon: BookOpen,
    description: "Parcours pédagogiques actifs",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    label: "Cohortes Lancées",
    value: "12",
    change: "+2",
    trend: "up",
    icon: Users,
    description: "Sessions de groupe actives",
    color: "text-soft-cyan-600",
    bgColor: "bg-soft-cyan-500/10",
  },
  {
    label: "Total Apprenants",
    value: "1,247",
    change: "-2.1%",
    trend: "down",
    icon: GraduationCap,
    description: "Effectif global des inscrits",
    color: "text-indigo-velvet-500",
    bgColor: "bg-indigo-velvet-500/10",
  },
];

// Données mock pour le graphique d'inscriptions
const CHART_DATA = [
  { month: "Jan", value: 120 },
  { month: "Fév", value: 180 },
  { month: "Mar", value: 150 },
  { month: "Avr", value: 220 },
  { month: "Mai", value: 280 },
  { month: "Jun", value: 310 },
  { month: "Juil", value: 260 },
  { month: "Aoû", value: 340 },
  { month: "Sep", value: 420 },
  { month: "Oct", value: 380 },
  { month: "Nov", value: 450 },
  { month: "Déc", value: 410 },
];

// Données mock pour les formations les plus suivies
const TOP_FORMATIONS = [
  { name: "React.js Avancé", apprenants: 342, progression: 85 },
  { name: "Python pour Data Science", apprenants: 289, progression: 72 },
  { name: "UI/UX Design Fondamental", apprenants: 234, progression: 91 },
  { name: "Node.js & Express", apprenants: 198, progression: 68 },
  { name: "DevOps & CI/CD", apprenants: 156, progression: 45 },
];

// Données mock pour les top apprenants
const TOP_STUDENTS = [
  { name: "Amara Diallo", projets: 18, score: 96, avatar: "AD" },
  { name: "Kwame Mensah", projets: 16, score: 94, avatar: "KM" },
  { name: "Fatou Sow", projets: 15, score: 92, avatar: "FS" },
  { name: "Youssef Benali", projets: 14, score: 90, avatar: "YB" },
  { name: "Ngozi Okafor", projets: 13, score: 88, avatar: "NO" },
];

// Composant AreaChart simple en SVG — Pas de dépendance externe
function SimpleAreaChart({ data }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };

    const drawWidth = width - padding.left - padding.right;
    const drawHeight = height - padding.top - padding.bottom;

    const maxValue = Math.max(...data.map((d) => d.value)) * 1.1;
    const minValue = 0;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Grille horizontale
    const computedStyle = getComputedStyle(document.documentElement);
    const borderColor = computedStyle.getPropertyValue("--border").trim();
    const mutedColor = computedStyle
      .getPropertyValue("--muted-foreground")
      .trim();

    ctx.strokeStyle = borderColor || "#e5e7eb";
    ctx.lineWidth = 0.5;
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
      const y = padding.top + (drawHeight / gridLines) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      // Labels Y
      const val = Math.round(maxValue - (maxValue / gridLines) * i);
      ctx.fillStyle = mutedColor || "#6b7280";
      ctx.font = "11px Public Sans, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(val.toString(), padding.left - 8, y + 4);
    }

    // Labels X
    data.forEach((d, i) => {
      const x = padding.left + (drawWidth / (data.length - 1)) * i;
      ctx.fillStyle = mutedColor || "#6b7280";
      ctx.font = "11px Public Sans, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(d.month, x, height - padding.bottom + 20);
    });

    // Area gradient
    const primaryColor =
      computedStyle.getPropertyValue("--primary").trim() || "#5b3ec1";
    const gradient = ctx.createLinearGradient(
      0,
      padding.top,
      0,
      height - padding.bottom,
    );
    gradient.addColorStop(0, primaryColor + "30");
    gradient.addColorStop(1, primaryColor + "05");

    // Draw area
    ctx.beginPath();
    data.forEach((d, i) => {
      const x = padding.left + (drawWidth / (data.length - 1)) * i;
      const y =
        padding.top +
        drawHeight -
        ((d.value - minValue) / (maxValue - minValue)) * drawHeight;
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevX = padding.left + (drawWidth / (data.length - 1)) * (i - 1);
        const prevY =
          padding.top +
          drawHeight -
          ((data[i - 1].value - minValue) / (maxValue - minValue)) * drawHeight;
        const cpX1 = prevX + (x - prevX) * 0.4;
        const cpX2 = x - (x - prevX) * 0.4;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    });
    const lastX = padding.left + drawWidth;
    const firstX = padding.left;
    ctx.lineTo(lastX, height - padding.bottom);
    ctx.lineTo(firstX, height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line
    ctx.beginPath();
    data.forEach((d, i) => {
      const x = padding.left + (drawWidth / (data.length - 1)) * i;
      const y =
        padding.top +
        drawHeight -
        ((d.value - minValue) / (maxValue - minValue)) * drawHeight;
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevX = padding.left + (drawWidth / (data.length - 1)) * (i - 1);
        const prevY =
          padding.top +
          drawHeight -
          ((data[i - 1].value - minValue) / (maxValue - minValue)) * drawHeight;
        const cpX1 = prevX + (x - prevX) * 0.4;
        const cpX2 = x - (x - prevX) * 0.4;
        ctx.bezierCurveTo(cpX1, prevY, cpX2, y, x, y);
      }
    });
    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw dots
    data.forEach((d, i) => {
      const x = padding.left + (drawWidth / (data.length - 1)) * i;
      const y =
        padding.top +
        drawHeight -
        ((d.value - minValue) / (maxValue - minValue)) * drawHeight;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }, [data]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

// Composant barre de progression simple
function ProgressBar({ value, className }) {
  return (
    <div className={`h-2 w-full rounded-full bg-secondary ${className || ""}`}>
      <div
        className="h-full rounded-full bg-primary transition-all duration-500"
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  );
}

export function DashboardHome() {
  const totalInscriptions = CHART_DATA.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="space-y-6">
      {/* Section KPI — 4 cartes en grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_DATA.map((kpi) => (
          <Card
            key={kpi.label}
            className="py-4 hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="px-5 py-0">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    {kpi.label}
                  </p>
                  <p className="text-2xl font-bold text-foreground tracking-tight">
                    {kpi.value}
                  </p>
                  <div className="flex items-center gap-1.5">
                    {kpi.trend === "up" ? (
                      <TrendingUp className="h-3.5 w-3.5 text-frozen-water-600" />
                    ) : (
                      <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                    )}
                    <span
                      className={`text-xs font-semibold ${
                        kpi.trend === "up"
                          ? "text-frozen-water-600"
                          : "text-destructive"
                      }`}
                    >
                      {kpi.change}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      vs mois dernier
                    </span>
                  </div>
                </div>
                <div className={`p-2.5 rounded-xl ${kpi.bgColor}`}>
                  <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section Graphique — Fréquence des inscriptions */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3 py-4">
          <CardHeader className="pb-2 px-5">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">
                  Fréquence des inscriptions
                </CardTitle>
                <CardDescription>
                  Évolution des inscriptions aux cohortes sur 12 mois
                </CardDescription>
              </div>
              <Badge
                variant="secondary"
                className="text-xs font-medium px-3 py-1"
              >
                2025-2026
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="px-5">
            <div className="h-[280px]">
              <SimpleAreaChart data={CHART_DATA} />
            </div>
          </CardContent>
        </Card>

        {/* Total inscriptions */}
        <Card className="py-4 flex flex-col justify-center">
          <CardContent className="px-5 py-0 text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <ArrowUpRight className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">
                Total Inscriptions aux Cohortes
              </p>
              <p className="text-4xl font-bold text-foreground tracking-tight">
                {totalInscriptions.toLocaleString("fr-FR")}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Période : Jan — Déc 2025
            </p>
            <div className="flex items-center justify-center gap-1.5">
              <TrendingUp className="h-4 w-4 text-frozen-water-600" />
              <span className="text-sm font-semibold text-frozen-water-600">
                +23.4%
              </span>
              <span className="text-xs text-muted-foreground">annuel</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Classements & Popularité */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Formations les plus suivies */}
        <Card className="py-4">
          <CardHeader className="pb-2 px-5">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">
                  Formations les plus suivies
                </CardTitle>
                <CardDescription>
                  Classement par volume d'apprenants engagés
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-5">
            <div className="space-y-4">
              {TOP_FORMATIONS.map((formation, index) => (
                <div key={formation.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground w-5 text-center">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {formation.name}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium">
                      {formation.apprenants} apprenants
                    </Badge>
                  </div>
                  <div className="ml-8">
                    <ProgressBar value={formation.progression} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Apprenants */}
        <Card className="py-4">
          <CardHeader className="pb-2 px-5">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-base">Top Apprenants</CardTitle>
                <CardDescription>
                  Classement basé sur la réussite des projets
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">#</TableHead>
                  <TableHead>Apprenant</TableHead>
                  <TableHead className="text-center">Projets</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TOP_STUDENTS.map((student, index) => (
                  <TableRow key={student.name}>
                    <TableCell>
                      <span
                        className={`text-xs font-bold ${
                          index < 3 ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {index + 1}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        <Avatar className="h-7 w-7">
                          <AvatarFallback className="text-[10px] bg-primary/10 text-primary font-bold">
                            {student.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">
                          {student.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-sm">{student.projets}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="secondary"
                        className={`text-xs font-semibold ${
                          student.score >= 90
                            ? "bg-frozen-water-500/10 text-frozen-water-700"
                            : ""
                        }`}
                      >
                        {student.score}%
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
