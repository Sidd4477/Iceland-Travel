import PackagesHero from "@/components/packages/PackagesHero";
import PackagesGrid from "@/components/packages/PackagesGrid";
import GalleryPreview from "@/components/home/GalleryPreview";

import styles from "../page.module.css";

export default function PackagesPage() {
  return (
    <main className={styles.packagesPage}>
      <div className={styles.heroPackagesWrapper}>
        <PackagesHero />
        <PackagesGrid />
      </div>

      <GalleryPreview />
    </main>
  );
}