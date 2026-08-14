export type Block =
  | { t: "p"; text: string; className?: string }
  | { t: "h2"; text: string; id?: string }
  | { t: "h3"; text: string; id?: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; text: string; author?: string }
  | {
      t: "callout";
      title?: string;
      text: string;
      variant?: "tip" | "warning" | "info" | "highlight";
    }
  | {
      t: "image";
      src: string;
      alt: string;
      caption?: string;
      width?: number;
      height?: number;
    }
  | { t: "takeaways"; items: string[]; title?: string }
  | { t: "do-dont"; dos: string[]; donts: string[]; title?: string }
  | { t: "divider" };

export interface Post {
  slug: string;
  title: string;
  headline: string;
  description: string;
  category: string;
  date: string;
  updated?: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  excerpt: string;
  takeaways?: string[];
  authorName?: string;
  authorRole?: string;
  authorBio?: string;
  authorAvatar?: string;
  keywords?: string[];
  body: Block[];
}
