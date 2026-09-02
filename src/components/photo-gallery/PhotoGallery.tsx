"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./PhotoGallery.module.css";

const galleryImages = [
  {
    src: "/images/photo-gallery/Photo Gallery 1.png",
    alt: "Iceland waterfall and mountain landscape",
    className: "imageOne",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 2.png",
    alt: "Iceland mountain hiking experience",
    className: "imageTwo",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 3.png",
    alt: "Iceland black sand beach",
    className: "imageThree",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 4.png",
    alt: "Iceland snowy mountain landscape",
    className: "imageFour",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 5.png",
    alt: "Iceland green waterfall landscape",
    className: "imageFive",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 6.png",
    alt: "Iceland volcanic crater lake",
    className: "imageSix",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 7.png",
    alt: "Iceland geothermal pool experience",
    className: "imageSeven",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 8.png",
    alt: "Iceland infinity pool and ocean",
    className: "imageEight",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 9.png",
    alt: "Iceland mountain valley landscape",
    className: "imageNine",
  },
  {
    src: "/images/photo-gallery/Photo Gallery 10.png",
    alt: "Iceland northern lights landscape",
    className: "imageTen",
  },
];

export default function PhotoGallery() {
  return (
    <main className={styles.page}>

      {/* =====================================================
          PHOTO GALLERY SECTION
      ===================================================== */}

      <section className={styles.section}>

        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <div className={styles.headingWrapper}>

          <p className={styles.eyebrow}>
            Our Story
          </p>

          <h1 className={styles.heading}>
            Photo Gallery
          </h1>

          <p className={styles.description}>
            Captured moments from Iceland that inspire and create
            unforgettable memories.
          </p>

        </div>


        {/* ===================================================
            PHOTO GALLERY
        =================================================== */}

        <div className={styles.gallery}>

          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`${styles.galleryItem} ${
                styles[
                  image.className as keyof typeof styles
                ]
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 2}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          ))}

        </div>

      </section>


      {/* =====================================================
          PLAN YOUR TRIP SECTION
      ===================================================== */}

      <section className={styles.planSection}>

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className={styles.planContent}>

          {/* PLAN NOW */}

          <p className={styles.planEyebrow}>
            Plan Now
          </p>


          {/* HEADING */}

          <h2 className={styles.planHeading}>
            Discover Your Perfect
            <br />
            Icelandic Adventure
          </h2>


          {/* DESCRIPTION */}

          <p className={styles.planDescription}>
            Plan your Iceland adventure in minutes and enjoy every
            breathtaking moment of your journey through the land of
            fire and ice.
          </p>


          {/* BUTTON */}

          <Link
            href="/packages"
            className={styles.planButton}
          >
            <span className={styles.planButtonText}>
              Plan your Trip
            </span>

            <span className={styles.planButtonCircle}>
              <svg
                className={styles.arrow}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M9 7H17V15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

        </div>


        {/* ===================================================
            RIGHT IMAGE
        =================================================== */}

        <div className={styles.planImageWrapper}>

          <Image
            src="/images/photo-gallery/Photo Gallery 11.png"
            alt="Icelandic geothermal crater landscape"
            fill
            priority
            sizes="598px"
            className={styles.planImage}
          />

        </div>

      </section>

    </main>
  );
}