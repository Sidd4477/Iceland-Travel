"use client";

import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contactWrapper}>

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className={styles.leftContent}>

          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Plan Your Next Journey With Us
            </h2>

            <p className={styles.description}>
              Share your travel details and let our travel experts design
              the perfect experience for you.
            </p>
          </div>

          {/* JOURNEY IMAGE */}
          <div className={styles.journeyImageWrapper}>
            <Image
              src="/images/contactus/Journey.png"
              alt="Iceland journey"
              fill
              priority
              className={styles.journeyImage}
              sizes="623px"
            />
          </div>

          {/* REACH OUT */}
          <h3 className={styles.reachTitle}>
            Reach out to us
          </h3>

          {/* CONTACT CARDS */}
          <div className={styles.contactCards}>

            <div className={styles.contactCard}>
              <div className={styles.iconCircle}>
                <Phone
                  size={40}
                  strokeWidth={1.5}
                  className={styles.icon}
                />
              </div>

              <span className={styles.cardText}>
                +354 6959039
              </span>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconCircle}>
                <Mail
                  size={40}
                  strokeWidth={1.5}
                  className={styles.icon}
                />
              </div>

              <span className={styles.cardText}>
                ghermannsson.ehf@
                <br />
                gmail.com
              </span>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconCircle}>
                <MapPin
                  size={40}
                  strokeWidth={1.5}
                  className={styles.icon}
                />
              </div>

              <span className={styles.cardText}>
                Arskogar 5, 109 Reykjavik
                <br />
                Iceland
              </span>
            </div>

          </div>
        </div>


        {/* =====================================================
            FORM
        ===================================================== */}
        <div className={styles.formCard}>

          <form className={styles.form}>

            {/* =========================
                FORM HEADING
            ========================= */}
            <h3 className={styles.formHeading}>
              Full Name
            </h3>

            {/* =========================
                FULL NAME INPUT
                608 x 66
            ========================= */}
            <input
              id="fullName"
              name="fullName"
              type="text"
              className={styles.fullNameInput}
            />


            {/* =========================
                CONTACT + EMAIL
                294 x 66 each
            ========================= */}
            <div className={styles.twoColumnFields}>

              <div className={styles.formField}>
                <label
                  htmlFor="contactNumber"
                  className={styles.fieldLabel}
                >
                  Contact Number
                </label>

                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  className={styles.input}
                />
              </div>


              <div className={styles.formField}>
                <label
                  htmlFor="email"
                  className={styles.fieldLabel}
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                />
              </div>

            </div>


            {/* =========================
                DESCRIPTION
                608 x 145
            ========================= */}
            <div className={styles.descriptionField}>

              <label
                htmlFor="description"
                className={styles.fieldLabel}
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                className={styles.textarea}
              />

            </div>


            {/* =========================
                SUBMIT
            ========================= */}
            <button
              type="submit"
              className={styles.submitButton}
            >
              <span>
                Submit Details
              </span>
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;