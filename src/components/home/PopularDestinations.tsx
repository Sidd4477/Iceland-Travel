"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./PopularDestinations.module.css";

const destinations = [
  {
    id: 1,
    title: "Aurora Borealis",
    subtitle: "Northern Lights",
    image: "/images/destinations/Aurora Borealis.png",
  },
  {
    id: 2,
    title: "Snaefellsnes",
    subtitle: "Northern Lights",
    image: "/images/destinations/Snaefellsnes.png",
  },
  {
    id: 3,
    title: "Golden circle",
    subtitle: "Northern Lights",
    image: "/images/destinations/Golden circle.png",
  },
  {
    id: 4,
    title: "Thorsmörk",
    subtitle: "Northern Lights",
    image: "/images/destinations/Thorsmörk.png",
  },
  {
    id: 5,
    title: "Landmannalaugar",
    subtitle: "Northern Lights",
    image: "/images/destinations/Landmannalaugar.png",
  },
];

const PopularDestinations = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const scrollStart = useRef(0);

  /* =========================================
     ARROW SLIDER
  ========================================= */

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -396,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 396,
      behavior: "smooth",
    });
  };

  /* =========================================
     MOUSE DRAG SLIDER
  ========================================= */

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    setIsDragging(true);

    dragStartX.current = event.clientX;
    scrollStart.current = sliderRef.current.scrollLeft;

    sliderRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;

    event.preventDefault();

    const distance = event.clientX - dragStartX.current;

    sliderRef.current.scrollLeft =
      scrollStart.current - distance;
  };

  const stopDragging = () => {
    if (!sliderRef.current) return;

    setIsDragging(false);

    sliderRef.current.style.scrollBehavior = "smooth";
  };

  return (
    <section className={styles.section}>
      {/* =========================================
          HEADER
      ========================================= */}

      <div className={styles.sectionHeader}>
        <div className={styles.headingWrapper}>
          <p className={styles.eyebrow}>
            Popular road routes in Iceland
          </p>

          <h2 className={styles.title}>
            Popular Destinations
          </h2>
        </div>

        {/* =========================================
            HEADER ACTIONS
        ========================================= */}

        <div className={styles.headerActions}>
          <button
            type="button"
            className={styles.viewButton}
            aria-label="View all destinations"
          >
            <span>View all Destinations</span>

            <span className={styles.viewArrow}>
              ↗
            </span>
          </button>

          <div className={styles.sliderButtons}>
            <button
              type="button"
              className={styles.sliderButton}
              onClick={scrollLeft}
              aria-label="Previous destinations"
            >
              <span className={styles.leftArrow}>
                ‹
              </span>
            </button>

            <button
              type="button"
              className={styles.sliderButton}
              onClick={scrollRight}
              aria-label="Next destinations"
            >
              <span className={styles.rightArrow}>
                ›
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          DESTINATION SLIDER
      ========================================= */}

      <div
        ref={sliderRef}
        id="destination-slider"
        className={`${styles.slider} ${
          isDragging ? styles.dragging : ""
        }`}
        role="region"
        aria-label="Popular destinations"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {destinations.map((destination) => (
          <article
            className={styles.card}
            key={destination.id}
          >
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              sizes="372px"
              draggable={false}
              className={styles.cardImage}
            />

            <div className={styles.cardOverlay} />

            <div className={styles.cardContent}>
              <p className={styles.cardSubtitle}>
                {destination.subtitle}
              </p>

              <h3 className={styles.cardTitle}>
                {destination.title}
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;