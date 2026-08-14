# Heartlines — a love advice blog, built for AdSense and Search Console

A warm, editorial blog that publishes love and relationship advice, structured so Google can crawl, index, and monetize it from day one.

## What gets built

**Pages**
- Home (`/`) — hero, featured article, category strip, latest posts grid, newsletter-style CTA.
- Article pages (`/blog/<slug>`) — 8 in-depth advice posts (600-1200 words each) covering: healthy communication, rebuilding trust, dating after a breakup, long-distance relationships, love languages, red flags, keeping the spark long-term, first-date advice.
- Category pages (`/category/<slug>`) — Dating, Relationships, Breakups, Self-Love.
- All posts (`/blog`) — full index.
- About (`/about`), Contact (`/contact`).
- Privacy Policy (`/privacy`), Terms (`/terms`), Disclaimer (`/disclaimer`) — AdSense approval requires these.

Content is written as static posts in code (fast, perfectly crawlable, no backend). If you later want to publish posts yourself from an admin panel, that can be added on top with Lovable Cloud.

**Design**
Warm romantic editorial: deep plum background accents, blush/cream surfaces, rose accent. Serif display headings paired with a clean sans body. All colors as semantic tokens in `src/styles.css`, light + dark mode.

## AdSense readiness

- AdSense script loaded once in the root document head, plus `ads.txt` in `public/`.
- A reusable `<AdSlot />` component with reserved height (prevents layout shift) placed in the standard high-performing spots: below the article intro, mid-article, end of article, and one sidebar/in-feed unit on listing pages.
- Publisher ID kept in one config file so swapping in your real `ca-pub-…` is a one-line change. Until you provide it, slots render as clearly labelled inert placeholders and no live ad code fires.
- Policy pages, visible contact route, real substantive content, and no ads on policy pages — the things reviewers check.

## Search Console & SEO

- Per-route `head()`: unique title (<60 chars), meta description (<160), canonical, `og:*`, `twitter:card`.
- Single H1 per page, semantic `<article>`/`<nav>`/`<footer>`, descriptive alt text, lazy-loaded images.
- JSON-LD: `BlogPosting` on articles (headline, author, dates, image), `Breadcrumblist` on posts and categories, `Organization` + `WebSite` on home.
- `public/sitemap.xml` listing every route, and `robots.txt` updated with the sitemap directive once the site has a URL.
- A `google-site-verification` meta tag slot ready; after you publish I can request the token, drop it in, and verify + submit the sitemap to Search Console directly.
- Internal linking: related-posts block on each article, category cross-links, breadcrumbs.

## Technical notes

- TanStack Start file routes under `src/routes`; posts live in a typed `src/content/posts.ts` module consumed by both the listing and dynamic `$slug` routes, so a 404 renders for unknown slugs.
- Article images generated as assets and imported directly; hero image URL reused as `og:image` on the relevant leaf routes only.
- Shared `SiteHeader`, `SiteFooter`, `PostCard`, `AdSlot`, `Prose`, `Seo` helpers as small components.

## Follow-ups after approval

1. Publish the site (needed before Search Console verification and AdSense review).
2. Send me your `ca-pub-…` ID to activate live ad units.