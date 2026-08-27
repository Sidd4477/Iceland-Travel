import Image from "next/image";

import {
  ArrowUpRight,
  CarFront,
  CircleAlert,
  Clock3,
  Tag,
  Users,
} from "lucide-react";

import styles from "./LandmannalaugarContent.module.css";

const LandmannalaugarContent = () => {
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
                  The Landmannalaugar region is one of Iceland’s most
                  extraordinary highland destinations, known for its colorful
                  rhyolite mountains, vast lava fields, steaming geothermal
                  areas, and rugged wilderness. Surrounded by dramatic volcanic
                  landscapes, the journey offers a glimpse into a side of
                  Iceland that feels remote, untouched, and truly otherworldly.
                </p>


                <p>
                  Explore the vibrant rainbow-colored mountains, walk across
                  ancient lava fields, and experience the warmth of natural
                  geothermal hot springs surrounded by breathtaking scenery.
                  Landmannalaugar is a destination for those seeking adventure,
                  solitude, and an unforgettable connection with Iceland’s
                  highlands.
                </p>

              </div>


              {/* =========================================
                  OVERVIEW IMAGE
              ========================================= */}

              <div className={styles.overviewImage}>

                <Image
                  src="/images/destinations/landmannalaugar/Landmannalaugar Trip 1.png"
                  alt="Landmannalaugar Iceland landscape"
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
                🌈 Explore the vibrant, rainbow-colored mountains of Landmannalaugar
              </p>


              <p>
                🏔️ Discover dramatic lava fields and volcanic landscapes
              </p>


              <p>
                ♨️ Relax in natural geothermal hot springs surrounded by the highlands
              </p>


              <p>
                🥾 Experience scenic hiking trails through rugged Icelandic wilderness
              </p>


              <p>
                📸 Capture breathtaking mountain views and unique geological formations
              </p>


              <p>
                🌿 Immerse yourself in the remote beauty of Iceland’s highlands
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
            src="/images/destinations/landmannalaugar/Landmannalaugar Trip 2.png"
            alt="Landmannalaugar colorful mountains"
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
            src="/images/destinations/landmannalaugar/Landmannalaugar Trip 3.png"
            alt="Landmannalaugar Iceland highlands"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>

      </div>

    </section>
  );
};


export default LandmannalaugarContent;