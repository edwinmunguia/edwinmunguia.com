"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import Logo from "../../assets/images/em.logo.svg";

const Header = () => {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image src={Logo} alt="Edwin Munguia" className={styles.logo} priority />
        </Link>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link href="/posts" className={`${styles.link} ${path.startsWith("/posts") ? styles.active : ""}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${styles.link} ${path === "/about" ? styles.active : ""}`}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
