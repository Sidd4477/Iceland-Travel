"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import Header from "@/components/layout/Header";

import styles from "./BookingPage.module.css";

const BookingPage = () => {
  const searchParams = useSearchParams();

  /* =========================================================
     CONTACT FORM
  ========================================================= */

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  /* =========================================================
     GUEST EDITOR
  ========================================================= */

  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [editingAdults, setEditingAdults] = useState(0);
  const [editingChildren, setEditingChildren] = useState(0);
  const [selectedAdults, setSelectedAdults] = useState(0);
  const [selectedChildren, setSelectedChildren] = useState(0);

  /* =========================================================
     BOOKING DATA
     ALL VALUES COME FROM PREVIOUS PAGE
  ========================================================= */

  const destination = searchParams.get("destination") ?? "";

  const date = searchParams.get("date") ?? "";

  const time = searchParams.get("time") ?? "";

  const adultsParam = searchParams.get("adults");
  const childrenParam = searchParams.get("children");
  const guestsParam = searchParams.get("guests");
  const priceParam = searchParams.get("price");
  const totalParam = searchParams.get("total");

  const adults =
    adultsParam !== null && adultsParam !== ""
      ? Number(adultsParam)
      : 0;

  const children =
    childrenParam !== null && childrenParam !== ""
      ? Number(childrenParam)
      : 0;

  const guests =
    guestsParam !== null && guestsParam !== ""
      ? Number(guestsParam)
      : adults + children;

  const pricePerPerson =
    priceParam !== null && priceParam !== ""
      ? Number(priceParam)
      : 0;

  const calculatedTotal =
    guests * pricePerPerson;

  const total =
    totalParam !== null && totalParam !== ""
      ? Number(totalParam)
      : calculatedTotal;

  const bookingImage =
    searchParams.get("image") ?? "";

  /* =========================================================
     DATE & TIME EDITOR
  ========================================================= */

  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedTime, setSelectedTime] = useState(time);

  const [isDateTimeModalOpen, setIsDateTimeModalOpen] = useState(false);
  const [draftDate, setDraftDate] = useState(date);
  const [draftHour, setDraftHour] = useState(7);
  const [draftMinute, setDraftMinute] = useState(0);
  const [draftPeriod, setDraftPeriod] = useState<"AM" | "PM">("AM");
  const [draftHourInput, setDraftHourInput] = useState("07");
  const [draftMinuteInput, setDraftMinuteInput] = useState("00");
  const [clockStep, setClockStep] = useState<"hour" | "minute">("hour");
  const [isClockDragging, setIsClockDragging] = useState(false);

  const clockFaceRef = useRef<HTMLDivElement | null>(null);

  /* =========================================================
     SAFE VALUES
  ========================================================= */

  const safeAdults = Number.isFinite(adults)
    ? adults
    : 0;

  const safeChildren = Number.isFinite(children)
    ? children
    : 0;

  const safeGuests = Number.isFinite(guests)
    ? guests
    : safeAdults + safeChildren;

  const safePricePerPerson =
    Number.isFinite(pricePerPerson)
      ? pricePerPerson
      : 0;

  const safeTotal =
    Number.isFinite(total)
      ? total
      : safeGuests * safePricePerPerson;

  /* =========================================================
     ACTIVE GUEST VALUES
  ========================================================= */

  useEffect(() => {
    setSelectedAdults(safeAdults);
    setSelectedChildren(safeChildren);
  }, [safeAdults, safeChildren]);

  const activeAdults = selectedAdults;
  const activeChildren = selectedChildren;
  const activeGuests = activeAdults + activeChildren;

  const activeBasePrice =
    activeGuests * safePricePerPerson;

  const activeTotal =
    totalParam !== null &&
    totalParam !== "" &&
    activeGuests === safeGuests
      ? safeTotal
      : activeBasePrice;

  const activeTaxes = Math.max(
    0,
    activeTotal - activeBasePrice
  );

  /* =========================================================
     FORMATTED DATE
  ========================================================= */

  const formattedDate = useMemo(() => {
    if (!selectedDate) {
      return "Select date";
    }

    const parts = selectedDate.split("-");

    if (parts.length !== 3) {
      return selectedDate;
    }

    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);

    if (!year || !month || !day) {
      return selectedDate;
    }

    const dateObject = new Date(
      Date.UTC(year, month - 1, day)
    );

    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(dateObject);
  }, [selectedDate]);

  /* =========================================================
     FORMATTED TIME
  ========================================================= */

  const formattedTime = useMemo(() => {
    if (!selectedTime) {
      return "Select time";
    }

    const [hoursString, minutesString] =
      selectedTime.split(":");

    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes)
    ) {
      return selectedTime;
    }

    const dateObject = new Date();

    dateObject.setHours(
      hours,
      minutes,
      0,
      0
    );

    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(dateObject);
  }, [selectedTime]);

  /* =========================================================
     DATE & TIME MODAL ACTIONS
  ========================================================= */

  useEffect(() => {
    setSelectedDate(date);
  }, [date]);

  useEffect(() => {
    setSelectedTime(time);
  }, [time]);

  const parseTimeForEditor = (value: string) => {
    const [hourText, minuteText] = value.split(":");
    const parsedHour = Number(hourText);
    const parsedMinute = Number(minuteText);

    if (
      !Number.isFinite(parsedHour) ||
      !Number.isFinite(parsedMinute) ||
      parsedHour < 0 ||
      parsedHour > 23 ||
      parsedMinute < 0 ||
      parsedMinute > 59
    ) {
      return {
        hour: 7,
        minute: 0,
        period: "AM" as const,
      };
    }

    return {
      hour: parsedHour,
      minute: parsedMinute,
      period: parsedHour >= 12 ? ("PM" as const) : ("AM" as const),
    };
  };

  const openDateTimeModal = () => {
    const parsed = parseTimeForEditor(selectedTime);

    setDraftDate(selectedDate);
    setDraftHour(parsed.hour);
    setDraftMinute(parsed.minute);
    setDraftPeriod(parsed.period);
    setDraftHourInput(
      String(parsed.hour % 12 || 12).padStart(2, "0")
    );
    setDraftMinuteInput(
      String(parsed.minute).padStart(2, "0")
    );
    setClockStep("hour");
    setIsDateTimeModalOpen(true);
  };

  const closeDateTimeModal = () => {
    setIsDateTimeModalOpen(false);
    setIsClockDragging(false);
  };

  /* =========================================================
     MANUAL TIME INPUT

     Hour input is always 12-hour based: 01 - 12.
     Internally we still store the final time as 00 - 23.
  ========================================================= */

  const getNormalizedHour = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 2);

    if (!digits) {
      return getDisplayHour();
    }

    const numericHour = Math.min(12, Math.max(1, Number(digits)));

    return numericHour;
  };

  const getNormalizedMinute = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 2);

    if (!digits) {
      return draftMinute;
    }

    return Math.min(59, Math.max(0, Number(digits)));
  };

  const applyHourInput = (value: string) => {
    const numericHour = getNormalizedHour(value);

    const nextHour =
      draftPeriod === "PM"
        ? numericHour === 12
          ? 12
          : numericHour + 12
        : numericHour === 12
          ? 0
          : numericHour;

    setDraftHour(nextHour);
    setDraftHourInput(String(numericHour).padStart(2, "0"));
  };

  const applyMinuteInput = (value: string) => {
    const numericMinute = getNormalizedMinute(value);

    setDraftMinute(numericMinute);
    setDraftMinuteInput(String(numericMinute).padStart(2, "0"));
  };

  const saveDateTimeChanges = () => {
    const displayHour = getNormalizedHour(draftHourInput);
    const normalizedMinute = getNormalizedMinute(draftMinuteInput);

    const normalizedHour =
      draftPeriod === "PM"
        ? displayHour === 12
          ? 12
          : displayHour + 12
        : displayHour === 12
          ? 0
          : displayHour;

    const hourText = String(normalizedHour).padStart(2, "0");
    const minuteText = String(normalizedMinute).padStart(2, "0");

    setDraftHour(normalizedHour);
    setDraftMinute(normalizedMinute);
    setDraftHourInput(
      String(displayHour).padStart(2, "0")
    );
    setDraftMinuteInput(minuteText);

    setSelectedDate(draftDate);
    setSelectedTime(`${hourText}:${minuteText}`);
    setIsDateTimeModalOpen(false);
    setIsClockDragging(false);
  };

  const normalizeDraftHour = (value: string) => {
    applyHourInput(value);
  };

  const normalizeDraftMinute = (value: string) => {
    applyMinuteInput(value);
  };

  const getDisplayHour = () => {
    const hour = draftHour % 12;
    return hour === 0 ? 12 : hour;
  };

  const updateClockFromPointer = (
    clientX: number,
    clientY: number
  ) => {
    const clock = clockFaceRef.current;

    if (!clock) {
      return;
    }

    const rect = clock.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    if (Math.abs(deltaX) < 2 && Math.abs(deltaY) < 2) {
      return;
    }

    let angle =
      (Math.atan2(deltaY, deltaX) * 180) / Math.PI + 90;

    if (angle < 0) {
      angle += 360;
    }

    if (clockStep === "hour") {
      const hourIndex =
        Math.round(angle / 30) % 12;
      const selectedDisplayHour =
        hourIndex === 0 ? 12 : hourIndex;

      const nextHour =
        draftPeriod === "PM"
          ? selectedDisplayHour === 12
            ? 12
            : selectedDisplayHour + 12
          : selectedDisplayHour === 12
            ? 0
            : selectedDisplayHour;

      setDraftHour(nextHour);
      setDraftHourInput(String(selectedDisplayHour).padStart(2, "0"));
      return;
    }

    const minuteIndex =
      Math.round(angle / 6) % 60;

    const nextMinute = Math.min(59, Math.round(minuteIndex / 5) * 5);
    setDraftMinute(nextMinute);
    setDraftMinuteInput(String(nextMinute).padStart(2, "0"));
  };

  const handleClockPointerDown = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setIsClockDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateClockFromPointer(
      event.clientX,
      event.clientY
    );
  };

  const handleClockPointerMove = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    if (!isClockDragging) {
      return;
    }

    updateClockFromPointer(
      event.clientX,
      event.clientY
    );
  };

  const handleClockPointerUp = () => {
    setIsClockDragging(false);

    if (clockStep === "hour") {
      setClockStep("minute");
    }
  };

  const selectCalendarDate = (day: number) => {
    if (!draftDate) {
      const today = new Date();
      setDraftDate(
        `${today.getFullYear()}-${String(
          today.getMonth() + 1
        ).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      );
      return;
    }

    const parts = draftDate.split("-");
    if (parts.length !== 3) {
      return;
    }

    setDraftDate(
      `${parts[0]}-${parts[1]}-${String(day).padStart(2, "0")}`
    );
  };

  const calendarMonth = useMemo(() => {
    const sourceDate = draftDate
      ? new Date(`${draftDate}T00:00:00`)
      : new Date();

    return {
      year: sourceDate.getFullYear(),
      month: sourceDate.getMonth(),
    };
  }, [draftDate]);

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

  const calendarMonthLabel = new Intl.DateTimeFormat(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  ).format(
    new Date(
      calendarMonth.year,
      calendarMonth.month,
      1
    )
  );

  /* =========================================================
     GUEST TEXT
  ========================================================= */

  const guestText = useMemo(() => {
    if (activeChildren > 0) {
      return `${activeAdults} Adult${
        activeAdults !== 1 ? "s" : ""
      }, ${activeChildren} Child${
        activeChildren !== 1 ? "ren" : ""
      }`;
    }

    return `${activeAdults} Adult${
      activeAdults !== 1 ? "s" : ""
    }`;
  }, [activeAdults, activeChildren]);

  /* =========================================================
     GUEST MODAL ACTIONS
  ========================================================= */

  const openGuestModal = () => {
    setEditingAdults(activeAdults);
    setEditingChildren(activeChildren);
    setIsGuestModalOpen(true);
  };

  const closeGuestModal = () => {
    setIsGuestModalOpen(false);
  };

  const saveGuestChanges = () => {
    setSelectedAdults(editingAdults);
    setSelectedChildren(editingChildren);
    setIsGuestModalOpen(false);
  };

  const incrementAdults = () => {
    setEditingAdults((value) => value + 1);
  };

  const decrementAdults = () => {
    setEditingAdults((value) => Math.max(0, value - 1));
  };

  const incrementChildren = () => {
    setEditingChildren((value) => value + 1);
  };

  const decrementChildren = () => {
    setEditingChildren((value) => Math.max(0, value - 1));
  };

  /* =========================================================
     BOOKING DATE DESCRIPTION
  ========================================================= */

  const cancellationText = selectedDate
    ? `Cancel before check-in on ${formattedDate} for a partial refund.`
    : "Select your check-in date for cancellation details.";

  /* =========================================================
     PRICE CALCULATION
  ========================================================= */

  const basePrice = activeBasePrice;
  const taxes = activeTaxes;

  /* =========================================================
     BACK URL
     CREATE DESTINATION SLUG FROM DESTINATION NAME
  ========================================================= */

  const destinationSlug = destination
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const backUrl = destinationSlug
    ? `/destinations/${destinationSlug}`
    : "/destinations";

  /* =========================================================
     SUBMIT
  ========================================================= */

const handleConfirmAndPay = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  try {
    const response = await fetch("/api/booking", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,

        destination,

        date: selectedDate,
        time: selectedTime,

        adults: activeAdults,
        children: activeChildren,
        guests: activeGuests,

        pricePerPerson: safePricePerPerson,
        basePrice,
        taxes,
        total: activeTotal,

        image: bookingImage,
      }),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(
        result.message || "Booking submission failed."
      );
    }

    console.log("Booking Details:", {
      firstName,
      lastName,
      email,
      phone,

      destination,
      date: selectedDate,
      time: selectedTime,

      adults: activeAdults,
      children: activeChildren,
      guests: activeGuests,

      pricePerPerson: safePricePerPerson,
      basePrice,
      taxes,
      total: activeTotal,

      image: bookingImage,
    });

    alert(
      "Booking submitted successfully. A confirmation email has been sent and your booking notification has been sent to WhatsApp."
    );
  } catch (error) {
    console.error("Booking submission error:", error);

    alert(
      "Something went wrong while submitting your booking. Please try again."
    );
  }
};
  return (
    <main className={styles.page}>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <section className={styles.bookingSection}>

        {/* ===================================================
            PAGE HEADING
        =================================================== */}

        <div className={styles.pageHeading}>

          <Link
            href={backUrl}
            className={styles.backButton}
            aria-label={`Back to ${destination || "destinations"}`}
          >
            <ArrowLeft
              size={28}
              strokeWidth={1.5}
            />
          </Link>

          <h1 className={styles.pageTitle}>
            Confirm and Book
          </h1>

        </div>

        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div className={styles.bookingGrid}>

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className={styles.leftColumn}>

            {/* ===============================================
                CONTACT FORM
            =============================================== */}

            <form
              id="booking-form"
              className={styles.contactCard}
              onSubmit={handleConfirmAndPay}
            >

              <h2 className={styles.contactTitle}>
                Enter your contact details
              </h2>

              <p className={styles.contactDescription}>
                Share your contact details so we can reach
                you with important updates and make your
                experience as smooth as possible.
              </p>

              {/* =============================================
                  FIRST / LAST NAME
              ============================================= */}

              <div className={styles.formGrid}>

                <div className={styles.formField}>

                  <label
                    htmlFor="firstName"
                    className={styles.fieldLabel}
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(event) =>
                      setFirstName(event.target.value)
                    }
                    className={styles.formInput}
                  />

                </div>

                <div className={styles.formField}>

                  <label
                    htmlFor="lastName"
                    className={styles.fieldLabel}
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(event) =>
                      setLastName(event.target.value)
                    }
                    className={styles.formInput}
                  />

                </div>

                {/* =========================================
                    EMAIL
                ========================================= */}

                <div className={styles.formField}>

                  <label
                    htmlFor="email"
                    className={styles.fieldLabel}
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    className={styles.formInput}
                  />

                </div>

                {/* =========================================
                    PHONE
                ========================================= */}

                <div className={styles.formField}>

                  <label
                    htmlFor="phone"
                    className={styles.fieldLabel}
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) =>
                      setPhone(event.target.value)
                    }
                    className={styles.formInput}
                  />

                </div>

              </div>

            </form>

            {/* ===============================================
                PROCEED TO PAYMENT
            =============================================== */}

            <div className={styles.paymentSection}>

              <button
                type="submit"
                form="booking-form"
                className={styles.confirmButton}
              >
                <span>
                  Confirm and Book 
                </span>
              </button>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE BOOKING SUMMARY
          ================================================= */}

          <aside className={styles.summaryCard}>

            {/* ===============================================
                DESTINATION
            =============================================== */}

            <div className={styles.destinationRow}>

              <div className={styles.destinationImage}>

                {bookingImage ? (
                  <Image
                    src={bookingImage}
                    alt={destination || "Booking destination"}
                    fill
                    className={styles.summaryImage}
                    sizes="232px"
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "#eeeeee",
                    }}
                  />
                )}

              </div>

              <div className={styles.destinationInfo}>

                <h2 className={styles.destinationTitle}>
                  {destination || "Selected destination"}
                </h2>

                <p className={styles.destinationSubtitle}>
                  Guests Favourite Destination
                </p>

              </div>

            </div>

            {/* ===============================================
                CANCELLATION
            =============================================== */}

            <p className={styles.cancellationText}>
              {cancellationText}
            </p>

            {/* ===============================================
                DATE & TIME
            =============================================== */}

            <div className={styles.summaryDivider} />

            <div className={styles.summaryItem}>

              <div className={styles.summaryItemHeader}>
                <h3 className={styles.summaryHeading}>
                  Date &amp; Time
                </h3>

                <button
                  type="button"
                  className={styles.changeButton}
                  onClick={openDateTimeModal}
                >
                  Change
                </button>
              </div>

              <p className={styles.summaryValue}>

                {formattedDate}

                {selectedTime
                  ? `, ${formattedTime}`
                  : ""}

              </p>

            </div>

            {/* ===============================================
                GUESTS
            =============================================== */}

            <div className={styles.summaryDivider} />

            <div className={styles.summaryItem}>

              <div className={styles.summaryItemHeader}>
                <h3 className={styles.summaryHeading}>
                  Guests
                </h3>

                <button
                  type="button"
                  className={styles.changeButton}
                  onClick={openGuestModal}
                >
                  Change
                </button>
              </div>

              <p className={styles.summaryValue}>
                {guestText}
              </p>

            </div>

            {/* ===============================================
                PRICE DETAILS
            =============================================== */}

            <div className={styles.summaryDivider} />

            <div className={styles.priceSection}>

              <h3 className={styles.priceTitle}>
                Price details
              </h3>

              <div className={styles.priceRow}>

                <span>
                  {activeGuests} Adult
                  {activeGuests !== 1 ? "s" : ""} × $
                  {safePricePerPerson}
                </span>

                <span>
                  ${basePrice.toFixed(2)}
                </span>

              </div>

              <div className={styles.priceRow}>

                <span>
                  Taxes
                </span>

                <span>
                  ${taxes.toFixed(2)}
                </span>

              </div>

            </div>

            {/* ===============================================
                TOTAL
            =============================================== */}

            <div className={styles.totalDivider} />

            <div className={styles.totalRow}>

              <span>
                Total USD
              </span>

              <strong>
                ${activeTotal.toFixed(2)}
              </strong>

            </div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          SELECT DATE & TIME MODAL
      ===================================================== */}

      {isDateTimeModalOpen && (
        <div
          className={styles.dateTimeModalOverlay}
          role="presentation"
          onMouseDown={closeDateTimeModal}
        >
          <div
            className={styles.dateTimeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="select-date-time-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.dateTimeModalClose}
              onClick={closeDateTimeModal}
              aria-label="Close date and time dialog"
            >
              ×
            </button>

            <h2
              id="select-date-time-title"
              className={styles.dateTimeModalTitle}
            >
              Select Date &amp; Time
            </h2>

            <div className={styles.dateTimeModalBody}>

              <div className={styles.calendarPanel}>

                <div className={styles.calendarHeader}>
                  <button
                    type="button"
                    className={styles.calendarNavButton}
                    aria-label="Previous month"
                    onClick={() => {
                      const previousMonth = new Date(
                        calendarMonth.year,
                        calendarMonth.month - 1,
                        1
                      );
                      const daysInPreviousMonth =
                        new Date(
                          previousMonth.getFullYear(),
                          previousMonth.getMonth() + 1,
                          0
                        ).getDate();

                      const currentDay = draftDate
                        ? Number(
                            draftDate.split("-")[2]
                          )
                        : 1;

                      const safeDay = Math.min(
                        currentDay,
                        daysInPreviousMonth
                      );

                      setDraftDate(
                        `${previousMonth.getFullYear()}-${String(
                          previousMonth.getMonth() + 1
                        ).padStart(2, "0")}-${String(
                          safeDay
                        ).padStart(2, "0")}`
                      );
                    }}
                  >
                    ‹
                  </button>

                  <span className={styles.calendarMonthLabel}>
                    {calendarMonthLabel}
                  </span>

                  <button
                    type="button"
                    className={styles.calendarNavButton}
                    aria-label="Next month"
                    onClick={() => {
                      const nextMonth = new Date(
                        calendarMonth.year,
                        calendarMonth.month + 1,
                        1
                      );
                      const daysInNextMonth =
                        new Date(
                          nextMonth.getFullYear(),
                          nextMonth.getMonth() + 1,
                          0
                        ).getDate();

                      const currentDay = draftDate
                        ? Number(
                            draftDate.split("-")[2]
                          )
                        : 1;

                      const safeDay = Math.min(
                        currentDay,
                        daysInNextMonth
                      );

                      setDraftDate(
                        `${nextMonth.getFullYear()}-${String(
                          nextMonth.getMonth() + 1
                        ).padStart(2, "0")}-${String(
                          safeDay
                        ).padStart(2, "0")}`
                      );
                    }}
                  >
                    ›
                  </button>
                </div>

                <div className={styles.calendarWeekdays}>
                  {["S", "M", "T", "W", "T", "F", "S"].map(
                    (day, index) => (
                      <span key={`${day}-${index}`}>
                        {day}
                      </span>
                    )
                  )}
                </div>

                <div className={styles.calendarGrid}>
                  {calendarDays.map((day, index) => {
                    if (day === null) {
                      return (
                        <span
                          key={`empty-${index}`}
                          className={styles.calendarDayEmpty}
                        />
                      );
                    }

                    const selectedDay =
                      draftDate &&
                      Number(
                        draftDate.split("-")[2]
                      ) === day &&
                      Number(
                        draftDate.split("-")[1]
                      ) ===
                        calendarMonth.month + 1 &&
                      Number(
                        draftDate.split("-")[0]
                      ) === calendarMonth.year;

                    return (
                      <button
                        key={day}
                        type="button"
                        className={`${styles.calendarDay} ${
                          selectedDay
                            ? styles.calendarDaySelected
                            : ""
                        }`}
                        onClick={() =>
                          selectCalendarDate(day)
                        }
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className={styles.calendarIcon}>
                </div>
              </div>

              <div className={styles.dateTimeDivider} />

              <div className={styles.clockPanel}>

                <div className={styles.timeControls}>
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    aria-label="Hour"
                    className={`${styles.timeBox} ${
                      clockStep === "hour"
                        ? styles.timeBoxActive
                        : ""
                    }`}
                    value={draftHourInput}
                    onFocus={(event) => {
                      setClockStep("hour");
                      event.currentTarget.select();
                    }}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 2);

                      setDraftHourInput(value);
                    }}
                    onBlur={() => normalizeDraftHour(draftHourInput)}
                  />

                  <span className={styles.timeColon}>
                    :
                  </span>

                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={2}
                    aria-label="Minutes"
                    className={`${styles.timeBox} ${
                      clockStep === "minute"
                        ? styles.timeBoxActive
                        : ""
                    }`}
                    value={draftMinuteInput}
                    onFocus={(event) => {
                      setClockStep("minute");
                      event.currentTarget.select();
                    }}
                    onChange={(event) => {
                      const value = event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 2);

                      setDraftMinuteInput(value);
                    }}
                    onBlur={() => normalizeDraftMinute(draftMinuteInput)}
                  />

                  <div className={styles.periodToggle}>
                    <button
                      type="button"
                      className={
                        draftPeriod === "AM"
                          ? styles.periodActive
                          : styles.periodButton
                      }
                      onClick={() => {
                        const displayHour =
                          draftHour % 12 || 12;

                        setDraftPeriod("AM");
                        setDraftHour(
                          displayHour === 12 ? 0 : displayHour
                        );
                        setDraftHourInput(
                          String(displayHour).padStart(2, "0")
                        );
                      }}
                    >
                      AM
                    </button>

                    <button
                      type="button"
                      className={
                        draftPeriod === "PM"
                          ? styles.periodActive
                          : styles.periodButton
                      }
                      onClick={() => {
                        const displayHour =
                          draftHour % 12 || 12;

                        setDraftPeriod("PM");
                        setDraftHour(
                          displayHour === 12
                            ? 12
                            : displayHour + 12
                        );
                        setDraftHourInput(
                          String(displayHour).padStart(2, "0")
                        );
                      }}
                    >
                      PM
                    </button>
                  </div>
                </div>

                <div
                  ref={clockFaceRef}
                  className={`${styles.clockFace} ${
                    isClockDragging
                      ? styles.clockFaceDragging
                      : ""
                  }`}
                  onPointerDown={
                    handleClockPointerDown
                  }
                  onPointerMove={
                    handleClockPointerMove
                  }
                  onPointerUp={
                    handleClockPointerUp
                  }
                  onPointerCancel={
                    handleClockPointerUp
                  }
                >
                  {Array.from(
                    { length: 12 },
                    (_, index) => {
                      const number =
                        index === 0
                          ? 12
                          : index;
                      const angle =
                        (index * 30 - 90) *
                        (Math.PI / 180);
                      const radius =
                        clockStep === "hour"
                          ? 49
                          : 51;

                      const left =
                        50 +
                        Math.cos(angle) *
                          (radius / 0.98);
                      const top =
                        50 +
                        Math.sin(angle) *
                          (radius / 0.98);

                      const activeNumber =
                        clockStep === "hour"
                          ? getDisplayHour()
                          : Math.round(
                              draftMinute / 5
                            ) || 12;

                      const isActive =
                        number === activeNumber;

                      return (
                        <span
                          key={number}
                          className={`${styles.clockNumber} ${
                            isActive
                              ? styles.clockNumberActive
                              : ""
                          }`}
                          style={{
                            left: `${left}%`,
                            top: `${top}%`,
                          }}
                        >
                          {clockStep === "minute"
                            ? String(
                                number === 12
                                  ? 0
                                  : number * 5
                              ).padStart(2, "0")
                            : number}
                        </span>
                      );
                    }
                  )}

                  <div
                    className={styles.clockHand}
                    style={{
                      transform: `translate(-50%, -100%) rotate(${
                        clockStep === "hour"
                          ? ((getDisplayHour() % 12) *
                              30)
                          : draftMinute * 6
                      }deg)`,
                    }}
                  />

                  <div
                    className={styles.clockCenter}
                  />
                </div>

                <div className={styles.clockHint}>
                  {clockStep === "hour"
                    ? "Select hour"
                    : "Select minutes"}
                </div>
              </div>
            </div>

            <div className={styles.dateTimeModalFooter}>
              <button
                type="button"
                className={styles.dateTimeCancelButton}
                onClick={closeDateTimeModal}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.dateTimeSaveButton}
                onClick={saveDateTimeChanges}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          CHANGE GUESTS MODAL
      ===================================================== */}

      {isGuestModalOpen && (
        <div
          className={styles.guestModalOverlay}
          role="presentation"
          onMouseDown={closeGuestModal}
        >
          <div
            className={styles.guestModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="change-guests-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.guestModalClose}
              onClick={closeGuestModal}
              aria-label="Close change guests dialog"
            >
              ×
            </button>

            <h2
              id="change-guests-title"
              className={styles.guestModalTitle}
            >
              Change Guests
            </h2>

            <p className={styles.guestModalDescription}>
              This place has a maximum of 10 guests, including children and Adults.
            </p>

            <div className={styles.guestControlRow}>
              <div className={styles.guestControlLabel}>
                <span className={styles.guestType}>Adults</span>
                <span className={styles.guestAge}>Age 12+</span>
              </div>

              <div className={styles.guestCounter}>
                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={decrementAdults}
                  disabled={editingAdults === 0}
                  aria-label="Decrease adults"
                >
                  −
                </button>

                <span className={styles.counterValue}>
                  {editingAdults}
                </span>

                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={incrementAdults}
                  disabled={editingAdults + editingChildren >= 10}
                  aria-label="Increase adults"
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.guestControlRow}>
              <div className={styles.guestControlLabel}>
                <span className={styles.guestType}>Children</span>
                <span className={styles.guestAge}>Age 2 - 12</span>
              </div>

              <div className={styles.guestCounter}>
                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={decrementChildren}
                  disabled={editingChildren === 0}
                  aria-label="Decrease children"
                >
                  −
                </button>

                <span className={styles.counterValue}>
                  {editingChildren}
                </span>

                <button
                  type="button"
                  className={styles.counterButton}
                  onClick={incrementChildren}
                  disabled={editingAdults + editingChildren >= 10}
                  aria-label="Increase children"
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.guestModalFooter}>
              <button
                type="button"
                className={styles.guestCancelButton}
                onClick={closeGuestModal}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.guestSaveButton}
                onClick={saveGuestChanges}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default BookingPage;