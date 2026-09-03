import { Suspense } from "react";

import BlueLagoonSpaExperienceContent from "@/components/destinations/blue-lagoon-spa-experience/BlueLagoonSpaExperienceContent";
import BlueLagoonSpaExperienceHero from "@/components/destinations/blue-lagoon-spa-experience/BlueLagoonSpaExperienceHero";
import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";

const BlueLagoonSpaExperiencePage = () => {
  return (
    <Suspense fallback={null}>
      <main>
        <BlueLagoonSpaExperienceHero />

        <BlueLagoonSpaExperienceContent />

        <PopularDestinations />
      </main>
    </Suspense>
  );
};

export default BlueLagoonSpaExperiencePage;