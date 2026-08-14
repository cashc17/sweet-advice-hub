import { Link } from "@tanstack/react-router";
import { Heart, Menu } from "lucide-react";
import { useState } from "react";
import { categories } from "@/content/categories";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkClass =
    "text-sm font-medium text-foreground/70 transition-colors hover:text-primary";

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="font-display text-xl font-semibold tracking-tight">{SITE.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          <Link to="/blog" className={linkClass} activeProps={{ className: "text-primary" }}>
            All articles
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className={linkClass}
              activeProps={{ className: "text-primary" }}
            >
              {c.name}
            </Link>
          ))}
          <Link to="/about" className={linkClass} activeProps={{ className: "text-primary" }}>
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          >
            <Menu className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile"
        className={cn("border-t border-border/70 md:hidden bg-background/95 backdrop-blur shadow-md", open ? "block" : "hidden")}
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <li>
            <Link to="/blog" onClick={() => setOpen(false)} className="block py-2 text-sm">
              All articles
            </Link>
          </li>
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                to="/category/$slug"
                params={{ slug: c.slug }}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm"
              >
                {c.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2 text-sm">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}