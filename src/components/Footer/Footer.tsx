import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Edwin Munguia. Coded & Designed with ❤️ and lot of
        ☕.
      </p>
    </footer>
  );
};

export default Footer;
