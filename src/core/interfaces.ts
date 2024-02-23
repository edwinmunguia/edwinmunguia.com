export interface BlogPost {
  title: string;
  description: string;
  content: string;
  date: string;
  slug: string;
  category: string;
  cover: string;
  tags: string[];
}

export interface IconCollection {
  [key: string]: {
    icon: React.ReactNode;
    className: string;
  };
}
