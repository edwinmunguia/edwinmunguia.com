import styles from "./page.module.css";
import projects from "../../projects/projects.json";
import XIcon from "@/components/Icons/XIcon/XIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon/InstagramIcon";
import GithubIcon from "@/components/Icons/GithubIcon/GithubIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon/LinkedInIcon";
import { getPostsMetadata } from "@/core/helpers";
import PostList from "@/components/PostList/PostList";
import JsIcon from "@/components/Icons/JsIcon/JsIcon";
import ReactIcon from "@/components/Icons/ReactIcon/ReactIcon";
import NodeIcon from "@/components/Icons/NodeIcon/NodeIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon/TypescriptIcon";
import ExpoIcon from "@/components/Icons/ExpoIcon/ExpoIcon";
import ExpressIcon from "@/components/Icons/ExpressIcon/ExpressIcon";
import MongoIcon from "@/components/Icons/MongoIcon/MongoIcon";
import { GITHUB_URL, INSTAGRAM_URL, LINKED_IN_URL, X_URL } from "@/core/consts";
import FirebaseIcon from "@/components/Icons/FirebaseIcon/FirebaseIcon";

export default function Home() {
  const posts = getPostsMetadata();

  return (
    <main className={styles.home}>
      <section
        className={`${styles.hero} ${styles.section} ${styles.largeSpacedSection} ${styles.introSection}`}
      >
        <div className={styles.about}>
          <h2>I&apos;m</h2>
          <h1 className={styles.title}>Edwin Munguia</h1>
          <p>
            Full Stack Developer Specialized in{" "}
            <span className="highlighted">JavaScript</span>.
          </p>
        </div>

        <ul className={styles.social}>
          <li>
            <a target="_blank" href={X_URL}>
              <XIcon />
            </a>
          </li>
          <li>
            <a target="_blank" href={INSTAGRAM_URL}>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a target="_blank" href={GITHUB_URL}>
              <GithubIcon />
            </a>
          </li>
          <li>
            <a target="_blank" href={LINKED_IN_URL}>
              <LinkedInIcon />
            </a>
          </li>
        </ul>
      </section>

      <section
        className={`${styles.section} ${styles.smallSpacedSection} ${styles.projectSection}`}
      >
        <h2 className={styles.subtitle}>
          My Stack<span>.</span>
        </h2>
        <ul className={styles.stackList}>
          <li>
            <JsIcon />
            <span>JavaScript</span>
          </li>
          <li>
            <TypescriptIcon />
            <span>TypeScript</span>
          </li>
          <li>
            <ReactIcon />
            <span>React / React Native</span>
          </li>
          <li>
            <ExpoIcon />
            <span>Expo</span>
          </li>
          <li>
            <NodeIcon />
            <span>Node Js</span>
          </li>
          <li>
            <ExpressIcon />
            <span>Express Js</span>
          </li>
          <li>
            <MongoIcon />
            <span>MongoDB</span>
          </li>
          <li>
            <FirebaseIcon />
            <span>Firebase</span>
          </li>
        </ul>
      </section>

      <section
        className={`${styles.section} ${styles.smallSpacedSection} ${styles.stackSection}`}
      >
        <h2 className={styles.subtitle}>
          Latest writings<span>.</span>
        </h2>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
