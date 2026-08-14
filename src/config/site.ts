/**
 * Central site configuration.
 *
 * ADSENSE_PUBLISHER_ID: paste your real AdSense publisher ID here
 * (format: "ca-pub-0000000000000000"). While it is an empty string, no ad units
 * are displayed and no Google scripts are loaded.
 */
export const ADSENSE_PUBLISHER_ID = "";

/**
 * Ad unit slot IDs from your AdSense account.
 */
export const ADSENSE_SLOTS = {
  articleTop: "",
  articleMid: "",
  articleEnd: "",
  inFeed: "",
} as const;

/**
 * Google Search Console meta verification token (the `content` value of the
 * google-site-verification tag). Paste your token here when verifying.
 */
export const GOOGLE_SITE_VERIFICATION = "";

export const SITE = {
  name: "HeartlinesHub",
  url: "https://heartlineshub.vercel.app",
  tagline: "Honest love advice, written for real relationships",
  description:
    "HeartlinesHub publishes calm, practical love and relationship advice on dating, trust, breakups, and keeping long-term love alive.",
  email: "heartlineshub@gmail.com",
  author: "HeartlinesHub Editorial Team",
  authorRole: "Editorial Columnists & Relationship Writers",
  authorBio:
    "Written and curated by the HeartlinesHub editorial team, providing calm, grounded relationship guidance, communication habits, and thoughtful love advice for everyday couples and singles.",
  logo: "/favicon.svg",
} as const;