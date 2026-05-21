import { getPostsMetadata } from "@/core/helpers";
import styles from "./page.module.css";
import PostList from "@/components/PostList/PostList";

const Posts: React.FC = () => {
  const posts = getPostsMetadata();

  return (
    <div className={styles.blog}>
      <h1 className={styles.blogTitle}>
        Explore my articles<span>.</span>
      </h1>
      <div className={styles.blogList}>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Posts;
