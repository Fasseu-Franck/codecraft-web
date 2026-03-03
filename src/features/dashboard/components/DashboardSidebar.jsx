// Basé sur codecraft-prd.md — Module Centres de Formation : Dashboard admin
// Sidebar rétractable avec navigation par sections
// Conforme au design system (codecraft-style.md) avec support dark/light mode
import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";
import { useAuth } from "@/src/features/auth/context/AuthContext";
import { cn } from "@/src/lib/utils";
import {
  BarChart3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Settings,
  UserCog,
  Users,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Éléments de navigation — Basé sur les fonctionnalités du PRD
const NAV_ITEMS = [
  {
    label: "Tableau de bord",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Gestion des Cohortes",
    icon: Users,
    path: "/dashboard/cohortes",
  },
  {
    label: "Catalogue des Formations",
    icon: BookOpen,
    path: "/dashboard/formations",
  },
  {
    label: "Suivi des Projets",
    icon: FolderKanban,
    path: "/dashboard/projets",
  },
  {
    label: "Personnel Formateur",
    icon: UserCog,
    path: "/dashboard/formateurs",
  },
  {
    label: "Base des Apprenants",
    icon: GraduationCap,
    path: "/dashboard/apprenants",
  },
  {
    label: "Analytics & Finances",
    icon: BarChart3,
    path: "/dashboard/analytics",
  },
];

const BOTTOM_ITEMS = [
  {
    label: "Paramètres",
    icon: Settings,
    path: "/dashboard/parametres",
  },
];

export function DashboardSidebar({ collapsed, onToggle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(path);
  };

  const NavItem = ({ item }) => {
    const active = isActive(item.path);
    const content = (
      <Link
        to={item.path}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
          "hover:bg-secondary/80",
          active
            ? "bg-primary/10 text-primary border-l-2 border-primary"
            : "text-muted-foreground hover:text-foreground",
          collapsed && "justify-center px-2",
        )}
      >
        <item.icon
          className={cn("h-5 w-5 shrink-0", active && "text-primary")}
        />
        {!collapsed && <span className="truncate">{item.label}</span>}
      </Link>
    );

    if (collapsed) {
      return (
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {item.label}
          </TooltipContent>
        </Tooltip>
      );
    }

    return content;
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 flex h-screen flex-col border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-[68px]" : "w-[260px]",
      )}
    >
      {/* Logo / Brand */}
      <div
        className={cn(
          "flex items-center h-16 px-4 border-b border-border",
          collapsed ? "justify-center" : "gap-3",
        )}
      >
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                CC
              </span>
            </div>
            <span className="font-bold text-lg text-foreground">CodeCraft</span>
          </div>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">
              CC
            </span>
          </div>
        )}
      </div>

      {/* Navigation principale */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </nav>

      {/* Séparateur */}
      <Separator className="mx-3" />

      {/* Navigation basse */}
      <div className="px-3 py-4 space-y-1">
        {BOTTOM_ITEMS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}

        {/* Bouton déconnexion */}
        {collapsed ? (
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10 transition-all duration-200 w-full cursor-pointer"
              >
                <LogOut className="h-5 w-5 shrink-0" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="right" className="font-medium">
              Déconnexion
            </TooltipContent>
          </Tooltip>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10 transition-all duration-200 w-full cursor-pointer"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            <span>Déconnexion</span>
          </button>
        )}
      </div>

      {/* Bouton collapse */}
      <div className="border-t border-border p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn("w-full", collapsed && "mx-auto")}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </aside>
  );
}
