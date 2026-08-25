import styles from "./AboutStory.module.css";

const AboutStory = () => {
  return (
    <section className={styles.story}>
      <div className={styles.storyContent}>
        <span className={styles.label}>Our Story</span>

        <p className={styles.description}>
          Welcome to Tourist Attractions in Iceland, your guide to the best
          and most exciting destinations in this beautiful country. From
          breathtaking natural wonders to cultural landmarks, we offer a wide
          range of experiences for travelers of all ages. Let us help you plan
          your dream vacation in Iceland!
        </p>
      </div>
    </section>
  );
};

export default AboutStory;