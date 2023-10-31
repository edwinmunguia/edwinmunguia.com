import styles from "./page.module.css";
import Section from "@/components/Section/Section";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section type="rounded" width="wrapped" className={styles.aboutSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi! I'm Edwin Munguia</h1>
          <p className={styles.about}>
            
            .
          </p>
        </div>

     
      </Section>

      <Section
        type="rounded"
        width="wrapped"
        className={styles.projectsSection}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>Projects I've Built</h1>
        </div>

        {projects.map((project) => (
          <li>{project.title}</li>
        ))}
      </Section>
    </main>
  );
}
