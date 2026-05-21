import fs from "fs";
import path from "path";
import { POSTS_FOLDER } from "./consts";
import matter from "gray-matter";
import { BlogPost } from "./interfaces";
import dayjs from "dayjs";

const LANG_PRIORITY = ["en", "es"];

export const getPostsMetadata = (): BlogPost[] => {
  const slugs = fs
    .readdirSync(POSTS_FOLDER, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const posts: BlogPost[] = slugs.map((slug) => {
    const langFiles = fs
      .readdirSync(path.join(POSTS_FOLDER, slug))
      .filter((f) => f.endsWith(".md"));

    const langs = langFiles.map((f) => f.replace(".md", ""));
    const defaultLang =
      LANG_PRIORITY.find((l) => langs.includes(l)) ?? langs[0]!;

    const fileContent = fs.readFileSync(
      path.join(POSTS_FOLDER, slug, `${defaultLang}.md`),
      "utf-8",
    );
    const { data } = matter(fileContent);

    const tags: string[] = data.tags
      ? data.tags.split(",").map((t: string) => t.trim())
      : [];

    return {
      title: data.title,
      description: data.description ?? "",
      content: "",
      date: formatDate(data.date),
      slug,
      defaultLang,
      langs,
      category: data.category ?? "",
      cover: data.cover ?? "",
      tags,
      _rawDate: data.date as string,
    };
  });

  return posts
    .sort((a, b) => new Date(b._rawDate).getTime() - new Date(a._rawDate).getTime())
    .map(({ _rawDate, ...post }) => post);
};

export const getPostContent = (slug: string, lang: string): BlogPost => {
  const fileContent = fs.readFileSync(
    path.join(POSTS_FOLDER, slug, `${lang}.md`),
    "utf-8",
  );
  const { data, content } = matter(fileContent);

  const langFiles = fs
    .readdirSync(path.join(POSTS_FOLDER, slug))
    .filter((f) => f.endsWith(".md"));
  const langs = langFiles.map((f) => f.replace(".md", ""));
  const defaultLang =
    LANG_PRIORITY.find((l) => langs.includes(l)) ?? langs[0]!;

  return {
    title: data.title,
    description: data.description ?? "",
    date: data.date,
    category: data.category ?? "",
    cover: data.cover ?? "",
    tags: data.tags ? data.tags.split(",").map((t: string) => t.trim()) : [],
    content,
    slug,
    defaultLang,
    langs,
  };
};

export const formatDate = (date: string): string => {
  return dayjs(date).format("MMM DD, YYYY");
};
