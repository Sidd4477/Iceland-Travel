import DestinationCard from "./DestinationCard";
import styles from "./DestinationGrid.module.css";

const destinations = [
  {
    name: "Northern Lights",
    image: "/images/destinations/Aurora%20Borealis.png",
    price: "$100",
  },
  {
    name: "Snaefellsnes",
    image: "/images/destinations/Snaefellsnes.png",
    price: "$100",
  },
  {
    name: "Golden Circle",
    image: "/images/destinations/Golden%20circle.png",
    price: "$100",
  },
  {
    name: "Landmannalaugar",
    image: "/images/destinations/Landmannalaugar.png",
    price: "$100",
  },
  {
    name: "South Coast",
    image: "/images/destinations/Explore%20the%20Wild%20Side%20of%20Iceland.png",
    price: "$100",
  },
  {
    name: "Thorsmork",
    image: "/images/destinations/Thorsmörk.png",
    price: "$100",
  },
];

const DestinationGrid = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>
            Popular routes in Iceland
          </span>

          <h2 className={styles.heading}>
            Must Visit Destinations
          </h2>
        </div>

        <div className={styles.grid}>
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              name={destination.name}
              image={destination.image}
              price={destination.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationGrid;