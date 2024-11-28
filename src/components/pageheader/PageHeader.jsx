import Button from "../button/Button";
import styles from "./pageHeader.module.css";

const PageHeader = ({ title, subTitle, readMore, img }) => {
  return (
    <header className={styles.header}>
      {img && <img src={img} alt={title} />}
      <div className={styles.headerContent}>
        <h1>{title}</h1>
        {subTitle && <p>{subTitle}</p>}
        {readMore && <Button title="Læs mere" />}
      </div>
      
    </header>
  );
};

export default PageHeader;
