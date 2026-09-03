import { Suspense } from "react";

import GlacierHikeAdventureContent from "@/components/destinations/glacier-hike-adventure/GlacierHikeAdventureContent";
import GlacierHikeAdventureHero from "@/components/destinations/glacier-hike-adventure/GlacierHikeAdventureHero";

import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";

const GlacierHikeAdventurePage = () => {
  return (
    <Suspense fallback={null}>
      <main>
        <GlacierHikeAdventureHero />

        <GlacierHikeAdventureContent />

        <PopularDestinations />
      </main>
    </Suspense>
  );
};

export default GlacierHikeAdventurePage;