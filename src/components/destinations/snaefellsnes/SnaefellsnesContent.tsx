import Image from "next/image";

import {
  ArrowUpRight,
  CarFront,
  CircleAlert,
  Clock3,
  Tag,
  Users,
} from "lucide-react";

import styles from "./SnaefellsnesContent.module.css";

const SnaefellsnesContent = () => {
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
                  The Snaefellsnes Peninsula is often called
                  “Iceland in miniature”—and for good reason.
                  In a single journey, you can experience dramatic
                  volcanic landscapes, rugged coastlines, black-sand
                  beaches, lava fields, waterfalls, and picturesque
                  fishing villages. At the heart of the peninsula
                  stands Snæfellsjökull, a glacier-capped volcano
                  overlooking the Atlantic.
                </p>


                <p>
                  From the iconic shape of Kirkjufell to the wild
                  cliffs of Arnarstapi and the peaceful charm of
                  Djúpalónssandur, Snaefellsnes offers a remarkable
                  variety of landscapes within a compact region.
                  It’s a destination where every turn reveals a new
                  view and every stop feels distinctly Icelandic.
                </p>

              </div>


              {/* =========================================
                  OVERVIEW IMAGE
              ========================================= */}

              <div className={styles.overviewImage}>

                <Image
                  src="/images/destinations/snaefellsnes/Snaefellsnes%20Trip%201.png"
                  alt="Snaefellsnes Iceland landscape"
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
              to the Overview/Image height.
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

                  $100

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
                🏔️ Admire the iconic Kirkjufell Mountain
              </p>


              <p>
                🌊 Explore dramatic cliffs and rugged Atlantic coastlines
              </p>


              <p>
                🚶 Walk along the striking Djúpalónssandur black-sand beach
              </p>


              <p>
                🗻 Discover volcanic landscapes, lava fields, and unique rock formations
              </p>


              <p>
                📸 Capture breathtaking views at Arnarstapi and scenic coastal stops
              </p>


              <p>
                🧊 Experience the majestic Snæfellsjökull glacier-capped volcano
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
            src="/images/destinations/snaefellsnes/Snaefellsnes%20Trip%202.png"
            alt="Kirkjufell Mountain and Snaefellsnes landscape"
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
            src="/images/destinations/snaefellsnes/Snaefellsnes%20Trip%203.png"
            alt="Snaefellsnes waterfall and mountain landscape"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>

      </div>

    </section>
  );
};


export default SnaefellsnesContent;