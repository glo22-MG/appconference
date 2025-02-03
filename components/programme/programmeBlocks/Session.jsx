import SessionHeader from "@/components/programme/programmeBlocks/SessionHeader";
import SessionInfo from "@/components/programme/programmeBlocks/SessionInfo";
import SessionImage from "@/components/programme/programmeBlocks/SessionImage";
import { Card } from "@/components/ui/card";

export default function Session({ session }) {
    return (
      <Card className="overflow-hidden">
        <div className="md:grid md:grid-cols-[2fr,1fr] gap-6">
          <div className="p-6">
            <SessionHeader session={session} />
            
            <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
            <p className="text-muted-foreground mb-4">{session.description}</p>
            
            <SessionInfo session={session} />
          </div>
          
          <SessionImage session={session} />
        </div>
      </Card>
    );
  }
  