import Image from "next/image";

import styles from "./DestinationCard.module.css";

interface DestinationCardProps {
  name: string;
  image: string;
  price: string;
}

const DestinationCard = ({
  name,
  image,
  price,
}: DestinationCardProps) => {
  return (
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
  );
};

export default DestinationCard;