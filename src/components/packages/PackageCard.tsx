"use client";

import Image from "next/image";
import Link from "next/link";
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
  /*
   * =====================================================
   * PACKAGE DETAIL ROUTES
   * =====================================================
   */

  const packageRoutes: Record<string, string> = {
    "Blue Lagoon Spa Experience":
      "/destinations/blue-lagoon",

    "Glacier Hike Adventure":
      "/destinations/glacier-hike",

    "Golden Circle":
      "/destinations/golden-circle",

    "Golden Circle Package":
      "/destinations/golden-circle",

    "Northern Lights":
      "/destinations/northern-lights",

    "Northern Lights Package":
      "/destinations/northern-lights",

    Snaefellsnes:
      "/destinations/snaefellsnes",

    "Snaefellsnes Package":
      "/destinations/snaefellsnes",

    Landmannalaugar:
      "/destinations/landmannalaugar",

    "Landmannalaugar Package":
      "/destinations/landmannalaugar",

    "South Coast":
      "/destinations/south-coast",

    "South Coast Package":
      "/destinations/south-coast",

    Thorsmork:
      "/destinations/thorsmork",

    "Thorsmork Package":
      "/destinations/thorsmork",
  };

  /*
   * =====================================================
   * FALLBACK ROUTE
   * =====================================================
   */

  const packageRoute =
    packageRoutes[title] ||
    `/destinations/${title
      .toLowerCase()
      .replace(/package/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

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
      <h2 className={styles.title}>
        {title}
      </h2>

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
          VIEW PACKAGE DETAILS
      ===================================================== */}
      <Link
        href={packageRoute}
        className={styles.detailsButton}
      >
        <span>
          View Package Details
        </span>
      </Link>
    </article>
  );
};

export default PackageCard;