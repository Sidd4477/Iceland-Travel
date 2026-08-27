import Image from "next/image";
import Link from "next/link";

import styles from "./DestinationCard.module.css";

interface DestinationCardProps {
  name: string;
  image: string;
  price: string;
  slug: string;
}

const DestinationCard = ({
  name,
  image,
  price,
  slug,
}: DestinationCardProps) => {
  return (
    <Link href={`/destinations/${slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33.33vw"
          className={styles.cardImage}
          priority={name === "Northern Lights"}
        />

        <div className={styles.cardOverlay} />

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{name}</h3>

          <p className={styles.cardPrice}>
            From <span>{price}</span>/Per Person
          </p>
        </div>
      </article>
    </Link>
  );
};

export default DestinationCard;