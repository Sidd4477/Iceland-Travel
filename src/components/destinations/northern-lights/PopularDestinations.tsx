"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState } from "react";

import styles from "./PopularDestinations.module.css";

const destinations = [
  {
    id: 1,
    slug: "Northern Lights",
    title: "Aurora Borealis",
    subtitle: "Northern Lights",
    image: "/images/destinations/Aurora Borealis.png",
  },
  {
    id: 2,
    slug: "snaefellsnes",
    title: "Snaefellsnes",
    subtitle: "Iceland’s most stunning place",
    image: "/images/destinations/Snaefellsnes.png",
  },
  {
    id: 3,
    slug: "golden-circle",
    title: "Golden circle",
    subtitle: "For Wonderers",
    image: "/images/destinations/Golden circle v1.png",
  },
  {
    id: 4,
    slug: "thorsmork",
    title: "Thorsmörk",
    subtitle: "Nature excel here",
    image: "/images/destinations/Thorsmörk.png",
  },
  {
    id: 5,
    slug: "landmannalaugar",
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

  const pathname = usePathname();
  const router = useRouter();

  /* =========================================
     CURRENT DESTINATION
  ========================================= */

  const currentDestinationSlug = pathname
    ?.split("/")
    .filter(Boolean)
    .pop();

  /* =========================================
     FILTER CURRENT DESTINATION
  ========================================= */

  const otherDestinations = destinations.filter(
    (destination) =>
      destination.slug !== currentDestinationSlug
  );

  /* =========================================
     VIEW ALL DESTINATIONS
  ========================================= */

  const handleViewAllDestinations = () => {
    router.push("/destinations");
  };

  /* =========================================
     DESTINATION CARD REDIRECT
  ========================================= */

  const handleDestinationClick = (
    slug: string
  ) => {
    router.push(`/destinations/${slug}`);
  };

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

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!sliderRef.current) return;

    setIsDragging(true);

    dragStartX.current = event.clientX;
    scrollStart.current =
      sliderRef.current.scrollLeft;

    sliderRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!isDragging || !sliderRef.current) return;

    event.preventDefault();

    const distance =
      event.clientX - dragStartX.current;

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
            Other Destinations
          </p>

          <h2 className={styles.title}>
            Destinations Designed for
            <br />
            every Traveller Type
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
            onClick={handleViewAllDestinations}
          >
            <span>
              View all Destinations
            </span>

            <span className={styles.viewArrow}>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 16L14 2M6 2H14V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>


          {/* =========================================
              FIGMA DIVIDER
              48px × 0px
              0.5px BORDER
              -90° ROTATION
          ========================================= */}

          <div
            className={styles.headerDivider}
            aria-hidden="true"
          />


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
          CURRENT PAGE DESTINATION EXCLUDED
      ========================================= */}

      <div
        ref={sliderRef}
        id="destination-slider"
        className={`${styles.slider} ${
          isDragging ? styles.dragging : ""
        }`}
        role="region"
        aria-label="Other destinations"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >

        {otherDestinations.map(
          (destination) => (
            <article
              className={styles.card}
              key={destination.id}
              onClick={() =>
                handleDestinationClick(
                  destination.slug
                )
              }
              role="link"
              tabIndex={0}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" ||
                  event.key === " "
                ) {
                  event.preventDefault();

                  handleDestinationClick(
                    destination.slug
                  );
                }
              }}
            >

              <Image
                src={destination.image}
                alt={destination.title}
                fill
                sizes="372px"
                draggable={false}
                className={styles.cardImage}
              />


              <div
                className={styles.cardOverlay}
              />


              <div
                className={styles.cardContent}
              >

                <p
                  className={
                    styles.cardSubtitle
                  }
                >
                  {destination.subtitle}
                </p>


                <h3
                  className={styles.cardTitle}
                >
                  {destination.title}
                </h3>

              </div>

            </article>
          )
        )}

      </div>

    </section>
  );
};

export default PopularDestinations;