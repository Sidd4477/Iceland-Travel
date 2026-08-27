import Image from "next/image";

import {
  ArrowUpRight,
  CarFront,
  CircleAlert,
  Clock3,
  Tag,
  Users,
} from "lucide-react";

import styles from "./GoldenCircleContent.module.css";

const GoldenCircleContent = () => {
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
                  The Golden Circle is one of Iceland’s most iconic routes,
                  bringing together some of the country’s most spectacular
                  natural wonders in a single journey. From powerful
                  waterfalls and steaming geothermal landscapes to dramatic
                  volcanic scenery, the route offers an unforgettable glimpse
                  into Iceland’s raw and diverse beauty.
                </p>


                <p>
                  Discover the mighty Gullfoss waterfall, witness the powerful
                  eruptions of Geysir’s geothermal area, and explore
                  Þingvellir National Park, where history, geology, and
                  breathtaking landscapes come together. The Golden Circle is a
                  perfect introduction to Iceland—compact, captivating, and
                  filled with remarkable experiences at every stop.
                </p>

              </div>


              {/* =========================================
                  OVERVIEW IMAGE
              ========================================= */}

              <div className={styles.overviewImage}>

                <Image
                  src="/images/destinations/golden-circle/Golden Circle Trip 1.png"
                  alt="Golden Circle Iceland"
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
                💦 Witness the powerful beauty of Gullfoss Waterfall
              </p>


              <p>
                🌋 Experience the erupting geothermal activity at Geysir
              </p>


              <p>
                🏔️ Explore Iceland’s volcanic landscapes and geothermal wonders
              </p>


              <p>
                🏞️ Discover the dramatic scenery of Þingvellir National Park
              </p>


              <p>
                📸 Enjoy breathtaking viewpoints and memorable photo stops
              </p>


              <p>
                🍀 Experience Iceland’s nature, history, and unique geological heritage
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
            src="/images/destinations/golden-circle/Golden Circle Trip 2.png"
            alt="Golden Circle Iceland landscape"
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
            src="/images/destinations/golden-circle/Golden Circle Trip 3.png"
            alt="Golden Circle Iceland geothermal landscape"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>

      </div>

    </section>
  );
};


export default GoldenCircleContent;