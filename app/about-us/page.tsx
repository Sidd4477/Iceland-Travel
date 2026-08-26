import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import FAQ from "@/components/about/FAQ";
import TravelExperiences from "@/components/about/TravelExperiences";
import WhyChooseUs from "@/components/about/WhyChooseUs";

import styles from "../page.module.css";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutPage}>
      <div className={styles.heroStoryWrapper}>
        <AboutHero />
        <AboutStory />
      </div>

      <WhyChooseUs />
      <TravelExperiences />
      <FAQ />
    </main>
  );
}