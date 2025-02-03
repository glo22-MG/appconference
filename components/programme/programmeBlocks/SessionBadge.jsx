import { Badge } from "@/components/ui/badge";

export default function SessionBadge({ type }) {
    const styles = {
      conference: "bg-blue-500/10 text-blue-500",
      workshop: "bg-green-500/10 text-green-500",
      panel: "bg-purple-500/10 text-purple-500"
    };
  
    return (
      <Badge className={`${styles[type]} capitalize`} variant="outline">
        {type}
      </Badge>
    );
  }