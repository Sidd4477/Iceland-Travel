import Image from "next/image";
import Header from "../../layout/Header";

import styles from "./BlueLagoonSpaExperienceHero.module.css";

const BlueLagoonSpaExperienceHero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/destinations/blue-lagoon-spa-experience/Blue Lagoon Spa Experience Hero.png"
        alt="Blue Lagoon Spa Experience"
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
        <h1 className={styles.title}>Blue Lagoon Spa Experience</h1>
      </div>
    </section>
  );
};

export default BlueLagoonSpaExperienceHero;