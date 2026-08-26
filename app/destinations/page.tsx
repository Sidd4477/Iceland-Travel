import DestinationsHero from "@/components/destinations/DestinationsHero";
import DestinationGrid from "@/components/destinations/DestinationGrid";
import TravelServices from "@/components/destinations/TravelServices";
import DiscoverIceland from "@/components/destinations/DiscoverIceland";

export default function DestinationsPage() {
  return (
    <main>
      <div>
        <DestinationsHero />
        <DestinationGrid />
      </div>

      <TravelServices />
      <DiscoverIceland />
    </main>
  );
}