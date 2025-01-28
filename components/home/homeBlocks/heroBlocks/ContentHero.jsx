import Calendars from "@/components/home/homeBlocks/heroBlocks/Calendar";
import SignIn from "@/components/home/homeBlocks/heroBlocks/SignIn";

export default function ContentHero(){
    return (
        <div className="relative container mx-auto px-4 py-24 sm:py-32">
                <div className="max-w-3xl text-white">
        
                  <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                    TechConf 2024
                    <br />
                    <span className="text-accent">L&apos;innovation en action</span>
                  </h1>
                  <p className="text-xl mb-8 text-gray-100">
                    Rejoignez plus de 1000 experts et passionnés de technologie pour deux
                    jours d&apos;échanges, de découvertes et d&apos;inspiration.
                  </p>
        
                  <Calendars/>
        
                  <SignIn/>
        
                </div>
        </div>
    );
}