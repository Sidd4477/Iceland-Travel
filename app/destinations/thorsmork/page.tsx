import { Suspense } from "react";

import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";
import ThorsmorkContent from "@/components/destinations/thorsmork/ThorsmorkContent";
import ThorsmorkHero from "@/components/destinations/thorsmork/ThorsmorkHero";

export default function Page() {
  return (
    <main>
      <Suspense fallback={null}>
        <ThorsmorkHero />
        <ThorsmorkContent />
        <PopularDestinations />
      </Suspense>
    </main>
  );
}