import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./LandmannalaugarHero.module.css";

const LandmannalaugarHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/landmannalaugar/Landmannalaugar Hero.png"
        alt="Landmannalaugar"
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
        <h1 className={styles.title}>Landmannalaugar</h1>
      </div>
    </section>
  );
};

export default LandmannalaugarHero;