import type { Metadata } from "next";
import styles from "./page.module.css";
import { GITHUB_URL, X_URL, LINKED_IN_URL, INSTAGRAM_URL } from "@/core/consts";

export const metadata: Metadata = {
  title: "About — Edwin Munguia",
  description: "Full Stack Developer with 7+ years of experience building web and mobile products.",
};

const INDUSTRIES = [
  { name: "EdTech", detail: "Online exam proctoring at scale" },
  { name: "Ticketing", detail: "Event marketplace for live experiences" },
  { name: "Delivery", detail: "On-demand logistics platform" },
];

const STACK = [
  "JavaScript", "TypeScript", "React", "React Native",
  "Expo", "Node.js", "Express", "Firebase", "MongoDB",
];

const LEARNING = ["PostgreSQL", "Go"];

const About = () => {
  return (
    <div className={styles.page}>

      {/* ── BIO ──────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.label}>About</p>
        <h1 className={styles.heading}>Edwin Munguia</h1>
        <div className={styles.bio}>
          <p>
            Full Stack Developer with 7+ years building web and mobile products.
            I&apos;ve worked across freelance projects, product companies, and my own
            ventures — currently focused on{" "}
            <a href="https://guru.delivery" target="_blank" rel="noopener noreferrer" className={styles.link}>
              Guru
            </a>
            , a delivery platform built from scratch in Honduras.
          </p>
          <p>
            I work mostly with JavaScript and TypeScript across the full stack —
            from React Native apps to Firebase backends. Outside of code, I&apos;m
            drawn to plants, rainy days, and time with the people I care about.
            Curious by nature, always learning something new.
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.label}>Where I&apos;ve worked</p>
        <ul className={styles.industries}>
          {INDUSTRIES.map((i) => (
            <li key={i.name} className={styles.industryItem}>
              <span className={styles.industryName}>{i.name}</span>
              <span className={styles.industryDetail}>{i.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── STACK ────────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.label}>Stack</p>
        <div className={styles.tags}>
          {STACK.map((s) => (
            <span key={s} className={styles.tag}>{s}</span>
          ))}
        </div>
      </section>

      {/* ── LEARNING ─────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.label}>Currently learning</p>
        <div className={styles.tags}>
          {LEARNING.map((s) => (
            <span key={s} className={`${styles.tag} ${styles.tagAccent}`}>{s}</span>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.label}>Find me</p>
        <ul className={styles.links}>
          <li><a href={LINKED_IN_URL} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></li>
          <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
          <li><a href={X_URL} target="_blank" rel="noopener noreferrer">X ↗</a></li>
          <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram ↗</a></li>
        </ul>
      </section>

    </div>
  );
};

export default About;
