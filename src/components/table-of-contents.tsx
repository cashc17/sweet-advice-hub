import { ChevronDown, ListOrdered } from "lucide-react";
import { useEffect, useState } from "react";
import type { Block } from "@/content/types";

interface TableOfContentsProps {
  blocks: Block[];
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ blocks }: TableOfContentsProps) {
  const [open, setOpen] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  const headings: TocItem[] = blocks
    .filter((b): b is { t: "h2" | "h3"; text: string; id?: string } => b.t === "h2" || b.t === "h3")
    .map((b) => ({
      id:
        b.id ||
        b.text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-"),
      text: b.text,
      level: b.t === "h2" ? 2 : 3,
    }));

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="my-8 rounded-2xl border border-border/80 bg-card/60 p-5 shadow-xs transition-colors"
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between font-display font-semibold text-foreground"
      >
        <div className="flex items-center gap-2 text-base sm:text-lg">
          <ListOrdered className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>In this article</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <ol className="mt-4 space-y-2 border-t border-border/60 pt-3 text-sm">
          {headings.map((h, i) => (
            <li
              key={h.id}
              className={`${h.level === 3 ? "pl-4 text-xs sm:text-sm" : ""}`}
            >
              <a
                href={`#${h.id}`}
                className={`flex items-baseline gap-2 transition-colors hover:text-primary ${
                  activeId === h.id
                    ? "font-semibold text-primary"
                    : "text-foreground/80"
                }`}
              >
                <span className="text-[0.7rem] font-medium text-muted-foreground">
                  {i + 1}.
                </span>
                <span>{h.text}</span>
              </a>
            </li>
          ))}
        </ol>
      ) : null}
    </nav>
  );
}
