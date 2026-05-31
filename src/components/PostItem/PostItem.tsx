import Link from "next/link";
import { BlogPost } from "@/core/interfaces";
import styles from "./PostItem.module.css";

const PostItem: React.FC<BlogPost> = ({ title, slug, date, langs, defaultLang }) => {
  return (
    <div className={styles.postItem}>
      <Link href={`/posts/${defaultLang}/${slug}`} className={styles.title}>
        {title}
      </Link>
      <div className={styles.meta}>
        <span className={styles.date}>{date}</span>
        {langs.length > 1 && (
          <div className={styles.langs}>
            {langs.map((l) => (
              <span key={l} className={styles.lang}>{l.toUpperCase()}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostItem;
