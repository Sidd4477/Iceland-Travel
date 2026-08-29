import Image from "next/image";

import Header from "@/components/layout/Header";

import styles from "./PackagesHero.module.css";

const PackagesHero = () => {
  return (
    <section className={styles.hero}>
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}
      <Image
        src="/images/packages/Packages Hero v2.png"
        alt="Iceland tour packages"
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      {/* =====================================================
          DARK / CINEMATIC OVERLAY
      ===================================================== */}
      <div className={styles.overlay} />

      {/* =====================================================
          HEADER
      ===================================================== */}
      <div className={styles.headerWrapper}>
        <Header />
      </div>

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}
      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>
          Tour Packages
        </span>

        <h1 className={styles.title}>
          Our Exclusive Tour Packages
        </h1>
      </div>
    </section>
  );
};

export default PackagesHero;