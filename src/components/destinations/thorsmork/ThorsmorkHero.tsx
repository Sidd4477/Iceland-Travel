import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./ThorsmorkHero.module.css";

const ThorsmorkHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/thorsmork/Thorsmork Hero.png"
        alt="Thorsmörk"
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
        <h1 className={styles.title}>Thorsmörk</h1>
      </div>
    </section>
  );
};

export default ThorsmorkHero;