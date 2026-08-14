import { useEffect, useRef, useState } from "react";
import { ArrowDown, Loader2 } from "lucide-react";
import { PostCard } from "@/components/post-card";
import type { Post } from "@/content/types";

interface LoadMoreGridProps {
  posts: Post[];
  initialCount?: number;
  batchSize?: number;
  autoLoadOnScroll?: boolean;
}

export function LoadMoreGrid({
  posts,
  initialCount = 6,
  batchSize = 6,
  autoLoadOnScroll = true,
}: LoadMoreGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + batchSize, posts.length));
      setLoading(false);
    }, 200);
  };

  useEffect(() => {
    if (!autoLoadOnScroll || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "250px" }
    );

    const current = bottomRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [autoLoadOnScroll, hasMore, loading, visibleCount, posts.length]);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <div ref={bottomRef} className="flex flex-col items-center justify-center pt-2">
        {hasMore ? (
          <button
            type="button"
            onClick={loadMore}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-xs transition-all hover:border-primary hover:bg-secondary/40 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span>Loading more articles...</span>
              </>
            ) : (
              <>
                <span>Load more articles</span>
                <ArrowDown className="h-4 w-4 text-primary" />
              </>
            )}
          </button>
        ) : posts.length > initialCount ? (
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            You&apos;ve reached the end of the archive ({posts.length} articles)
          </p>
        ) : null}
      </div>
    </div>
  );
}
