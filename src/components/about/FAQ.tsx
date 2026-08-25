"use client";

import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";

import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Are your Trips suitable for First time Adventurers?",
    answer:
      "Yes. Our trips are designed for travelers with different experience levels. We guide you step by step and help you choose experiences that match your comfort level.",
  },
  {
    question: "Do your tours include accommodation?",
    answer:
      "Accommodation depends on the selected tour or package. The inclusions for each journey are clearly mentioned before you make your booking.",
  },
  {
    question: "How physically demanding are your trips?",
    answer:
      "The physical requirements vary depending on the experience. We provide clear information about walking, hiking, and activity levels so you can choose a trip that suits you.",
  },
  {
    question: "What happens in case of unexpected Weather?",
    answer:
      "Safety always comes first. If weather conditions become unsafe, our guides may adjust the itinerary, reschedule an activity, or recommend a suitable alternative.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section className={styles.section}>
      {/* Section Heading */}
      <div className={styles.heading}>
        <span className={styles.eyebrow}>FAQs</span>

        <h2 className={styles.title}>
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Content */}
      <div className={styles.content}>
        {/* Left FAQ Box */}
        <div className={styles.faqBox}>
          {/* Contact Header */}
          <div className={styles.contactHeader}>
            <div className={styles.emailBlock}>
              <span className={styles.emailLabel}>Email</span>

              <span className={styles.email}>
                ghermannsson.ehf@gmail.com
              </span>
            </div>

            <button
              type="button"
              className={styles.contactButton}
            >
              <span className={styles.contactText}>
                Get In Touch
              </span>

              <span className={styles.contactIcon}>
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
            </button>
          </div>

          {/* Questions */}
          <div className={styles.questions}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className={`${styles.item} ${
                    isOpen ? styles.itemOpen : ""
                  }`}
                >
                  <button
                    type="button"
                    className={styles.questionButton}
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.question}>
                      {item.question}
                    </span>

                    <span
                      className={styles.toggle}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus
                          size={14}
                          strokeWidth={2}
                        />
                      ) : (
                        <Plus
                          size={14}
                          strokeWidth={2}
                        />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className={styles.answerWrapper}>
                      <p className={styles.answer}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <img
            src="/images/faqs/FAQs%20Image.png"
            alt="Northern Lights in Iceland"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;