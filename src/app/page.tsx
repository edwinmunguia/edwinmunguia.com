import styles from "./page.module.css";
import projects from "../../projects/projects.json";
import { getPostsMetadata } from "@/core/helpers";
import PostList from "@/components/PostList/PostList";
import { GITHUB_URL, X_URL, LINKED_IN_URL, INSTAGRAM_URL } from "@/core/consts";
import Link from "next/link";

export default function Home() {
  const posts = getPostsMetadata();
  const featured = projects[0]!;

  return (
    <div className={styles.page}>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.name}>Edwin Munguia</p>
          <h1 className={styles.heading}>
            I build apps people<br />use every day.
          </h1>
          <p className={styles.role}>
            Full Stack Developer
            <span className={styles.dot}>·</span>
            Tocoa, HN
          </p>
          <ul className={styles.social}>
            <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={X_URL} target="_blank" rel="noopener noreferrer">X</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={LINKED_IN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>

        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.featuredCard}
        >
          <p className={styles.cardLabel}>Featured Work</p>
          <p className={styles.cardTitle}>{featured.title}</p>
          <p className={styles.cardDesc}>{featured.description}</p>
          <div className={styles.stack}>
            {featured.stack.map((s) => (
              <span key={s} className={styles.stackTag}>{s}</span>
            ))}
          </div>
          <span className={styles.cardLink}>
            {featured.url.replace("https://", "")} ↗
          </span>
        </a>
      </section>

{/* ── WRITING ──────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Writing</h2>
          <Link href="/posts" className={styles.sectionMore}>All posts →</Link>
        </div>
        <PostList posts={posts} />
      </section>

    </div>
  );
}
