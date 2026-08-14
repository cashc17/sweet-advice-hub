import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { PostCard } from "@/components/post-card";
import type { Post } from "@/content/types";

interface LoadMoreGridProps {
  posts: Post[];
  initialCount?: number;
  batchSize?: number;
}

export function LoadMoreGrid({
  posts,
  initialCount = 6,
  batchSize = 6,
}: LoadMoreGridProps) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  useEffect(() => {
    if (!hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) => Math.min(prev + batchSize, posts.length));
            setLoading(false);
          }, 200);
        }
      },
      { rootMargin: "350px 0px" }
    );

    const current = bottomRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, loading, visibleCount, posts.length, batchSize]);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <div ref={bottomRef} className="flex flex-col items-center justify-center py-4">
        {loading && hasMore ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin text-primary" />
            <span>Loading more articles...</span>
          </div>
        ) : !hasMore && posts.length > initialCount ? (
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            You&apos;ve reached the end of the archive ({posts.length} articles)
          </p>
        ) : null}
      </div>
    </div>
  );
}
