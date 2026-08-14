import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { AuthorCard } from "@/components/author-card";
import { FaqSection } from "@/components/faq-section";
import { KeyTakeaways } from "@/components/key-takeaways";
import { PostCard } from "@/components/post-card";
import { PostNavigation } from "@/components/post-navigation";
import { Prose } from "@/components/prose";
import { ReadingProgress } from "@/components/reading-progress";
import { SocialShare } from "@/components/social-share";
import { TableOfContents } from "@/components/table-of-contents";
import { ADSENSE_SLOTS, SITE } from "@/config/site";
import { getCategory } from "@/content/categories";
import { formatDate, getPost, relatedPosts, sortedPosts } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();

    const currentIndex = sortedPosts.findIndex((p) => p.slug === params.slug);
    const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : undefined;
    const nextPost =
      currentIndex >= 0 && currentIndex < sortedPosts.length - 1
        ? sortedPosts[currentIndex + 1]
        : undefined;

    return { post, prevPost, nextPost };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `Article not found — ${SITE.name}` }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const fullUrl = `${SITE.url}/blog/${params.slug}`;
    const imageUrl = post.image.startsWith("http") ? post.image : `${SITE.url}${post.image}`;
    const authorName = post.authorName || SITE.author;
    const keywords = post.keywords?.length
      ? post.keywords.join(", ")
      : `${post.category}, love advice, relationship tips, dating guide`;

    const schemas: unknown[] = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
        },
        headline: post.title,
        description: post.description,
        image: [imageUrl],
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        author: {
          "@type": "Person",
          name: authorName,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: `${SITE.url}/favicon.svg`,
          },
        },
        articleSection: getCategory(post.category)?.name,
        keywords: keywords,
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: fullUrl },
        ],
      },
    ];

    if (post.faqs && post.faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      });
    }

    return {
      meta: [
        { title: `${post.title} — ${SITE.name}` },
        { name: "description", content: post.description },
        { name: "keywords", content: keywords },
        { name: "author", content: authorName },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: fullUrl },
        { property: "og:image", content: imageUrl },
        { property: "og:site_name", content: SITE.name },
        { property: "article:published_time", content: post.date },
        { property: "article:modified_time", content: post.updated ?? post.date },
        { property: "article:section", content: getCategory(post.category)?.name ?? "Advice" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: imageUrl },
      ],
      links: [{ rel: "canonical", href: fullUrl }],
      scripts: schemas.map((schema) => ({
        type: "application/ld+json",
        children: JSON.stringify(schema),
      })),
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
        className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
      >
        Browse all articles
      </Link>
    </div>
  );
}

function PostPage() {
  const { post, prevPost, nextPost } = Route.useLoaderData();
  const category = getCategory(post.category);
  const related = relatedPosts(post);
  const authorName = post.authorName || SITE.author;

  return (
    <>
      <ReadingProgress />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/blog" className="hover:text-primary transition-colors">
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
                    className="hover:text-primary transition-colors"
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
            <div className="flex items-center justify-between gap-2">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] font-semibold text-primary">
                {category?.name ?? "Advice"}
              </p>
              <span className="text-xs text-muted-foreground">
                {post.readingMinutes} min read
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              {post.headline}
            </h1>

            <p className="mt-4 text-lg sm:text-xl leading-relaxed text-muted-foreground font-light">
              {post.excerpt}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-between border-y border-border/70 py-3 gap-3 text-xs text-muted-foreground">
              <div>
                By <span className="font-medium text-foreground">{authorName}</span> ·{" "}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.updated ? ` (Updated ${formatDate(post.updated)})` : null}
              </div>
            </div>

            <SocialShare title={post.title} url={`/blog/${post.slug}`} />
          </header>

          <figure className="mt-6 overflow-hidden rounded-3xl border border-border shadow-xs">
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1200}
              height={800}
              className="w-full object-cover max-h-[480px]"
            />
            {post.imageAlt ? (
              <figcaption className="sr-only">{post.imageAlt}</figcaption>
            ) : null}
          </figure>

          <TableOfContents blocks={post.body} />

          {post.takeaways && post.takeaways.length > 0 ? (
            <KeyTakeaways items={post.takeaways} />
          ) : null}

          <AdSlot slot={ADSENSE_SLOTS.articleTop} minHeight={250} label="Advertisement" />

          <Prose
            blocks={post.body}
            adAfter={Math.floor(post.body.length / 2)}
            ad={<AdSlot slot={ADSENSE_SLOTS.articleMid} minHeight={280} />}
          />

          <AdSlot slot={ADSENSE_SLOTS.articleEnd} minHeight={280} />

          <div className="mt-8 border-t border-border/80 pt-4">
            <SocialShare title={post.title} url={`/blog/${post.slug}`} />
          </div>

          <PostNavigation prevPost={prevPost} nextPost={nextPost} />

          <AuthorCard
            authorName={post.authorName}
            authorRole={post.authorRole}
            authorBio={post.authorBio}
            authorAvatar={post.authorAvatar}
          />

          {post.faqs && post.faqs.length > 0 ? (
            <FaqSection items={post.faqs} />
          ) : null}

          <footer className="mt-6 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
            {SITE.name} offers general advice, not therapy or medical care. If you are in distress or
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
    </>
  );
}