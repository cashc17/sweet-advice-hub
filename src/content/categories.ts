export interface Category {
  slug: string;
  name: string;
  blurb: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "dating",
    name: "Dating",
    blurb: "Meeting people, first dates, and the early months.",
    title: "Dating Advice — First Dates & Early Romance",
    description:
      "Practical dating advice for first dates, early texting, and deciding whether someone is worth a second evening.",
  },
  {
    slug: "relationships",
    name: "Relationships",
    blurb: "Communication, conflict, intimacy, and the long game.",
    title: "Relationship Advice — Communication & Intimacy",
    description:
      "Relationship advice on communication, repairing trust, love languages, and keeping long-term love warm.",
  },
  {
    slug: "breakups",
    name: "Breakups",
    blurb: "Endings, grief, and finding your feet again.",
    title: "Breakup Advice — Healing & Moving Forward",
    description:
      "Breakup advice on grieving well, going no-contact, and dating again when you finally feel ready.",
  },
  {
    slug: "self-love",
    name: "Self-Love",
    blurb: "Standards, boundaries, and liking your own company.",
    title: "Self-Love Advice — Boundaries & Standards",
    description:
      "Self-love advice on boundaries, red flags, self-worth, and building a life you would not abandon for a partner.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}