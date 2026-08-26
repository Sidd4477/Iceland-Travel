"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./DiscoverIceland.module.css";

const DiscoverIceland = () => {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <Image
          src="/images/backgrounds/Ready To Discover Banner.png"
          alt="Ready to discover Iceland"
          fill
          priority
          sizes="100vw"
          className={styles.bannerImage}
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          {/* =========================================
              MAIN HEADING
          ========================================= */}
          <h2 className={styles.heading}>
            Ready to Discover
            <br />
            Iceland
          </h2>

          {/* =========================================
              SCRIPT HEADING
          ========================================= */}
          <p className={styles.scriptText}>like never before?</p>

          {/* =========================================
              BUTTON
          ========================================= */}
          <Link href="/packages" className={styles.button}>
            <span className={styles.buttonText}>
              Explore our Packages
            </span>

            <span className={styles.buttonCircle}>
              <span className={styles.arrow}>↗</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiscoverIceland;