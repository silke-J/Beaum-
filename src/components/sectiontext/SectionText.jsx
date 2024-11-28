import styles from "./SectionText.module.css";

const SectionText = ({ text }) => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <p>{text}</p>
      </div>
    </section>
  );
};

export default SectionText;
