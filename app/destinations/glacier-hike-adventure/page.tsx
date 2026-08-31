import GlacierHikeAdventureContent from "@/components/destinations/glacier-hike-adventure/GlacierHikeAdventureContent";
import GlacierHikeAdventureHero from "@/components/destinations/glacier-hike-adventure/GlacierHikeAdventureHero";

import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";

const GlacierHikeAdventurePage = () => {
  return (
    <main>
      <GlacierHikeAdventureHero />
        <GlacierHikeAdventureContent />
        <PopularDestinations/>
    </main>
  );
};

export default GlacierHikeAdventurePage;