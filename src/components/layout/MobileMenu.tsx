"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>

      {/* =====================================================
          BACKDROP
      ===================================================== */}

      <div
        className={styles.backdrop}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* =====================================================
          MENU
      ===================================================== */}

      <aside className={styles.menu}>

        {/* ===================================================
            CLOSE BUTTON
        =================================================== */}

        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <X
            size={32}
            strokeWidth={1.4}
          />
        </button>

        {/* ===================================================
            LEFT IMAGE
        =================================================== */}

        <div className={styles.imageWrapper}>

          <Image
            src="/icons/Hamburger Image.png"
            alt="Iceland landscape"
            fill
            priority
            sizes="372px"
            className={styles.menuImage}
          />

        </div>

        {/* ===================================================
            GET IN TOUCH
        =================================================== */}

        <div className={styles.contactInfo}>

          <span className={styles.contactLabel}>
            Get Touch
          </span>

          <a
            href="mailto:ghermannsson.ehf@gmail.com"
            className={styles.email}
          >
            ghermannsson.ehf@gmail.com
          </a>

        </div>

        {/* ===================================================
            NAVIGATION
        =================================================== */}

        <nav className={styles.navigation}>

          {/* HOME */}

          <Link
            href="/"
            className={styles.navLink}
            onClick={onClose}
          >
            Home
          </Link>

          {/* ABOUT */}

          <Link
            href="/about-us"
            className={styles.navLink}
            onClick={onClose}
          >
            About
          </Link>

          {/* DESTINATIONS */}

          <Link
            href="/destinations"
            className={styles.navLink}
            onClick={onClose}
          >
            Destinations
          </Link>

          {/* PACKAGES */}

          <Link
            href="/packages"
            className={styles.navLink}
            onClick={onClose}
          >
            Packages
          </Link>

          {/* PHOTO GALLERY */}

          <Link
            href="/photo-gallery"
            className={styles.navLink}
            onClick={onClose}
          >
            Photo Gallery
          </Link>

          {/* CONTACT US */}

          <Link
            href="/contact"
            className={styles.navLink}
            onClick={onClose}
          >
            Contact Us
          </Link>

          {/* =================================================
              ONLINE BOOKING

              Click karne par:
              /online-booking

              page open hoga aur menu close hoga.
          ================================================= */}

          <Link
            href="/online-booking"
            className={styles.navLink}
            onClick={onClose}
          >
            Online Booking
          </Link>

        </nav>

        {/* ===================================================
            SOCIAL ICONS
        =================================================== */}

        <div className={styles.socials}>

          {/* =================================================
              X
          ================================================= */}

          <a
            href="#"
            className={styles.socialLink}
            aria-label="X"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 4L19 20M19 4L5 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </a>

          {/* =================================================
              FACEBOOK
          ================================================= */}

          <a
            href="#"
            className={styles.socialLink}
            aria-label="Facebook"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="currentColor"
              />

              <path
                d="M13.4 20v-7h2.35l.35-2.75H13.4V8.5c0-.8.22-1.35 1.38-1.35h1.47V4.7c-.25-.03-1.1-.1-2.08-.1-2.05 0-3.45 1.25-3.45 3.55v2.1H8.4V13h2.32v7h2.68Z"
                fill="#6f6d6d"
              />
            </svg>
          </a>

          {/* =================================================
              LINKEDIN
          ================================================= */}

          <a
            href="#"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="2"
                fill="currentColor"
              />

              <circle
                cx="8"
                cy="9"
                r="1.25"
                fill="#6f6d6d"
              />

              <path
                d="M7 11.1h2v6H7v-6Zm3.5 0h1.9v.82h.03c.27-.5.94-1.05 1.95-1.05 2.08 0 2.47 1.37 2.47 3.15v3.08h-2v-2.73c0-.65-.01-1.48-.9-1.48-.9 0-1.04.7-1.04 1.43v2.78h-2v-6Z"
                fill="#6f6d6d"
              />
            </svg>
          </a>

          {/* =================================================
              INSTAGRAM
          ================================================= */}

          <a
            href="#"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3.5"
                y="3.5"
                width="17"
                height="17"
                rx="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <circle
                cx="17.4"
                cy="6.8"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>

      </aside>

    </div>
  );
};

export default MobileMenu;