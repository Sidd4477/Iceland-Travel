import {
  CalendarDays,
  CarFront,
  CircleDollarSign,
  UserRound,
} from "lucide-react";

import styles from "./WhyChooseUs.module.css";

const features = [
  {
    title: "Seamless Booking",
    description:
      "Book your expedition with a secure, seamless reservation process.",
    icon: CalendarDays,
  },
  {
    title: "Arrival & Departure Service",
    description:
      "Seamless arrivals and departures with private, professional transfers.",
    icon: CarFront,
  },
  {
    title: "Professional Guides",
    description:
      "Explore with trained experts backed by local knowledge and years of experience.",
    icon: UserRound,
  },
  {
    title: "Transparent Pricing",
    description:
      "Thoughtful pricing reflecting precision, safety, and exclusivity.",
    icon: CircleDollarSign,
  },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.topContent}>
        <div className={styles.headingBlock}>
          <span className={styles.eyebrow}>Why Choose Us</span>

          <h2 className={styles.title}>
            What sets
            <br />
            every trip apart
          </h2>
        </div>

        <p className={styles.supportingText}>
          Thoughtfully crafted experiences that bring together adventure,
          <br />
          connection and the beauty of the outdoors in every journey.
        </p>
      </div>

      <div className={styles.banner}>
        <img
          src="/images/backgrounds/Why%20Choose%20Us%20Banner.png"
          alt="Why choose us"
          className={styles.bannerImage}
        />

        <div className={styles.features}>
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={styles.featureCard}
              >
                <div className={styles.iconBox}>
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>
                    {feature.title}
                  </h3>

                  <p className={styles.cardDescription}>
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;