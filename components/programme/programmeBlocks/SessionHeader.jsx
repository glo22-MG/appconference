import SessionBadge from "@/components/programme/programmeBlocks/SessionBadge";

export default function SessionHeader({ session }) {
    return (
      <div className="flex items-center gap-4 mb-4">
        <p className="text-sm font-medium text-muted-foreground">
          {session.time}
        </p>
        <SessionBadge type={session.type} />
      </div>
    );
  }
  