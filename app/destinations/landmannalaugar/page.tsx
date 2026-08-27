import LandmannalaugarContent from "@/components/destinations/landmannalaugarHero/LandmannalaugarContent";
import LandmannalaugarHero from "@/components/destinations/landmannalaugarHero/LandmannalaugarHero";
import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";

export default function Home() {
  return (
    <main>
      <LandmannalaugarHero />
      <LandmannalaugarContent />
       <PopularDestinations />
    </main>
  );
}