import { useState } from "react";
import {
  MoreHorizontal,
  Plus,
  Search,
  UserCheck,
  UserPlus,
  Users,
  UserX,
  Eye,
  Edit2,
  Trash2,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  GraduationCap,
  BookOpen,
  Zap,
  BarChart3,
  Settings2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Trophy,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
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

// Données mock enrichies pour les profils
const MOCK_TRAINERS = [
  {
    id: "1",
    name: "Samuel Nkodo",
    email: "s.nkodo@codecraft.cm",
    phone: "+237 677 88 99 00",
    location: "Douala, Cameroun",
    avatar: "SN",
    primarySkill: "React.js",
    secondarySkills: ["Node.js", "TypeScript", "Next.js"],
    experience: 8,
    level: "Senior",
    modulesCount: 12,
    activeSessions: 3,
    availability: "disponible",
    performance: 4.8,
    workload: 65,
    status: "actif",
    language: "Français, Anglais",
    bio: "Expert JavaScript avec plus de 8 ans d'expérience dans le développement d'applications web complexes. Passionné par l'architecture logicielle et mentorat des jeunes talents.",
    joinDate: "Mars 2023",
    totalStudents: 450,
  },
  {
    id: "2",
    name: "Marie-Louise Essomba",
    email: "ml.essomba@codecraft.cm",
    phone: "+237 699 11 22 33",
    location: "Yaoundé, Cameroun",
    avatar: "ME",
    primarySkill: "UI/UX Design",
    secondarySkills: ["Figma", "Tailwind CSS", "Adobe XD"],
    experience: 5,
    level: "Intermédiaire",
    modulesCount: 8,
    activeSessions: 2,
    availability: "disponible",
    performance: 4.9,
    workload: 40,
    status: "actif",
    language: "Français",
    bio: "Designer UI/UX axée sur l'utilisateur. Je crée des interfaces intuitives et esthétiques qui répondent aux besoins réels des utilisateurs camerounais.",
    joinDate: "Juin 2023",
    totalStudents: 280,
  },
  {
    id: "3",
    name: "Ibrahim Moussa",
    email: "i.moussa@codecraft.cm",
    phone: "+237 655 44 55 66",
    location: "Garoua, Cameroun",
    avatar: "IM",
    primarySkill: "Node.js",
    secondarySkills: ["MySQL", "Docker", "Express"],
    experience: 10,
    level: "Senior",
    modulesCount: 15,
    activeSessions: 5,
    availability: "occupé",
    performance: 4.7,
    workload: 95,
    status: "actif",
    language: "Français, Anglais",
    bio: "Spécialiste Backend et Infrastructure. J'aide les entreprises à passer à l'échelle grâce à des systèmes robustes et optimisés.",
    joinDate: "Janvier 2023",
    totalStudents: 620,
  },
  {
    id: "4",
    name: "Christian Atangana",
    email: "c.atangana@codecraft.cm",
    phone: "+237 688 77 88 99",
    location: "Bafoussam, Cameroun",
    avatar: "CA",
    primarySkill: "Python",
    secondarySkills: ["Django", "FastAPI", "Pandas"],
    experience: 3,
    level: "Junior",
    modulesCount: 4,
    activeSessions: 1,
    availability: "disponible",
    performance: 4.5,
    workload: 20,
    status: "actif",
    language: "Français",
    bio: "Développeur Python passionné par la Data Science et le web. Toujours en quête d'apprentissage pour partager les meilleures pratiques.",
    joinDate: "Septembre 2024",
    totalStudents: 120,
  },
  {
    id: "5",
    name: "Joseph Mebara",
    email: "j.mebara@codecraft.cm",
    phone: "+237 677 33 44 55",
    location: "Sangmélima, Cameroun",
    avatar: "JM",
    primarySkill: "DevOps",
    secondarySkills: ["AWS", "Kubernetes", "CI/CD"],
    experience: 12,
    level: "Senior",
    modulesCount: 6,
    activeSessions: 0,
    availability: "disponible",
    performance: 4.6,
    workload: 0,
    status: "inactif",
    language: "Français, Anglais",
    bio: "Ancien administrateur système reconverti dans le DevOps. J'automatise tout ce qui bouge pour garantir une livraison fluide.",
    joinDate: "Mai 2023",
    totalStudents: 310,
  },
  {
    id: "6",
    name: "Danielle Abena",
    email: "d.abena@codecraft.cm",
    phone: "+237 699 55 66 77",
    location: "Limbé, Cameroun",
    avatar: "DA",
    primarySkill: "Mobile App",
    secondarySkills: ["Flutter", "Dart", "Firebase"],
    experience: 4,
    level: "Intermédiaire",
    modulesCount: 7,
    activeSessions: 2,
    availability: "disponible",
    performance: 4.8,
    workload: 55,
    status: "actif",
    language: "Français, Anglais",
    bio: "Développeuse mobile multiplateforme. Je transforme vos idées en applications fluides et performantes sur iOS et Android.",
    joinDate: "Novembre 2023",
    totalStudents: 215,
  },
];

const STATS = [
  { label: "Total formateurs", value: 34, icon: Users, color: "text-indigo-velvet-600", bg: "bg-indigo-velvet-50" },
  { label: "Formateurs actifs", value: 28, icon: UserCheck, color: "text-frozen-water-700", bg: "bg-frozen-water-50" },
  { label: "Formateurs disponibles", value: 16, icon: UserPlus, color: "text-soft-cyan-700", bg: "bg-soft-cyan-50" },
  { label: "Formateurs occupés", value: 12, icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
];

export function TrainersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleViewProfile = (trainer) => {
    setSelectedTrainer(trainer);
    setIsProfileOpen(true);
  };

  return (
    <div className="flex flex-col gap-8 p-0 bg-background/50">
      {/* 🔝 En-tête (Header) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-indigo-velvet-950 dark:text-frozen-water-200">
            Gestion des formateurs
          </h1>
          <p className="text-muted-foreground mt-1 flex items-center gap-2">
            <Settings2 className="h-4 w-4" /> Administrez votre équipe pédagogique d'élite.
          </p>
        </div>
        <Button className="rounded-xl px-6 bg-indigo-velvet-600 hover:bg-indigo-velvet-700 text-white shadow-lg shadow-indigo-velvet-200 dark:shadow-none transition-all">
          <Plus className="mr-2 h-4 w-4" /> Ajouter un formateur
        </Button>
      </div>

      {/* Statistiques clés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm bg-card/60 backdrop-blur-md hover:shadow-md hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-indigo-velvet-900 dark:text-frozen-water-100">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 🔍 Barre de recherche et filtres */}
      <Card className="border border-indigo-velvet-100 shadow-sm bg-indigo-velvet-50/50">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-indigo-velvet-400 group-focus-within:text-indigo-velvet-600 transition-colors" />
              <Input
                placeholder="Rechercher par nom ou email..."
                className="pl-10 h-11 bg-white dark:bg-muted/20 border-indigo-velvet-100 dark:border-muted focus-visible:ring-indigo-velvet-500 rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Select value={skillFilter} onValueChange={setSkillFilter}>
                <SelectTrigger className="w-[160px] h-11 bg-white dark:bg-muted/20 rounded-xl border-indigo-velvet-100 dark:border-muted">
                  <SelectValue placeholder="Compétences" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all">Toutes compétences</SelectItem>
                  <SelectItem value="react">React.js</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="design">UI/UX Design</SelectItem>
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-[140px] h-11 bg-white dark:bg-muted/20 rounded-xl border-indigo-velvet-100 dark:border-muted">
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="all">Tous niveaux</SelectItem>
                  <SelectItem value="junior">Junior</SelectItem>
                  <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                  <SelectItem value="senior">Senior</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="h-11 px-4 rounded-xl text-indigo-velvet-600 border-indigo-velvet-200 hover:bg-indigo-velvet-50 transition-colors">
                <Filter className="mr-2 h-4 w-4" /> Plus de filtres
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 📋 Tableau des formateurs */}
      <Card className="border-none shadow-sm bg-card/60 backdrop-blur-md overflow-hidden">
        <Table>
          <TableHeader className="bg-indigo-velvet-500/5">
            <TableRow className="hover:bg-transparent border-indigo-velvet-100/50 text-xs">
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5" /> Formateur
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">
                <div className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5" /> Compétences
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Briefcase className="h-3.5 w-3.5" /> Expérience
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-3.5 w-3.5" /> Activité
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" /> Disponibilité
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">
                <div className="flex items-center gap-2">
                  <Star className="h-3.5 w-3.5" /> Performance
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-3.5 w-3.5" /> Charge
                </div>
              </TableHead>
              <TableHead className="font-bold text-indigo-velvet-700 dark:text-frozen-water-400">Statut</TableHead>
              <TableHead className="w-[100px] text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_TRAINERS.map((trainer) => (
              <TableRow key={trainer.id} className="group hover:bg-indigo-velvet-50/50 dark:hover:bg-indigo-velvet-500/10 border-indigo-velvet-100/30 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-white dark:border-indigo-velvet-900 shadow-sm group-hover:border-indigo-velvet-200 transition-all">
                      <AvatarFallback className="bg-indigo-velvet-600/10 text-indigo-velvet-600 font-bold text-xs">
                        {trainer.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-indigo-velvet-950 dark:text-foreground text-sm group-hover:text-indigo-velvet-600 transition-colors">{trainer.name}</span>
                      <span className="text-[11px] text-muted-foreground">{trainer.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <Badge className="bg-frozen-water-500/15 text-frozen-water-700 dark:text-frozen-water-300 hover:bg-frozen-water-500/25 border-none px-2 py-0 h-5 text-[10px] font-bold">
                        {trainer.primarySkill}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {trainer.secondarySkills.map((skill) => (
                        <span key={skill} className="text-[9px] text-muted-foreground font-medium">
                          • {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-indigo-velvet-900 dark:text-indigo-velvet-200">{trainer.experience} ans</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold">
                      {trainer.level}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-indigo-velvet-700 dark:text-foreground">{trainer.modulesCount}</span>
                      <span className="text-muted-foreground text-[10px] uppercase font-medium">modules</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs">
                      <span className="font-bold text-frozen-water-600">{trainer.activeSessions}</span>
                      <span className="text-muted-foreground text-[10px] uppercase font-medium">sessions</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={`flex items-center gap-1.5 font-bold text-[10px] uppercase tracking-wider ${
                      trainer.availability === "disponible" ? "text-frozen-water-600" : "text-destructive"
                    }`}>
                    <div className={`w-2 h-2 rounded-full animate-pulse ${trainer.availability === "disponible" ? "bg-frozen-water-500 shadow-[0_0_8px_rgba(0,255,132,0.5)]" : "bg-destructive shadow-[0_0_8px_rgba(239,68,68,0.5)]"}`} />
                    {trainer.availability}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-500/10 w-fit px-2 py-1 rounded-lg border border-amber-100 dark:border-amber-500/20">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-amber-700 dark:text-amber-400 text-xs">{trainer.performance}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="w-24 space-y-1.5">
                    <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-tighter">
                      <span className="text-muted-foreground">Charge</span>
                      <span className={trainer.workload > 85 ? "text-destructive" : "text-indigo-velvet-600"}>
                        {trainer.workload}%
                      </span>
                    </div>
                    <Progress 
                      value={trainer.workload} 
                      className="h-1.5 bg-indigo-velvet-100" 
                      indicatorClassName={trainer.workload > 85 ? "bg-destructive" : "bg-indigo-velvet-500"} 
                    />
                  </div>
                </TableCell>
                <TableCell>
                  <div className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase text-center w-fit border ${
                      trainer.status === "actif" 
                        ? "bg-indigo-velvet-500 text-white border-transparent" 
                        : "bg-muted text-muted-foreground border-muted-foreground/20"
                    }`}>
                    {trainer.status}
                  </div>
                </TableCell>
                <TableCell className="text-right pr-6">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl hover:bg-indigo-velvet-100 hover:text-indigo-velvet-600 transition-all">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-52 rounded-xl border-indigo-velvet-100 shadow-xl p-2">
                      <DropdownMenuLabel className="px-2 pt-1 pb-2 text-[10px] font-bold uppercase text-muted-foreground">Gestion d'expert</DropdownMenuLabel>
                      <DropdownMenuItem 
                        className="rounded-lg gap-2.5 cursor-pointer focus:bg-indigo-velvet-50 text-indigo-velvet-900"
                        onSelect={() => handleViewProfile(trainer)}
                      >
                        <Eye className="h-4 w-4 text-indigo-velvet-500" /> Voir profil complet
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg gap-2.5 cursor-pointer focus:bg-indigo-velvet-50 text-indigo-velvet-900">
                        <Edit2 className="h-4 w-4 text-indigo-velvet-500" /> Modifier les accès
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-indigo-velvet-100/50" />
                      {trainer.status === "actif" ? (
                        <DropdownMenuItem className="rounded-lg gap-2.5 cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/5 font-semibold">
                          <UserX className="h-4 w-4" /> Désactiver le formateur
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="rounded-lg gap-2.5 cursor-pointer text-frozen-water-600 focus:text-frozen-water-700 focus:bg-frozen-water-50 font-semibold">
                          <UserCheck className="h-4 w-4" /> Réactiver le profil
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-5 bg-indigo-velvet-500/5 border-t border-indigo-velvet-100/30">
          <p className="text-xs text-muted-foreground font-medium">
            Affichage de <span className="font-bold text-indigo-velvet-900 dark:text-frozen-water-200">6</span> experts sur <span className="font-bold text-indigo-velvet-900 dark:text-frozen-water-200">34</span> membres d'équipe
          </p>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-indigo-velvet-200 hover:bg-white" disabled>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button className="h-9 w-9 rounded-xl p-0 text-xs font-black bg-indigo-velvet-600 text-white shadow-md shadow-indigo-velvet-200 dark:shadow-none">1</Button>
            <Button variant="ghost" className="h-9 w-9 rounded-xl p-0 text-xs font-bold text-indigo-velvet-600 hover:bg-indigo-velvet-100">2</Button>
            <Button variant="ghost" className="h-9 w-9 rounded-xl p-0 text-xs font-bold text-indigo-velvet-600 hover:bg-indigo-velvet-100">3</Button>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-indigo-velvet-200 hover:bg-white">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* 👤 Trainer Profile Dialog */}
      <Dialog open={isProfileOpen} onOpenChange={setIsProfileOpen}>
        <DialogContent className="sm:max-w-2xl w-full border-none shadow-2xl p-0 overflow-hidden bg-white rounded-2xl">
          {selectedTrainer && (
            <div className="flex flex-col max-h-[90vh]">
              <div className="h-40 bg-indigo-velvet-700 relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                 <div className="absolute inset-0 bg-linear-to-t from-indigo-velvet-900/50 to-transparent"></div>
                 <div className="absolute -bottom-16 left-8 flex items-end gap-6 text-xs">
                  <Avatar className="h-32 w-32 bg-white">
                    <AvatarFallback className="bg-indigo-velvet-50 text-indigo-velvet-600 font-black text-3xl">
                      {selectedTrainer.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mb-4">
                    <h2 className="text-3xl font-black text-white drop-shadow-md">{selectedTrainer.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                       <Badge className="bg-frozen-water-500 text-indigo-velvet-950 font-bold border-none h-6">
                         {selectedTrainer.level} Expert
                       </Badge>
                       <span className="text-indigo-velvet-100 text-sm font-medium flex items-center gap-1 group">
                         <MapPin className="h-3.5 w-3.5" /> {selectedTrainer.location}
                       </span>
                    </div>
                  </div>
                 </div>
              </div>
              
              <div className="mt-20 px-8 py-6 space-y-8 flex-1 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-none bg-indigo-velvet-50/80 p-4 flex flex-col items-center justify-center text-center">
                    <BookOpen className="h-6 w-6 text-indigo-velvet-600 mb-2" />
                    <span className="text-2xl font-black text-indigo-velvet-950">{selectedTrainer.modulesCount}</span>
                    <span className="text-[10px] font-black text-indigo-velvet-500 uppercase tracking-widest">Modules Créés</span>
                  </Card>
                  <Card className="border-none bg-frozen-water-50/80 p-4 flex flex-col items-center justify-center text-center">
                    <GraduationCap className="h-6 w-6 text-frozen-water-700 mb-2" />
                    <span className="text-2xl font-black text-indigo-velvet-950">{selectedTrainer.totalStudents}</span>
                    <span className="text-[10px] font-black text-frozen-water-700 uppercase tracking-widest">Élèves Formés</span>
                  </Card>
                  <Card className="border-none bg-amber-50 p-4 flex flex-col items-center justify-center text-center">
                    <Trophy className="h-6 w-6 text-amber-600 mb-2" />
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-black text-indigo-velvet-950">{selectedTrainer.performance}</span>
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Note Moyenne</span>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-black text-indigo-velvet-900 border-l-4 border-indigo-velvet-500 pl-3 uppercase tracking-wider">Expertise & Biographie</h3>
                  <p className="text-base text-foreground/80 leading-relaxed font-medium">
                    {selectedTrainer.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    <Badge className="bg-indigo-velvet-100 text-indigo-velvet-700 hover:bg-indigo-velvet-200 border-none font-bold px-3 py-1">
                      {selectedTrainer.primarySkill}
                    </Badge>
                    {selectedTrainer.secondarySkills.map(s => (
                      <Badge key={s} variant="outline" className="border-indigo-velvet-100 text-indigo-velvet-500 hover:bg-indigo-velvet-50 font-semibold px-3 py-1">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-indigo-velvet-50 pt-8">
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Coordonnées</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 flex items-center justify-center bg-indigo-velvet-50 rounded-xl text-indigo-velvet-600"><Mail className="h-5 w-5" /></div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-muted-foreground font-bold uppercase">Email Professionnel</span>
                          <span className="text-sm font-bold text-indigo-velvet-950">{selectedTrainer.email}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 flex items-center justify-center bg-indigo-velvet-50 rounded-xl text-indigo-velvet-600"><Phone className="h-5 w-5" /></div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-muted-foreground font-bold uppercase">Téléphone</span>
                          <span className="text-sm font-bold text-indigo-velvet-950">{selectedTrainer.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Historique</h3>
                    <div className="bg-frozen-water-50/30 border border-frozen-water-100 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-indigo-velvet-900">Actif depuis</span>
                        <Badge variant="secondary" className="bg-frozen-water-500 text-indigo-velvet-950 text-[10px]">{selectedTrainer.joinDate}</Badge>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        Membre de confiance de l'équipe CodeCraft, ayant contribué à de multiples sessions de formation certifiées.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center sm:justify-end">
                   <Button variant="ghost" className="w-full sm:w-auto text-muted-foreground font-bold hover:bg-transparent" onClick={() => setIsProfileOpen(false)}>
                     Fermer
                   </Button>
                   <Button className="w-full sm:w-auto bg-indigo-velvet-600 hover:bg-indigo-velvet-700 text-white font-bold h-12 px-8 rounded-xl">
                     <Edit2 className="mr-2 h-4 w-4" /> Modifier le profil
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
