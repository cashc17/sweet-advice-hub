import { Link } from "@tanstack/react-router";
import { getCategory } from "@/content/categories";
import { formatDate, type Post } from "@/content/posts";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const category = getCategory(post.category);

  return (
    <article
      className={
        featured
          ? "grid gap-6 overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:shadow-lg hover:border-primary/40 md:grid-cols-2"
          : "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-all duration-300 hover:shadow-lg hover:border-primary/40"
      }
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className="block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          width={1200}
          height={800}
          className={
            featured
              ? "h-64 w-full object-cover md:h-full"
              : "h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
          }
        />
      </Link>

      <div className={featured ? "flex flex-col justify-center p-6 md:p-8" : "flex flex-1 flex-col p-5"}>
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-primary">
          {category?.name ?? "Advice"} · {post.readingMinutes} min read
        </p>
        <h3
          className={
            featured
              ? "mt-3 font-display text-2xl font-semibold leading-tight md:text-3xl"
              : "mt-3 font-display text-lg font-semibold leading-snug"
          }
        >
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <p className="mt-4 text-xs text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </div>
    </article>
  );
}