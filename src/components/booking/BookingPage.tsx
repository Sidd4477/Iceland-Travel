"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

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
     FORMATTED DATE
  ========================================================= */

  const formattedDate = useMemo(() => {
    if (!date) {
      return "Select date";
    }

    const parts = date.split("-");

    if (parts.length !== 3) {
      return date;
    }

    const year = Number(parts[0]);
    const month = Number(parts[1]);
    const day = Number(parts[2]);

    if (!year || !month || !day) {
      return date;
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
  }, [date]);

  /* =========================================================
     FORMATTED TIME
  ========================================================= */

  const formattedTime = useMemo(() => {
    if (!time) {
      return "Select time";
    }

    const [hoursString, minutesString] =
      time.split(":");

    const hours = Number(hoursString);
    const minutes = Number(minutesString);

    if (
      Number.isNaN(hours) ||
      Number.isNaN(minutes)
    ) {
      return time;
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
  }, [time]);

  /* =========================================================
     GUEST TEXT
  ========================================================= */

  const guestText = useMemo(() => {
    if (safeChildren > 0) {
      return `${safeAdults} Adult${
        safeAdults !== 1 ? "s" : ""
      }, ${safeChildren} Child${
        safeChildren !== 1 ? "ren" : ""
      }`;
    }

    return `${safeGuests} Adult${
      safeGuests !== 1 ? "s" : ""
    }`;
  }, [
    safeAdults,
    safeChildren,
    safeGuests,
  ]);

  /* =========================================================
     BOOKING DATE DESCRIPTION
  ========================================================= */

  const cancellationText = date
    ? `Cancel before check-in on ${formattedDate} for a partial refund.`
    : "Select your check-in date for cancellation details.";

  /* =========================================================
     PRICE CALCULATION
  ========================================================= */

  const basePrice =
    safeGuests * safePricePerPerson;

  const taxes = Math.max(
    0,
    safeTotal - basePrice
  );

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

  const handleConfirmAndPay = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    console.log("Booking Details:", {
      firstName,
      lastName,
      email,
      phone,

      destination,
      date,
      time,

      adults: safeAdults,
      children: safeChildren,
      guests: safeGuests,

      pricePerPerson: safePricePerPerson,
      basePrice,
      taxes,
      total: safeTotal,

      image: bookingImage,
    });
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
            Confirm and pay
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

              <div className={styles.paymentDivider} />

              <h2 className={styles.paymentTitle}>
                Proceed to payment
              </h2>

              <p className={styles.paymentDescription}>
                You’ll be directed to KlarnaPay to
                complete payment.
              </p>

              <button
                type="submit"
                form="booking-form"
                className={styles.confirmButton}
              >
                <span>
                  Confirm and Pay
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

              <h3 className={styles.summaryHeading}>
                Date &amp; Time
              </h3>

              <p className={styles.summaryValue}>

                {formattedDate}

                {time
                  ? `, ${formattedTime}`
                  : ""}

              </p>

            </div>

            {/* ===============================================
                GUESTS
            =============================================== */}

            <div className={styles.summaryDivider} />

            <div className={styles.summaryItem}>

              <h3 className={styles.summaryHeading}>
                Guests
              </h3>

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
                  {safeGuests} Adult
                  {safeGuests !== 1 ? "s" : ""} × $
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
                ${safeTotal.toFixed(2)}
              </strong>

            </div>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default BookingPage;