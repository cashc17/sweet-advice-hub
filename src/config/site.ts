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
export const GOOGLE_SITE_VERIFICATION =
  "pBwWQssCl5AkaXv3Wpm_2RY-UW0AHOghk2biMXmZZ5w";

/**
 * Bing Webmaster Tools meta verification token (the `content` value of the
 * msvalidate.01 tag). Paste your token here when verifying.
 */
export const BING_SITE_VERIFICATION = "186E8A3F31B939C0E27438E08C3F38E9";

/**
 * IndexNow API key for instant search engine indexing (Bing, Yandex, etc.)
 */
export const INDEXNOW_KEY = "4e97bc558b1c431e8faf3a426cf396ac";

/**
 * Yandex Webmaster meta verification token
 */
export const YANDEX_SITE_VERIFICATION = "a5d7c8e42b47f94d";

/**
 * Microsoft Clarity analytics tracking ID
 */
export const MICROSOFT_CLARITY_ID = "y2o092sgd3";

/**
 * Google Analytics (GA4) measurement ID
 */
export const GA_MEASUREMENT_ID = "G-6WLLZ93QR0";

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