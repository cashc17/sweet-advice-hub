import postBreakup from "@/assets/post-breakup.jpg";
import type { Post } from "../types";

export const post: Post = {
  slug: "how-to-heal-after-a-breakup",
  title: "How to Heal After a Breakup",
  headline: "How to heal after a breakup",
  description:
    "A gentle, practical breakup recovery guide: no-contact, the grief timeline, rebuilding routine, and knowing when you are actually ready to date again.",
  category: "breakups",
  date: "2026-07-09",
  readingMinutes: 7,
  image: postBreakup,
  imageAlt: "A person holding a warm mug by a rain-streaked window",
  excerpt:
    "Breakup grief is real grief. It responds to the same things: time, routine, people, and not checking their profile at 1am.",
  takeaways: [
    "Strict no-contact is an emotional recovery tool that stops dopamine cravings.",
    "Establish daily routines: consistent sleep, daylight, nutrition, and social anchors.",
    "Closure is created internally over time, not delivered by an ex in a final conversation.",
    "Only date again when an ex can be described calmly without idealizing or villainizing them.",
  ],
  keywords: [
    "how to heal from breakup",
    "breakup recovery",
    "no contact rule",
    "moving on after heartbreak",
    "breakup grief",
  ],
  body: [
    {
      t: "p",
      text: "A breakup takes away a person, a daily routine, a set of plans, and a version of yourself you had got used to. That is four losses at once, which is why it hurts far more than the length of the relationship seems to justify. You are not being dramatic.",
    },
    { t: "h2", text: "No contact is a tool, not a punishment" },
    {
      t: "p",
      text: "Every message, check-in, or profile visit restarts the clock on the part of your brain that is trying to learn they are gone. That is the whole reason no-contact works, and it has nothing to do with games or winning. Mute rather than block if blocking feels too final; the aim is to stop the small hits, not to make a statement.",
    },
    {
      t: "ul",
      items: [
        "Archive the photos instead of deleting them — you can decide in six months.",
        "Tell one friend they are your designated 3am text instead of texting your ex.",
        "Write the message you want to send, in a note, and do not send it. Most of the relief is in the writing.",
      ],
    },
    { t: "h2", text: "Rebuild the scaffolding first" },
    {
      t: "p",
      text: "Sleep, food, daylight, movement, and other people. It is unglamorous advice and it is the advice that works, because grief is partly a physiological event. You will not think your way out of it while running on four hours of sleep. Put two fixed anchors in each week — a gym class, a Sunday walk, dinner with a friend — and let those carry you while your motivation is offline.",
    },
    { t: "h2", text: "Let the story stay unfinished" },
    {
      t: "p",
      text: "Many people stay stuck chasing closure: one more conversation that will make it make sense. It almost never arrives, and when it does it rarely helps, because the explanation you want is usually one they cannot give. Closure is something you build on your own side, mostly by living long enough that the question loses its urgency.",
    },
    {
      t: "quote",
      text: "You do not need to understand why it ended to be allowed to move on from it.",
    },
    { t: "h2", text: "The honest timeline" },
    {
      t: "p",
      text: "Expect the first few weeks to be loud and the next few months to be uneven. Anniversaries, seasons and songs will ambush you. A useful sign of progress is not that you stop thinking about them, but that the thought stops rearranging your day. If after several months you cannot work, eat or sleep, please talk to a doctor or therapist — that is depression territory, not weakness.",
    },
    { t: "h2", text: "When you are ready to date again" },
    {
      t: "p",
      text: "You are probably ready when you can describe your ex without either idealising them or trashing them, and when the idea of an evening with a stranger sounds mildly interesting rather than like an audition. If you are dating to prove something — to them, to yourself, to a group chat — the timing is off, and the next person will feel it.",
    },
  ],
};

export default post;
