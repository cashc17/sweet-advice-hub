/**
 * Central site configuration.
 *
 * ADSENSE_PUBLISHER_ID: paste your real AdSense publisher ID here
 * (format: "ca-pub-0000000000000000"). While it is an empty string, ad slots
 * render as inert labelled placeholders and no Google ad code is loaded.
 */
export const ADSENSE_PUBLISHER_ID = "";

/**
 * Ad unit slot IDs from your AdSense account. Leave as-is until you create
 * the units; placeholders render instead.
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
  name: "Heartlines",
  url: "https://heartlines.blog",
  tagline: "Honest love advice, written for real relationships",
  description:
    "Heartlines publishes calm, practical love and relationship advice on dating, trust, breakups, and keeping long-term love alive.",
  email: "hello@heartlines.blog",
  author: "The Heartlines Editors",
  logo: "/favicon.svg",
} as const;