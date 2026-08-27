import Image from "next/image";

import {
  ArrowUpRight,
  CarFront,
  CircleAlert,
  Clock3,
  Tag,
  Users,
} from "lucide-react";

import styles from "./ThorsmorkContent.module.css";

const ThorsmorkContent = () => {
  return (
    <section className={styles.section}>

      {/* =========================================
          STICKY AREA
      ========================================= */}

      <div className={styles.stickyArea}>

        {/* =========================================
            MAIN LAYOUT
        ========================================= */}

        <div className={styles.layout}>

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className={styles.mainContent}>

            {/* =========================================
                TRIP OVERVIEW
            ========================================= */}

            <div className={styles.overview}>

              <h2 className={styles.sectionTitle}>
                <span className={styles.titleIcon}>
                  🧭
                </span>

                Trip Overview
              </h2>

              <div className={styles.description}>

                <p>
                  The Þórsmörk (Thorsmörk) Valley is one of Iceland’s most
                  breathtaking natural landscapes, surrounded by rugged
                  mountains, glaciers, lush valleys, and winding rivers.
                  Tucked between glaciers and shaped by centuries of volcanic
                  activity, the region offers a remarkable combination of
                  dramatic scenery and untouched wilderness.
                </p>

                <p>
                  Explore scenic hiking trails through moss-covered valleys,
                  cross glacial rivers, and discover stunning viewpoints
                  beneath the surrounding peaks. Þórsmörk is a destination
                  for those seeking adventure, tranquility, and an
                  unforgettable experience in the heart of Iceland’s wild
                  nature.
                </p>

              </div>

              {/* =========================================
                  OVERVIEW IMAGE
              ========================================= */}

              <div className={styles.overviewImage}>

                <Image
                  src="/images/destinations/thorsmork/Thorsmork Trip 1.png"
                  alt="Thorsmörk Valley"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />

              </div>

            </div>

          </div>


          {/* =========================================
              TRIP DETAILS
          ========================================= */}

          <aside className={styles.detailsCard}>

            <h3 className={styles.detailsTitle}>
              Trip Details
            </h3>

            <div className={styles.divider} />

            <div className={styles.detailList}>

              {/* DURATION */}

              <div className={styles.detailRow}>

                <div className={styles.detailLabel}>

                  <Clock3
                    className={styles.detailIcon}
                  />

                  <span>
                    Duration:
                  </span>

                </div>

                <strong>
                  1 Complete Day
                </strong>

              </div>


              {/* VISITS */}

              <div className={styles.detailRow}>

                <div className={styles.detailLabel}>

                  <CarFront
                    className={styles.detailIcon}
                  />

                  <span>
                    Visits:
                  </span>

                </div>

                <strong>
                  All Days
                </strong>

              </div>


              {/* GROUP SIZE */}

              <div className={styles.detailRow}>

                <div className={styles.detailLabel}>

                  <Users
                    className={styles.detailIcon}
                  />

                  <span>
                    Group Size:
                  </span>

                </div>

                <strong>
                  10 Travellers
                </strong>

              </div>


              {/* PRICE */}

              <div className={styles.detailRow}>

                <div className={styles.detailLabel}>

                  <Tag
                    className={styles.detailIcon}
                  />

                  <span>
                    Price:
                  </span>

                </div>

                <strong>
                  $100

                  <small>
                    /per person
                  </small>

                </strong>

              </div>


              {/* INCLUSIONS */}

              <div className={styles.detailRow}>

                <div className={styles.detailLabel}>

                  <CircleAlert
                    className={styles.detailIcon}
                  />

                  <span>
                    Inclusions:
                  </span>

                </div>

                <strong>

                  Transportation, Tours,

                  <br />

                  Professional Guides

                </strong>

              </div>

            </div>


            {/* =========================================
                BOOK BUTTON
            ========================================= */}

            <button
              type="button"
              className={styles.bookButton}
            >

              <span>
                Book a Trip Now
              </span>

              <span className={styles.arrowCircle}>

                <ArrowUpRight
                  size={24}
                  strokeWidth={1.7}
                />

              </span>

            </button>

          </aside>


          {/* =========================================
              TRIP HIGHLIGHTS
          ========================================= */}

          <div className={styles.highlights}>

            <h2 className={styles.sectionTitle}>

              <span className={styles.titleIcon}>
                ✨
              </span>

              Trip Highlights

            </h2>


            <div className={styles.highlightList}>

              <p>
                🏔️ Explore the dramatic mountains and valleys of Þórsmörk
              </p>

              <p>
                🥾 Wander through lush, moss-covered landscapes and scenic trails
              </p>

              <p>
                🧊 Discover breathtaking views of surrounding glaciers
              </p>

              <p>
                🌿 Experience unforgettable hiking routes through Icelandic wilderness
              </p>

              <p>
                📸 Capture stunning mountain, valley, and river landscapes
              </p>

              <p>
                🌊 Cross glacial rivers and immerse yourself in Þórsmörk’s untouched beauty
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          HIGHLIGHT GALLERY
      ========================================= */}

      <div className={styles.highlightGallery}>

        {/* =========================================
            TRIP 2
        ========================================= */}

        <div className={styles.highlightImage}>

          <Image
            src="/images/destinations/thorsmork/Thorsmork Trip 2.png"
            alt="Thorsmörk Iceland landscape"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>


        {/* =========================================
            TRIP 3
        ========================================= */}

        <div className={styles.highlightImage}>

          <Image
            src="/images/destinations/thorsmork/Thorsmork Trip 3.png"
            alt="Thorsmörk mountains and valleys"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>

      </div>

    </section>
  );
};

export default ThorsmorkContent;