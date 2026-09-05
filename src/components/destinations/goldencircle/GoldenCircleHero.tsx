import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./GoldenCircleHero.module.css";

const GoldenCircleHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/golden-circle/Golden Circle Hero v1.png"
        alt="Golden Circle"
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
        <h1 className={styles.title}>Golden Circle</h1>
      </div>
    </section>
  );
};

export default GoldenCircleHero;