import type { Post } from "../types";
export type { Block, Post } from "../types";

/**
 * Automatically discovers and imports all article files inside `src/content/posts/`.
 * Any new `.ts` file created in this directory is instantly and automatically
 * registered across the whole website without editing this file!
 */
const postModules = import.meta.glob<{ post?: Post; default?: Post }>(
  ["./*.ts", "!./index.ts"],
  { eager: true }
);

export const posts: Post[] = Object.values(postModules)
  .map((mod) => mod.post || mod.default)
  .filter((p): p is Post => Boolean(p && p.slug));

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsByCategory(slug: string): Post[] {
  return sortedPosts.filter((p) => p.category === slug);
}

export function relatedPosts(post: Post, count = 3): Post[] {
  const sameCategory = sortedPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const rest = sortedPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
