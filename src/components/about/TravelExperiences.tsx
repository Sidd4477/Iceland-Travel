import styles from "./TravelExperiences.module.css";

const TravelExperiences = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <h2 className={styles.title}>
          Crafting Travel Experiences That Connect People
          <br />
          Through Community, Care &amp; Planning
        </h2>

        {/* Banner Image */}
        <div className={styles.banner}>
          <img
            src="/images/backgrounds/Travel%20Experiences%20Banner.png"
            alt="Travel experiences in Iceland"
            className={styles.bannerImage}
          />
        </div>

        {/* Bottom Content */}
        <div className={styles.content}>
          <p className={styles.paragraph}>
            Founded on the belief that travel should be personal and
            enriching, we reimagined how people experience it together.
            Our passion for meaningful journeys has grown into a trusted
            travel brand.
          </p>

          <p className={styles.paragraph}>
            We&apos;ve evolved with our travelers. From weekend getaways to
            group journeys, every itinerary reflects our commitment to
            authenticity and safety. Our focus is on bringing travelers
            together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TravelExperiences;