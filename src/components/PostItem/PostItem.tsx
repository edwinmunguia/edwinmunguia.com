import Link from "next/link";
import { BlogPost } from "@/core/interfaces";
import styles from "./PostItem.module.css";
import LangIcon from "../LangIcon/LangIcon";

const PostItem: React.FC<BlogPost> = ({
  title,
  slug,
  date,
  category,
  tags,
  defaultLang,
}) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.postCategoryIconWrapper}>
        <LangIcon lang={category} />
      </div>
      <div className={styles.linkDescription}>
        <Link className={styles.postLink} href={`/posts/${defaultLang}/${slug}`}>
          <div className={styles.postTitle}>{title}</div>
        </Link>
        <div className={styles.postTags}>
          {tags.map((tag) => (
            <div key={tag} className={styles.tag}>
              <span>#</span>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.postDate}>{date.toString()}</div>
    </div>
  );
};

export default PostItem;
