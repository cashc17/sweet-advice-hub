import postDistance from "@/assets/post-distance.jpg";
import type { Post } from "../types";

export const post: Post = {
  slug: "making-long-distance-relationships-work",
  title: "Making Long-Distance Relationships Work",
  headline: "Making long-distance relationships work",
  description:
    "Distance does not kill relationships; ambiguity does. How to structure communication, visits and a shared end date so long distance stays liveable.",
  category: "relationships",
  date: "2026-06-30",
  readingMinutes: 6,
  image: postDistance,
  imageAlt: "A phone on a bedside table showing a late-night video call, warm fairy lights behind",
  excerpt:
    "The couples who survive long distance are not the ones who talk the most. They are the ones who know when it ends.",
  takeaways: [
    "Establish a clear end date so the separation is finite and manageable.",
    "Prioritize meaningful, focused communication over constant background calls.",
    "Always have the next visit booked on the calendar before leaving.",
    "Discuss expectations around jealousy, boundaries, and travel budgets openly.",
  ],
  keywords: [
    "long distance relationship",
    "LDR advice",
    "long distance love tips",
    "couples communication",
    "maintaining intimacy long distance",
  ],
  body: [
    {
      t: "p",
      text: "Long distance gets an unfair reputation. Plenty of couples do it well for years. What separates them from the couples who quietly disintegrate is rarely how much they love each other, and almost always how much structure they built around the distance.",
    },
    { t: "h2", text: "Agree on an end date, even a rough one" },
    {
      t: "p",
      text: "Open-ended distance is the version that fails. 'Until my contract ends next spring, then we reassess' is survivable. 'We'll see how it goes' means every hard evening carries the extra weight of wondering whether this is now your permanent life. You can move the date later. You just cannot leave it blank.",
    },
    { t: "h2", text: "Quality of contact beats quantity" },
    {
      t: "p",
      text: "Three-hour daily calls sound romantic and usually become an obligation neither of you can admit to resenting. Most long-distance couples do better with short daily contact plus one longer weekly call that is actually protected — no half-watching something, no doing the dishes with the camera pointed at the ceiling.",
    },
    {
      t: "ul",
      items: [
        "Share ordinary things, not just updates: a photo of the terrible sandwich, the walk home.",
        "Do something together rather than only talking — a series, a game, cooking the same recipe.",
        "Send physical post occasionally. It is disproportionately effective.",
      ],
    },
    { t: "h2", text: "Always have the next visit booked" },
    {
      t: "p",
      text: "Having a date in the calendar changes the emotional texture of the whole month. Book the next trip before the current one ends, even if it is far away and cheap and short. And plan a little ordinary time into visits — supermarkets, laundry, a boring evening — because a relationship built entirely of holidays does not tell you much about the two of you.",
    },
    { t: "h2", text: "Talk about the awkward things early" },
    {
      t: "p",
      text: "Exclusivity, jealousy, money for flights, how much you tell each other about nights out. These conversations feel unromantic and they prevent the majority of long-distance blowups, which nearly always start as an unstated assumption rather than a betrayal.",
    },
    {
      t: "quote",
      text: "Distance is a logistics problem with an expiry date. Treat it like one and it stops feeling like a verdict on the relationship.",
    },
  ],
};

export default post;
