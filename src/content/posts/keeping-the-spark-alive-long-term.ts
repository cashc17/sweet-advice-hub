import postCommunication from "@/assets/post-communication.jpg";
import type { Post } from "../types";

export const post: Post = {
  slug: "keeping-the-spark-alive-long-term",
  title: "Keeping the Spark Alive Long-Term",
  headline: "Keeping the spark alive long-term",
  description:
    "Desire fades in comfortable relationships for predictable reasons. What actually brings it back: novelty, separateness, attention and scheduling.",
  category: "relationships",
  date: "2026-05-29",
  readingMinutes: 6,
  image: postCommunication,
  imageAlt: "A couple relaxing together at home in golden evening light",
  excerpt:
    "Long-term desire is not something you have. It is something you keep making, mostly out of attention and a little distance.",
  takeaways: [
    "Novelty and shared new experiences reignite attraction in familiar relationships.",
    "Maintain healthy independence and individual interests to preserve desire.",
    "Scheduled intimacy protects connection from the friction of daily life and fatigue.",
    "Address underlying emotional resentments first before expecting physical intimacy.",
  ],
  keywords: [
    "keeping the spark alive",
    "long term relationship advice",
    "reviving romance",
    "marriage intimacy",
    "rekindling love",
  ],
  body: [
    {
      t: "p",
      text: "The early rush is chemistry plus uncertainty, and uncertainty is exactly what a good relationship removes. So when the spark dims after a few years, nothing has gone wrong — the conditions have simply changed, and the things that create desire now are different from the ones that created it then.",
    },
    { t: "h2", text: "Novelty is the cheap lever" },
    {
      t: "p",
      text: "Couples who do new things together report more attraction than couples who do pleasant familiar things together. It does not have to be skydiving. A different neighbourhood, an unfamiliar cuisine, a class neither of you is good at. The point is to see each other slightly out of context, which is when you notice them again.",
    },
    { t: "h2", text: "Keep a little separateness" },
    {
      t: "p",
      text: "Desire needs a small gap to cross. Couples who merge completely — same friends, same hobbies, no unshared hours — often describe deep affection and no heat. Having your own interests is not a threat to intimacy; it is the thing that keeps you interesting to come home to.",
    },
    {
      t: "ul",
      items: [
        "Protect one weekly evening that is not admin, television or children.",
        "Flirt during the day, not only at 11pm when the answer is always sleep.",
        "Touch without it being an opening move — desire dies fastest where every touch is a request.",
      ],
    },
    { t: "h2", text: "Yes, schedule it" },
    {
      t: "p",
      text: "'Spontaneous' intimacy is largely a myth of the early months, when you had free time and no responsibilities. Planning it is not unromantic; anticipation is one of the strongest ingredients of desire, and the plan protects the time from everything else that will otherwise take it.",
    },
    {
      t: "quote",
      text: "Nothing kills attraction faster than being taken for granted, and nothing revives it faster than being genuinely noticed.",
    },
    { t: "h2", text: "When it is not really about sex" },
    {
      t: "p",
      text: "Often the bedroom is where an unresolved resentment shows up first — an unfair split of the housework, a decision made without you, months of feeling unappreciated. If the warmth is missing everywhere, start with the resentment. Desire tends to return on its own once someone finally feels like an equal partner again.",
    },
  ],
};

export default post;
