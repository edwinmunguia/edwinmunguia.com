import { NextPage } from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import { formatDate, getPostContent, getPostsMetadata } from "@/core/helpers";
import LangIcon from "@/components/LangIcon/LangIcon";
import DateIcon from "@/components/Icons/DateIcon/DateIcon";
import styles from "./page.module.css";

type Props = {
  params: {
    lang: string;
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
    return (
      <SyntaxHighlighter language={language} style={oneDark}>
        {content}
      </SyntaxHighlighter>
    );
  }
  return <pre {...rest}>{children}</pre>;
};

const markDownToJsxOptions = {
  overrides: { pre: CodeHighlighter },
};

export const generateStaticParams = async () => {
  const posts = getPostsMetadata();
  return posts.flatMap((post) =>
    post.langs.map((lang) => ({ lang, slug: post.slug })),
  );
};

const LANG_LABELS: Record<string, string> = {
  en: "EN",
  es: "ES",
};

const PostPage: NextPage<Props> = ({ params }) => {
  const post = getPostContent(params.slug, params.lang);

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
          {post.langs.length > 1 && (
            <div className={styles.langSwitcher}>
              {post.langs.map((l) => (
                <Link
                  key={l}
                  href={`/posts/${l}/${post.slug}`}
                  className={`${styles.langBtn} ${l === params.lang ? styles.langBtnActive : ""}`}
                >
                  {LANG_LABELS[l] ?? l.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={styles.postCover}>
          <Image
            src={post.cover}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
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
