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

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./GlacierHikeAdventureContent.module.css";

const GlacierHikeAdventureContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pricePerPerson = 80;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    const input = dateInputRef.current;

    if (!input) return;

    if (typeof input.showPicker === "function") {
      input.showPicker();
    } else {
      input.focus();
      input.click();
    }
  };

  const openTimePicker = () => {
    const input = timeInputRef.current;

    if (!input) return;

    if (typeof input.showPicker === "function") {
      input.showPicker();
    } else {
      input.focus();
      input.click();
    }
  };

  const [isGuestOpen, setIsGuestOpen] = useState(false);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  /* =====================================================
     HOME PAGE -> DESTINATION PAGE AUTOFILL

     Home Page se query params ke through jo values aati hain,
     unko isi destination ke booking form me automatically
     fill kiya jayega.

     Supported:
     - destination
     - date
     - time
     - adults
     - children
     - guests
  ===================================================== */

  useEffect(() => {
    const destination = searchParams.get("destination");

    const normalizedDestination =
      destination?.trim().toLowerCase();

    /*
      Home Page ka destination label:
      "Glacier Hike Adventure"

      Agar destination param kisi aur package ka hai,
      to is page par uska data apply nahi hoga.
    */
    if (
      destination &&
      normalizedDestination !== "glacier hike adventure"
    ) {
      return;
    }

    const queryDate = searchParams.get("date");
    const queryTime = searchParams.get("time");
    const queryAdults = searchParams.get("adults");
    const queryChildren = searchParams.get("children");
    const queryGuests = searchParams.get("guests");

    /* ===================================================
       DATE
    =================================================== */

    if (queryDate) {
      setDate(queryDate);
    }

    /* ===================================================
       TIME
    =================================================== */

    if (queryTime) {
      setTime(queryTime);
    }

    /* ===================================================
       ADULTS
    =================================================== */

    if (queryAdults !== null) {
      const parsedAdults = Number(queryAdults);

      if (
        Number.isFinite(parsedAdults) &&
        parsedAdults >= 1
      ) {
        setAdults(parsedAdults);
      }
    }

    /* ===================================================
       CHILDREN
    =================================================== */

    if (queryChildren !== null) {
      const parsedChildren = Number(queryChildren);

      if (
        Number.isFinite(parsedChildren) &&
        parsedChildren >= 0
      ) {
        setChildren(parsedChildren);
      }
    } else if (
      queryGuests !== null &&
      queryAdults === null
    ) {
      /*
        Fallback:
        Agar Home Page sirf guests bhej raha hai aur
        adults nahi bhej raha, to guests ko adults maana jayega.
      */

      const parsedGuests = Number(queryGuests);

      if (
        Number.isFinite(parsedGuests) &&
        parsedGuests >= 1
      ) {
        setAdults(parsedGuests);
        setChildren(0);
      }
    }
  }, [searchParams]);

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

  /* =====================================================
     BOOK NOW
  ===================================================== */

  const handleBookNow = () => {
    const params = new URLSearchParams();

    params.set("destination", "Glacier Hike Adventure");
    params.set("price", String(pricePerPerson));
    params.set("date", date);
    params.set("time", time);
    params.set("adults", String(adults));
    params.set("children", String(children));
    params.set("guests", String(totalGuests));
    params.set("total", String(totalPrice));

    params.set(
      "image",
      "/images/destinations/glacier-hike-adventure/Glacier Hike Adventure Trip 1.png"
    );

    router.push(`/booking?${params.toString()}`);
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

            {/* =========================================
                TRIP OVERVIEW
            ========================================= */}

            <div className={styles.overview}>

              <h2 className={styles.sectionTitle}>
                <span className={styles.titleIcon}>🧭</span>
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
                  priority
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />

              </div>

            </div>

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

                {/* =========================================
                    DURATION
                ========================================= */}

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

                {/* =========================================
                    VISITS
                ========================================= */}

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

                {/* =========================================
                    GROUP SIZE
                ========================================= */}

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

                {/* =========================================
                    PRICE
                ========================================= */}

                <div className={styles.tripDetailsRow}>

                  <div className={styles.tripDetailsLabel}>

                    <Tag />

                    <span>
                      Price:
                    </span>

                  </div>

                  <strong className={styles.priceValue}>

                    ${pricePerPerson}

                    <span>
                      /per person
                    </span>

                  </strong>

                </div>

                {/* =========================================
                    INCLUSIONS
                ========================================= */}

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

          {/* =========================================
              BOOKING FORM
          ========================================= */}

          <aside className={styles.detailsCard}>

            {/* PRICE */}

            <div className={styles.bookingPrice}>
              <strong>${pricePerPerson}</strong>
              <span>/per person</span>
            </div>

            {/* DIVIDER */}

            <div className={styles.divider} />

            {/* WHERE */}

            <div className={styles.formField}>

              <label className={styles.fieldLabel}>
                Where
              </label>

              <div className={styles.whereInput}>
                <span>
                  Glacier Hike Adventure
                </span>
              </div>

            </div>

            {/* DATE + TIME */}

            <div className={styles.dateTimeRow}>

              <div className={styles.halfField}>

                <label className={styles.fieldLabel}>
                  Date
                </label>

                <div className={styles.inputWrapper}>

                  <input
                    ref={dateInputRef}
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className={styles.input}
                    aria-label="Date"
                  />

                  <button
                    type="button"
                    className={styles.inputIconButton}
                    onClick={openDatePicker}
                    aria-label="Open date picker"
                  >
                    <CalendarDays className={styles.inputIcon} />
                  </button>

                </div>

              </div>

              <div className={styles.halfField}>

                <label className={styles.fieldLabel}>
                  Time
                </label>

                <div className={styles.inputWrapper}>

                  <input
                    ref={timeInputRef}
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className={styles.input}
                    aria-label="Time"
                  />

                  <button
                    type="button"
                    className={styles.inputIconButton}
                    onClick={openTimePicker}
                    aria-label="Open time picker"
                  >
                    <Clock3 className={styles.inputIcon} />
                  </button>

                </div>

              </div>

            </div>

            {/* GUEST */}

            <div className={styles.formField}>

              <label className={styles.fieldLabel}>
                Guest
              </label>

              <button
                type="button"
                className={styles.guestInput}
                onClick={() => setIsGuestOpen((current) => !current)}
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

              {/* GUEST DROPDOWN */}

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

            {/* TOTAL */}

            <div className={styles.totalRow}>

              <span>
                Total
              </span>

              <strong>
                ${totalPrice.toFixed(2)}
              </strong>

            </div>

            {/* BOOK NOW */}

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
