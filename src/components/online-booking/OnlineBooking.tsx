"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

import Header from "@/components/layout/Header";
import styles from "./OnlineBooking.module.css";

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
     ========================================================= */

  const destination = searchParams.get("destination") || "";
  const date = searchParams.get("date") || "";
  const time = searchParams.get("time") || "";

  const guests =
    Number(searchParams.get("guests")) || 1;

  const adults =
    Number(searchParams.get("adults")) || guests;

  const children =
    Number(searchParams.get("children")) || 0;

  const pricePerPerson =
    Number(searchParams.get("price")) || 0;

  const total =
    Number(searchParams.get("total")) ||
    guests * pricePerPerson;

  const bookingImage =
    searchParams.get("image") ||
    "/images/booking/Online Booking.png";

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
    if (children > 0) {
      return `${adults} Adult${
        adults !== 1 ? "s" : ""
      }, ${children} Child${
        children !== 1 ? "ren" : ""
      }`;
    }

    return `${guests} Adult${
      guests !== 1 ? "s" : ""
    }`;
  }, [adults, children, guests]);

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
    guests * pricePerPerson;

  const taxes = Math.max(
    0,
    total - basePrice
  );

  /* =========================================================
     CONFIRM AND PAY
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
      adults,
      children,
      guests,
      pricePerPerson,
      basePrice,
      taxes,
      total,
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
          BOOKING CONTENT
      ===================================================== */}

      <section className={styles.bookingSection}>

        {/* ===================================================
            PAGE HEADING
        =================================================== */}

        <div className={styles.pageHeading}>

          <Link
            href={
              destination
                ? `/destinations/${destination
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                : "/destinations"
            }
            className={styles.backButton}
            aria-label="Go back"
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

            <form
              id="booking-form"
              className={styles.contactCard}
              onSubmit={handleConfirmAndPay}
            >

              <h2 className={styles.contactTitle}>
                Enter your contact details
              </h2>

              <p className={styles.contactDescription}>
                Share your contact details so we can reach you
                with important updates and make your experience
                as smooth as possible.
              </p>

              <div className={styles.formGrid}>

                {/* FIRST NAME */}

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

                {/* LAST NAME */}

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

                {/* EMAIL */}

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

                {/* PHONE */}

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

            {/* =================================================
                CONFIRM AND BOOK
            ================================================= */}

            <div className={styles.confirmSection}>

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
              RIGHT SIDE
          ================================================= */}

          <aside className={styles.destinationPanel}>

            <div className={styles.destinationImage}>

              <Image
                src={bookingImage}
                alt={
                  destination ||
                  "Select your Destination"
                }
                fill
                className={styles.destinationImageAsset}
                sizes="256px"
              />

            </div>

            <h2 className={styles.destinationTitle}>
              Select your Destination
            </h2>

            <p className={styles.destinationDescription}>
              Select your first destination to get started, then
              proceed to plan the rest of your trip and discover
              places to visit.
            </p>

            {/* =================================================
                VIEW DESTINATIONS
                Redirects to destination page
            ================================================= */}

            <Link
              href="/destinations"
              className={styles.destinationButton}
            >
              <span>
                Visit Destinations
              </span>
            </Link>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default BookingPage;
