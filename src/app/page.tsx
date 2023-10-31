import styles from "./page.module.css";
import Section from "@/components/Section/Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section type="rounded" className={styles.about}>
        <div className={styles.about__content}>
          <h1 className={styles.about__title}>Hi! I'm Edwin.</h1>
          <p className={styles.about__description}>Full-Stack MERN Developer</p>
        </div>

        <ul className={styles.about__social}>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </Section>
    </main>
  );
}
