# HeartlinesHub — Modern Relationship Advice & Editorial Publishing Platform

> **HeartlinesHub** is a modern, high-performance editorial blog platform built for relationship, dating, and love advice. Engineered with a focus on **Enterprise SEO**, **Google Search Console optimization**, **Google AdSense monetization**, and a **magazine-grade reading experience**.

---

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start (Local Development)](#-quick-start-local-development)
- [⚙️ Central Site Configuration](#️-central-site-configuration)
- [✍️ How to Publish & Style Blog Posts](#️-how-to-publish--style-blog-posts)
- [🔍 SEO & Google Search Console Setup](#-seo--google-search-console-setup)
- [💰 Google AdSense Setup & Monetization](#-google-adsense-setup--monetization)
- [📱 Favicons & Web Manifest](#-favicons--web-manifest)
- [📄 License & Credits](#-license--credits)

---

## ✨ Key Features

### 📖 Editorial & Reader Experience
- **Top Reading Progress Bar:** Sleek, responsive progress indicator tracking reader scroll depth.
- **Social Share Suite:** One-click sharing to WhatsApp, X (Twitter), Facebook, LinkedIn, plus interactive Copy Link with instant feedback.
- **Key Takeaways Box:** Highlighted summary cards at the top of every article.
- **Author Profile Cards (E-E-A-T):** Dedicated author bio, avatar, and credentials on every post meeting Google's quality rater guidelines.
- **Rich Article Blocks:** 
  - Pro-Tip, Warning, Info, and Highlight callout boxes
  - Interactive Do's & Don'ts comparison cards
  - Inline images with `<figure>` and `<figcaption>` captions
  - Auto-linked section headings (`h2`, `h3`) with anchor deep-linking
  - Blockquotes with author attribution
  - Ordered and bullet lists

### 🔍 Search Engine Optimization (SEO)
- **Schema.org Structured Data (JSON-LD):** Auto-generated `BlogPosting` and `BreadcrumbList` schemas for Google Rich Snippets.
- **Full Social Previews:** OpenGraph (`og:title`, `og:image`, `og:description`, `og:url`) and Twitter Card tags.
- **Dynamic XML Sitemap:** Automatically generated at `/sitemap.xml` with change frequencies and priorities.
- **Canonical URLs:** Dynamic `<link rel="canonical">` on every page preventing duplicate content penalties.
- **Optimized `robots.txt`:** Fully configured with automated sitemap discovery for Googlebot, Bingbot, etc.

### 💰 Google AdSense Monetization
- **Pre-Configured Ad Slots:** Above-the-fold top ad, in-prose mid-article ad, bottom ad, and category in-feed slots.
- **Zero Cumulative Layout Shift (CLS):** Pre-allocated minimum container heights prevent jarring page jumps when ads load, protecting your Core Web Vitals score.
- **Safe Development Placeholders:** Clean placeholders display during testing while your AdSense ID is empty.
- **Valid `ads.txt` Support:** Located in `public/ads.txt`.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Routing & SSR:** TanStack Router + TanStack Start
- **Bundler & Tooling:** Vite
- **Styling:** Tailwind CSS 4 + Modern CSS design tokens (`OKLCH` color space)
- **Typography:** Google Fonts pairing (*Fraunces* Serif + *Karla* Sans)
- **Icons:** Lucide React
- **UI Primitives:** Radix UI

---

## 📁 Project Structure

```text
sweet-advice-hub/
├── public/                     # Static assets served at root
│   ├── favicon.ico             # Classic browser favicon
│   ├── favicon.svg             # Modern vector favicon
│   ├── favicon-96x96.png       # HD desktop favicon
│   ├── apple-touch-icon.png    # iOS / Safari home screen icon
│   ├── site.webmanifest        # Progressive Web App (PWA) manifest
│   ├── web-app-manifest-*.png  # PWA app icons (192x192, 512x512)
│   ├── robots.txt              # Search engine crawler instructions
│   └── ads.txt                 # Google AdSense publisher validation
├── src/
│   ├── assets/                 # High-res featured images for articles
│   ├── components/             # Reusable UI components
│   │   ├── author-card.tsx     # E-E-A-T Author profile card
│   │   ├── key-takeaways.tsx   # Article summary bullet points box
│   │   ├── reading-progress.tsx# Top scroll progress bar
│   │   ├── social-share.tsx    # Multi-platform share buttons
│   │   ├── prose.tsx           # Rich article body renderer
│   │   ├── ad-slot.tsx         # Zero-CLS Google AdSense unit container
│   │   ├── site-header.tsx     # Navigation header & brand logo
│   │   ├── site-footer.tsx     # Footer links, topics, & copyright
│   │   └── ui/                 # Accessible Radix/shadcn UI elements
│   ├── config/
│   │   └── site.ts             # Central configuration (Domain, AdSense, SEO tokens)
│   ├── content/
│   │   ├── posts.ts            # Main blog database (all articles & blocks)
│   │   ├── categories.ts       # Category taxonomy definitions
│   │   └── README.md           # Dedicated blog writer's handbook
│   ├── routes/                 # File-based routing
│   │   ├── __root.tsx          # HTML shell, global head tags & fonts
│   │   ├── index.tsx           # Homepage (Hero, Featured, Category grids)
│   │   ├── blog.index.tsx      # All articles archive (/blog)
│   │   ├── blog.$slug.tsx      # Single article template (/blog/:slug)
│   │   ├── category.$slug.tsx  # Category filter archive (/category/:slug)
│   │   ├── sitemap[.]xml.ts    # Dynamic XML Sitemap generator
│   │   ├── about.tsx           # About page
│   │   ├── contact.tsx         # Contact form page
│   │   ├── privacy.tsx         # Privacy policy
│   │   ├── terms.tsx           # Terms of use
│   │   └── disclaimer.tsx      # Editorial disclaimer
│   └── styles.css              # Global styles, OKLCH palette, & Tailwind imports
└── package.json                # Project dependencies & scripts
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- **Node.js** 20+ installed
- **npm** or **bun**

### 2. Installation & Run
```bash
# Clone the repository
git clone <your-repository-url>
cd sweet-advice-hub

# Install dependencies
npm install

# Start local development server
npm run dev
```

Your site will be live at `http://localhost:5173` (or the port indicated in your terminal).

---

## ⚙️ Central Site Configuration

All global settings are managed in one file: **[`src/config/site.ts`](src/config/site.ts)**.

```typescript
// 1. Google AdSense Publisher ID (leave empty during development)
export const ADSENSE_PUBLISHER_ID = "ca-pub-XXXXXXXXXXXXXXXX";

// 2. Google AdSense Slot IDs
export const ADSENSE_SLOTS = {
  articleTop: "XXXXXXXXXX",   // Banner above article
  articleMid: "XXXXXXXXXX",   // In-prose middle ad
  articleEnd: "XXXXXXXXXX",   // Banner below article
  inFeed: "XXXXXXXXXX",       // Grid in-feed ad
} as const;

// 3. Google Search Console Verification Token
export const GOOGLE_SITE_VERIFICATION = "your-google-verification-token";

// 4. Site Brand & Domain Metadata
export const SITE = {
  name: "HeartlinesHub",
  url: "https://heartlineshub.vercel.app",
  tagline: "Honest love advice, written for real relationships",
  description: "HeartlinesHub publishes calm, practical love and relationship advice...",
  email: "heartlineshub@gmail.com",
  author: "HeartlinesHub Editorial Team",
  logo: "/favicon.svg",
} as const;
```

---

## ✍️ How to Write & Publish a Blog Post

> [!TIP]
> 📚 **Complete Editorial Handbook:** For the full master guide with all rich block styling, code templates, interactive components, and writing tutorials, see **[`src/content/README.md`](src/content/README.md)**.

### 🌟 The 5 Golden Editorial Standards
Every article on HeartlinesHub must meet these core quality standards to rank on search engines (Google, Bing, Perplexity) and deliver maximum value to readers:

1. **📏 1,000+ Words Minimum:** In-depth, substantive, and practical guidance with realistic examples, actionable scripts, and psychological insights.
2. **🖼️ Minimum 2+ Unique Clickable Images:** 
   - 1 Header Featured Image (`post.image`).
   - At least 1 to 2 distinct Inline Editorial Images (`t: "image"`).
   - **Never reuse images:** Every image across every article must be unique.
   - **Clickable Lightbox:** All images are automatically clickable for full-resolution zoom.
3. **✍️ 100% Authentic Human Voice:** Written in an empathetic, warm, level-headed tone that feels like guidance from a trusted mentor—never robotic or generic.
4. **🔍 SEO Architecture:** Naturally woven keywords in headings (`h2`/`h3`), intro, `takeaways`, and structured `faqs` for Google `FAQPage` rich snippets.
5. **💡 Unique Topics:** Every article tackles a fresh, distinctive relationship, dating, or breakup theme.

---

### 🚀 Step-by-Step: Adding a New Post

1. **Place your images in `src/assets/`** (e.g. `src/assets/post-healthy-habits.jpg` and `src/assets/post-healthy-habits-inline.jpg`).
2. **Create a new file in `src/content/posts/`** (e.g. `src/content/posts/healthy-relationship-habits.ts`):

```typescript
import coverImage from "@/assets/post-healthy-habits.jpg";
import inlineImage from "@/assets/post-healthy-habits-inline.jpg";
import { SITE } from "@/config/site";
import type { Post } from "../types";

export const post: Post = {
  slug: "healthy-relationship-habits-that-last",
  title: "10 Daily Habits That Keep Relationships Strong Long-Term",
  headline: "10 daily habits that keep relationships strong long-term",
  description: "Ten grounded, evidence-based daily micro-habits that protect intimacy, prevent resentment, and build enduring partnership.",
  category: "relationships", // "dating" | "relationships" | "breakups" | "self-love"
  date: "2026-08-16",
  readingMinutes: 8,
  image: coverImage,
  imageAlt: "Two warm ceramic coffee mugs on a sunlit wooden breakfast table",
  excerpt: "Long-term love is not sustained by grand romantic gestures once a year; it is built in the small, unhurried daily habits.",
  takeaways: [
    "Daily 10-minute check-ins reduce explosive arguments by creating steady connection.",
    "Express internal feelings rather than delivering accusatory verdicts.",
    "Acknowledge repair attempts quickly, even during disagreements."
  ],
  keywords: [
    "healthy relationship habits",
    "long term marriage advice",
    "daily relationship tips",
    "how to keep love strong"
  ],
  authorName: SITE.author,
  authorRole: SITE.authorRole,
  faqs: [
    {
      q: "What is the single most effective daily habit for couples?",
      a: "Ten minutes of completely undivided attention every morning or evening without phones or screens."
    }
  ],
  body: [
    { t: "p", text: "Long-term love is rarely decided by the big vacations or anniversary dinners..." },
    {
      t: "callout",
      variant: "tip",
      icon: "Heart",
      title: "The Golden Habit",
      text: "Never let the day end without a moment of warm, sincere appreciation."
    },
    { t: "h2", text: "1. The 10-Minute Daily Emotional Check-In" },
    { t: "p", text: "Couples who drift apart rarely do so because of sudden tragedy; they drift in silence..." },
    {
      t: "image",
      src: inlineImage,
      alt: "Two people sitting quietly together enjoying morning tea",
      caption: "Small, consistent moments of undivided attention create deep emotional resilience."
    },
    {
      t: "do-dont",
      title: "Daily Communication: Dos & Don'ts",
      dos: [
        "Ask open questions like 'How did you feel about today?'",
        "Put your phone face down when your partner speaks",
        "Offer physical warmth before discussing difficult topics"
      ],
      donts: [
        "Multitask while listening to important conversations",
        "Offer unsolicited fixes when your partner just wants empathy",
        "Let small grievances sit in silence for weeks"
      ]
    },
    {
      t: "quote",
      text: "Being understood is not the same as being agreed with, but it is always where healing begins.",
      author: "HeartlinesHub Editorial Team"
    }
  ]
};

export default post;
```

3. **That's it! Zero Manual Imports:**
   Vite's auto-discovery engine in [`src/content/posts/index.ts`](src/content/posts/index.ts) automatically discovers your new file and publishes it across the Homepage, All Articles archive, Category page, and XML Sitemap!

📖 *For the complete reference of all block types, visit **[`src/content/README.md`](src/content/README.md)**.*

---

## 🔍 SEO & Google Search Console Setup

### 1. Verification
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Choose **URL prefix** or **HTML tag verification**.
3. Copy your verification token (the value inside `content="..."`).
4. Paste it into `GOOGLE_SITE_VERIFICATION` in [`src/config/site.ts`](src/config/site.ts).
5. Click **Verify** in Search Console.

### 2. Sitemap Submission
1. In Google Search Console, click **Sitemaps** in the left sidebar.
2. Enter `sitemap.xml` and click **Submit**.
3. Googlebot will automatically crawl all articles and categories listed in your sitemap.

---

## 💰 Google AdSense Setup & Monetization

1. Sign in to your [Google AdSense Dashboard](https://adsense.google.com/).
2. Copy your **Publisher ID** (e.g., `ca-pub-1234567890123456`).
3. Paste the ID into `ADSENSE_PUBLISHER_ID` in [`src/config/site.ts`](src/config/site.ts).
4. Update [`public/ads.txt`](public/ads.txt) with your numerical publisher ID:
   ```text
   google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
   ```
5. Create your display ad units in AdSense and paste their unit IDs into `ADSENSE_SLOTS` in `src/config/site.ts`.

---

## 📱 Favicons & Web Manifest

Your site includes a modern favicon suite in `public/`:
- `favicon.ico` — Classic browser fallback
- `favicon.svg` — Crisp vector icon for modern high-DPI displays
- `apple-touch-icon.png` — iOS Home Screen bookmark icon
- `site.webmanifest` & `web-app-manifest-*.png` — Android & Chrome PWA install support

Linked automatically in `<head>` via [`src/routes/__root.tsx`](src/routes/__root.tsx).

---

## 📄 License & Credits

- Designed & engineered for **HeartlinesHub**.
- Connected with [Lovable](https://lovable.dev).
