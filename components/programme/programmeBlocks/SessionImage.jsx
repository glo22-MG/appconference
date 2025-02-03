import { Badge } from "@/components/ui/badge";

export default function SessionImage({ session }) {
    return (
      <div className="relative h-48 md:h-auto">
        <img
          src={session.image}
          alt={session.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 md:bg-gradient-to-r" />
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
          <Badge className="bg-primary/90 text-primary-foreground">
            {session.track}
          </Badge>
        </div>
      </div>
    );
  }