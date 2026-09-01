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

import { useState } from "react";

import styles from "./BlueLagoonSpaExperienceContent.module.css";

const BlueLagoonSpaExperienceContent = () => {
  const pricePerPerson = 80;

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
      <div className={styles.stickyArea}>
        <div className={styles.layout}>
          <div className={styles.mainContent}>
            <div className={styles.overview}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.titleIcon}>🧭</span>
                Trip Overview
              </h2>

              <div className={styles.description}>
                <p>
                  This Blue Lagoon Spa Experience journey introduces you to Iceland’s
                  breathtaking night skies, dramatic landscapes, and the magical
                  glow of the aurora. Designed for an unforgettable experience,
                  the trip combines scenic surroundings with the thrill of
                  witnessing nature’s most spectacular light show.
                </p>

                <p>
                  Discover the mighty Gullfoss waterfall, witness the powerful
                  eruptions of Geysir’s geothermal area, and explore
                  Þingvellir National Park, where history, geology, and
                  breathtaking landscapes come together. The Blue Lagoon Spa Experience is a
                  perfect introduction to Iceland—compact, captivating, and
                  filled with remarkable experiences at every stop.
                </p>
              </div>

              <div className={styles.overviewImage}>
                <Image
                  src="/images/destinations/blue-lagoon-spa-experience/Blue Lagoon Spa Experience Trip 1.png"
                  alt="Blue Lagoon Spa Experience experience"
                  fill
                  priority
                  className={styles.image}
                  sizes="(max-width: 900px) 100vw, 876px"
                />
              </div>
            </div>
          </div>

          <aside className={styles.detailsCard}>
            <div className={styles.bookingPrice}>
              <strong>${pricePerPerson}</strong>
              <span>/per person</span>
            </div>

            <div className={styles.divider} />

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Where</label>

              <div className={styles.whereInput}>
                <span>Blue Lagoon Spa Experience</span>
              </div>
            </div>

            <div className={styles.dateTimeRow}>
              <div className={styles.halfField}>
                <label className={styles.fieldLabel}>Date</label>

                <div className={styles.inputWrapper}>
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className={styles.input}
                    aria-label="Date"
                  />

                  <CalendarDays className={styles.inputIcon} />
                </div>
              </div>

              <div className={styles.halfField}>
                <label className={styles.fieldLabel}>Time</label>

                <div className={styles.inputWrapper}>
                  <input
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className={styles.input}
                    aria-label="Time"
                  />

                  <Clock3 className={styles.inputIcon} />
                </div>
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.fieldLabel}>Guest</label>

              <button
                type="button"
                className={styles.guestInput}
                onClick={() => setIsGuestOpen((current) => !current)}
                aria-expanded={isGuestOpen}
                aria-haspopup="dialog"
              >
                <span>{totalGuests}</span>

                <ChevronDown
                  className={isGuestOpen ? styles.chevronOpen : undefined}
                />
              </button>

              {isGuestOpen && (
                <div className={styles.guestDropdown}>
                  <div className={styles.guestRow}>
                    <div className={styles.guestInfo}>
                      <span className={styles.guestTitle}>Adults</span>
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

                      <span className={styles.counterValue}>{adults}</span>

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

                  <div className={styles.guestRow}>
                    <div className={styles.guestInfo}>
                      <span className={styles.guestTitle}>Children</span>
                      <span className={styles.guestSubtitle}>Ages 2-12</span>
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

                      <span className={styles.counterValue}>{children}</span>

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

            <div className={styles.totalRow}>
              <span>Total</span>
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>

            <button type="button" className={styles.bookButton}>
              <span>Book Now</span>
            </button>
          </aside>

          <div className={styles.tripDetails}>
            <h2 className={styles.tripDetailsTitle}>
              <span className={styles.tripDetailsIcon}>✨</span>
              Trip Details
            </h2>

            <div className={styles.tripDetailsList}>
              <div className={styles.tripDetailsRow}>
                <div className={styles.tripDetailsLabel}>
                  <Clock3 />
                  <span>Duration:</span>
                </div>

                <strong>1 Complete Day</strong>
              </div>

              <div className={styles.tripDetailsRow}>
                <div className={styles.tripDetailsLabel}>
                  <CarFront />
                  <span>Visits:</span>
                </div>

                <strong>All Days</strong>
              </div>

              <div className={styles.tripDetailsRow}>
                <div className={styles.tripDetailsLabel}>
                  <Users />
                  <span>Group Size:</span>
                </div>

                <strong>10 Travellers</strong>
              </div>

              <div className={styles.tripDetailsRow}>
                <div className={styles.tripDetailsLabel}>
                  <Tag />
                  <span>Price:</span>
                </div>

                <strong>
                  $100
                  <small>/per person</small>
                </strong>
              </div>

              <div className={styles.tripDetailsRow}>
                <div className={styles.tripDetailsLabel}>
                  <CircleAlert />
                  <span>Inclusions:</span>
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

      <div className={styles.highlightGallery}>
        <div className={styles.highlightImage}>
          <Image
            src="/images/destinations/blue-lagoon-spa-experience/Blue Lagoon Spa Experience Trip 2.png"
            alt="Blue Lagoon Spa Experience over Iceland mountains"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />
        </div>

        <div className={styles.highlightImage}>
          <Image
            src="/images/destinations/blue-lagoon-spa-experience/Blue Lagoon Spa Experience Trip 3.png"
            alt="Blue Lagoon Spa Experience over Iceland landscape"
            fill
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 661px"
          />
        </div>
      </div>
    </section>
  );
};

export default BlueLagoonSpaExperienceContent;
