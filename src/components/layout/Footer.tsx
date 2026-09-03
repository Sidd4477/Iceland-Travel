"use client";

import Image from "next/image";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* =========================================
          FOOTER BANNER WRAPPER
          FIGMA: 1440px × 1039px
      ========================================= */}

      <div className={styles.footerWrapper}>
        {/* =========================================
            FOOTER BANNER
            FIGMA: 1440px × 1039px
        ========================================= */}

        <div className={styles.footerBanner}>
          {/* =========================================
              BACKGROUND BANNER
          ========================================= */}

          <Image
            src="/images/backgrounds/Footer Banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.footerBannerImage}
          />

          {/* =========================================
              FOOTER WRAPPER IMAGE
              SAME SIZE AS BANNER
          ========================================= */}

          <Image
            src="/images/backgrounds/Footer Banner Wrapper.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.footerWrapperImage}
          />

          {/* =========================================
              FOOTER CONTENT
          ========================================= */}

          <div className={styles.footerContent}>
            {/* =========================================
                MAIN PAGE
            ========================================= */}

            <div className={styles.mainPage}>
              <h3 className={styles.columnTitle}>Main Page</h3>

              <nav className={styles.footerLinks}>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/services">Services</a>
                <a href="/gallery">Photo Gallery</a>
                <a href="/pricelist">Pricelist</a>
                <a href="/online-booking">Online Booking</a>
                <a href="/contact">Contact</a>
              </nav>
            </div>

            {/* =========================================
                CENTER CONTENT
            ========================================= */}

            <div className={styles.centerContent}>
              <h2 className={styles.footerHeading}>
                Expedition Expertise at
                <br />
                Your Service
              </h2>

              {/* =========================================
                  BEGIN YOUR JOURNEY BUTTON
              ========================================= */}

              <a
                href="/online-booking"
                className={styles.journeyButton}
              >
                <span className={styles.journeyText}>
                  Begin Your Journey
                </span>

                <span className={styles.journeyCircle}>
                  <svg
                    className={styles.journeyIcon}
                    width="16.5"
                    height="22.5"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 11L11 3M4 3H11V10"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* =========================================
                SOCIAL MEDIA
            ========================================= */}

            <div className={styles.socialMedia}>
              <h3 className={styles.columnTitle}>Social Media</h3>

              <nav className={styles.socialLinks}>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Facebook</a>
                <a href="#">X</a>
              </nav>
            </div>

            {/* =========================================
                COPYRIGHT
            ========================================= */}

            <p className={styles.copyright}>
              2026 G.Harmannsson . All Rights Reserved
            </p>

            {/* =========================================
                LEGAL LINKS
            ========================================= */}

            <div className={styles.legalLinks}>
              <a href="/privacy-policy">Privacy Policy</a>

              <a href="/terms-and-conditions">
                Terms &amp; Conditions
              </a>
            </div>

            {/* =========================================
                BRAND NAME
                FIGMA:
                Width: 1198px
                Height: 65px
                Top: 5107px
                Left: 115px
            ========================================= */}

            <div className={styles.brandName}>
              HERMANNSSON
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;