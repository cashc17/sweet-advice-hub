import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Post } from "@/content/types";

interface PostNavigationProps {
  prevPost?: Post;
  nextPost?: Post;
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="my-10 grid gap-4 border-y border-border py-8 sm:grid-cols-2">
      {prevPost ? (
        <Link
          to="/blog/$slug"
          params={{ slug: prevPost.slug }}
          className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
        >
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Previous Article</span>
          </div>
          <p className="mt-2 font-display text-base font-medium leading-snug group-hover:text-primary">
            {prevPost.title}
          </p>
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextPost ? (
        <Link
          to="/blog/$slug"
          params={{ slug: nextPost.slug }}
          className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-5 text-right transition-all hover:border-primary/40 hover:shadow-md"
        >
          <div className="flex items-center justify-end gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>Next Article</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </div>
          <p className="mt-2 font-display text-base font-medium leading-snug group-hover:text-primary">
            {nextPost.title}
          </p>
        </Link>
      ) : null}
    </div>
  );
}
