import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { PostCard } from "@/components/post-card";
import { Prose } from "@/components/prose";
import { ADSENSE_SLOTS, SITE } from "@/config/site";
import { getCategory } from "@/content/categories";
import { formatDate, getPost, relatedPosts } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Heartlines" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const url = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} — Heartlines` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "author", content: SITE.author },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            author: { "@type": "Organization", name: SITE.author },
            publisher: { "@type": "Organization", name: SITE.name },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: getCategory(post.category)?.name,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Articles", item: "/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-3xl font-semibold">We couldn&apos;t find that article</h1>
      <p className="mt-3 text-muted-foreground">
        The link may be out of date. All of our advice is listed in the archive.
      </p>
      <Link
        to="/blog"
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
      >
        Browse all articles
      </Link>
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const category = getCategory(post.category);
  const related = relatedPosts(post);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link to="/blog" className="hover:text-primary">
              Articles
            </Link>
          </li>
          {category ? (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/category/$slug"
                  params={{ slug: category.slug }}
                  className="hover:text-primary"
                >
                  {category.name}
                </Link>
              </li>
            </>
          ) : null}
        </ol>
      </nav>

      <article className="mx-auto mt-8 max-w-2xl">
        <header>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-primary">
            {category?.name ?? "Advice"}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
            {post.headline}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="mt-5 text-xs text-muted-foreground">
            By {SITE.author} · <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
            {post.readingMinutes} min read
          </p>
        </header>

        <img
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={800}
          className="mt-8 w-full rounded-2xl border border-border object-cover"
        />

        <AdSlot slot={ADSENSE_SLOTS.articleTop} minHeight={250} label="Advertisement" />

        <Prose
          blocks={post.body}
          adAfter={Math.floor(post.body.length / 2)}
          ad={<AdSlot slot={ADSENSE_SLOTS.articleMid} minHeight={280} />}
        />

        <AdSlot slot={ADSENSE_SLOTS.articleEnd} minHeight={280} />

        <footer className="mt-6 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
          Heartlines offers general advice, not therapy or medical care. If you are in distress or
          feel unsafe, please contact a qualified professional or a support service in your
          country.
        </footer>
      </article>

      <section className="mt-16 border-t border-border pt-10" aria-labelledby="related-heading">
        <h2 id="related-heading" className="font-display text-2xl font-semibold">
          Keep reading
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </div>
  );
}