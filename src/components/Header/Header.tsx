"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/em.logo.svg";
import GithubIcon from "../Icons/GithubIcon/GithubIcon";
import XIcon from "../Icons/XIcon/XIcon";
import LinkedInIcon from "../Icons/LinkedInIcon/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon/InstagramIcon";

const Header = () => {
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <Image
          className={styles.logo}
          alt="Edwin Munguia"
          src={Logo}
          priority
        />
        <h1>Edwin Munguia</h1>
        <p>
          Lead front-end developer at{" "}
          <a className="highlighted" href="/">
            hoopla.com
          </a>
        </p>
      </div>

      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link
              href="/"
              className={`${styles.navLink} ${
                currentRoute === "/" ? styles.active : ""
              }`}
            >
              <span className={styles.navNumber}>01</span>
              <span className={styles.navSep}></span>
              <span className={styles.navLabel}>home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${styles.navLink} ${
                currentRoute.startsWith("/blog") ? styles.active : ""
              }`}
            >
              <span className={styles.navNumber}>02</span>
              <span className={styles.navSep}></span>
              <span className={styles.navLabel}>blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${styles.navLink} ${
                currentRoute === "/about" ? styles.active : ""
              }`}
            >
              <span className={styles.navNumber}>03</span>
              <span className={styles.navSep}></span>
              <span className={styles.navLabel}>about</span>
            </Link>
          </li>
        </ul>
      </nav>

      <ul className={styles.social}>
        <li>
          <a href="">
            <XIcon />
          </a>
        </li>
        <li>
          <a href="">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="">
            <LinkedInIcon />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
