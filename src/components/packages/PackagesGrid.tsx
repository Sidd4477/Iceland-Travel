import PackageCard from "./PackageCard";

import styles from "./PackagesGrid.module.css";

const packages = [
  {
    title: "Blue Lagoon Spa Experience",
    location: "Southern Iceland",
    price: "$80 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Blue Lagoon Spa Experience.png",
  },
  {
    title: "Glacier Hike Adventure",
    location: "South Iceland",
    price: "$100 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Glacier Hike Adventure.png",
  },
  {
    title: "Golden Circle",
    location: "Southwest Iceland",
    price: "$80 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Golden Circle Packages.png",
  },
  {
    title: "Northern Lights",
    location: "All across Iceland",
    price: "$50 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Northern Lights Packages.png",
  },
  {
    title: "Snæfellsnes",
    location: "West Iceland",
    price: "$150 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Snaefellsnes Packages.png",
  },
  {
    title: "Landmannalaugar",
    location: "Icelandic Highlands",
    price: "$100 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Landmannalaugar Packages.png",
  },
  {
    title: "South Coast",
    location: "Southern Iceland",
    price: "$120 / per tourist",
    duration: "1 Day",
    image: "/images/packages/South Coast Packages.png",
  },
  {
    title: "Thorsmörk",
    location: "South Iceland",
    price: "$100 / per tourist",
    duration: "1 Day",
    image: "/images/packages/Thorsmörk Packages.png",
  },
];

const PackagesGrid = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {packages.map((item) => (
          <PackageCard
            key={item.title}
            title={item.title}
            location={item.location}
            price={item.price}
            duration={item.duration}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PackagesGrid;