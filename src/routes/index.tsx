import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroHands from "@/assets/hero-hands.jpg";
import { AdSlot } from "@/components/ad-slot";
import { PostCard } from "@/components/post-card";
import { ADSENSE_SLOTS, SITE } from "@/config/site";
import { categories } from "@/content/categories";
import { sortedPosts } from "@/content/posts";

const title = "Heartlines — Honest Love & Relationship Advice";
const description =
  "Calm, practical love advice on dating, communication, trust, breakups and long-term intimacy. New relationship articles every month.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          description: SITE.description,
          publisher: { "@type": "Organization", name: SITE.name },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = sortedPosts[0]!;
  const rest = sortedPosts.slice(1);

  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-primary">
              Love, honestly
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
              Advice for the relationship you actually have
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {SITE.name} is a small editorial blog about love: how to talk to each other, how to
              repair what broke, how to leave well, and how to keep wanting the person you already
              chose.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Read the articles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
              >
                About Heartlines
              </Link>
            </div>
          </div>
          <img
            src={heroHands}
            alt="Two hands loosely intertwined on a blush tablecloth beside a cup of tea"
            width={1600}
            height={1008}
            className="rounded-2xl border border-border object-cover shadow-sm"
          />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-14" aria-labelledby="featured-heading">
          <h2 id="featured-heading" className="font-display text-2xl font-semibold">
            This month&apos;s read
          </h2>
          <div className="mt-6">
            <PostCard post={featured} featured />
          </div>
        </section>

        <section className="border-t border-border py-12" aria-labelledby="topics-heading">
          <h2 id="topics-heading" className="font-display text-2xl font-semibold">
            Browse by topic
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <AdSlot slot={ADSENSE_SLOTS.inFeed} minHeight={250} />

        <section className="border-t border-border py-12" aria-labelledby="latest-heading">
          <h2 id="latest-heading" className="font-display text-2xl font-semibold">
            Latest advice
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <section className="mb-4 rounded-2xl border border-border bg-accent/40 p-8 text-center">
          <h2 className="font-display text-2xl font-semibold">Read something that helped?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Send it to the friend who has been having the same conversation for six months. If you
            have a question you would like answered on the blog, we read every message.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ask a question
          </Link>
        </section>
      </div>
    </div>
  );
}
