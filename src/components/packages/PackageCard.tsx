"use client";

import Image from "next/image";
import {
  CalendarDays,
  CircleDollarSign,
  MapPin,
} from "lucide-react";

import styles from "./PackageCard.module.css";

interface PackageCardProps {
  title: string;
  location: string;
  price: string;
  duration: string;
  image: string;
}

const PackageCard = ({
  title,
  location,
  price,
  duration,
  image,
}: PackageCardProps) => {
  return (
    <article className={styles.card}>
      {/* =====================================================
          PACKAGE IMAGE
      ===================================================== */}
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="636px"
        />
      </div>

      {/* =====================================================
          PACKAGE TITLE
      ===================================================== */}
      <h2 className={styles.title}>{title}</h2>

      {/* =====================================================
          PACKAGE META
      ===================================================== */}
      <div className={styles.meta}>
        <div className={styles.metaItem}>
          <MapPin
            className={styles.metaIcon}
            size={17}
            strokeWidth={1.5}
          />

          <span>{location}</span>
        </div>

        <div className={styles.metaItem}>
          <CircleDollarSign
            className={styles.metaIcon}
            size={17}
            strokeWidth={1.5}
          />

          <span>{price}</span>
        </div>

        <div className={styles.metaItem}>
          <CalendarDays
            className={styles.metaIcon}
            size={17}
            strokeWidth={1.5}
          />

          <span>{duration}</span>
        </div>
      </div>

      {/* =====================================================
          VIEW DETAILS BUTTON
      ===================================================== */}
      <button
        type="button"
        className={styles.detailsButton}
      >
        <span>View Package Details</span>
      </button>
    </article>
  );
};

export default PackageCard;