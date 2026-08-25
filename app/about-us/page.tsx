import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import FAQ from "@/components/about/FAQ";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import PopularDestinations from "@/components/home/PopularDestinations";

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
          <AboutStory />
          <WhyChooseUs />
          <PopularDestinations/>
          <FAQ />
    </>
  );
}