"use client";

import styles from "./DestinationsHero.module.css";

const DestinationsHero = () => {
  return (
    <section className={styles.hero}>
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/destination-section-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <h1 className={styles.heading}>
          Destinations Curated for you
        </h1>

        <p className={styles.description}>
          Discover Iceland&apos;s iconic landscapes, hidden gems, and
          unforgettable views — all in one remarkable day.
        </p>
      </div>
    </section>
  );
};

export default DestinationsHero;