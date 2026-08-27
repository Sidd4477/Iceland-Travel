import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./SnaefellsnesHero.module.css";

const SnaefellsnesHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/snaefellsnes/Snaefellsnes Hero.png"
        alt="Snaefellsnes"
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
        <h1 className={styles.title}>Snaefellsnes</h1>
      </div>
    </section>
  );
};

export default SnaefellsnesHero;