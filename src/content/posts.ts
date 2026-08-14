import heroHands from "@/assets/hero-hands.jpg";
import postCommunication from "@/assets/post-communication.jpg";
import postTrust from "@/assets/post-trust.jpg";
import postBreakup from "@/assets/post-breakup.jpg";
import postDistance from "@/assets/post-distance.jpg";
import postDate from "@/assets/post-date.jpg";

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "quote"; text: string };

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
  body: Block[];
}

export const posts: Post[] = [
  {
    slug: "how-to-communicate-better-in-a-relationship",
    title: "How to Communicate Better in a Relationship",
    headline: "How to communicate better in a relationship",
    description:
      "Nine practical communication habits that lower the temperature of an argument and help you actually feel heard by your partner.",
    category: "relationships",
    date: "2026-07-28",
    readingMinutes: 7,
    image: postCommunication,
    imageAlt: "A couple sitting close together on a sofa talking in warm evening light",
    excerpt:
      "Most couples do not have a communication problem. They have a timing problem, a tone problem, and a listening problem — and all three are fixable.",
    body: [
      {
        t: "p",
        text: "When people say they have a communication problem, they usually mean something more specific: one of them raises hard things at the worst possible moment, the other hears criticism where none was intended, and both of them are already rehearsing a rebuttal before the sentence finishes. None of that is a character flaw. They are habits, and habits can be swapped.",
      },
      { t: "h2", text: "Pick the moment before you pick the words" },
      {
        t: "p",
        text: "The single cheapest improvement most couples can make is timing. A serious conversation started at 11pm, in a car, or three minutes before someone leaves for work is a conversation designed to fail. Nobody is generous when they are tired, hungry, or late. Instead, name the topic and let your partner choose the slot: 'I want to talk about money at some point this week — is Saturday morning okay?' It sounds oddly formal the first time. It works every time after that.",
      },
      { t: "h2", text: "Open with the feeling, not the verdict" },
      {
        t: "p",
        text: "There is a real difference between 'you never help around here' and 'I felt alone with the house this week.' The first is a verdict, and verdicts invite a defence. The second is a report from inside your own head, and nobody can argue with what you felt. You are not softening the message; you are removing the part of it that guarantees a fight.",
      },
      {
        t: "ul",
        items: [
          "Describe the specific event, not the pattern: 'on Tuesday' beats 'always'.",
          "Say the feeling in one plain word: tired, lonely, embarrassed, scared.",
          "Make one concrete request instead of three vague complaints.",
        ],
      },
      { t: "h2", text: "Listen to understand, not to reply" },
      {
        t: "p",
        text: "Try this: before you respond to anything your partner says in a difficult conversation, summarise their point back to them and ask whether you got it right. You will discover, embarrassingly often, that you did not. The summary also does something subtle — it slows the exchange down to a pace where neither of you can say the unforgivable thing.",
      },
      {
        t: "quote",
        text: "Being understood is not the same as being agreed with, and most people arguing at 10pm only wanted the first one.",
      },
      { t: "h2", text: "Learn to call a timeout properly" },
      {
        t: "p",
        text: "When your heart rate climbs, your ability to be fair collapses. A timeout is not storming off; it is a stated pause with a return time. 'I want to keep talking about this, but I need twenty minutes to cool down. Can we come back at nine?' The return time is the whole trick. Without it, a pause feels like abandonment.",
      },
      { t: "h2", text: "Repair quickly and out loud" },
      {
        t: "p",
        text: "Happy couples are not the couples who never snap. They are the couples who repair fast: a hand on a shoulder, a small joke, 'that came out harsher than I meant.' Repair attempts only work if the other person accepts them, so if your partner offers you an awkward olive branch mid-argument, take it even when you are still right.",
      },
      { t: "h2", text: "Give appreciation more airtime than critique" },
      {
        t: "p",
        text: "Couples who are doing well say far more warm things than critical ones over the course of an ordinary week. This is not about compliments; it is about noticing out loud. Thank them for the boring things — the bins, the school run, the sorted paperwork. Attention is the currency of long relationships, and most of it should be spent on what is going right.",
      },
      { t: "h2", text: "What to do this week" },
      {
        t: "p",
        text: "Pick one habit, not six. Choose the timing rule for a week and see what changes. If you want a second, add the summarise-before-you-reply rule. Communication does not improve because you had a breakthrough conversation; it improves because you had thirty small, better ones.",
      },
    ],
  },
  {
    slug: "rebuilding-trust-after-it-breaks",
    title: "Rebuilding Trust After It Breaks",
    headline: "Rebuilding trust after it breaks",
    description:
      "Trust is rebuilt through transparency, consistency and time — not apologies. A realistic guide for the person who broke it and the person deciding whether to stay.",
    category: "relationships",
    date: "2026-07-19",
    readingMinutes: 8,
    image: postTrust,
    imageAlt: "A handwritten letter, dried roses and a coffee cup on a deep plum table",
    excerpt:
      "An apology is the entry fee, not the repair. Here is what actually rebuilds trust, and how long it honestly takes.",
    body: [
      {
        t: "p",
        text: "Broken trust is rarely repaired by the conversation that follows the discovery. It is repaired, if it is repaired at all, by hundreds of unremarkable days afterwards in which the untrustworthy thing does not happen again. That is unsatisfying, because everyone wants a single conversation that fixes it. There isn't one.",
      },
      { t: "h2", text: "If you are the one who broke it" },
      {
        t: "p",
        text: "Your job is to make the truth boring and available. That means volunteering information before you are asked, answering the same question calmly the fifth time it is asked, and not treating your partner's suspicion as an insult. Their nervous system is doing exactly what it should after a shock. Impatience with their fear reads as a lack of remorse, even when it isn't.",
      },
      {
        t: "ul",
        items: [
          "Give a full account once, rather than a drip-feed of new details over weeks. Drip-feeding re-breaks the trust every time.",
          "Change the conditions that made it possible, not just the promise. Say what you will do differently, concretely.",
          "Stop asking when they will be over it. That question puts your comfort ahead of their injury.",
          "Accept that you have lost the right to be the wounded party for a while.",
        ],
      },
      { t: "h2", text: "If you are the one deciding whether to stay" },
      {
        t: "p",
        text: "You are allowed to take months. You are also allowed to leave, and staying is not the morally superior choice. What you need to watch is not how sorry they are — almost everyone is sorry when they are caught — but whether their behaviour has actually changed shape. Remorse is emotion; repair is logistics.",
      },
      {
        t: "quote",
        text: "Forgiveness is a decision you make about the past. Trust is a prediction you make about the future. They are not the same, and you do not owe either one on a schedule.",
      },
      { t: "h2", text: "Set checkable agreements" },
      {
        t: "p",
        text: "Vague promises ('I'll be more open') cannot be kept or broken, so they do nothing. Checkable ones can: no contact with that person, a shared calendar, a weekly half-hour where either of you can ask anything. Give the agreements an end date and review them, so they do not become a permanent surveillance arrangement — that is not a relationship, it is a parole system.",
      },
      { t: "h2", text: "Expect the wave pattern" },
      {
        t: "p",
        text: "Recovery is not a straight line. Three good weeks followed by a terrible Tuesday triggered by a song is completely normal and does not mean you are back at the beginning. Couples who make it usually describe roughly six months before the subject stops running the household, and a year or more before it feels genuinely settled.",
      },
      { t: "h2", text: "When to bring in help" },
      {
        t: "p",
        text: "If the same argument loops for weeks without moving, or if either of you cannot talk about it without escalating, a couples therapist is not a last resort — it is the efficient option. Most couples wait years longer than they should. If you are not safe, that is a different situation entirely, and support services in your country should be the first call, not a counsellor.",
      },
    ],
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    slug: "relationship-red-flags-worth-taking-seriously",
    title: "Relationship Red Flags Worth Taking Seriously",
    headline: "Relationship red flags worth taking seriously",
    description:
      "How to tell a genuine warning sign from an ordinary human flaw — control, contempt, isolation and the patterns that rarely improve on their own.",
    category: "self-love",
    date: "2026-06-11",
    readingMinutes: 7,
    image: postTrust,
    imageAlt: "A handwritten note beside wilting roses on a dark surface",
    excerpt:
      "Not every irritating habit is a red flag. These are the patterns that are genuinely worth ending things over.",
    body: [
      {
        t: "p",
        text: "The phrase gets used for everything now, from genuine warning signs to someone answering texts slowly. That inflation is a problem, because it makes the real signals harder to hear. A useful test: a flaw is something a person has, a red flag is something a person does to you, repeatedly, and defends.",
      },
      { t: "h2", text: "Control dressed as care" },
      {
        t: "p",
        text: "Wanting to know where you are, disliking your friends, managing your money 'because you're bad with it', commenting on what you wear. Each item sounds small and can be explained away, which is precisely why the pattern matters more than any single instance. Ask yourself whether your world has got smaller since you met them.",
      },
      { t: "h2", text: "Contempt" },
      {
        t: "p",
        text: "Eye-rolling, mockery, the joke at your expense in front of other people, the sigh that says you are stupid. Of all the behaviours studied in couples, contempt is the one most reliably associated with relationships ending. Anger can be worked with. Being looked down on cannot.",
      },
      {
        t: "ul",
        items: [
          "You rehearse how to say ordinary things to avoid a reaction.",
          "Every conflict ends with you apologising, regardless of the facts.",
          "Your memory of events is routinely rewritten back to you.",
          "They are charming to everyone except you.",
          "Consent is treated as negotiable.",
        ],
      },
      { t: "h2", text: "The reconciliation cycle" },
      {
        t: "p",
        text: "Intensity followed by a rupture followed by an extraordinary apology and a honeymoon period — and then the same rupture. If you can predict the cycle, you are no longer in an unpredictable relationship; you are in a stable one with a bad shape.",
      },
      {
        t: "quote",
        text: "Potential is not a plan. Judge the relationship you are actually in, on an ordinary Wednesday.",
      },
      { t: "h2", text: "What is not a red flag" },
      {
        t: "p",
        text: "Being messy, being anxious, having an ex they are civil with, needing more alone time than you do, arguing sometimes. Compatibility problems and character problems are different things, and it is worth keeping the distinction. If you are frightened, though, that is not a compatibility problem — please contact a domestic abuse support service in your country.",
      },
    ],
  },
  {
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
  },
  {
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
  },
];

export const sortedPosts = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function postsByCategory(slug: string) {
  return sortedPosts.filter((p) => p.category === slug);
}

export function relatedPosts(post: Post, count = 3) {
  const sameCategory = sortedPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const rest = sortedPosts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}