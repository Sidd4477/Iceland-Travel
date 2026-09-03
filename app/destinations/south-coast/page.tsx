import { Suspense } from "react";

import SouthCoastHero from "@/components/destinations/south-coast/SouthCoastHero";
import SouthCoastContent from "@/components/destinations/south-coast/SouthCoastContent";
import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";

const SouthCoastPage = () => {
  return (
    <main>
      <Suspense fallback={null}>
        <SouthCoastHero />
      </Suspense>

      <SouthCoastContent />

      <PopularDestinations />
    </main>
  );
};

export default SouthCoastPage;