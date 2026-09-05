import DestinationCard from "./DestinationCard";
import styles from "./DestinationGrid.module.css";

const destinations = [
  {
    name: "Northern Lights",
    slug: "northern-lights",
    image: "/images/destinations/Aurora%20Borealis.png",
    price: "$100",
  },
  {
    name: "Snaefellsnes",
    slug: "snaefellsnes",
    image: "/images/destinations/Snaefellsnes.png",
    price: "$100",
  },
  {
    name: "Golden Circle",
    slug: "golden-circle",
    image: "/images/destinations/Golden%20circle v1.png",
    price: "$100",
  },
  {
    name: "Landmannalaugar",
    slug: "landmannalaugar",
    image: "/images/destinations/Landmannalaugar.png",
    price: "$100",
  },
  {
    name: "South Coast",
    slug: "south-coast",
    image:
      "/images/destinations/Explore%20the%20Wild%20Side%20of%20Iceland.png",
    price: "$100",
  },
  {
    name: "Thorsmork",
    slug: "thorsmork",
    image: "/images/destinations/Thorsmörk.png",
    price: "$100",
  },
  {
    name: "Blue Lagoon Spa",
    slug: "blue-lagoon-spa-experience",
    image: "/images/destinations/Blue%20Lagoon%20Spa.png",
    price: "$80",
  },
  {
    name: "Glacier Hike Adventure",
    slug: "glacier-hike-adventure",
    image:
      "/images/destinations/Glacier%20Hike%20Adventure%20destination.png",
    price: "$80",
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
              slug={destination.slug}
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