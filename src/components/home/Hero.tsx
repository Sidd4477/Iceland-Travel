"use client";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/Hero Section Video .mp4" type="video/mp4" />
      </video>

      {/* Video Overlay */}
      <div className={styles.overlay} />

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Explore the sights of
          <br />
          Iceland
        </h1>

        <p className={styles.description}>
          Welcome to tourist attractions in Iceland, your ultimate guide to
          exploring the breathtaking sights and
          <br />
          experiences this beautiful country has to offer. Trust us to make
          your trip unforgettable.
        </p>

        {/* Search Box */}
        <div className={styles.searchBox}>
          <div className={styles.searchField}>
            <span className={styles.fieldLabel}>Where</span>
            <span className={styles.fieldValue}>Search destinations</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <span className={styles.fieldLabel}>When</span>
            <span className={styles.fieldValue}>Add dates</span>
          </div>

          <div className={styles.divider} />

          <div className={styles.searchField}>
            <span className={styles.fieldLabel}>Who</span>
            <span className={styles.fieldValue}>Add guests</span>
          </div>

          <button
            type="button"
            className={styles.searchButton}
            aria-label="Search"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="white"
                strokeWidth="1.8"
              />
              <path
                d="M16 16L21 21"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;