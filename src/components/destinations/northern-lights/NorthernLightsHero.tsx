import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./NorthernLightsHero.module.css";

const NorthernLightsHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/northern-lights/Northern Lights Hero.png"
        alt="Northern Lights"
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
        <h1 className={styles.title}>Northern Lights</h1>
      </div>
    </section>
  );
};

export default NorthernLightsHero;