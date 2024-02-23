import fs from "fs";
import { POSTS_FOLDER } from "./consts";
import matter from "gray-matter";
import { BlogPost } from "./interfaces";
import dayjs from "dayjs";

export const getPostsMetadata = (): BlogPost[] => {
  const mdFiles = fs.readdirSync(POSTS_FOLDER);
  const mdPposts = mdFiles.filter((file) => file.endsWith(".md"));

  const posts: BlogPost[] = mdPposts.map<BlogPost>((file) => {
    const fileContent = fs.readFileSync(`${POSTS_FOLDER}${file}`, "utf-8");
    const postFrontMatter = matter(fileContent);

    let tags: string[] = [];

    if (postFrontMatter.data.tags) {
      tags = postFrontMatter.data.tags
        .split(",")
        .map((tag: string) => tag.trim());
    }

    return {
      title: postFrontMatter.data.title,
      description: postFrontMatter.data.description,
      content: "",
      date: formatDate(postFrontMatter.data.date),
      slug: file.replace(".md", ""),
      category: postFrontMatter.data.category,
      cover: "",
      tags: tags,
    };
  });

  return posts;
};

export const formatDate = (date: string): string => {
  return dayjs(date).format("MMM DD, YYYY");
};
