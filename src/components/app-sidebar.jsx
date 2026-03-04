"use client";

import { BookOpen, LayoutDashboard, Settings, Users } from "lucide-react";

import { NavMain } from "@/src/components/nav-main";
import { NavSecondary } from "@/src/components/nav-secondary";
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
        title: "Tableau de Bord",
        url: "/dashboard",
        icon: LayoutDashboard,
        isActive: true,
        items: [
          {
            title: "Vue d'ensemble",
            url: "/dashboard",
          },
          {
            title: "Analytics",
            url: "/dashboard/analytics",
          },
        ],
      },
      {
        title: "Apprenants & Formateurs",
        url: "#",
        icon: Users,
        items: [
          {
            title: "Cohortes",
            url: "/dashboard/cohortes",
          },
          {
            title: "Base des Apprenants",
            url: "/dashboard/apprenants",
          },
          {
            title: "Personnel Formateur",
            url: "/dashboard/formateurs",
          },
        ],
      },
      {
        title: "Formation & Projets",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Catalogue de Formations",
            url: "/dashboard/formations",
          },
          {
            title: "Suivi des Projets",
            url: "/dashboard/projets",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Paramètres",
        url: "/dashboard/parametres",
        icon: Settings,
      },
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
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
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
