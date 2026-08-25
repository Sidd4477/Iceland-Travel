import DreamTripBanner from "@/components/home/DreamTrip";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import PopularPackages from "@/components/home/PopularPackages";
import TravelConfidence from "@/components/home/TravelConfidence";

export default function Home() {
  return (
    <main>
      <Hero />
       <PopularDestinations />
       <DreamTripBanner />
       <PopularPackages />
       <TravelConfidence />
       <GalleryPreview />
    </main>
  );
}