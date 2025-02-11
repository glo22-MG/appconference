import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import programmeData from "@/public/json/programme.json";
import Session from "@/components/programme/programmeBlocks/Session";
// import { Session } from "@/components/programme/programmeBlocks/Session";

export default function SessionTabs() {
    return (
      <Tabs defaultValue="jour1" className="space-y-8">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="jour1" className="flex-1">Jour 1 - 15 Juin</TabsTrigger>
          <TabsTrigger value="jour2" className="flex-1">Jour 2 - 16 Juin</TabsTrigger>
          <TabsTrigger value="jour3" className="flex-1">Jour 3 - 17 Juin</TabsTrigger>
        </TabsList>
  
        <TabsContent value="jour1" className="space-y-6">
          {programmeData.jour1.map((session) => (
            <Session key={session.title} session={session} /> // Utiliser le titre comme clé
          ))}
        </TabsContent>
  
        <TabsContent value="jour2" className="space-y-6">
          {programmeData.jour2.map((session) => (
            <Session key={session.title} session={session} />
          ))}
        </TabsContent>
  
        <TabsContent value="jour3" className="space-y-6">
          {programmeData.jour3.map((session) => (
            <Session key={session.title} session={session} />
          ))}
        </TabsContent>
      </Tabs>
    );
  }