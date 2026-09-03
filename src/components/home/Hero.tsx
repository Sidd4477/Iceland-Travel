"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

import styles from "./Hero.module.css";

type ActivePopup =
  | "destination"
  | "date"
  | "guests"
  | null;

const destinations = [
  "Northern Lights",
  "Snaefellsnes",
  "Golden Circle",
  "Landmannalaugar",
  "South Coast",
  "Thorsmörk",
  "Blue Lagoon Spa",
  "Glacier Hike Adventure",
];

const destinationSlugs: Record<string, string> = {
  "Northern Lights": "northern-lights",
  Snaefellsnes: "snaefellsnes",
  "Golden Circle": "golden-circle",
  Landmannalaugar: "landmannalaugar",
  "South Coast": "south-coast",
  "Thorsmörk": "thorsmork",
  "Blue Lagoon Spa": "blue-lagoon-spa-experience",
  "Glacier Hike Adventure": "glacier-hike-adventure",
};

const Hero = () => {
  const router = useRouter();

  /* =========================================================
     POPUP STATE
  ========================================================= */

  const [activePopup, setActivePopup] =
    useState<ActivePopup>(null);

  /* =========================================================
     DESTINATION
  ========================================================= */

  const [selectedDestination, setSelectedDestination] =
    useState("");

  /* =========================================================
     DATE
  ========================================================= */

  const [selectedDate, setSelectedDate] =
    useState<Date | null>(null);

  const [calendarMonth, setCalendarMonth] =
    useState(() => {
      const today = new Date();

      return {
        year: today.getFullYear(),
        month: today.getMonth(),
      };
    });

  /* =========================================================
     GUESTS
  ========================================================= */

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  /* =========================================================
     CLOSE POPUP WITH ESC
  ========================================================= */

  useEffect(() => {
    if (!activePopup) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePopup(null);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [activePopup]);

  /* =========================================================
     LOCK BODY SCROLL WHILE POPUP IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!activePopup) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [activePopup]);

  /* =========================================================
     OPEN POPUP
  ========================================================= */

  const openPopup = (
    popup: Exclude<ActivePopup, null>
  ) => {
    setActivePopup(popup);
  };

  /* =========================================================
     CLOSE POPUP
  ========================================================= */

  const closePopup = () => {
    setActivePopup(null);
  };

  /* =========================================================
     DATE FORMAT
  ========================================================= */

  const formattedDate = useMemo(() => {
    if (!selectedDate) {
      return "Add dates";
    }

    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(selectedDate);
  }, [selectedDate]);

  /* =========================================================
     GUEST TEXT
  ========================================================= */

  const guestText = useMemo(() => {
    const totalGuests = adults + children;

    if (totalGuests === 0) {
      return "Add guests";
    }

    if (children > 0) {
      return `${adults} Adult${
        adults !== 1 ? "s" : ""
      }, ${children} Child${
        children !== 1 ? "ren" : ""
      }`;
    }

    return `${adults} Adult${
      adults !== 1 ? "s" : ""
    }`;
  }, [adults, children]);

  /* =========================================================
     CALENDAR
  ========================================================= */

  const calendarDays = useMemo(() => {
    const firstDay = new Date(
      calendarMonth.year,
      calendarMonth.month,
      1
    ).getDay();

    const daysInMonth = new Date(
      calendarMonth.year,
      calendarMonth.month + 1,
      0
    ).getDate();

    return [
      ...Array(firstDay).fill(null),
      ...Array.from(
        { length: daysInMonth },
        (_, index) => index + 1
      ),
    ];
  }, [calendarMonth]);

  const calendarMonthLabel = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(
      new Date(
        calendarMonth.year,
        calendarMonth.month,
        1
      )
    );
  }, [calendarMonth]);

  /* =========================================================
     TODAY
  ========================================================= */

  const today = useMemo(() => {
    const current = new Date();

    current.setHours(0, 0, 0, 0);

    return current;
  }, []);

  /* =========================================================
     DATE HELPERS
  ========================================================= */

  const isPastDate = (day: number) => {
    const date = new Date(
      calendarMonth.year,
      calendarMonth.month,
      day
    );

    date.setHours(0, 0, 0, 0);

    return date < today;
  };

  const isSelectedDate = (day: number) => {
    if (!selectedDate) {
      return false;
    }

    return (
      selectedDate.getFullYear() ===
        calendarMonth.year &&
      selectedDate.getMonth() ===
        calendarMonth.month &&
      selectedDate.getDate() === day
    );
  };

  /* =========================================================
     SELECT DATE
  ========================================================= */

  const handleDateSelect = (day: number) => {
    if (isPastDate(day)) {
      return;
    }

    const newDate = new Date(
      calendarMonth.year,
      calendarMonth.month,
      day
    );

    setSelectedDate(newDate);
    setActivePopup(null);
  };

  /* =========================================================
     PREVIOUS MONTH
  ========================================================= */

  const previousMonth = () => {
    setCalendarMonth((current) => {
      if (current.month === 0) {
        return {
          year: current.year - 1,
          month: 11,
        };
      }

      return {
        ...current,
        month: current.month - 1,
      };
    });
  };

  /* =========================================================
     NEXT MONTH
  ========================================================= */

  const nextMonth = () => {
    setCalendarMonth((current) => {
      if (current.month === 11) {
        return {
          year: current.year + 1,
          month: 0,
        };
      }

      return {
        ...current,
        month: current.month + 1,
      };
    });
  };

  /* =========================================================
     RESET CALENDAR TO CURRENT MONTH
  ========================================================= */

  const openDatePopup = () => {
    const current =
      selectedDate || new Date();

    setCalendarMonth({
      year: current.getFullYear(),
      month: current.getMonth(),
    });

    setActivePopup("date");
  };

  /* =========================================================
     GUEST ACTIONS
  ========================================================= */

  const decreaseAdults = () => {
    setAdults((current) =>
      Math.max(1, current - 1)
    );
  };

  const increaseAdults = () => {
    setAdults((current) => current + 1);
  };

  const decreaseChildren = () => {
    setChildren((current) =>
      Math.max(0, current - 1)
    );
  };

  const increaseChildren = () => {
    setChildren((current) => current + 1);
  };

  /* =========================================================
     DESTINATION SELECT
  ========================================================= */

  const handleDestinationSelect = (
    destination: string
  ) => {
    setSelectedDestination(destination);
    setActivePopup(null);
  };

  /* =========================================================
     FORMAT DATE FOR URL
     
     Example:
     2026-09-02
  ========================================================= */

  const getDateForUrl = () => {
    if (!selectedDate) {
      return "";
    }

    const year =
      selectedDate.getFullYear();

    const month = String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      selectedDate.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  /* =========================================================
     SEARCH / REDIRECT
     
     Example:
     Northern Lights
     2 Adults
     1 Child
     02 Sep 2026

     =>
     /destinations/northern-lights
     ?date=2026-09-02
     &adults=2
     &children=1
     &guests=3
  ========================================================= */

  const handleSearch = () => {
    /* ---------------------------------------------
       Destination required
    --------------------------------------------- */

    if (!selectedDestination) {
      setActivePopup("destination");
      return;
    }

    /* ---------------------------------------------
       Date required
    --------------------------------------------- */

    if (!selectedDate) {
      openDatePopup();
      return;
    }

    /* ---------------------------------------------
       Destination slug
    --------------------------------------------- */

    const destinationSlug =
      destinationSlugs[
        selectedDestination
      ] ||
      selectedDestination
        .trim()
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    /* ---------------------------------------------
       Selected date
    --------------------------------------------- */

    const date = getDateForUrl();

    /* ---------------------------------------------
       Total guests
    --------------------------------------------- */

    const totalGuests =
      adults + children;

    /* ---------------------------------------------
       Create query parameters
    --------------------------------------------- */

    const params = new URLSearchParams();

    params.set(
      "destination",
      selectedDestination
    );

    params.set("date", date);

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

    /* ---------------------------------------------
       Redirect to particular destination page
    --------------------------------------------- */

    router.push(
      `/destinations/${destinationSlug}?${params.toString()}`
    );
  };

  /* =========================================================
     POPUP TITLE
  ========================================================= */

  const popupTitle =
    activePopup === "destination"
      ? "Where are you going?"
      : activePopup === "date"
        ? "When are you travelling?"
        : "Who is travelling?";

  return (
    <>
      <section className={styles.hero}>

        {/* =====================================================
            BACKGROUND VIDEO
        ===================================================== */}

        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/videos/Hero Section Video .mp4"
            type="video/mp4"
          />
        </video>

        {/* =====================================================
            VIDEO OVERLAY
        ===================================================== */}

        <div className={styles.overlay} />

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className={styles.heroContent}>

          <h1 className={styles.title}>
            Explore the sights of
            <br />
            Iceland
          </h1>

          <p className={styles.description}>
            Welcome to tourist attractions in Iceland,
            your ultimate guide to exploring the
            breathtaking sights and
            <br />
            experiences this beautiful country has to
            offer. Trust us to make your trip
            unforgettable.
          </p>

          {/* =================================================
              SEARCH BOX
          ================================================= */}

          <div className={styles.searchBox}>

            {/* =================================================
                DESTINATION
            ================================================= */}

            <button
              type="button"
              className={`${styles.searchField} ${
                activePopup === "destination"
                  ? styles.activeSearchField
                  : ""
              }`}
              onClick={() =>
                openPopup("destination")
              }
            >
              <span
                className={styles.fieldLabel}
              >
                Where
              </span>

              <span
                className={`${styles.fieldValue} ${
                  selectedDestination
                    ? styles.selectedFieldValue
                    : ""
                }`}
              >
                {selectedDestination ||
                  "Search destinations"}
              </span>
            </button>

            <div className={styles.divider} />

            {/* =================================================
                DATE
            ================================================= */}

            <button
              type="button"
              className={`${styles.searchField} ${
                activePopup === "date"
                  ? styles.activeSearchField
                  : ""
              }`}
              onClick={openDatePopup}
            >
              <span
                className={styles.fieldLabel}
              >
                When
              </span>

              <span
                className={`${styles.fieldValue} ${
                  selectedDate
                    ? styles.selectedFieldValue
                    : ""
                }`}
              >
                {formattedDate}
              </span>
            </button>

            <div className={styles.divider} />

            {/* =================================================
                GUESTS
            ================================================= */}

            <button
              type="button"
              className={`${styles.searchField} ${
                activePopup === "guests"
                  ? styles.activeSearchField
                  : ""
              }`}
              onClick={() =>
                openPopup("guests")
              }
            >
              <span
                className={styles.fieldLabel}
              >
                Who
              </span>

              <span
                className={`${styles.fieldValue} ${
                  adults + children > 0
                    ? styles.selectedFieldValue
                    : ""
                }`}
              >
                {guestText}
              </span>
            </button>

            {/* =================================================
                SEARCH BUTTON
            ================================================= */}

            <button
              type="button"
              className={styles.searchButton}
              aria-label="Search"
              onClick={handleSearch}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="white"
                  strokeWidth="1.8"
                />

                <path
                  d="M16 16L21 21"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>
        </div>
      </section>

      {/* =========================================================
          FULL SCREEN POPUP
      ========================================================= */}

      {activePopup && (
        <div
          className={styles.popupOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={popupTitle}
        >

          {/* ===================================================
              BACKDROP
          =================================================== */}

          <button
            type="button"
            className={styles.popupBackdrop}
            onClick={closePopup}
            aria-label="Close popup"
          />

          {/* ===================================================
              POPUP CARD
          =================================================== */}

          <div className={styles.popupCard}>

            {/* =================================================
                POPUP HEADER
            ================================================= */}

            <div className={styles.popupHeader}>

              <div className={styles.popupHeading}>

                <div className={styles.popupIcon}>

                  {activePopup ===
                    "destination" && (
                    <MapPin
                      size={21}
                      strokeWidth={1.7}
                    />
                  )}

                  {activePopup === "date" && (
                    <CalendarDays
                      size={21}
                      strokeWidth={1.7}
                    />
                  )}

                  {activePopup === "guests" && (
                    <Users
                      size={21}
                      strokeWidth={1.7}
                    />
                  )}

                </div>

                <div>

                  <span
                    className={
                      styles.popupEyebrow
                    }
                  >
                    PLAN YOUR TRIP
                  </span>

                  <h2
                    className={
                      styles.popupTitle
                    }
                  >
                    {popupTitle}
                  </h2>

                </div>

              </div>

              {/* =================================================
                  CLOSE BUTTON
              ================================================= */}

              <button
                type="button"
                className={styles.popupClose}
                onClick={closePopup}
                aria-label="Close"
              >
                <X
                  size={23}
                  strokeWidth={1.7}
                />
              </button>

            </div>

            {/* =================================================
                DESTINATION CONTENT
            ================================================= */}

            {activePopup ===
              "destination" && (
              <div
                className={
                  styles.popupContent
                }
              >

                <p
                  className={
                    styles.popupDescription
                  }
                >
                  Choose your destination in
                  Iceland
                </p>

                <div
                  className={
                    styles.destinationGrid
                  }
                >

                  {destinations.map(
                    (destination) => (
                      <button
                        key={destination}
                        type="button"
                        className={`${
                          styles.destinationOption
                        } ${
                          selectedDestination ===
                          destination
                            ? styles.selectedDestination
                            : ""
                        }`}
                        onClick={() =>
                          handleDestinationSelect(
                            destination
                          )
                        }
                      >

                        <span
                          className={
                            styles.destinationIcon
                          }
                        >
                          <MapPin
                            size={19}
                            strokeWidth={1.6}
                          />
                        </span>

                        <span
                          className={
                            styles.destinationName
                          }
                        >
                          {destination}
                        </span>

                        <span
                          className={
                            styles.destinationArrow
                          }
                        >
                          →
                        </span>

                      </button>
                    )
                  )}

                </div>

              </div>
            )}

            {/* =================================================
                DATE CONTENT
            ================================================= */}

            {activePopup === "date" && (
              <div
                className={
                  styles.popupContent
                }
              >

                <div
                  className={
                    styles.calendar
                  }
                >

                  {/* =========================================
                      CALENDAR HEADER
                  ========================================= */}

                  <div
                    className={
                      styles.calendarHeader
                    }
                  >

                    <button
                      type="button"
                      className={
                        styles.calendarArrow
                      }
                      onClick={
                        previousMonth
                      }
                      aria-label="Previous month"
                    >
                      <ChevronLeft
                        size={20}
                        strokeWidth={1.8}
                      />
                    </button>

                    <h3
                      className={
                        styles.calendarMonth
                      }
                    >
                      {calendarMonthLabel}
                    </h3>

                    <button
                      type="button"
                      className={
                        styles.calendarArrow
                      }
                      onClick={nextMonth}
                      aria-label="Next month"
                    >
                      <ChevronRight
                        size={20}
                        strokeWidth={1.8}
                      />
                    </button>

                  </div>

                  {/* =========================================
                      WEEKDAYS
                  ========================================= */}

                  <div
                    className={
                      styles.weekdays
                    }
                  >
                    {[
                      "Sun",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                    ].map((day) => (
                      <span
                        key={day}
                        className={
                          styles.weekday
                        }
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  {/* =========================================
                      DAYS
                  ========================================= */}

                  <div
                    className={
                      styles.calendarGrid
                    }
                  >
                    {calendarDays.map(
                      (day, index) => {

                        if (day === null) {
                          return (
                            <span
                              key={`empty-${index}`}
                              className={
                                styles.emptyDay
                              }
                            />
                          );
                        }

                        const disabled =
                          isPastDate(day);

                        const selected =
                          isSelectedDate(day);

                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={disabled}
                            className={`${
                              styles.calendarDay
                            } ${
                              selected
                                ? styles.selectedDay
                                : ""
                            } ${
                              disabled
                                ? styles.disabledDay
                                : ""
                            }`}
                            onClick={() =>
                              handleDateSelect(
                                day
                              )
                            }
                          >
                            {day}
                          </button>
                        );
                      }
                    )}
                  </div>

                </div>

                {/* =========================================
                    SELECTED DATE
                ========================================= */}

                <div
                  className={
                    styles.calendarFooter
                  }
                >

                  <div>

                    <span
                      className={
                        styles.calendarFooterLabel
                      }
                    >
                      SELECTED DATE
                    </span>

                    <strong
                      className={
                        styles.calendarFooterValue
                      }
                    >
                      {selectedDate
                        ? formattedDate
                        : "No date selected"}
                    </strong>

                  </div>

                  <button
                    type="button"
                    className={
                      styles.doneButton
                    }
                    onClick={closePopup}
                  >
                    Done
                  </button>

                </div>

              </div>
            )}

            {/* =================================================
                GUEST CONTENT
            ================================================= */}

            {activePopup ===
              "guests" && (
              <div
                className={
                  styles.popupContent
                }
              >

                <p
                  className={
                    styles.popupDescription
                  }
                >
                  Add the number of travellers
                  for your trip
                </p>

                <div
                  className={
                    styles.guestList
                  }
                >

                  {/* =========================================
                      ADULTS
                  ========================================= */}

                  <div
                    className={
                      styles.guestRow
                    }
                  >

                    <div
                      className={
                        styles.guestInfo
                      }
                    >

                      <div
                        className={
                          styles.guestAvatar
                        }
                      >
                        A
                      </div>

                      <div>

                        <strong
                          className={
                            styles.guestTitle
                          }
                        >
                          Adults
                        </strong>

                        <span
                          className={
                            styles.guestSubtitle
                          }
                        >
                          Age 13 and above
                        </span>

                      </div>

                    </div>

                    <div
                      className={
                        styles.counter
                      }
                    >

                      <button
                        type="button"
                        className={
                          styles.counterButton
                        }
                        onClick={
                          decreaseAdults
                        }
                        disabled={
                          adults <= 1
                        }
                        aria-label="Decrease adults"
                      >
                        −
                      </button>

                      <span
                        className={
                          styles.counterValue
                        }
                      >
                        {adults}
                      </span>

                      <button
                        type="button"
                        className={
                          styles.counterButton
                        }
                        onClick={
                          increaseAdults
                        }
                        aria-label="Increase adults"
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* =========================================
                      CHILDREN
                  ========================================= */}

                  <div
                    className={
                      styles.guestRow
                    }
                  >

                    <div
                      className={
                        styles.guestInfo
                      }
                    >

                      <div
                        className={
                          styles.guestAvatar
                        }
                      >
                        C
                      </div>

                      <div>

                        <strong
                          className={
                            styles.guestTitle
                          }
                        >
                          Children
                        </strong>

                        <span
                          className={
                            styles.guestSubtitle
                          }
                        >
                          Age 2–12
                        </span>

                      </div>

                    </div>

                    <div
                      className={
                        styles.counter
                      }
                    >

                      <button
                        type="button"
                        className={
                          styles.counterButton
                        }
                        onClick={
                          decreaseChildren
                        }
                        disabled={
                          children <= 0
                        }
                        aria-label="Decrease children"
                      >
                        −
                      </button>

                      <span
                        className={
                          styles.counterValue
                        }
                      >
                        {children}
                      </span>

                      <button
                        type="button"
                        className={
                          styles.counterButton
                        }
                        onClick={
                          increaseChildren
                        }
                        aria-label="Increase children"
                      >
                        +
                      </button>

                    </div>

                  </div>

                </div>

                {/* =============================================
                    GUEST FOOTER
                ============================================= */}

                <div
                  className={
                    styles.guestFooter
                  }
                >

                  <div>

                    <span
                      className={
                        styles.calendarFooterLabel
                      }
                    >
                      TRAVELLERS
                    </span>

                    <strong
                      className={
                        styles.calendarFooterValue
                      }
                    >
                      {guestText}
                    </strong>

                  </div>

                  <button
                    type="button"
                    className={
                      styles.doneButton
                    }
                    onClick={closePopup}
                  >
                    Done
                  </button>

                </div>

              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};

export default Hero;