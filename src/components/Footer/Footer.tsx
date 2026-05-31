import styles from "./Footer.module.css";
import { GITHUB_URL, X_URL, LINKED_IN_URL } from "@/core/consts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <span className={styles.copy}>© {new Date().getFullYear()} Edwin Munguia</span>
        <ul className={styles.links}>
          <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={X_URL} target="_blank" rel="noopener noreferrer">X</a></li>
          <li><a href={LINKED_IN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
