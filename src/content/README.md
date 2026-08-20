# 📖 HeartlinesHub Blog Publishing & Editorial Master Guide

Welcome to the **HeartlinesHub** content engine. This guide contains everything you need to write, style, optimize for **Google Search Console (SEO)**, and monetize with **Google AdSense**.

---

## 📑 Table of Contents
1. [Where Articles Are Saved](#1-where-articles-are-saved)
2. [Golden Editorial Standards & Requirements](#2-golden-editorial-standards--requirements)
3. [Step-by-Step: Adding a New Blog Post](#3-step-by-step-adding-a-new-blog-post)
4. [Cloudinary Image Hosting & Credentials (Zero Local Storage)](#4-cloudinary-image-hosting--credentials-zero-local-storage)
5. [Rich Block Types & Custom Styling Reference](#5-rich-block-types--custom-styling-reference)
6. [Built-in Reader & Editorial Features](#6-built-in-reader--editorial-features)
7. [SEO Optimization Master Checklist](#7-seo-optimization-master-checklist)
8. [Google Search Console & Bing Setup](#8-google-search-console--bing-setup)
9. [Google AdSense Setup](#9-google-adsense-setup)
10. [GitHub Push & Personal Access Token](#10-github-push--personal-access-token)

---

## 1. Where Articles Are Saved

| File / Folder | Purpose |
| :--- | :--- |
| **`src/content/posts/`** | **Individual blog files.** Each article lives in its own dedicated file (e.g. `src/content/posts/my-new-post.ts`). |
| **`src/content/posts/index.ts`** | **Master post index.** Automatically discovers and exports all `.ts` article files using Vite's `import.meta.glob`. |
| **`src/content/types.ts`** | TypeScript type definitions for `Post` and `Block`. |
| **`src/content/categories.ts`** | Categories (*Dating, Relationships, Breakups, Self-Love*). |
| **`src/assets/`** | Image assets (cover photos, author photos, inline illustrations). |
| **`src/config/site.ts`** | Site metadata, search verification tokens, Analytics, and Google AdSense IDs. |

---

## 2. Golden Editorial Standards & Requirements

To ensure every article published on **HeartlinesHub** ranks high on search engines (Google, Bing, Perplexity) and provides exceptional value to readers, all articles must adhere to the following 5 Golden Rules:

### 📏 1. Minimum Article Length: 1,000+ Words
- Every article must contain at least **1,000 words** of thorough, thoughtful, and actionable advice.
- Avoid thin filler or fluff. Provide real psychological insights, conversational scripts, practical exercises, and clear examples.

### 🖼️ 2. Minimum 2+ Distinct High-Quality Clickable Images
- **16:9 Aspect Ratio (YouTube Thumbnail Ratio):** Always use a standard **16:9 aspect ratio** (e.g., 1280×720 or 1920×1080) for all cover photos and inline editorial images to ensure consistent visual aesthetics and responsive display.
- **Original High Quality:** Always upload and add images in **original crystal-clear quality/resolution** without heavy lossy compression or blurriness so they look razor-sharp on Retina displays and in lightbox zoom.
- **Header Featured Image:** 1 high-resolution cover photo at the top of the post (`post.image`).
- **Inline Editorial Images:** At least **1 to 2 distinct inline images** placed strategically between major sections (`t: "image"`).
- **100% Unique Images (No Repetition):** Never reuse the same image across different articles or inside the same article.
- **Interactive & Clickable:** All images are automatically equipped with the built-in Lightbox Zoom feature so readers can click to view them in full resolution.

### ✍️ 3. Authentic Human Voice & Tone
- Articles must sound **100% human-written, warm, compassionate, and grounded**—like advice from an empathetic, level-headed mentor.
- Avoid robotic AI tropes, stiff clichés, or generic summaries.
- Use relatable stories, realistic couples dialogues, and emotional validation.

### 🔍 4. SEO-Friendly Architecture
- **Keywords:** Integrate primary and secondary long-tail keywords naturally into headings (`h2`, `h3`), intro paragraphs, takeaways, and FAQ questions.
- **Structured Schema:** Every post must include `keywords`, `takeaways`, and `faqs` to generate Google `BlogPosting`, `BreadcrumbList`, and `FAQPage` rich snippets.

### 💡 5. Unique Topics Every Time
- Every article must cover a fresh, distinctive relationship theme (e.g. communication scripts, emotional maturity, setting boundaries, rebuilding trust, attachment styles, healing after breakups).

---

## 3. Step-by-Step: Adding a New Blog Post

1. **Add your high-resolution images:**
   Place your **16:9 ratio** images in `src/assets/` (e.g. `src/assets/post-boundaries-cover.jpg` and `src/assets/post-boundaries-inline.jpg`).

2. **Create a new file in `src/content/posts/`** (e.g. `src/content/posts/how-to-set-boundaries.ts`):
   ```typescript
   import coverImage from "@/assets/post-boundaries-cover.jpg";
   import inlineImage from "@/assets/post-boundaries-inline.jpg";
   import { SITE } from "@/config/site";
   import type { Post } from "../types";

   export const post: Post = {
     slug: "how-to-set-boundaries-without-guilt",
     title: "How to Set Boundaries in a Relationship Without Feeling Guilty",
     headline: "How to set boundaries in a relationship without feeling guilty",
     description: "A compassionate, practical guide to establishing healthy emotional and physical boundaries with your partner while preserving intimacy.",
     category: "relationships", // "dating" | "relationships" | "breakups" | "self-love"
     date: "2026-08-16",
     readingMinutes: 8,
     image: coverImage,
     imageAlt: "A calm, serene morning tea table in soft warm window light",
     excerpt: "Setting boundaries is not about building walls—it is about teaching the person you love how to safely hold your heart.",
     takeaways: [
       "Boundaries are guidelines for connection, not ultimatums or punishments.",
       "Guilt often stems from confusing self-preservation with selfishness.",
       "Clear communication early prevents explosive resentment later.",
       "Healthy partners welcome clarity over quiet withdrawal."
     ],
     keywords: [
       "healthy relationship boundaries",
       "how to set boundaries without guilt",
       "relationship communication tips",
       "self love in marriage",
       "emotional boundaries with partner"
     ],
     authorName: SITE.author,
     authorRole: SITE.authorRole,
     faqs: [
       {
         q: "What should I do if my partner reacts defensively to a boundary?",
         a: "Reassure them of your affection first: 'I love you and want us to be closer, which is why I need to share what helps me feel safe.' Give them time to process without retracting your need."
       },
       {
         q: "How do I know if I'm setting a boundary or making a demand?",
         a: "A boundary describes what you will do to protect your wellbeing ('If yelling starts, I will step outside for 20 minutes'). A demand attempts to control the other person ('You are not allowed to get angry')."
       }
     ],
     body: [
       { t: "p", text: "When you love someone deeply, stating what you need can feel like an act of betrayal..." },
       { t: "h2", text: "Why We Confuse Boundaries with Rejection" },
       { t: "p", text: "Most people who struggle with boundaries were taught that love requires total self-abandonment..." },
       {
         t: "callout",
         variant: "tip",
         icon: "Heart",
         title: "The Golden Rule of Boundaries",
         text: "A boundary is a bridge that allows two distinct individuals to meet without either of them disappearing."
       },
       {
         t: "image",
         src: inlineImage,
         alt: "Two hands resting gently beside open notebooks on a rustic wooden table",
         caption: "Direct, calm conversations build safety and deepen emotional connection."
       },
       {
         t: "do-dont",
         title: "Setting Healthy Boundaries: What to Do & What to Avoid",
         dos: [
           "Speak from your personal experience ('I need quiet time to recharge')",
           "Set clear, actionable guidelines before conflicts arise",
           "Acknowledge and validate your partner's emotional response"
         ],
         donts: [
           "Use silent treatment as a substitute for honest communication",
           "Apologize for having legitimate emotional or physical limits",
           "Set ultimatums in moments of intense anger or exhaustion"
         ]
       },
       {
         t: "quote",
         text: "You cannot pour from an empty cup, and you cannot build lasting love on a foundation of quiet resentment.",
         author: "HeartlinesHub Editorial Team"
       }
     ]
   };

   export default post;
   ```

3. **Automatic Registration!**
   Thanks to Vite's `import.meta.glob`, you **do NOT need to edit `index.ts`**. The website automatically discovers your new file, calculates the reading time, adds it to the Homepage, `/blog` archive, categories, `/sitemap.xml`, and Google SEO schemas!

---

## 4. Cloudinary Image Hosting & Credentials (Zero Local Storage)

To avoid consuming device or phone storage, you can host all blog images directly on **Cloudinary** and paste the public HTTPS URLs into your posts.

### 🔑 Cloudinary API Credentials
```javascript
const cloudinaryConfig = {
  cloudName: 'dnsvnesix',
  apiKey: '669344974766477',
  apiSecret: 'aj55ngqhnrOo5icATgOpYKHsdOY',
  uploadUrl: 'https://api.cloudinary.com/v1_1/dnsvnesix/image/upload'
};
```

> [!IMPORTANT]
> **Upload in Original Quality:** Always upload images in their **original resolution and uncompressed quality**. Cloudinary automatically delivers optimized formats (WebP/AVIF) over its global CDN while preserving razor-sharp visuals for lightbox zooming.

### 🚀 How to Use Cloudinary URLs in Blog Posts
When using Cloudinary image URLs, you **do not need to import files from `src/assets/`**. Just pass the URL string directly:

```typescript
import { SITE } from "@/config/site";
import type { Post } from "../types";

export const post: Post = {
  slug: "healthy-communication-habits",
  title: "5 Healthy Communication Habits Every Couple Needs",
  headline: "5 healthy communication habits every couple needs",
  description: "Transform daily conversations with practical, compassionate communication strategies.",
  category: "relationships",
  date: "2026-08-20",
  readingMinutes: 7,
  // 🌟 Direct Cloudinary Cover Image URL (16:9 Aspect Ratio)
  image: "https://res.cloudinary.com/dnsvnesix/image/upload/v1/heartlines/cover-communication.webp",
  imageAlt: "Two people talking calmly over warm coffee in morning sunlight",
  excerpt: "Gentle words spoken at the right moment can heal years of quiet misunderstanding.",
  takeaways: [
    "Speak from personal feelings rather than accusations.",
    "Pause when emotional heart rates rise."
  ],
  keywords: ["relationship communication", "healthy habits", "couples dialogue"],
  authorName: SITE.author,
  authorRole: SITE.authorRole,
  body: [
    { t: "p", text: "Communication is the heartbeat of intimacy..." },
    {
      t: "image",
      // 🌟 Direct Cloudinary Inline Image URL (16:9 Aspect Ratio)
      src: "https://res.cloudinary.com/dnsvnesix/image/upload/v1/heartlines/inline-communication.webp",
      alt: "Couple holding hands across a wooden table",
      caption: "Small daily check-ins prevent deep emotional divides."
    }
  ]
};

export default post;
```

---

## 5. Rich Block Types & Custom Styling Reference

Build magazine-grade layouts with these block types inside the `body` array:

### 1. Paragraph (`p`)
```typescript
{ t: "p", text: "Standard paragraph text goes here." }
```

### 2. Headings (`h2` & `h3`)
Automatically generates smooth-scroll IDs for the Table of Contents:
```typescript
{ t: "h2", text: "1. Pick the Moment Before You Pick the Words" }
```

### 3. Inline Clickable Images with Captions (`image`)
```typescript
import inlinePhoto from "@/assets/post-attachment.jpg";

{
  t: "image",
  src: inlinePhoto,
  alt: "Two coffee cups on a wooden table in morning sunlight",
  caption: "Couples who practice daily unhurried connection report greater resilience against conflict."
}
```

### 4. Custom Icon Callouts (`callout`)
Variants: `"tip"`, `"warning"`, `"info"`, `"highlight"`, `"custom"`.
```typescript
{
  t: "callout",
  variant: "tip",
  icon: "💡",
  title: "Golden Rule of Difficult Conversations",
  text: "Never start a sensitive conversation after 9 PM or while multitasking."
}
```

### 5. Multi-Point Icon List (`icon-list`)
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
      text: "Tired, lonely, overwhelmed, or scared."
    }
  ]
}
```

### 6. Do's & Don'ts Comparison Cards (`do-dont`)
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

### 7. Key Takeaways Summary (`takeaways`)
```typescript
{
  t: "takeaways",
  title: "Summary of Key Points",
  items: [
    "Timing matters more than the exact wording.",
    "Express internal feelings rather than external blame."
  ]
}
```

### 8. Styled Blockquotes (`quote`)
```typescript
{
  t: "quote",
  text: "Love does not die from conflict; it dies from unresolved resentment.",
  author: "HeartlinesHub Editorial Team"
}
```

---

## 6. Built-in Reader & Editorial Features

- 🔍 **Interactive Image Lightbox:** Clicking any image (header or inline) opens a crystal-clear full-resolution zoom view.
- 📊 **Reading Progress Bar:** Tracks scroll percentage smoothly at the very top.
- 📑 **Table of Contents:** Auto-extracts all `h2`/`h3` headings with live scroll spy.
- 🔗 **Social Share Suite:** One-tap sharing to WhatsApp, X (Twitter), Facebook, LinkedIn, and Copy Link.
- ⏭️ **Previous & Next Article Links:** Automatic chronological navigation.
- 👤 **E-E-A-T Author Profile Card:** Shows verified editorial credentials.
- ❓ **Collapsible FAQ Section:** Generates Google `FAQPage` search snippet schemas.
- ♾️ **Automatic Infinite Scroll:** Smooth auto-loading on the blog archive page.

---

## 7. SEO Optimization Master Checklist

- [x] **Single `<h1>` Title Tag:** Automatic headline hierarchy.
- [x] **Schema.org Structured Data (`BlogPosting`, `BreadcrumbList`, `FAQPage`):** Automatic Google rich snippets.
- [x] **Absolute Canonical URLs:** Uses `https://heartlineshub.vercel.app/...` everywhere.
- [x] **OpenGraph & Twitter Cards:** Generates rich social media previews.
- [x] **Automated XML Sitemap:** Live at `/sitemap.xml`.
- [x] **Search Engine Protocols:** Google, Bing, IndexNow (`4e97bc558b1c431e8faf3a426cf396ac.txt`), Yandex (`yandex_a5d7c8e42b47f94d.html`), OpenAI (`OAI-SearchBot`), and Perplexity (`PerplexityBot`).

---

## 8. Google Search Console & Bing Setup

1. **Google Search Console:**
   - Add property `https://heartlineshub.vercel.app/` (URL prefix).
   - Token is configured in `src/config/site.ts`: `pBwWQssCl5AkaXv3Wpm_2RY-UW0AHOghk2biMXmZZ5w`.
   - Submit sitemap: `sitemap.xml`.

2. **Bing Webmaster Tools & IndexNow:**
   - Token configured in `src/config/site.ts`: `186E8A3F31B939C0E27438E08C3F38E9`.
   - IndexNow verification key live at: `/4e97bc558b1c431e8faf3a426cf396ac.txt`.

3. **Yandex Webmaster:**
   - HTML verification live at: `/yandex_a5d7c8e42b47f94d.html`.

---

## 9. Google AdSense Setup

1. Paste your publisher ID into `src/config/site.ts`:
   ```typescript
   export const ADSENSE_PUBLISHER_ID = "ca-pub-1234567890123456";
   ```
2. Update `public/ads.txt` with your ID:
   ```text
   google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0
   ```
3. While `ADSENSE_PUBLISHER_ID` is empty, **no empty boxes or placeholders are shown to readers**. Once filled, clean ads appear without layout shifting (Zero CLS).

---

## 10. GitHub Push Configuration

The local Git remote on this device is permanently authenticated using your Personal Access Token in `.git/config`. You do **not** need to enter your password or token every time you push.

### 🚀 Standard Push Workflow
```bash
git add .
git commit -m "Your article or update description"
git push origin main
```

> [!NOTE]
> If you ever clone this repository onto another machine or need to reconnect your token:
> ```bash
> git remote set-url origin https://<YOUR_GITHUB_USERNAME>:<YOUR_PERSONAL_ACCESS_TOKEN>@github.com/cashc17/sweet-advice-hub.git
> ```
