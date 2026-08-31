import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./GlacierHikeAdventureHero.module.css";

const GlacierHikeAdventureHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/glacier-hike-adventure/Glacier Hike Adventure Hero.png"
        alt="Glacier Hike Adventure"
        fill
        priority
        className={styles.heroImage}
        sizes="calc(100vw - 48px)"
      />

      <div className={styles.overlay} />

      <div className={styles.headerWrapper}>
        <Header />
      </div>

      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Glacier Hike Adventure</h1>
      </div>
    </section>
  );
};

export default GlacierHikeAdventureHero;