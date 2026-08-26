"use client";

import Image from "next/image";

import styles from "./TravelServices.module.css";

const services = [
  {
    title: "Transportation Services",
    description:
      "Transportation services provide efficient and convenient means of travel, ensuring smooth and comfortable journeys from one destination to another. From airport transfers and private vehicles to guided tours and group transportation, we offer reliable options tailored to your itinerary. Our services are designed to make every journey safe, timely, comfortable, and completely hassle-free.",
    image: "/images/Services/Service Card 1.png",
    icon: "/icons/CarIcon.png",
  },
  {
    title: "Adventure Activities",
    description:
      "Adventure activities are thrilling and exhilarating experiences that take you beyond the ordinary and allow you to discover Iceland in an exciting new way. Designed for both adventure seekers and curious travelers, our experiences add an extra spark to your Icelandic journey.",
    image: "/images/Services/Service Card 2.png",
    icon: "/icons/Adventures Icon.png",
  },
  {
    title: "Professional Guides",
    description:
      "Professional guides provide knowledgeable and convenient means of travel, ensuring smooth and comfortable journeys from one destination to another. From airport transfers and private vehicles to guided tours and group transportation, we offer reliable options tailored to your itinerary. Our services are designed to make every journey safe, timely, comfortable, and completely hassle-free.",
    image: "/images/Services/Service Card 3.png",
    icon: "/icons/Guide Icon.png",
  },
];

const TravelServices = () => {
  return (
    <section className={styles.section}>
      {/* =========================================
          SECTION HEADING
      ========================================= */}

      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Our Services</p>

        <h2 className={styles.sectionTitle}>
          Travel Services Designed Around You
        </h2>
      </div>

      {/* =========================================
          SERVICE CARDS
      ========================================= */}

      <div className={styles.cardsWrapper}>
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`${styles.serviceCard} ${
              styles[`card${index + 1}`]
            }`}
          >
            {/* =====================================
                LEFT CONTENT
            ===================================== */}

            <div className={styles.cardContent}>
              {/* ICON */}

              <div className={styles.iconBox}>
                <Image
                  src={service.icon}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.serviceIcon}
                />
              </div>

              {/* TEXT */}

              <div className={styles.textBlock}>
                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>

                <p className={styles.cardDescription}>
                  {service.description}
                </p>
              </div>
            </div>

            {/* =====================================
                RIGHT IMAGE
            ===================================== */}

            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="573px"
                className={styles.cardImage}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TravelServices;