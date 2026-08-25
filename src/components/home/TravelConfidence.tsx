"use client";

import Image from "next/image";
import {
  Flower2,
  CarFront,
  Handshake,
  HeartHandshake,
} from "lucide-react";

import styles from "./TravelConfidence.module.css";

const experiences = [
  {
    title: "Authentic Experiences",
    description:
      "Welcome to tourist attractions in Iceland, your ultimate",
    icon: Flower2,
  },
  {
    title: "Luxury Travel",
    description:
      "Mercedes Benz Sprinter 4x4 specially for Icelandic touring.",
    icon: CarFront,
  },
  {
    title: "Trusted Partnerships",
    description:
      "Welcome to tourist attractions in Iceland, your ultimate",
    icon: Handshake,
  },
  {
    title: "Cultural Immersion",
    description:
      "Welcome to tourist attractions in Iceland, your ultimate",
    icon: HeartHandshake,
  },
];

const TravelConfidence = () => {
  return (
    <section className={styles.section}>
      {/* =========================================
          BANNER WRAPPER
          FIGMA: 1440px × 818px
      ========================================= */}

      <div className={styles.bannerWrapper}>
        {/* =========================================
            BANNER
            FIGMA: 1440px × 818px
        ========================================= */}

        <div className={styles.banner}>
          {/* =========================================
              BANNER BACKGROUND
          ========================================= */}

          <Image
            src="/images/experiences/Book With Confidence Banner.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className={styles.bannerImage}
          />

          {/* =========================================
              BANNER WRAPPER IMAGE
              SAME SIZE AS BANNER
              1440px × 818px
          ========================================= */}

          <Image
            src="/images/experiences/Book With Confidence Wrapper.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className={styles.wrapperImage}
          />

          {/* =========================================
              CONTENT
          ========================================= */}

          <div className={styles.content}>
            {/* =========================================
                HEADING
            ========================================= */}

            <div className={styles.headingWrapper}>
              <p className={styles.eyebrow}>
                Why Travel With Us
              </p>

              <h2 className={styles.heading}>
                Book with Confidence - Travel
                <br />
                with the Peace of Mind
              </h2>
            </div>

            {/* =========================================
                MAIN CONTENT
            ========================================= */}

            <div className={styles.mainContent}>
              {/* =========================================
                  VAN IMAGE
                  526px × 452px
              ========================================= */}

              <div className={styles.vanWrapper}>
                <Image
                  src="/images/experiences/Black van.png"
                  alt="Luxury travel van"
                  fill
                  unoptimized
                  sizes="526px"
                  className={styles.vanImage}
                />
              </div>

              {/* =========================================
                  BLUR IMAGE CARD
                  526px × 452px
              ========================================= */}

              <div className={styles.experienceCard}>
                <Image
                  src="/images/experiences/Blur Image On The Banner.png"
                  alt=""
                  fill
                  unoptimized
                  sizes="526px"
                  className={styles.blurImage}
                />

                <div className={styles.cardOverlay} />

                <div className={styles.experienceList}>
                  {experiences.map((experience, index) => {
                    const Icon = experience.icon;

                    return (
                      <div
                        key={experience.title}
                        className={`${styles.experienceItem} ${
                          index !== experiences.length - 1
                            ? styles.withBorder
                            : ""
                        }`}
                      >
                        {/* =========================================
                            ICON
                            32px × 32px
                        ========================================= */}

                        <div className={styles.iconWrapper}>
                          <Icon
                            className={styles.experienceIcon}
                          />
                        </div>

                        {/* =========================================
                            TEXT
                        ========================================= */}

                        <div className={styles.experienceContent}>
                          <h3 className={styles.experienceTitle}>
                            {experience.title}
                          </h3>

                          <p className={styles.experienceDescription}>
                            {experience.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelConfidence;