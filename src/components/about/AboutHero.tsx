"use client";

import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/About%20us%20Video%20.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark / Cinematic Overlay */}
      <div className={styles.overlay} />

      {/* Hero Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>About our Enthusiasm</h1>

        <p className={styles.description}>
          Curated journeys designed to be felt, not rushed.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;