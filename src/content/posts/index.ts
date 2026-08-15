import type { Post } from "../types";
export type { Block, Post } from "../types";

import howToCommunicate from "./how-to-communicate-better-in-a-relationship";
import rebuildingTrust from "./rebuilding-trust-after-it-breaks";
import howToHeal from "./how-to-heal-after-a-breakup";
import longDistance from "./making-long-distance-relationships-work";
import loveLanguages from "./understanding-the-five-love-languages";
import redFlags from "./relationship-red-flags-worth-taking-seriously";
import keepingSpark from "./keeping-the-spark-alive-long-term";
import firstDate from "./first-date-advice-that-actually-helps";
import theAnxiousAvoidantTrap from "./the-anxious-avoidant-trap";

export const posts: Post[] = [
  theAnxiousAvoidantTrap,
  howToCommunicate,
  rebuildingTrust,
  howToHeal,
  longDistance,
  loveLanguages,
  redFlags,
  keepingSpark,
  firstDate,
];

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
