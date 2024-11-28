import Newsletter from "../components/newletter/Newletter";
import styles from "../style/pages/contact.module.css";
const Contact = () => {
  return (
    <article className={styles.contact}>
      <h2>Nyhedsbrev</h2>
      <Newsletter />
    </article>
  );
};

export default Contact;
