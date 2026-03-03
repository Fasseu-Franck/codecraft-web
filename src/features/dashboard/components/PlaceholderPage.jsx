// Basé sur codecraft-prd.md — Pages placeholder pour les sections du dashboard
// Ces pages seront développées ultérieurement
import { Card, CardContent } from "@/src/components/ui/card";
import { Construction } from "lucide-react";

export function PlaceholderPage({ title, description }) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-md w-full text-center py-12">
        <CardContent className="space-y-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Construction className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <p className="text-muted-foreground text-sm">
            {description || "Cette page est en cours de développement."}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
