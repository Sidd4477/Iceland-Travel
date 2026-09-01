"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  Minus,
  Plus,
  CarFront,
  Users,
  Tag,
  CircleAlert,
  ChevronDown,
} from "lucide-react";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./GoldenCircleContent.module.css";

const GoldenCircleContent = () => {
  const router = useRouter();

  /* =====================================================
     PACKAGE PRICE
  ===================================================== */

  const pricePerPerson = 100;

  /* =====================================================
     DATE + TIME
  ===================================================== */

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  /* =====================================================
     DATE + TIME PICKER FUNCTIONS
  ===================================================== */

  const openDatePicker = () => {
    dateInputRef.current?.showPicker?.();
  };

  const openTimePicker = () => {
    timeInputRef.current?.showPicker?.();
  };

  /* =====================================================
     GUEST DROPDOWN
  ===================================================== */

  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  /* =====================================================
     CALCULATED VALUES
  ===================================================== */

  const totalGuests = adults + children;
  const totalPrice = totalGuests * pricePerPerson;

  /* =====================================================
     ADULT COUNTER
  ===================================================== */

  const decreaseAdults = () => {
    setAdults((current) => Math.max(1, current - 1));
  };

  const increaseAdults = () => {
    setAdults((current) => current + 1);
  };

  /* =====================================================
     CHILDREN COUNTER
  ===================================================== */

  const decreaseChildren = () => {
    setChildren((current) => Math.max(0, current - 1));
  };

  const increaseChildren = () => {
    setChildren((current) => current + 1);
  };

  /* =====================================================
     BOOK NOW
     PASS ALL SELECTED VALUES TO BOOKING PAGE
  ===================================================== */

  const handleBookNow = () => {
    const params = new URLSearchParams();

    /* ===================================================
       DESTINATION
    =================================================== */

    params.set(
      "destination",
      "Golden Circle"
    );

    /* ===================================================
       PRICE PER PERSON
    =================================================== */

    params.set(
      "price",
      String(pricePerPerson)
    );

    /* ===================================================
       SELECTED DATE
    =================================================== */

    params.set(
      "date",
      date
    );

    /* ===================================================
       SELECTED TIME
    =================================================== */

    params.set(
      "time",
      time
    );

    /* ===================================================
       GUEST DETAILS
    =================================================== */

    params.set(
      "adults",
      String(adults)
    );

    params.set(
      "children",
      String(children)
    );

    params.set(
      "guests",
      String(totalGuests)
    );

    /* ===================================================
       TOTAL PRICE
    =================================================== */

    params.set(
      "total",
      String(totalPrice)
    );

    /* ===================================================
       BOOKING IMAGE

       File:
       public/images/booking/golden-circle.png
    =================================================== */

    params.set(
      "image",
      "/images/booking/golden-circle.png"
    );

    /* ===================================================
       REDIRECT TO BOOKING PAGE
    =================================================== */

    router.push(
      `/booking?${params.toString()}`
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.stickyArea}>
        <div className={styles.layout}>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div className={styles.mainContent}>
            <div className={styles.overview}>

              {/* =================================================
                  TRIP OVERVIEW TITLE
              ================================================= */}

              <h2 className={styles.sectionTitle}>
                <span className={styles.titleIcon}>
                  🧭
                </span>

                Trip Overview
              </h2>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div className={styles.description}>
                <p>
                  This Golden Circle journey introduces you
                  to Iceland’s breathtaking night skies,
                  dramatic landscapes, and the magical
                  glow of the aurora. Designed for an
                  unforgettable experience, the trip
                  combines scenic surroundings with the
                  thrill of witnessing nature’s most
                  spectacular light show.
                </p>

                <p>
                  Discover the mighty Gullfoss waterfall,
                  witness the powerful eruptions of Geysir’s
                  geothermal area, and explore Þingvellir
                  National Park, where history, geology,
                  and breathtaking landscapes come together.
                  The Golden Circle is a perfect introduction
                  to Iceland—compact, captivating, and filled
                  with remarkable experiences at every stop.
                </p>
              </div>

              {/* =================================================
                  MAIN IMAGE
              ================================================= */}

              <div className={styles.overviewImage}>
                <Image
                  src="/images/destinations/golden-circle/Golden Circle Trip 1.png"
                  alt="Golden Circle experience"
                  fill
                  priority
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />
              </div>

            </div>
          </div>

          {/* =================================================
              BOOKING CARD
          ================================================= */}

          <aside className={styles.detailsCard}>

            {/* =================================================
                PRICE
            ================================================= */}

            <div className={styles.bookingPrice}>
              <strong>
                ${pricePerPerson}
              </strong>

              <span>
                /per person
              </span>
            </div>

            <div className={styles.divider} />

            {/* =================================================
                WHERE
            ================================================= */}

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Where
              </label>

              <div className={styles.whereInput}>
                <span>
                  Golden Circle
                </span>
              </div>
            </div>

            {/* =================================================
                DATE + TIME
            ================================================= */}

            <div className={styles.dateTimeRow}>

              {/* =================================================
                  DATE
              ================================================= */}

              <div className={styles.halfField}>
                <label className={styles.fieldLabel}>
                  Date
                </label>

                <div className={styles.inputWrapper}>

                  <input
                    ref={dateInputRef}
                    type="date"
                    value={date}
                    onChange={(event) =>
                      setDate(event.target.value)
                    }
                    className={styles.input}
                    aria-label="Date"
                  />

                  <button
                    type="button"
                    className={styles.inputIconButton}
                    onClick={openDatePicker}
                    aria-label="Open date picker"
                  >
                    <CalendarDays
                      className={styles.inputIcon}
                    />
                  </button>

                </div>
              </div>

              {/* =================================================
                  TIME
              ================================================= */}

              <div className={styles.halfField}>
                <label className={styles.fieldLabel}>
                  Time
                </label>

                <div className={styles.inputWrapper}>

                  <input
                    ref={timeInputRef}
                    type="time"
                    value={time}
                    onChange={(event) =>
                      setTime(event.target.value)
                    }
                    className={styles.input}
                    aria-label="Time"
                  />

                  <button
                    type="button"
                    className={styles.inputIconButton}
                    onClick={openTimePicker}
                    aria-label="Open time picker"
                  >
                    <Clock3
                      className={styles.inputIcon}
                    />
                  </button>

                </div>
              </div>

            </div>

            {/* =================================================
                GUEST
            ================================================= */}

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>
                Guest
              </label>

              <button
                type="button"
                className={styles.guestInput}
                onClick={() =>
                  setIsGuestOpen(
                    (current) => !current
                  )
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

              {/* =================================================
                  GUEST DROPDOWN
              ================================================= */}

              {isGuestOpen && (
                <div className={styles.guestDropdown}>

                  {/* =================================================
                      ADULTS
                  ================================================= */}

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

                  {/* =================================================
                      CHILDREN
                  ================================================= */}

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

            {/* =================================================
                TOTAL
            ================================================= */}

            <div className={styles.totalRow}>
              <span>
                Total
              </span>

              <strong>
                ${totalPrice.toFixed(2)}
              </strong>
            </div>

            {/* =================================================
                BOOK NOW
            ================================================= */}

            <button
              type="button"
              className={styles.bookButton}
              onClick={handleBookNow}
            >
              <span>
                Book Now
              </span>
            </button>

          </aside>

          {/* =================================================
              TRIP DETAILS
          ================================================= */}

          <div className={styles.tripDetails}>

            <h2 className={styles.tripDetailsTitle}>
              <span className={styles.tripDetailsIcon}>
                ✨
              </span>

              Trip Details
            </h2>

            <div className={styles.tripDetailsList}>

              {/* =================================================
                  DURATION
              ================================================= */}

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

              {/* =================================================
                  VISITS
              ================================================= */}

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

              {/* =================================================
                  GROUP SIZE
              ================================================= */}

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

              {/* =================================================
                  PRICE
              ================================================= */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>
                  <Tag />
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

              {/* =================================================
                  INCLUSIONS
              ================================================= */}

              <div className={styles.tripDetailsRow}>

                <div className={styles.tripDetailsLabel}>
                  <CircleAlert />
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
          </div>

        </div>
      </div>

      {/* =====================================================
          HIGHLIGHT GALLERY
      ===================================================== */}

      <div className={styles.highlightGallery}>

        <div className={styles.highlightImage}>
          <Image
            src="/images/destinations/golden-circle/Golden Circle Trip 2.png"
            alt="Golden Circle over Iceland mountains"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />
        </div>

        <div className={styles.highlightImage}>
          <Image
            src="/images/destinations/golden-circle/Golden Circle Trip 3.png"
            alt="Golden Circle over Iceland landscape"
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