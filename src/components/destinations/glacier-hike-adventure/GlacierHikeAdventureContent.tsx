import Image from "next/image";

import {
  ArrowUpRight,
  CarFront,
  CircleAlert,
  Clock3,
  Tag,
  Users,
} from "lucide-react";

import styles from "./GlacierHikeAdventureContent.module.css";

const GlacierHikeAdventureContent = () => {
  return (
    <section className={styles.section}>

      {/* =========================================
          STICKY AREA

          Trip Details card will remain sticky
          through Trip Highlights and will stop
          exactly before the highlight images.
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
                  Glacier hiking in Iceland is an exhilarating journey across
                  ancient ice, dramatic volcanic landscapes, and breathtaking
                  mountain scenery. Surrounded by towering glaciers and rugged
                  wilderness, the experience offers an unforgettable opportunity
                  to explore Iceland’s raw and ever-changing natural beauty.
                </p>


                <p>
                  Step onto the magnificent ice, discover fascinating crevasses
                  and ice formations, and take in sweeping views of Iceland’s
                  spectacular glacial landscapes. A glacier hiking adventure is
                  the perfect choice for travelers seeking thrilling exploration,
                  outdoor adventure, and unforgettable moments in the heart of
                  Iceland’s wilderness.
                </p>

              </div>


              {/* =========================================
                  OVERVIEW IMAGE
              ========================================= */}

              <div className={styles.overviewImage}>

                <Image
                  src="/images/destinations/glacier-hike-adventure/Glacier Hike Adventure Trip 1.png"
                  alt="Glacier Hike Adventure"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />

              </div>

            </div>

          </div>


          {/* =========================================
              TRIP DETAILS

              IMPORTANT:
              This is now a direct child of
              stickyArea, so it is NOT restricted
              to the Overview/Image layout.
          ========================================= */}

          <aside className={styles.detailsCard}>

            <h3 className={styles.detailsTitle}>
              Trip Details
            </h3>


            <div className={styles.divider} />


            <div className={styles.detailList}>

              {/* =========================================
                  DURATION
              ========================================= */}

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


              {/* =========================================
                  VISITS
              ========================================= */}

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


              {/* =========================================
                  GROUP SIZE
              ========================================= */}

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


              {/* =========================================
                  PRICE
              ========================================= */}

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
                  $80

                  <small>
                    /per person
                  </small>

                </strong>

              </div>


              {/* =========================================
                  INCLUSIONS
              ========================================= */}

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

              This is part of the sticky boundary.
              Therefore the Details Card remains
              sticky while this content is scrolling.
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
                🧊 Trek across Iceland’s breathtaking glaciers and ancient ice fields
              </p>


              <p>
                🥾 Experience an unforgettable guided glacier hiking adventure
              </p>


              <p>
                🏔️ Admire dramatic mountains, rugged valleys, and spectacular glacial landscapes
              </p>


              <p>
                ❄️ Discover fascinating ice formations, crevasses, and unique glacier features
              </p>


              <p>
                📸 Capture incredible moments surrounded by Iceland’s stunning frozen wilderness
              </p>


              <p>
                ⛰️ Immerse yourself in Iceland’s raw nature and thrilling outdoor adventure
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          HIGHLIGHT GALLERY

          Details Card sticky boundary ends here.

          Existing margin-top: 48px is preserved.
          Card will NOT overlap these images.
      ========================================= */}

      <div className={styles.highlightGallery}>

        {/* =========================================
            TRIP 2
        ========================================= */}

        <div className={styles.highlightImage}>

          <Image
            src="/images/destinations/glacier-hike-adventure/Glacier Hike Adventure Trip 2.png"
            alt="Glacier Hike Adventure mountain"
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
            src="/images/destinations/glacier-hike-adventure/Glacier Hike Adventure Trip 3.png"
            alt="Glacier Hike Adventure trekking"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>

      </div>

    </section>
  );
};


export default GlacierHikeAdventureContent;