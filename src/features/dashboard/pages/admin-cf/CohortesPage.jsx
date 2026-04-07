import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MoreHorizontal,
  Plus,
  Search,
  Users,
  Calendar,
  BookOpen,
  MapPin,
  ExternalLink,
  Eye,
  Edit2,
  Trash2,
  Filter,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Building2,
  GraduationCap,
  Target,
  BarChart3,
  Settings2,
} from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Progress } from "@/src/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";

// Données mock enrichies pour les cohortes
const MOCK_COHORTES = [
  {
    id: "co1",
    code: "COH-2026-001",
    name: "Promo WebDev Mars 2026",
    pathway: "Développeur Web Front End",
    center: "Douala - Akwa",
    trainer: "Samuel Nkodo",
    trainerCode: "TRA-SN-01",
    startDate: "2026-03-15",
    endDate: "2026-06-15",
    inscribed: 14,
    maxCapacity: 20,
    status: "actif",
    progressStatus: "en cours",
    url: "https://codecraft.cm/cohortes/webdev-mars-2026",
    description: "Première promotion intensive de l'année 2026 focalisée sur React et Next.js.",
    pathwayColor: "bg-indigo-velvet-500",
  },
  {
    id: "co2",
    code: "COH-2026-002",
    name: "UI/UX Design - Cohorte A",
    pathway: "Design d'Interface Utilisateur",
    center: "Yaoundé - Bastos",
    trainer: "Marie-Louise Essomba",
    trainerCode: "TRA-ME-02",
    startDate: "2026-04-10",
    endDate: "2026-07-10",
    inscribed: 25,
    maxCapacity: 25,
    status: "actif",
    progressStatus: "en cours",
    url: "https://codecraft.cm/cohortes/uiux-a-2026",
    description: "Cohorte spécialisée dans le design system et l'accessibilité web.",
    pathwayColor: "bg-frozen-water-500",
  },
  {
    id: "co3",
    code: "COH-2025-045",
    name: "Backend Node.js - Dec 2025",
    pathway: "Expert Backend Node.js",
    center: "Douala - Bonapriso",
    trainer: "Ibrahim Moussa",
    trainerCode: "TRA-IM-03",
    startDate: "2025-12-01",
    endDate: "2026-03-01",
    inscribed: 18,
    maxCapacity: 20,
    status: "actif",
    progressStatus: "terminé",
    url: "https://codecraft.cm/cohortes/node-dec-2025",
    description: "Session avancée sur les microservices et l'architecture cloud.",
    pathwayColor: "bg-soft-cyan-500",
  },
  {
    id: "co4",
    code: "COH-2026-005",
    name: "Data Science Junior - May 2026",
    pathway: "Data Science & Python",
    center: "Bafoussam",
    trainer: "Christian Atangana",
    trainerCode: "TRA-CA-04",
    startDate: "2026-05-20",
    endDate: "2026-08-20",
    inscribed: 8,
    maxCapacity: 30,
    status: "inactif",
    progressStatus: "à venir",
    url: "https://codecraft.cm/cohortes/data-may-2026",
    description: "Introduction à l'analyse de données avec Python et Pandas.",
    pathwayColor: "bg-indigo-400",
  },
  {
    id: "co5",
    code: "COH-2026-003",
    name: "Flutter Mobile - Mar 2026",
    pathway: "Développement Mobile Flutter",
    center: "Yaoundé - Ngoa-Ekelle",
    trainer: "Danielle Abena",
    trainerCode: "TRA-DA-06",
    startDate: "2026-03-25",
    endDate: "2026-06-25",
    inscribed: 12,
    maxCapacity: 15,
    status: "actif",
    progressStatus: "en cours",
    url: "https://codecraft.cm/cohortes/flutter-mar-2026",
    description: "Création d'applications performantes avec Flutter et Firebase.",
    pathwayColor: "bg-light-green-500",
  },
];

const STATS = [
  { label: "Total cohortes", value: 12, icon: Users, color: "text-indigo-velvet-600 dark:text-indigo-velvet-400", bg: "bg-indigo-velvet-50 dark:bg-indigo-velvet-950/40" },
  { label: "Cohortes actives", value: 9, icon: ShieldCheck, color: "text-frozen-water-700 dark:text-frozen-water-400", bg: "bg-frozen-water-50 dark:bg-frozen-water-950/40" },
  { label: "Cohortes en cours", value: 7, icon: Clock, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40" },
  { label: "Cohortes terminées", value: 48, icon: CheckCircle2, color: "text-soft-cyan-700 dark:text-soft-cyan-400", bg: "bg-soft-cyan-50 dark:bg-soft-cyan-950/40" },
];

export function CohortesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [centerFilter, setCenterFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCohorte, setSelectedCohorte] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleViewDetails = (cohorte) => {
    setSelectedCohorte(cohorte);
    setIsDetailsOpen(true);
  };

  return (
    <div className="flex flex-col gap-8 p-0 bg-background/50">
      {/* 🔝 En-tête (Header) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Gestion des cohortes
          </h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2">
            <Building2 className="h-4 w-4" /> Gérez vos groupes d'apprentissage et suivez leur progression.
          </p>
        </div>
        <Button 
          onClick={() => navigate("/dashboard/cohortes/creer")}
          className="rounded-xl px-6 bg-indigo-velvet-600 hover:bg-indigo-velvet-700 text-white shadow-lg shadow-indigo-velvet-200 dark:shadow-none transition-all"
        >
          <Plus className="mr-2 h-4 w-4" /> Créer une cohorte
        </Button>
      </div>

      {/* Statistiques clés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border border-border/50 shadow-sm bg-card/60 backdrop-blur-md hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
                </div>
                <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 🔍 Barre de recherche et filtres — SOLID BACKGROUND */}
      <div className="border border-border shadow-sm bg-card rounded-2xl p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-indigo-velvet-500 transition-colors" />
              <Input
                placeholder="Rechercher par nom de cohorte..."
                className="pl-10 h-11 bg-background border-border/50 focus-visible:ring-indigo-velvet-500 rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Select value={centerFilter} onValueChange={setCenterFilter}>
                <SelectTrigger className="w-[180px] h-11 bg-background rounded-xl border-border/50">
                  <SelectValue placeholder="Centre de formation" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all">Tous les centres</SelectItem>
                  <SelectItem value="douala">Douala</SelectItem>
                  <SelectItem value="yaounde">Yaoundé</SelectItem>
                </SelectContent>
              </Select>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px] h-11 bg-background rounded-xl border-border/50">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all">Tous status</SelectItem>
                  <SelectItem value="actif">Actif</SelectItem>
                  <SelectItem value="termine">Terminé</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="h-11 px-4 rounded-xl text-foreground font-bold border-border/50 hover:bg-muted transition-colors">
                <Filter className="mr-2 h-4 w-4 text-muted-foreground" /> Filtres
              </Button>
            </div>
          </div>
      </div>

      {/* 📋 Tableau des cohortes */}
      <Card className="border border-border/50 shadow-sm bg-card overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="hover:bg-transparent border-border/50 text-[10px] font-bold uppercase tracking-widest">
              <TableHead className="text-muted-foreground pl-6 h-12">
                <div className="flex items-center gap-2">
                  <Target className="h-3 w-3" /> Code / Nom
                </div>
              </TableHead>
              <TableHead className="text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3 w-3" /> Parcours
                </div>
              </TableHead>
              <TableHead className="text-muted-foreground">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-3 w-3" /> Formateur
                </div>
              </TableHead>
              <TableHead className="text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> Début
                </div>
              </TableHead>
              <TableHead className="text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" /> Fin
                </div>
              </TableHead>
              <TableHead className="text-muted-foreground text-center">
                <div className="flex items-center justify-center gap-2">
                  <Users className="h-3 w-3" /> Effectif
                </div>
              </TableHead>
              <TableHead className="text-muted-foreground">Statut</TableHead>
              <TableHead className="text-muted-foreground">Accès</TableHead>
              <TableHead className="w-[80px] text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_COHORTES.map((cohorte) => {
              return (
                <TableRow key={cohorte.id} className="group hover:bg-muted/40 transition-colors border-border/30">
                  <TableCell className="pl-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] text-indigo-velvet-500 dark:text-indigo-velvet-400 font-black uppercase tracking-tighter mb-0.5">{cohorte.code}</span>
                      <span className="font-black text-foreground text-sm group-hover:text-indigo-velvet-600 transition-colors leading-tight">{cohorte.name}</span>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-muted-foreground">
                        <MapPin className="h-2.5 w-2.5" /> <span>{cohorte.center}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {/* SIMPLE PARCOURS COLUMN — No Badge, Simple layout */}
                    <div className="flex items-center gap-2 max-w-[180px]">
                      <div className={`w-1.5 h-1.5 rounded-full ${cohorte.pathwayColor} shrink-0 shadow-sm`} />
                      <span className="text-xs font-bold text-foreground/90 truncate">{cohorte.pathway}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-bold text-xs text-foreground leading-none">{cohorte.trainer}</span>
                      <span className="text-[9px] text-muted-foreground font-medium uppercase tracking-tighter">{cohorte.trainerCode}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-[11px] font-bold text-foreground">
                      {new Date(cohorte.startDate).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-[11px] font-bold text-foreground">
                      {new Date(cohorte.endDate).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </TableCell>
                  <TableCell className="text-center font-black">
                    <span className="text-base text-foreground">{cohorte.inscribed}</span>
                    <span className="text-muted-foreground/30 text-[10px] mx-1">/</span>
                    <span className="text-xs text-muted-foreground font-bold">{cohorte.maxCapacity}</span>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1.5">
                      <Badge className={`w-fit text-[8px] font-black uppercase px-2 py-0 border-none transition-all ${
                        cohorte.status === "actif" ? "bg-frozen-water-500 text-indigo-velvet-950" : "bg-muted text-muted-foreground"
                      }`}>
                        {cohorte.status}
                      </Badge>
                      <div className={`text-[9px] font-bold capitalize flex items-center gap-1.5 ${
                        cohorte.progressStatus === "en cours" ? "text-amber-500" : 
                        cohorte.progressStatus === "terminé" ? "text-indigo-velvet-400" : "text-muted-foreground"
                      }`}>
                         <div className={`w-1.5 h-1.5 rounded-full ${
                           cohorte.progressStatus === "en cours" ? "bg-amber-500 animate-pulse" : 
                           cohorte.progressStatus === "terminé" ? "bg-indigo-velvet-400" : "bg-muted-foreground"
                         }`} />
                         {cohorte.progressStatus}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 border-border hover:bg-indigo-velvet-600 hover:text-white hover:border-transparent font-black text-[10px] px-3 transition-all"
                    >
                      ACCÉDER
                    </Button>
                  </TableCell>
                  <TableCell className="text-right pr-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl hover:bg-muted">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56 rounded-xl border-border shadow-2xl p-2 bg-card">
                        <DropdownMenuLabel className="px-2 pt-1 pb-2 text-[9px] font-black uppercase text-muted-foreground tracking-widest">Management</DropdownMenuLabel>
                        <DropdownMenuItem 
                          className="rounded-lg gap-2.5 cursor-pointer focus:bg-indigo-velvet-600 focus:text-white font-bold"
                          onSelect={() => handleViewDetails(cohorte)}
                        >
                          <Eye className="h-4 w-4" /> Détails complets
                        </DropdownMenuItem>
                        <DropdownMenuItem className="rounded-lg gap-2.5 cursor-pointer focus:bg-indigo-velvet-600 focus:text-white">
                          <Edit2 className="h-4 w-4" /> Configurer
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border/50" />
                        <DropdownMenuItem className="rounded-lg gap-2.5 cursor-pointer text-destructive focus:text-white focus:bg-destructive font-black">
                          <Trash2 className="h-4 w-4" /> Désactiver
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-5 bg-muted/20 border-t border-border/30">
          <p className="text-[11px] text-muted-foreground font-bold">
            Promo <span className="text-foreground">1 - 5</span> de <span className="text-foreground">12</span> au total
          </p>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-border" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button className="h-8 w-8 rounded-lg text-xs font-black bg-indigo-velvet-600 text-white">1</Button>
            <Button variant="ghost" className="h-8 w-8 rounded-lg text-xs font-bold hover:bg-muted">2</Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg border-border">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* 📋 Cohorte Details Dialog — CENTERED */}
      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="sm:max-w-2xl w-full border border-border shadow-2xl p-0 overflow-hidden bg-card rounded-3xl">
          {selectedCohorte && (
            <div className="flex flex-col max-h-[90vh]">
              <div className="h-48 bg-indigo-velvet-600 relative overflow-hidden">
                 <div className="absolute inset-0 bg-linear-to-t from-indigo-velvet-900/50 to-transparent"></div>
                 <div className="absolute top-6 left-8 flex items-center gap-3">
                   <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl">
                      <Target className="h-5 w-5 text-frozen-water-400" />
                   </div>
                   <Badge className="bg-frozen-water-500 text-indigo-velvet-950 hover:bg-frozen-water-400 font-black border-none uppercase tracking-tighter text-[9px]">
                     {selectedCohorte.code}
                   </Badge>
                 </div>
                 <div className="absolute bottom-8 left-8 pr-8">
                    <h2 className="text-4xl font-black text-white leading-tight mb-2 uppercase tracking-tighter">{selectedCohorte.name}</h2>
                    <div className="flex flex-wrap items-center gap-4">
                       <span className="text-indigo-velvet-100 font-bold text-sm flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-frozen-water-400" /> {selectedCohorte.center}
                       </span>
                       <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                       <span className="text-indigo-velvet-100 font-bold text-sm flex items-center gap-1.5">
                          <BookOpen className="h-4 w-4 text-frozen-water-400" /> {selectedCohorte.pathway}
                       </span>
                    </div>
                 </div>
              </div>
              
              <div className="px-8 py-10 space-y-10 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <div className="space-y-3">
                       <h3 className="text-[10px] font-black text-indigo-velvet-500 dark:text-indigo-velvet-400 uppercase tracking-[0.2em] border-b border-border/50 pb-2">Description</h3>
                       <p className="text-sm text-foreground/90 leading-relaxed font-medium italic">
                         "{selectedCohorte.description}"
                       </p>
                    </div>

                    <div className="p-6 bg-muted/30 border border-border/50 rounded-2xl flex items-center gap-5">
                       <div className="h-12 w-12 flex items-center justify-center bg-card rounded-2xl text-indigo-velvet-500 shadow-sm border border-border/50"><GraduationCap className="h-6 w-6" /></div>
                       <div className="flex flex-col">
                         <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Encadrement</span>
                         <span className="text-lg font-black text-foreground">{selectedCohorte.trainer}</span>
                         <span className="text-[10px] text-indigo-velvet-500 font-bold uppercase">{selectedCohorte.trainerCode}</span>
                       </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="p-6 bg-indigo-velvet-950/50 dark:bg-muted/30 border border-border shadow-sm rounded-2xl space-y-5">
                       <div className="flex items-baseline justify-between mb-2">
                          <span className="text-[10px] font-black text-indigo-velvet-400 uppercase tracking-widest">Effectif & Taux</span>
                          <span className="text-3xl font-black text-foreground">{selectedCohorte.inscribed}<span className="text-indigo-velvet-500 text-lg"> / {selectedCohorte.maxCapacity}</span></span>
                       </div>
                       <Progress 
                         value={(selectedCohorte.inscribed / selectedCohorte.maxCapacity) * 100} 
                         className="h-2.5 bg-card border border-border/30" 
                         indicatorClassName="bg-frozen-water-500" 
                       />
                       <div className="flex gap-4">
                          <div className="flex-1 flex flex-col p-3 bg-card border border-border/30 rounded-xl">
                             <span className="text-[9px] font-black text-muted-foreground uppercase mb-1">Disponibles</span>
                             <span className="text-xl font-black text-indigo-velvet-500">{selectedCohorte.maxCapacity - selectedCohorte.inscribed}</span>
                          </div>
                          <div className="flex-1 flex flex-col p-3 bg-card border border-border/30 rounded-xl">
                             <span className="text-[9px] font-black text-muted-foreground uppercase mb-1">Remplissage</span>
                             <span className="text-xl font-black text-frozen-water-500 font-mono">{Math.round((selectedCohorte.inscribed/selectedCohorte.maxCapacity)*100)}%</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center gap-5 p-5 bg-card border border-border/50 rounded-2xl">
                       <div className="p-3 bg-indigo-velvet-500/10 rounded-2xl text-indigo-velvet-500"><Calendar className="h-6 w-6" /></div>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Durée Prévue</span>
                          <span className="font-black text-sm text-foreground">Du {new Date(selectedCohorte.startDate).toLocaleDateString()} au {new Date(selectedCohorte.endDate).toLocaleDateString()}</span>
                          <span className="text-[10px] text-frozen-water-600 font-bold italic">Session de 3 mois (90 jours)</span>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4 items-center sm:justify-end">
                   <Button variant="ghost" className="w-full sm:w-auto text-muted-foreground font-black uppercase text-[10px] hover:bg-transparent" onClick={() => setIsDetailsOpen(false)}>
                     Fermer l'aperçu
                   </Button>
                   <Button className="w-full sm:w-auto bg-indigo-velvet-600 hover:bg-indigo-velvet-700 text-white font-black h-12 px-10 rounded-2xl shadow-xl shadow-indigo-velvet-600/20 text-xs">
                     <Edit2 className="mr-2 h-4 w-4" /> CONFIGURER LA COHORTE
                   </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
