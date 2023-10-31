import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Image
          alt="Edwin Munguia"
          src="/images/em.logo.svg"
          width={55}
          height={27}
          priority
        />
      </h1>
      <nav className={styles.header__nav}>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
