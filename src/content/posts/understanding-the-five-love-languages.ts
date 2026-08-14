import heroHands from "@/assets/hero-hands.jpg";
import type { Post } from "../types";

export const post: Post = {
  slug: "understanding-the-five-love-languages",
  title: "Understanding the Five Love Languages",
  headline: "Understanding the five love languages",
  description:
    "What love languages actually are, what the idea gets right, where it falls short, and how to use it without turning your partner into a personality quiz.",
  category: "relationships",
  date: "2026-06-21",
  readingMinutes: 6,
  image: heroHands,
  imageAlt: "Two hands loosely intertwined on a blush linen tablecloth beside a cup of tea",
  excerpt:
    "The useful part of love languages is not the categories. It is the discovery that your partner has been showing you love in a dialect you never learned to read.",
  takeaways: [
    "The 5 love languages are Words of Affirmation, Quality Time, Acts of Service, Touch, and Gifts.",
    "Reframes conflicts from 'you don't care' to recognizing different styles of expressing love.",
    "Love languages are metaphors; flexibility and effort across all forms matter.",
    "Identify your love language by reflecting on the moments you felt most cherished in the past year.",
  ],
  keywords: [
    "five love languages",
    "love languages explained",
    "how to love your partner",
    "acts of service",
    "words of affirmation",
  ],
  body: [
    {
      t: "p",
      text: "The framework is simple: people tend to give and receive affection through words of affirmation, quality time, acts of service, physical touch, or gifts. It became popular because it names something couples experience constantly — one person is working themselves ragged to show love, and the other cannot feel it.",
    },
    { t: "h2", text: "The five, briefly" },
    {
      t: "ul",
      items: [
        "Words of affirmation — being told, explicitly and often, what you mean to them.",
        "Quality time — undivided attention, phone face down, nothing else running.",
        "Acts of service — the tank filled, the form submitted, the problem quietly handled.",
        "Physical touch — contact through the day, not only in the bedroom.",
        "Gifts — small tokens that prove you were thought about while apart.",
      ],
    },
    { t: "h2", text: "What it gets right" },
    {
      t: "p",
      text: "It reframes a common fight. 'You don't care about me' becomes 'you keep fixing my car when what I wanted was an hour of your attention.' That is a solvable problem, and the relief of naming it is often immediate. It also stops people from assuming their own preference is the universal standard.",
    },
    { t: "h2", text: "Where it falls short" },
    {
      t: "p",
      text: "It is a helpful metaphor, not a scientific taxonomy — the research support is thin, most people want a mixture, and preferences shift with stress, health and life stage. It also gets misused as an excuse: 'gifts aren't my language' is not a defence for never marking a birthday. Speaking the language your partner needs occasionally is part of the job, whatever your own preference.",
    },
    {
      t: "quote",
      text: "Ask what makes them feel loved, then believe the answer even if it is not how you would have answered.",
    },
    { t: "h2", text: "How to actually use it" },
    {
      t: "p",
      text: "Skip the quiz. Over dinner, each of you name three specific moments in the last year when you felt most cared for. The pattern will be obvious within ten minutes, and it will be more accurate than any questionnaire, because it is built from your real history rather than hypotheticals.",
    },
  ],
};

export default post;
