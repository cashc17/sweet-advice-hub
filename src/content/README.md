# 📖 HeartlinesHub Blog Publishing & SEO Master Guide

Welcome to the **HeartlinesHub** blog content engine. This guide contains everything you need to write, style, optimize for **Google Search Console (SEO)**, and monetize with **Google AdSense**.

---

## 📑 Table of Contents
1. [Where Articles Are Saved](#1-where-articles-are-saved)
2. [Step-by-Step: Adding a New Blog Post](#2-step-by-step-adding-a-new-blog-post)
3. [Rich Block Types & Custom Styling Reference](#3-rich-block-types--custom-styling-reference)
4. [SEO Optimization Master Checklist](#4-seo-optimization-master-checklist)
5. [Google Search Console Setup](#5-google-search-console-setup)
6. [Google AdSense Setup](#6-google-adsense-setup)
7. [Full Copy-Paste Blog Post Template](#7-full-copy-paste-blog-post-template)

---

## 1. Where Articles Are Saved

| File / Folder | Purpose |
| :--- | :--- |
| **`src/content/posts.ts`** | **The main blog database.** All article texts, blocks, metadata, and dates live here. |
| **`src/content/categories.ts`** | Categories (*Dating, Relationships, Breakups, Self-Love*). |
| **`src/assets/`** | Image assets (cover photos, author photos, inline illustrations). |
| **`src/config/site.ts`** | Site metadata, Google Search Console token, and Google AdSense IDs. |

---

## 2. Step-by-Step: Adding a New Blog Post

1. **Add your featured image:** Place a high-quality `.jpg`, `.webp`, or `.png` in `src/assets/` (e.g. `src/assets/post-healthy-habits.jpg`).
2. **Open `src/content/posts.ts`** and import your image at the top:
   ```typescript
   import postHealthyHabits from "@/assets/post-healthy-habits.jpg";
   ```
3. **Add a new post object** to the `posts` array in `src/content/posts.ts`.
4. **Save the file!** The post will automatically appear on:
   - Homepage (`/`)
   - Blog archive (`/blog`)
   - Category archive (`/category/relationships`, etc.)
   - Its dedicated post URL (`/blog/your-post-slug`)
   - The XML Sitemap (`/sitemap.xml`)

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
Automatically generates smooth-scrollable HTML IDs:
```typescript
{ t: "h2", text: "1. The 20-Minute Cooling Rule" },
{ t: "h3", text: "Why Physical Distance Matters First" }
```

### 3. Bullet & Numbered Lists (`ul` & `ol`)
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

### 4. Styled Blockquotes (`quote`)
```typescript
{
  t: "quote",
  text: "Love does not die from conflict; it dies from unresolved resentment.",
  author: "Dr. John Gottman"
}
```

### 5. Pro-Tips, Warnings & Info Callouts (`callout`)
Available variants: `"tip"`, `"warning"`, `"info"`, `"highlight"`.
```typescript
{
  t: "callout",
  variant: "tip",
  title: "Golden Rule of Conflict",
  text: "Never discuss serious life decisions after 10 PM when energy and patience are depleted."
},
{
  t: "callout",
  variant: "warning",
  title: "Red Flag Alert",
  text: "If a partner stonewalls for days without communicating, that is emotional withdrawal, not a timeout."
}
```

### 6. Inline Images with Captions (`image`)
```typescript
{
  t: "image",
  src: "/assets/inline-diagram.jpg", // or imported image variable
  alt: "Illustration of the communication cycle",
  caption: "Figure 1: How emotional de-escalation leads to productive resolution."
}
```

### 7. Do's & Don'ts Comparison Box (`do-dont`)
```typescript
{
  t: "do-dont",
  title: "Conflict Resolution: Do's & Don'ts",
  dos: [
    "Speak with 'I feel' statements",
    "Acknowledge your partner's emotions",
    "Take time to calm down before replying"
  ],
  donts: [
    "Use accusatory words like 'you always'",
    "Bring past unrelated arguments",
    "Storm off without giving a return time"
  ]
}
```

### 8. Key Takeaways Box (`takeaways`)
Can be added as a block or defined in `takeaways` property on the Post:
```typescript
{
  t: "takeaways",
  title: "Quick Summary",
  items: [
    "Timing matters more than the specific wording.",
    "Repair attempts work only when accepted quickly.",
    "Spend 80% of attention on appreciation rather than criticism."
  ]
}
```

### 9. Section Divider (`divider`)
```typescript
{ t: "divider" }
```

---

## 4. SEO Optimization Master Checklist

Every article in HeartlinesHub comes automatically armed with enterprise SEO architecture:

- [x] **Single `<h1>` Title Tag:** Automatically sets the article headline as the only H1.
- [x] **Schema.org Structured Data (`BlogPosting` & `BreadcrumbList`):** Enables Google Rich Snippets, Author badges, Star ratings, and Knowledge Graph inclusion.
- [x] **OpenGraph & Twitter Cards:** Generates preview images, title, and description when shared on Facebook, WhatsApp, LinkedIn, X/Twitter, or Telegram.
- [x] **Canonical Link Tag:** Injected dynamically into `<head>` to prevent duplicate content penalties.
- [x] **Reading Time:** Displays estimated reading minutes for improved reader engagement and lower bounce rate.
- [x] **Semantic HTML:** Pure HTML5 elements (`<article>`, `<header>`, `<figure>`, `<figcaption>`, `<nav>`, `<time>`).
- [x] **Zero Cumulative Layout Shift (CLS):** Images and ad slots reserve their height to guarantee top Core Web Vitals scores.

---

## 5. Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **URL prefix** or **HTML tag verification**.
3. Copy your verification code (the `content="xxxx"` part).
4. Open `src/config/site.ts` and paste the token:
   ```typescript
   export const GOOGLE_SITE_VERIFICATION = "your-google-token-here";
   ```
5. Click **Verify** in Google Search Console.
6. Submit your sitemap in Search Console:
   - In the left sidebar, click **Sitemaps**.
   - Enter `sitemap.xml` and click **Submit**.

---

## 6. Google AdSense Setup

1. Go to [Google AdSense](https://adsense.google.com/).
2. Copy your Publisher ID (e.g. `ca-pub-1234567890123456`).
3. Open `src/config/site.ts`:
   ```typescript
   export const ADSENSE_PUBLISHER_ID = "ca-pub-1234567890123456";

   export const ADSENSE_SLOTS = {
     articleTop: "1234567890",   // Slot ID for top banner
     articleMid: "2345678901",   // Slot ID for in-article ad
     articleEnd: "3456789012",   // Slot ID for bottom banner
     inFeed: "4567890123",       // Slot ID for homepage/archive feeds
   } as const;
   ```
4. While `ADSENSE_PUBLISHER_ID` is empty `""`, the site displays clean, unobtrusive placeholder boxes so layout testing is seamless. Once filled, real ads appear automatically without shifting the page layout!

---

## 7. Full Copy-Paste Blog Post Template

Copy and paste this template into `src/content/posts.ts`:

```typescript
{
  slug: "your-article-url-slug",
  title: "Your SEO Catchy Article Title — HeartlinesHub",
  headline: "Your Main Headline Displayed to Readers",
  description: "A compelling 150-160 character meta description containing your target keywords for Google Search results.",
  category: "relationships", // Options: "dating" | "relationships" | "breakups" | "self-love"
  date: "2026-08-14",
  readingMinutes: 6,
  image: yourImportedImage,
  imageAlt: "Descriptive alt text for image SEO and screen readers",
  excerpt: "A powerful 2-3 sentence summary displayed on card previews.",
  keywords: [
    "relationship advice",
    "healthy communication",
    "dating tips",
    "how to stop fighting"
  ],
  authorName: "The HeartlinesHub Editors",
  authorRole: "Relationship & Communication Specialists",
  authorBio: "HeartlinesHub publishes honest, grounded love advice written to help couples and singles build healthier, more enduring connections.",
  takeaways: [
    "Key takeaway point #1",
    "Key takeaway point #2",
    "Key takeaway point #3",
    "Key takeaway point #4"
  ],
  body: [
    {
      t: "p",
      text: "Start your article with an engaging hook that directly addresses the reader's core problem."
    },
    {
      t: "callout",
      variant: "tip",
      title: "Core Principle",
      text: "A quick golden rule or actionable tip."
    },
    {
      t: "h2",
      text: "First Major Subheading"
    },
    {
      t: "p",
      text: "Explain the concept clearly and provide practical solutions."
    },
    {
      t: "ul",
      items: [
        "First practical action step",
        "Second practical action step",
        "Third practical action step"
      ]
    },
    {
      t: "quote",
      text: "An inspiring or thought-provoking quote.",
      author: "Famous author or relationship expert"
    },
    {
      t: "do-dont",
      title: "Best Practices vs Common Pitfalls",
      dos: [
        "Stay calm and speak clearly",
        "Listen actively without defensiveness"
      ],
      donts: [
        "Interrupt or shout",
        "Bring up past mistakes"
      ]
    },
    {
      t: "h2",
      text: "What to Do Starting Today"
    },
    {
      t: "p",
      text: "Wrap up the article with a clear, achievable step the reader can take right now."
    }
  ]
}
```
