// Basé sur codecraft-archi.md — Couche de Présentation : Layout dashboard
// Layout principal combinant sidebar + header + contenu
// Conforme au design system (codecraft-style.md) avec support dark/light mode
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { DashboardHeader } from "@/src/features/dashboard/components/DashboardHeader";
import { DashboardSidebar } from "@/src/features/dashboard/components/DashboardSidebar";
import { cn } from "@/src/lib/utils";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar */}
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Contenu principal — Adapte sa marge selon l'état de la sidebar */}
        <div
          className={cn(
            "transition-all duration-300",
            sidebarCollapsed ? "ml-[68px]" : "ml-[260px]",
          )}
        >
          {/* Header */}
          <DashboardHeader />

          {/* Zone de contenu — Outlet pour les routes imbriquées */}
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
