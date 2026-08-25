"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="Hermannsson Home"
          >
            <Image
              src="/icons/Logo (2).png"
              alt="G. Hermannsson Tourist Transportation"
              width={205}
              height={46}
              priority
              className={styles.logo}
            />
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;