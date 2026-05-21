"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/em.logo.svg";
import { useEffect, useRef } from "react";

const Header = () => {
  const currentRoute = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Image
          className={styles.logo}
          alt="Edwin Munguia"
          src={Logo}
          priority
        />

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
                href="/posts"
                className={`${styles.navLink} ${
                  currentRoute.startsWith("/posts") ? styles.active : ""
                }`}
              >
                <span className={styles.navNumber}>02</span>
                <span className={styles.navSep}></span>
                <span className={styles.navLabel}>blog</span>
              </Link>
            </li>
            {/* <li>
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
          </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
