"use client";

import Image from "next/image";

import {
  CalendarDays,
  CarFront,
  ChevronDown,
  CircleAlert,
  Clock3,
  Minus,
  Plus,
  Tag,
  Users,
} from "lucide-react";

import { useState } from "react";

import styles from "./SouthCoastContent.module.css";

const SouthCoastContent = () => {
  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const [adults, setAdults] = useState(3);
  const [children, setChildren] = useState(0);

  const pricePerPerson = 100;

  const totalGuests = adults + children;

  const totalPrice = totalGuests * pricePerPerson;

  return (
    <section className={styles.section}>

      {/* =========================================
          STICKY AREA
          DETAILS CARD WILL STAY STICKY
          UNTIL HIGHLIGHT IMAGES START
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
                  The South Coast of Iceland is a spectacular journey through
                  some of the country’s most iconic landscapes, where dramatic
                  waterfalls, black-sand beaches, glaciers, and rugged
                  coastlines come together. From powerful waterfalls to
                  sweeping views of the Atlantic, the region offers an
                  unforgettable glimpse into Iceland’s raw and diverse beauty.
                </p>


                <p>
                  Explore the majestic Skógafoss and Seljalandsfoss waterfalls,
                  walk along the striking Reynisfjara black-sand beach, and
                  admire the glaciers and volcanic landscapes along the way.
                  The South Coast is a perfect choice for travellers seeking
                  breathtaking scenery, adventure, and unforgettable moments
                  in Iceland.
                </p>

              </div>


              {/* =========================================
                  OVERVIEW IMAGE
              ========================================= */}

              <div className={styles.overviewImage}>

                <Image
                  src="/images/destinations/south-coast/South Coast Trip 1.png"
                  alt="South Coast Iceland landscape"
                  fill
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />

              </div>

            </div>

          </div>


          {/* =========================================
              BOOKING FORM
          ========================================= */}

          <aside className={styles.detailsCard}>

            {/* =========================================
                PRICE
            ========================================= */}

            <div className={styles.bookingPrice}>

              <strong>
                $100
              </strong>

              <span>
                /per person
              </span>

            </div>


            {/* =========================================
                DIVIDER
            ========================================= */}

            <div className={styles.divider} />


            {/* =========================================
                WHERE
            ========================================= */}

            <div className={styles.formField}>

              <label className={styles.fieldLabel}>
                Where
              </label>


              <div className={styles.whereInput}>

                <span>
                  South Coast
                </span>

              </div>

            </div>


            {/* =========================================
                DATE + TIME
            ========================================= */}

            <div className={styles.dateTimeRow}>

              {/* DATE */}

              <div className={styles.halfField}>

                <label className={styles.fieldLabel}>
                  Date
                </label>


                <div className={styles.inputWrapper}>

                  <input
                    type="date"
                    className={styles.input}
                    aria-label="Date"
                  />

                  <CalendarDays
                    className={styles.inputIcon}
                    size={16}
                    strokeWidth={1.5}
                  />

                </div>

              </div>


              {/* TIME */}

              <div className={styles.halfField}>

                <label className={styles.fieldLabel}>
                  Time
                </label>


                <div className={styles.inputWrapper}>

                  <input
                    type="time"
                    className={styles.input}
                    aria-label="Time"
                  />

                  <Clock3
                    className={styles.inputIcon}
                    size={16}
                    strokeWidth={1.5}
                  />

                </div>

              </div>

            </div>


            {/* =========================================
                GUEST
            ========================================= */}

            <div className={styles.formField}>

              <label className={styles.fieldLabel}>
                Guest
              </label>


              <button
                type="button"
                className={styles.guestInput}
                onClick={() => setIsGuestOpen((prev) => !prev)}
              >

                <span>
                  {totalGuests}
                </span>


                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className={
                    isGuestOpen
                      ? styles.chevronOpen
                      : ""
                  }
                />

              </button>


              {/* =========================================
                  GUEST DROPDOWN
              ========================================= */}

              {isGuestOpen && (

                <div className={styles.guestDropdown}>

                  {/* =====================================
                      ADULTS
                  ===================================== */}

                  <div className={styles.guestRow}>

                    <div className={styles.guestInfo}>

                      <span className={styles.guestTitle}>
                        Adults
                      </span>

                      <span className={styles.guestSubtitle}>
                        Ages 13 or above
                      </span>

                    </div>


                    <div className={styles.counter}>

                      <button
                        type="button"
                        className={styles.counterButton}
                        onClick={() =>
                          setAdults((value) =>
                            Math.max(1, value - 1)
                          )
                        }
                        aria-label="Decrease adults"
                      >

                        <Minus
                          size={12}
                          strokeWidth={1.8}
                        />

                      </button>


                      <span className={styles.counterValue}>
                        {adults}
                      </span>


                      <button
                        type="button"
                        className={styles.counterButton}
                        onClick={() =>
                          setAdults((value) => value + 1)
                        }
                        aria-label="Increase adults"
                      >

                        <Plus
                          size={12}
                          strokeWidth={1.8}
                        />

                      </button>

                    </div>

                  </div>


                  {/* =====================================
                      CHILDREN
                  ===================================== */}

                  <div className={styles.guestRow}>

                    <div className={styles.guestInfo}>

                      <span className={styles.guestTitle}>
                        Children
                      </span>

                      <span className={styles.guestSubtitle}>
                        Ages 2-12
                      </span>

                    </div>


                    <div className={styles.counter}>

                      <button
                        type="button"
                        className={styles.counterButton}
                        onClick={() =>
                          setChildren((value) =>
                            Math.max(0, value - 1)
                          )
                        }
                        aria-label="Decrease children"
                      >

                        <Minus
                          size={12}
                          strokeWidth={1.8}
                        />

                      </button>


                      <span className={styles.counterValue}>
                        {children}
                      </span>


                      <button
                        type="button"
                        className={styles.counterButton}
                        onClick={() =>
                          setChildren((value) => value + 1)
                        }
                        aria-label="Increase children"
                      >

                        <Plus
                          size={12}
                          strokeWidth={1.8}
                        />

                      </button>

                    </div>

                  </div>

                </div>

              )}

            </div>


            {/* =========================================
                TOTAL
            ========================================= */}

            <div className={styles.totalRow}>

              <span>
                Total
              </span>


              <strong>
                ${totalPrice.toFixed(2)}
              </strong>

            </div>


            {/* =========================================
                BOOK NOW
            ========================================= */}

            <button
              type="button"
              className={styles.bookButton}
            >

              <span>
                Book Now
              </span>

            </button>

          </aside>


          {/* =========================================
              TRIP DETAILS
          ========================================= */}

          <div className={styles.tripDetails}>

            <h2 className={styles.tripDetailsTitle}>

              <span className={styles.tripDetailsIcon}>
                ✨
              </span>

              <span>
                Trip Details
              </span>

            </h2>


            <div className={styles.tripDetailsList}>

              {/* =====================================
                  DURATION
              ===================================== */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <Clock3
                    size={20}
                    strokeWidth={1.5}
                  />

                  <span>
                    Duration:
                  </span>

                </div>


                <strong>
                  1 Complete Day
                </strong>

              </div>


              {/* =====================================
                  VISITS
              ===================================== */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <CarFront
                    size={20}
                    strokeWidth={1.5}
                  />

                  <span>
                    Visits:
                  </span>

                </div>


                <strong>
                  All Days
                </strong>

              </div>


              {/* =====================================
                  GROUP SIZE
              ===================================== */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <Users
                    size={20}
                    strokeWidth={1.5}
                  />

                  <span>
                    Group Size:
                  </span>

                </div>


                <strong>
                  10 Travellers
                </strong>

              </div>


              {/* =====================================
                  PRICE
              ===================================== */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <Tag
                    size={20}
                    strokeWidth={1.5}
                  />

                  <span>
                    Price:
                  </span>

                </div>


                <strong className={styles.priceValue}>
                  $100
                  <span>
                    /per person
                  </span>
                </strong>

              </div>


              {/* =====================================
                  INCLUSIONS
              ===================================== */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <CircleAlert
                    size={20}
                    strokeWidth={1.5}
                  />

                  <span>
                    Inclusions:
                  </span>

                </div>


                <strong className={styles.inclusionsValue}>
                  Transportation, Tours,
                  <br />
                  Professional Guides
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          HIGHLIGHT GALLERY
      ========================================= */}

      <div className={styles.highlightGallery}>

        <div className={styles.highlightImage}>

          <Image
            src="/images/destinations/south-coast/South Coast Trip 2.png"
            alt="South Coast Iceland coastline"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>


        <div className={styles.highlightImage}>

          <Image
            src="/images/destinations/south-coast/South Coast Trip 3.png"
            alt="South Coast Iceland landscape"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>

      </div>

    </section>
  );
};

export default SouthCoastContent;