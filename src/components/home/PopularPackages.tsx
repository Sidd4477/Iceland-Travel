"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CalendarDays,
  MapPin,
  CircleDollarSign,
  ArrowUpRight,
} from "lucide-react";

import styles from "./PopularPackages.module.css";

const packages = [
  {
    id: 1,
    title: "Golden Circle",
    location: "Southwest Iceland",
    price: "$100 / Tourist",
    duration: "1 Day",
    image: "/images/packages/Golden Circle Packages.png",
    route: "/destinations/golden-circle",
  },
  {
    id: 2,
    title: "Northern Lights",
    location: "Southwest Iceland",
    price: "$100 / Tourist",
    duration: "1 Day",
    image: "/images/packages/Northern Lights Packages.png",
    route: "/destinations/northern-lights",
  },
  {
    id: 3,
    title: "Snaefellsnes",
    location: "Southwest Iceland",
    price: "$100 / Tourist",
    duration: "1 Day",
    image: "/images/packages/Snaefellsnes Packages.png",
    route: "/destinations/snaefellsnes",
  },
  {
    id: 4,
    title: "Thorsmörk",
    location: "Southwest Iceland",
    price: "$100 / Tourist",
    duration: "1 Day",
    image: "/images/packages/Thorsmörk Packages.png",
    route: "/destinations/thorsmork",
  },
];

const PopularPackages = () => {
  return (
    <section className={styles.section}>
      {/* =========================================
          HEADER
      ========================================= */}
      <div className={styles.sectionHeader}>
        <div className={styles.headingWrapper}>
          <p className={styles.eyebrow}>Handcrafted Tour Packages</p>

          <h2 className={styles.title}>Our Packages</h2>
        </div>

        <Link
          href="/packages"
          className={styles.viewAllButton}
          aria-label="View all packages"
        >
          <span className={styles.viewAllText}>
            View All Packages
          </span>

          <span className={styles.viewAllCircle}>
            <ArrowUpRight className={styles.viewAllIcon} />
          </span>
        </Link>
      </div>

      {/* =========================================
          PACKAGES
      ========================================= */}
      <div className={styles.packagesGrid}>
        {packages.map((pkg) => (
          <article className={styles.packageCard} key={pkg.id}>
            {/* IMAGE */}
            <div className={styles.imageWrapper}>
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                sizes="(max-width: 768px) 100vw, 314px"
                className={styles.packageImage}
              />
            </div>

            {/* TITLE */}
            <h3 className={styles.packageTitle}>{pkg.title}</h3>

            {/* META INFORMATION */}
            <div className={styles.packageMeta}>
              <div className={styles.metaItem}>
                <MapPin className={styles.metaIcon} />
                <span>{pkg.location}</span>
              </div>

              <div className={styles.metaItem}>
                <CircleDollarSign className={styles.metaIcon} />
                <span>{pkg.price}</span>
              </div>

              <div className={styles.metaItem}>
                <CalendarDays className={styles.metaIcon} />
                <span>{pkg.duration}</span>
              </div>
            </div>

            {/* VIEW DETAILS */}
            <Link
              href={pkg.route}
              className={styles.detailsButton}
              aria-label={`View package details for ${pkg.title}`}
            >
              View Package Details
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularPackages;