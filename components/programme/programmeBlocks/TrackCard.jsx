"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen } from "lucide-react";
import ThemeIcon from "@/components/ui/ThemeIcon";
import { getIconComponent } from "@/lib/icons";

export default function TrackCard({ title, description, sessions, colorScheme, icon }) {
  const IconComponent = getIconComponent(icon);

  const colorClasses = {
    development: {
      stripe: "bg-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      hover: "hover:text-blue-600"
    },
    ai: {
      stripe: "bg-purple-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      hover: "hover:text-purple-600"
    },
    startup: {
      stripe: "bg-green-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      hover: "hover:text-green-600"
    },
    design: {
      stripe: "bg-orange-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      hover: "hover:text-orange-600"
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>
      
      {/* Color indicator */}
      <div className={`absolute -right-12 -top-12 h-24 w-24 rotate-45 ${colors.stripe} opacity-90`} />
      
      <div className="relative p-6">
        <div className="flex flex-col h-full">
          <ThemeIcon 
            Icon={IconComponent}
            bgColor={colors.iconBg}
            color={colors.iconColor}
          />
          
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5 text-muted-foreground" />
            <Badge variant="secondary" className="text-xs">
              {sessions} sessions
            </Badge>
          </div>
          
          <h3 className={`text-xl font-bold mb-3 group-hover:${colors.hover} transition-colors`}>
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-6 flex-grow">
            {description}
          </p>
          
          <div className={`flex items-center text-sm font-medium ${colors.iconColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
            En savoir plus
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Card>
  );
}