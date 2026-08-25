"use client";

import Image from "next/image";
import styles from "./GalleryPreview.module.css";

const galleryImages = [
  {
    src: "/images/gallery/Men And Women With One Leg In The Air.png",
    alt: "Men and women exploring Iceland",
  },
  {
    src: "/images/gallery/Mens And Womens With Red Cup.png",
    alt: "Travelers enjoying Iceland",
  },
  {
    src: "/images/gallery/Mens and Womens.png",
    alt: "Travelers in Iceland",
  },
  {
    src: "/images/gallery/Menwith Car.png",
    alt: "Travelers with car in Iceland",
  },
  {
    src: "/images/gallery/Red Cap Man.png",
    alt: "Traveler in Iceland",
  },
  {
    src: "/images/gallery/Womens With Blue Cap.png",
    alt: "Woman exploring Iceland",
  },
];

const GalleryPreview = () => {
  return (
    <section className={styles.section}>
      {/* =========================================
          HEADING
      ========================================= */}

      <div className={styles.headingWrapper}>
        <p className={styles.eyebrow}>Gallery</p>

        <h2 className={styles.title}>
          Capture Iceland’s natural beauty
        </h2>
      </div>

      {/* =========================================
          GALLERY VIEWPORT
      ========================================= */}

      <div className={styles.galleryViewport}>
        <div className={styles.galleryTrack}>
          {/* =========================================
              FIRST IMAGE SET
          ========================================= */}

          <div className={styles.galleryGroup}>
            {galleryImages.map((image, index) => (
              <div
                className={styles.imageCard}
                key={`first-${index}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={368}
                  height={368}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>

          {/* =========================================
              DUPLICATE IMAGE SET
              FOR SEAMLESS INFINITE MOVEMENT
          ========================================= */}

          <div className={styles.galleryGroup} aria-hidden="true">
            {galleryImages.map((image, index) => (
              <div
                className={styles.imageCard}
                key={`second-${index}`}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={368}
                  height={368}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;