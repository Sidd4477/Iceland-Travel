"use client";

import Image from "next/image";

import styles from "./ContactHero.module.css";

const ContactHero = () => {
  return (
    <section className={styles.hero}>
      {/* =========================
          HERO BACKGROUND IMAGE
      ========================= */}
      <Image
        src="/images/contactus/Contact us Hero.png"
        alt="Start Your Journey"
        fill
        priority
        className={styles.backgroundImage}
        sizes="100vw"
      />

      {/* =========================
          DARK / CINEMATIC OVERLAY
      ========================= */}
      <div className={styles.overlay} />

      {/* =========================
          HERO CONTENT
      ========================= */}
      <div className={styles.content}>
        <h1 className={styles.title}>Start Your Journey</h1>

        <p className={styles.description}>
          Tell us your destination &amp; we&apos;ll plan the rest.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;