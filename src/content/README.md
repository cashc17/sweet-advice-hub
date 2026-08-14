# 📖 HeartlinesHub Blog Publishing & Styling Master Guide

Welcome to the **HeartlinesHub** content engine. This guide contains everything you need to write, style, optimize for **Google Search Console (SEO)**, and monetize with **Google AdSense**.

---

## 📑 Table of Contents
1. [Where Articles Are Saved](#1-where-articles-are-saved)
2. [Step-by-Step: Adding a New Blog Post](#2-step-by-step-adding-a-new-blog-post)
3. [Rich Block Types & Custom Styling Reference](#3-rich-block-types--custom-styling-reference)
4. [Built-in Reader & Editorial Features](#4-built-in-reader--editorial-features)
5. [SEO Optimization Master Checklist](#5-seo-optimization-master-checklist)
6. [Google Search Console Setup](#6-google-search-console-setup)
7. [Google AdSense Setup](#7-google-adsense-setup)
8. [Full Copy-Paste Blog Post Template](#8-full-copy-paste-blog-post-template)

---

## 1. Where Articles Are Saved

| File / Folder | Purpose |
| :--- | :--- |
| **`src/content/posts/`** | **Individual blog files.** Each article lives in its own dedicated file (e.g. `src/content/posts/my-new-post.ts`). |
| **`src/content/posts/index.ts`** | **Master post index.** Automatically collects and exports all articles for the website. |
| **`src/content/types.ts`** | TypeScript type definitions for `Post` and `Block`. |
| **`src/content/categories.ts`** | Categories (*Dating, Relationships, Breakups, Self-Love*). |
| **`src/assets/`** | Image assets (cover photos, author photos, inline illustrations). |
| **`src/config/site.ts`** | Site metadata, Google Search Console token, and Google AdSense IDs. |

---

## 2. Step-by-Step: Adding a New Blog Post

1. **Add your featured image:** Place a high-quality `.jpg`, `.webp`, or `.png` in `src/assets/` (e.g. `src/assets/post-healthy-habits.jpg`).
2. **Create a new file in `src/content/posts/`** (e.g. `src/content/posts/my-new-article-slug.ts`):
   ```typescript
   import postImage from "@/assets/post-healthy-habits.jpg";
   import type { Post } from "../types";

   export const post: Post = {
     slug: "my-new-article-slug",
     title: "Article Title — HeartlinesHub",
     headline: "Main Headline for Readers",
     description: "150-character SEO description for Google",
     category: "relationships", // "dating" | "relationships" | "breakups" | "self-love"
     date: "2026-08-14",
     readingMinutes: 6,
     image: postImage,
     imageAlt: "Featured image description for accessibility and SEO",
     excerpt: "Short 2-sentence summary...",
     takeaways: [
       "Key takeaway point #1",
       "Key takeaway point #2"
     ],
     keywords: ["relationship tips", "dating advice", "healthy communication"],
     authorName: "The HeartlinesHub Editors",
     body: [
       { t: "p", text: "Introduction paragraph..." },
       { t: "h2", text: "First Section Subheading" },
       { t: "p", text: "Detailed explanation..." }
     ]
   };

   export default post;
   ```
3. **Register it in `src/content/posts/index.ts`**:
   Import your file and add it to the `posts` array:
   ```typescript
   import myNewPost from "./my-new-article-slug";

   export const posts: Post[] = [
     myNewPost,
     // other posts...
   ];
   ```
4. **Save!** The article will instantly appear across the Homepage, All Articles archive, Category page, Single article route, and XML Sitemap!

---

## 3. Rich Block Types & Custom Styling Reference

You can build rich, magazine-grade layouts using the following block types inside the `body` array:

### 1. Paragraph (`p`)
Supports custom Tailwind classes via `className`:
```typescript
{
  t: "p",
  text: "Standard paragraph text goes here."
},
{
  t: "p",
  text: "This paragraph has a larger introductory font.",
  className: "text-xl font-medium text-primary"
}
```

### 2. Headings (`h2` & `h3`)
Automatically generates smooth-scrollable HTML IDs for the Table of Contents:
```typescript
{ t: "h2", text: "1. The 20-Minute Cooling Rule" },
{ t: "h3", text: "Why Physical Distance Matters First" }
```

### 3. Inline Images with Titles, Subtitles, Captions & Credits (`image`)
Embed illustrations or photos directly within the article flow:
```typescript
import inlinePhoto from "@/assets/hero-hands.jpg";

{
  t: "image",
  src: inlinePhoto,
  alt: "Couple having an unhurried conversation in a cafe",
  title: "The Micro-Habits of Enduring Connection",
  subtitle: "Small daily gestures make all the difference",
  caption: "Couples who practice daily eye contact report 40% fewer explosive arguments.",
  credit: "HeartlinesHub Editorial Studio"
}
```

### 4. Custom Icon Callouts (`callout`)
Available variants: `"tip"`, `"warning"`, `"info"`, `"highlight"`, `"custom"`.
Supports built-in Lucide icons (e.g. `"Heart"`, `"Sparkles"`, `"ShieldCheck"`, `"Flame"`) or direct emojis (e.g. `"💡"`, `"❤️"`, `"🌿"`):
```typescript
{
  t: "callout",
  variant: "tip",
  icon: "💡",
  title: "Golden Rule of Difficult Conversations",
  text: "Never start a sensitive conversation after 9 PM or while multitasking."
},
{
  t: "callout",
  variant: "custom",
  icon: "Heart",
  title: "The 5:1 Warmth Ratio",
  text: "Stable marriages maintain at least five positive interactions for every one negative interaction."
}
```

### 5. Stylish Icon List (`icon-list`)
Create beautifully structured multi-point breakdowns with custom icons:
```typescript
{
  t: "icon-list",
  items: [
    {
      icon: "MessageCircle",
      title: "Specific events over eternal patterns",
      text: "Saying 'on Tuesday when the dishes piled up' beats 'you always leave a mess'."
    },
    {
      icon: "Heart",
      title: "Name the emotion in one plain word",
      text: "Tired, lonely, overwhelmed, embarrassed, or scared."
    }
  ]
}
```

### 6. Bullet & Numbered Lists (`ul` & `ol`)
```typescript
{
  t: "ul",
  items: [
    "Focus on one issue at a time",
    "Never bring past arguments into the present",
    "Listen without interrupting"
  ]
},
{
  t: "ol",
  items: [
    "Step 1: Notice your physical tension",
    "Step 2: Ask for a temporary timeout",
    "Step 3: Agree on a restart time"
  ]
}
```

### 7. Styled Blockquotes (`quote`)
```typescript
{
  t: "quote",
  text: "Love does not die from conflict; it dies from unresolved resentment.",
  author: "Dr. John Gottman"
}
```

### 8. Do's & Don'ts Comparison Box (`do-dont`)
```typescript
{
  t: "do-dont",
  title: "Communicating In Heated Moments: Dos & Don'ts",
  dos: [
    "Speak from your own perspective ('I feel overwhelmed')",
    "Agree on a 20-minute pause if heart rates spike",
    "Acknowledge valid points made by your partner"
  ],
  donts: [
    "Use absolute statements like 'you always' or 'you never'",
    "Bring up unrelated past mistakes from months ago",
    "Walk out of the room without setting a time to talk again"
  ]
}
```

### 9. Key Takeaways Box (`takeaways`)
```typescript
{
  t: "takeaways",
  title: "Summary of Key Points",
  items: [
    "Timing matters more than the exact wording.",
    "Express feelings rather than verdicts."
  ]
}
```

### 10. Inline FAQ Accordion (`faq`)
Generates an interactive FAQ box with Google `FAQPage` rich snippet support:
```typescript
{
  t: "faq",
  title: "Frequently Asked Questions",
  items: [
    {
      q: "What should I do if my partner shuts down?",
      a: "Lower the stakes, offer a calm break, and let them know you care about their perspective when they are ready."
    }
  ]
}
```

---

## 4. Built-in Reader & Editorial Features

Every article automatically includes the following interactive features:
- 📊 **Reading Progress Bar:** Tracks scroll percentage at the very top of the window.
- 📑 **Table of Contents:** Auto-extracts all `h2`/`h3` sections with active scroll highlighting.
- 🔗 **Social Share Suite:** One-tap sharing to WhatsApp, X (Twitter), Facebook, LinkedIn, and Copy Link with toast.
- ⏭️ **Previous & Next Article Links:** Encourages binge-reading across articles.
- 👤 **E-E-A-T Author Profile Card:** Shows author bio, credentials, and avatar.
- ❓ **Collapsible FAQ Section:** Supports structured FAQ schema for Google Search.

---

## 5. SEO Optimization Master Checklist

Every article in HeartlinesHub comes automatically armed with enterprise SEO architecture:

- [x] **Single `<h1>` Title Tag:** Automatically sets the article headline as the only H1.
- [x] **Schema.org Structured Data (`BlogPosting`, `BreadcrumbList`, `FAQPage`):** Enables Google Rich Snippets, Author badges, Star ratings, and Knowledge Graph inclusion.
- [x] **Dynamic Canonical URLs:** Prevents duplicate content penalties.
- [x] **OpenGraph & Twitter Cards:** Generates large preview cards when shared on social media.
- [x] **Automated XML Sitemap:** Live at `/sitemap.xml` with priority and changefreq.
- [x] **Zero-CLS AdSense Containers:** Prevents layout shifting to protect Google Core Web Vitals.

---

## 6. Google Search Console Setup

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add your property (e.g. `https://heartlineshub.com`).
3. Choose **HTML Tag Verification** and copy your token string.
4. Paste it into `src/config/site.ts`:
   ```typescript
   export const GOOGLE_SITE_VERIFICATION = "your-token-here";
   ```
5. Submit your sitemap at **Sitemaps** ➔ `sitemap.xml`.

---

## 7. Google AdSense Setup

1. Open [Google AdSense](https://adsense.google.com/).
2. Paste your publisher ID into `src/config/site.ts`:
   ```typescript
   export const ADSENSE_PUBLISHER_ID = "ca-pub-1234567890123456";
   ```
3. Update `public/ads.txt` with your ID:
   ```text
   google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
   ```
4. While `ADSENSE_PUBLISHER_ID` is empty, **no placeholders or empty boxes are shown to users**. Once filled, real ads appear smoothly without layout shift.
