"use client";

import {
  BookOpen,
  CircleDollarSign,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

import { NavMain } from "@/src/components/nav-main";
import { NavUser } from "@/src/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import { useAuth } from "@/src/features/auth/context/AuthContext";

export function AppSidebar({ ...props }) {
  const { user } = useAuth();

  const data = {
    user: {
      name: user?.nom || "Admin CF",
      email: user?.email || "test@gmail.com",
      avatar: user?.avatar || "",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        isActive: true,
        items: [
          {
            title: "Vue d'ensemble",
            url: "/dashboard",
          },
        ],
      },
      {
        title: "Gestion Pédagogique",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Parcours",
            url: "/dashboard/parcours",
          },
          {
            title: "Modules",
            url: "/dashboard/modules",
          },
          {
            title: "Sessions",
            url: "/dashboard/sessions",
          },
          {
            title: "Challenges",
            url: "/dashboard/challenges",
          },
          {
            title: "Projets",
            url: "/dashboard/projets",
          },
        ],
      },
      {
        title: "Cohortes",
        url: "#",
        icon: GraduationCap,
        items: [
          {
            title: "Toutes les cohortes",
            url: "/dashboard/cohortes",
          },
          {
            title: "Créer une cohorte",
            url: "/dashboard/cohortes/creer",
          },
          {
            title: "Apprenants (Détail)",
            url: "/dashboard/cohortes/apprenants",
          },
          {
            title: "Annonces (Détail)",
            url: "/dashboard/cohortes/annonces",
          },
          {
            title: "Suivi (Détail)",
            url: "/dashboard/cohortes/suivi",
          },
        ],
      },
      {
        title: "Membres du centre",
        url: "#",
        icon: Users,
        items: [
          {
            title: "Apprenants",
            url: "/dashboard/apprenants",
          },
          {
            title: "Formateurs",
            url: "/dashboard/formateurs",
          },
        ],
      },
      {
        title: "Revenus",
        url: "#",
        icon: CircleDollarSign,
        items: [
          {
            title: "Synthèse",
            url: "/dashboard/revenus",
          },
          {
            title: "Paiements reçus",
            url: "/dashboard/revenus/recus",
          },
          {
            title: "Paiements en attente",
            url: "/dashboard/revenus/attente",
          },
        ],
      },
      {
        title: "Paramètres",
        url: "#",
        icon: Settings,
        items: [
          {
            title: "Mon centre",
            url: "/dashboard/parametres/centre",
          },
          {
            title: "Utilisateurs du centre",
            url: "/dashboard/parametres/utilisateurs",
          },
          {
            title: "Facturation / Abonnement",
            url: "/dashboard/parametres/facturation",
          },
        ],
      },
    ],
  };

  return (
    <Sidebar
      variant="sidebar"
      className="border-r-0 bg-background! rounded-tr-4xl rounded-br-4xl overflow-hidden"
      style={{
        "--sidebar-background": "var(--background)",
        "--sidebar": "var(--background)",
      }}
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <span className="font-bold">CC</span>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">CodeCraft</span>
                  <span className="truncate text-xs">Espace Admin</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
