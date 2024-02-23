import { getPostsMetadata } from "@/core/helpers";
import PostItem from "@/components/PostItem/PostItem";
import styles from "./page.module.css";
import PostList from "@/components/PostList/PostList";

const Blog: React.FC = () => {
  const posts = getPostsMetadata();

  return (
    <div className={styles.blog}>
      <h1 className={styles.blogTitle}>
        Explore my writings<span>.</span>
      </h1>
      <div className={styles.blogList}>
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Blog;
