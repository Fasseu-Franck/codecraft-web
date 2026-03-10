// Basé sur codecraft-prd.md — Module Centres de Formation : Header dashboard
// En-tête avec titre, actions rapides et toggle de thème
// Profil utilisateur et déconnexion gérés exclusivement depuis la sidebar
import { ModeToggle } from "@/src/components/mode-toggle";
import { Button } from "@/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { Input } from "@/src/components/ui/input";
import { SidebarTrigger } from "@/src/components/ui/sidebar";
import {
  Bell,
  Download,
  FileSpreadsheet,
  FileText,
  Search,
} from "lucide-react";

export function DashboardHeader({ title = "Dashboard" }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-6 border-b border-border bg-card/80 backdrop-blur-sm">
      {/* Titre et trigger de la sidebar */}
      <div className="flex items-center gap-3">
        <SidebarTrigger className="-ml-2" />
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Barre de recherche */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher..."
            className="w-[240px] pl-9 h-9 bg-secondary/50"
          />
        </div>

        {/* Bouton Exporter — Dropdown pour formats PDF/Excel */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Exporter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Format d'export</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <FileText className="h-4 w-4" />
              Classement étudiants (PDF)
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <FileSpreadsheet className="h-4 w-4" />
              Classement étudiants (Excel)
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <FileText className="h-4 w-4" />
              Performances formations (PDF)
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2 cursor-pointer">
              <FileSpreadsheet className="h-4 w-4" />
              Performances formations (Excel)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-bold">
            3
          </span>
        </Button>

        {/* Mode toggle */}
        <ModeToggle />
      </div>
    </header>
  );
}
