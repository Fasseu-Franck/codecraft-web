import { AppSidebar } from "@/src/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar";
import { TooltipProvider } from "@/src/components/ui/tooltip";
import { DashboardHeader } from "@/src/features/dashboard/components/DashboardHeader";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen bg-background w-full">
          {/* Nouvelle Sidebar */}
          <AppSidebar />

          {/* Contenu principal inset */}
          <SidebarInset className="flex-1 overflow-hidden">
            {/* Header */}
            <DashboardHeader />

            {/* Zone de contenu — Outlet pour les routes imbriquées */}
            <main className="p-6 overflow-auto bg-background flex-1">
              <Outlet />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}
