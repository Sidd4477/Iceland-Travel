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
  /* =====================================================
     PACKAGE → DESTINATION ROUTES
  ===================================================== */

  const packageRoutes: Record<string, string> = {
    /* =========================
       BLUE LAGOON
    ========================= */

    "Blue Lagoon Spa Experience":
      "/destinations/blue-lagoon-spa-experience",

    /* =========================
       GLACIER HIKE
    ========================= */

    "Glacier Hike Adventure":
      "/destinations/glacier-hike-adventure",

    /* =========================
       GOLDEN CIRCLE
    ========================= */

    "Golden Circle":
      "/destinations/golden-circle",

    "Golden Circle Package":
      "/destinations/golden-circle",

    /* =========================
       NORTHERN LIGHTS
    ========================= */

    "Northern Lights":
      "/destinations/northern-lights",

    "Northern Lights Package":
      "/destinations/northern-lights",

    /* =========================
       SNAEFELLSNES
    ========================= */

    "Snæfellsnes":
      "/destinations/snaefellsnes",

    "Snaefellsnes":
      "/destinations/snaefellsnes",

    "Snæfellsnes Package":
      "/destinations/snaefellsnes",

    "Snaefellsnes Package":
      "/destinations/snaefellsnes",

    /* =========================
       LANDMANNALAUGAR
    ========================= */

    "Landmannalaugar":
      "/destinations/landmannalaugar",

    "Landmannalaugar Package":
      "/destinations/landmannalaugar",

    /* =========================
       SOUTH COAST
    ========================= */

    "South Coast":
      "/destinations/south-coast",

    "South Coast Package":
      "/destinations/south-coast",

    /* =========================
       THORSMORK
    ========================= */

    "Thorsmörk":
      "/destinations/thorsmork",

    "Thorsmork":
      "/destinations/thorsmork",

    "Thorsmörk Package":
      "/destinations/thorsmork",

    "Thorsmork Package":
      "/destinations/thorsmork",
  };

  /* =====================================================
     FALLBACK SLUG GENERATOR
  ===================================================== */

  const createSlug = (value: string): string => {
    return value
      .trim()
      .toLowerCase()
      .replace(/package/g, "")
      .replace(/æ/g, "ae")
      .replace(/ö/g, "o")
      .replace(/ä/g, "a")
      .replace(/á/g, "a")
      .replace(/é/g, "e")
      .replace(/í/g, "i")
      .replace(/ó/g, "o")
      .replace(/ú/g, "u")
      .replace(/ý/g, "y")
      .replace(/ð/g, "d")
      .replace(/þ/g, "th")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  /* =====================================================
     FINAL DESTINATION ROUTE
  ===================================================== */

  const packageRoute =
    packageRoutes[title] ||
    `/destinations/${createSlug(title)}`;

  /* =====================================================
     CARD
  ===================================================== */

  return (
    <article className={styles.card}>

      {/* =================================================
          PACKAGE IMAGE
      ================================================= */}

      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.image}
          sizes="
            (max-width: 480px) 100vw,
            (max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            50vw
          "
          priority={false}
        />
      </div>

      {/* =================================================
          PACKAGE TITLE
      ================================================= */}

      <h2 className={styles.title}>
        {title}
      </h2>

      {/* =================================================
          PACKAGE META INFORMATION
      ================================================= */}

      <div className={styles.meta}>

        {/* =========================
            LOCATION
        ========================= */}

        <div className={styles.metaItem}>
          <MapPin
            className={styles.metaIcon}
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <span>{location}</span>
        </div>

        {/* =========================
            PRICE
        ========================= */}

        <div className={styles.metaItem}>
          <CircleDollarSign
            className={styles.metaIcon}
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <span>{price}</span>
        </div>

        {/* =========================
            DURATION
        ========================= */}

        <div className={styles.metaItem}>
          <CalendarDays
            className={styles.metaIcon}
            size={17}
            strokeWidth={1.5}
            aria-hidden="true"
          />

          <span>{duration}</span>
        </div>

      </div>

      {/* =================================================
          VIEW PACKAGE DETAILS
      ================================================= */}

      <Link
        href={packageRoute}
        className={styles.detailsButton}
        aria-label={`View details for ${title}`}
      >
        <span>
          View Package Details
        </span>
      </Link>

    </article>
  );
};

export default PackageCard;