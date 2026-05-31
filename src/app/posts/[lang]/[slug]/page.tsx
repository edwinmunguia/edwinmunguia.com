import { NextPage } from "next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Image from "next/image";
import { formatDate, getPostContent, getPostsMetadata } from "@/core/helpers";
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

const PostPage: NextPage<Props> = ({ params }) => {
  const post = getPostContent(params.slug, params.lang);

  return (
    <div className={styles.post}>

      {/* ── HEADER ───────────────────────────────────── */}
      <div className={styles.postHeader}>
        <div className={styles.meta}>
          <span className={styles.date}>{formatDate(post.date)}</span>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>#{tag}</span>
          ))}
          {post.langs.length > 1 && (
            <div className={styles.langSwitcher}>
              {post.langs.map((l) => (
                <Link
                  key={l}
                  href={`/posts/${l}/${post.slug}`}
                  className={`${styles.langBtn} ${l === params.lang ? styles.langBtnActive : ""}`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          )}
        </div>

        <h1 className={styles.title}>{post.title}</h1>

        {post.cover && (
          <div className={styles.cover}>
            <Image
              src={post.cover}
              alt={post.title}
              fill
              objectFit="cover"
            />
          </div>
        )}
      </div>

      {/* ── CONTENT ──────────────────────────────────── */}
      <div className={styles.content}>
        <Markdown options={markDownToJsxOptions}>{post.content}</Markdown>
      </div>

    </div>
  );
};

export default PostPage;
