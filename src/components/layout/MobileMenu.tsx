"use client";

import Link from "next/link";
import { X } from "lucide-react";

import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({
  isOpen,
  onClose,
}: MobileMenuProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div
        className={styles.backdrop}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={styles.menu}>
        <div className={styles.menuHeader}>
          <span className={styles.menuTitle}>
            Menu
          </span>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className={styles.navigation}>
          <Link
            href="/"
            className={styles.navLink}
            onClick={onClose}
          >
            Home
          </Link>

          <Link
            href="/destinations"
            className={styles.navLink}
            onClick={onClose}
          >
            Destinations
          </Link>

          <Link
            href="/packages"
            className={styles.navLink}
            onClick={onClose}
          >
            Packages
          </Link>

          <Link
            href="/experiences"
            className={styles.navLink}
            onClick={onClose}
          >
            Experiences
          </Link>

          <Link
            href="/gallery"
            className={styles.navLink}
            onClick={onClose}
          >
            Gallery
          </Link>

          About Us
          <Link
            href="/about-us"
            className={styles.navLink}
            onClick={onClose}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={styles.navLink}
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;