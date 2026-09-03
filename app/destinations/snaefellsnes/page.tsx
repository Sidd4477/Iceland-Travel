import { Suspense } from "react";

import PopularDestinations from "@/components/destinations/northern-lights/PopularDestinations";
import SnaefellsnesContent from "@/components/destinations/snaefellsnes/SnaefellsnesContent";
import SnaefellsnesHero from "@/components/destinations/snaefellsnes/SnaefellsnesHero";

const SnaefellsnesPage = () => {
  return (
    <>
      <Suspense fallback={null}>
        <SnaefellsnesHero />
      </Suspense>

      <SnaefellsnesContent />

      <PopularDestinations />
    </>
  );
};

export default SnaefellsnesPage;