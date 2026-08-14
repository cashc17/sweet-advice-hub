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
      variant?: "tip" | "warning" | "info" | "highlight" | "custom";
      icon?: string; // Lucide icon name or emoji (e.g. "Heart", "Sparkles", "ShieldCheck", "💡", "❤️")
    }
  | {
      t: "image";
      src: string;
      alt: string;
      title?: string;
      subtitle?: string;
      caption?: string;
      credit?: string;
      width?: number;
      height?: number;
    }
  | { t: "takeaways"; items: string[]; title?: string }
  | { t: "do-dont"; dos: string[]; donts: string[]; title?: string }
  | {
      t: "faq";
      title?: string;
      items: { q: string; a: string }[];
    }
  | {
      t: "icon-list";
      items: { icon?: string; title: string; text: string }[];
    }
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
  faqs?: { q: string; a: string }[];
  body: Block[];
}
