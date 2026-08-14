import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AdSlot } from "@/components/ad-slot";
import { PostCard } from "@/components/post-card";
import { ADSENSE_SLOTS } from "@/config/site";
import { getCategory } from "@/content/categories";
import { postsByCategory } from "@/content/posts";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, posts: postsByCategory(params.slug) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: `Topic not found — ${SITE.name}` }, { name: "robots", content: "noindex" }],
      };
    }
    const { category } = loaderData;
    const url = `/category/${params.slug}`;
    const title = `${category.title} — ${SITE.name}`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: category.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-3xl font-semibold">That topic doesn&apos;t exist</h1>
      <Link to="/blog" className="mt-6 inline-flex text-sm text-primary underline">
        Browse all articles
      </Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, posts } = Route.useLoaderData();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>{category.name}</li>
        </ol>
      </nav>

      <header className="mt-6">
        <h1 className="font-display text-4xl font-semibold">{category.name}</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">{category.description}</p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <AdSlot slot={ADSENSE_SLOTS.inFeed} minHeight={250} />
    </div>
  );
}