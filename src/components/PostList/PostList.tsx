import { BlogPost } from "@/core/interfaces";
import styles from "./PostList.module.css";
import PostItem from "../PostItem/PostItem";

type Props = {
  posts: BlogPost[];
};
const PostList: React.FC<Props> = ({ posts = [] }) => {
  return (
    <div className={styles.postList}>
      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </div>
  );
};

export default PostList;
