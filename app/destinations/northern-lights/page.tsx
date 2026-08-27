import NorthernLightsHero from "@/components/destinations/northern-lights/NorthernLightsHero";
import NorthernLightsContent from "@/components/destinations/northern-lights/NorthernLightsContent";
import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";

export default function NorthernLightsPage() {
  return (
    <main>
      <NorthernLightsHero />

      <NorthernLightsContent />
      <PopularDestinations />
    </main>
  );
}