import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";
import ThorsmorkContent from "@/components/destinations/thorsmork/ThorsmorkContent";
import ThorsmorkHero from "@/components/destinations/thorsmork/ThorsmorkHero";


export default function Page() {
  return (
    <main>
      <ThorsmorkHero />
      <ThorsmorkContent />
      <PopularDestinations/>
  
    </main> 
  );
}