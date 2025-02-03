"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TrackCard({ title, description, sessions, color }) {
  return (
    <Card className="p-6">
      <div className="flex items-start space-x-4">
        <div className={`w-2 h-12 rounded-full ${color}`} />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Badge variant="secondary">{sessions} sessions</Badge>
        </div>
      </div>
    </Card>
  );
}