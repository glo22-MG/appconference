import { Code, Brain, Rocket, Palette, Database, Shield } from "lucide-react";

const icons = {
  code: Code,
  brain: Brain,
  rocket: Rocket,
  palette: Palette,
  database: Database,
  shield: Shield
};

export const getIconComponent = (iconName) => {
  return icons[iconName] || Code;
};