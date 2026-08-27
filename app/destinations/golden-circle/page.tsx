import GoldenCircleContent from "@/components/destinations/goldencircle/GoldenCircleContent";
import GoldenCircleHero from "@/components/destinations/goldencircle/GoldenCircleHero";
import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";
export default function Page() {
  return (
    <main>
       <GoldenCircleHero />
       <GoldenCircleContent />
       <PopularDestinations />
    </main>
  );
}