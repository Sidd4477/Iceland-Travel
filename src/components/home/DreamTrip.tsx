"use client";

import Image from "next/image";
import { Parisienne } from "next/font/google";
import styles from "./DreamTrip.module.css";

const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
});

const DreamTripBanner = () => {
  return (
    <section className={`${styles.section} ${parisienne.variable}`}>
      <div className={styles.banner}>
        <Image
          src="/images/backgrounds/Dream Trip Banner.png"
          alt="Dream Trip"
          fill
          priority
          className={styles.backgroundImage}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <h2 className={styles.title}>
            Let’s make your
            <br />
            <span className={styles.dreamTrip}>Dream Trip</span>
            <span className={styles.titleRegular}>, a reality</span>
          </h2>

          <p className={styles.description}>
            Exclusive deals, handpicked destinations and
            <br />
            unforgettable experiences.
          </p>

          <button type="button" className={styles.exploreButton}>
            Explore Plans
          </button>
        </div>
      </div>
    </section>
  );
};

export default DreamTripBanner;