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

import styles from "./SnaefellsnesContent.module.css";

const SnaefellsnesContent = () => {
  const pricePerPerson = 100;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const totalGuests = adults + children;
  const totalPrice = totalGuests * pricePerPerson;

  const decreaseAdults = () => {
    setAdults((current) => Math.max(1, current - 1));
  };

  const increaseAdults = () => {
    setAdults((current) => current + 1);
  };

  const decreaseChildren = () => {
    setChildren((current) => Math.max(0, current - 1));
  };

  const increaseChildren = () => {
    setChildren((current) => current + 1);
  };

  return (
    <section className={styles.section}>

      {/* =========================================
          STICKY AREA
      ========================================= */}

      <div className={styles.stickyArea}>

        <div className={styles.layout}>

          {/* =========================================
              LEFT CONTENT
          ========================================= */}

          <div className={styles.mainContent}>

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
                  priority
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />

              </div>

            </div>

          </div>


          {/* =========================================
              BOOKING FORM CARD
          ========================================= */}

          <aside className={styles.detailsCard}>

            {/* =========================================
                PRICE
            ========================================= */}

            <div className={styles.bookingPrice}>

              <strong>
                ${pricePerPerson}
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
                  Snaefellsnes
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
                    value={date}
                    onChange={(event) =>
                      setDate(event.target.value)
                    }
                    className={styles.input}
                    aria-label="Date"
                  />

                  <CalendarDays
                    className={styles.inputIcon}
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
                    value={time}
                    onChange={(event) =>
                      setTime(event.target.value)
                    }
                    className={styles.input}
                    aria-label="Time"
                  />

                  <Clock3
                    className={styles.inputIcon}
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
                onClick={() =>
                  setIsGuestOpen((current) => !current)
                }
                aria-expanded={isGuestOpen}
                aria-haspopup="dialog"
              >

                <span>
                  {totalGuests}
                </span>

                <ChevronDown
                  className={
                    isGuestOpen
                      ? styles.chevronOpen
                      : undefined
                  }
                />

              </button>


              {/* =========================================
                  GUEST DROPDOWN
              ========================================= */}

              {isGuestOpen && (

                <div className={styles.guestDropdown}>

                  {/* ADULTS */}

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
                        onClick={decreaseAdults}
                        aria-label="Decrease adults"
                      >
                        <Minus size={12} />
                      </button>


                      <span className={styles.counterValue}>
                        {adults}
                      </span>


                      <button
                        type="button"
                        className={styles.counterButton}
                        onClick={increaseAdults}
                        aria-label="Increase adults"
                      >
                        <Plus size={12} />
                      </button>

                    </div>

                  </div>


                  {/* CHILDREN */}

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
                        onClick={decreaseChildren}
                        aria-label="Decrease children"
                      >
                        <Minus size={12} />
                      </button>


                      <span className={styles.counterValue}>
                        {children}
                      </span>


                      <button
                        type="button"
                        className={styles.counterButton}
                        onClick={increaseChildren}
                        aria-label="Increase children"
                      >
                        <Plus size={12} />
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

              Trip Details

            </h2>


            <div className={styles.tripDetailsList}>

              {/* DURATION */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <Clock3 />

                  <span>
                    Duration:
                  </span>

                </div>


                <strong>
                  1 Complete Day
                </strong>

              </div>


              {/* VISITS */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <CarFront />

                  <span>
                    Visits:
                  </span>

                </div>


                <strong>
                  All Days
                </strong>

              </div>


              {/* GROUP SIZE */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <Users />

                  <span>
                    Group Size:
                  </span>

                </div>


                <strong>
                  10 Travellers
                </strong>

              </div>


              {/* PRICE */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <Tag />

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


              {/* INCLUSIONS */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>

                  <CircleAlert />

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
            src="/images/destinations/snaefellsnes/Snaefellsnes%20Trip%202.png"
            alt="Kirkjufell Mountain and Snaefellsnes landscape"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />

        </div>


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