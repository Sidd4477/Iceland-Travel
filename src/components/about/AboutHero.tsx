"use client";

import Image from "next/image";

import styles from "./AboutHero.module.css";

const AboutHero = () => {
  return (
    <section className={styles.hero}>
      {/* =========================
          BACKGROUND VIDEO
      ========================= */}
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

      {/* =========================
          EXPORTED VIDEO WRAPPER
      ========================= */}
      <Image
        src="/images/videos/About us Video Wrapper.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.videoWrapper}
        aria-hidden="true"
      />

      {/* =========================
          DARK / CINEMATIC OVERLAY
      ========================= */}
      <div className={styles.overlay} />

      {/* =========================
          HERO CONTENT
      ========================= */}
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