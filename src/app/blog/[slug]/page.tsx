import fs from "fs";
import { NextPage } from "next";
import { POSTS_FOLDER } from "@/core/consts";
import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import matter from "gray-matter";
import { BlogPost } from "@/core/interfaces";
import { formatDate, getPostsMetadata } from "@/core/helpers";
import styles from "./page.module.css";
import LangIcon from "@/components/LangIcon/LangIcon";
import DateIcon from "@/components/Icons/DateIcon/DateIcon";

type Props = {
  params: {
    slug: string;
  };
};

const CodeHighlighter = ({
  children,
  ...rest
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  if ("type" in children && children["type"] === "code") {
    const language = children["props"]["className"]?.replace("lang-", "");
    const content = children["props"]["children"];

    console.log(language);

    return (
      <SyntaxHighlighter language={language} style={oneDark}>
        {content}
      </SyntaxHighlighter>
    );
  } else {
    return <pre {...rest}>{children}</pre>;
  }
};

const getPostContent = (slug: string): BlogPost => {
  const file = `${POSTS_FOLDER}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");

  const postFrontMatter = matter(content);
  const { title, description, date, category, cover, tags } =
    postFrontMatter.data;

  return {
    title,
    description,
    date,
    category,
    tags: tags.split(",").map((tag: string) => tag.trim()),
    cover,
    content: postFrontMatter.content,
    slug,
  };
};

const markDownToJsxOptions = {
  overrides: {
    pre: CodeHighlighter,
  },
};

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.map((post) => ({ slug: post.slug }));
};

const PostPage: NextPage<Props> = ({ params }) => {
  const post = getPostContent(params.slug);
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <div className={styles.postTitleCategory}>
          <div className={styles.postCategory}>
            <LangIcon lang={post.category} />
          </div>
          <div className={styles.postTitle}>{post.title}</div>
          <div className={styles.postInfo}>
            <div className={styles.postDate}>
              <DateIcon /> {formatDate(post.date)}
            </div>
            <div className={styles.postTags}>
              {post.tags.map((tag) => (
                <div className={styles.tag} key={tag}>
                  <span>#</span>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.postCover}>
          <img src={post.cover} alt={post.title} />
        </div>
      </div>

      <div className={styles.postBlock}>
        <div className={styles.postContent}>
          <Markdown options={markDownToJsxOptions}>{post.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
