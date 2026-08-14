import { createFileRoute } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { LoadMoreGrid } from "@/components/load-more-grid";
import { ADSENSE_SLOTS, SITE } from "@/config/site";
import { sortedPosts } from "@/content/posts";

const title = `All Love Advice Articles — ${SITE.name}`;
const description =
  `Every ${SITE.name} article in one place: dating, communication, rebuilding trust, breakups, long distance and long-term intimacy.`;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <header>
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-primary">The archive</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">All articles</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Calm, practical love advice, newest first. Nothing here is a substitute
          for therapy — it is the sort of thing a level-headed friend would tell you.
        </p>
      </header>

      <div className="mt-10">
        <LoadMoreGrid posts={sortedPosts} initialCount={6} batchSize={6} />
      </div>

      <AdSlot slot={ADSENSE_SLOTS.inFeed} minHeight={250} />
    </div>
  );
}