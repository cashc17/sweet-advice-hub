import postDate from "@/assets/post-date.jpg";
import type { Post } from "../types";

export const post: Post = {
  slug: "first-date-advice-that-actually-helps",
  title: "First Date Advice That Actually Helps",
  headline: "First date advice that actually helps",
  description:
    "Where to go, what to ask, how long to stay, and how to tell the difference between nerves and a genuine lack of interest.",
  category: "dating",
  date: "2026-05-16",
  readingMinutes: 6,
  image: postDate,
  imageAlt: "Two coffee cups and hands almost touching across a small cafe table",
  excerpt:
    "A first date is not an interview or a performance. It is a short, low-cost test of one question: do I want a second evening of this?",
  takeaways: [
    "Choose short, low-stakes first dates (coffee, drinks, or a walk) with easy exit options.",
    "Ask open-ended curiosity questions rather than conversational resume queries.",
    "Distinguish between nervousness (awkward enthusiasm) and disinterest (emotional absence).",
    "Communicate your intentions directly within 24 hours after the date.",
  ],
  keywords: [
    "first date advice",
    "first date tips",
    "dating conversation starters",
    "what to do on a first date",
    "dating etiquette",
  ],
  body: [
    {
      t: "p",
      text: "Most first-date anxiety comes from treating it as an evaluation you must pass. Flip it. You are also deciding, and the aim is not to be liked by everyone — it is to find out quickly whether there is anything here worth a second try.",
    },
    { t: "h2", text: "Keep it short and easy to leave" },
    {
      t: "p",
      text: "Coffee, a drink, a walk: an hour or ninety minutes with a natural exit. Long dinners with strangers are a commitment neither of you has earned yet, and the low-stakes format makes both people noticeably more relaxed. If it is going well, extending it is easy and feels like a bonus.",
    },
    { t: "h2", text: "Ask better questions" },
    {
      t: "p",
      text: "'What do you do?' produces a CV. Ask what has been taking up their attention lately, what they are unreasonably enthusiastic about, what their weekends usually look like. You learn far more from how someone talks about the thing they love than from any list of facts.",
    },
    {
      t: "ul",
      items: [
        "Follow up on details rather than rotating through topics.",
        "Share something real early; matching openness is how rapport starts.",
        "Avoid a full account of your last relationship. One sentence, tops.",
        "Notice how they treat the staff. It is not a cliché, it is data.",
      ],
    },
    { t: "h2", text: "Nerves versus disinterest" },
    {
      t: "p",
      text: "Nervous people fidget, over-explain and laugh too fast, but they ask questions and they look at you. Disinterested people are smooth and absent. Give a nervous person a second date if the conversation had any current in it at all — plenty of good relationships begin with a stilted first hour.",
    },
    { t: "h2", text: "Be direct afterwards" },
    {
      t: "p",
      text: "If you liked them, say so within a day and suggest something specific. If you did not, one honest sentence is kinder than a slow fade, and it takes less effort than the guilt of avoiding it. Clear, warm and brief is the entire skill.",
    },
    {
      t: "quote",
      text: "Safety first, always: meet somewhere public, arrange your own transport, and tell a friend where you will be.",
    },
  ],
};

export default post;
