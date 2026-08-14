import { Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { categories } from "@/content/categories";
import { SITE } from "@/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-display text-xl font-semibold">{SITE.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {SITE.description}
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            HeartlinesHub publishes general advice for a general audience. It is not therapy or
            medical care.
          </p>
        </div>

        <nav aria-label="Categories">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider">Topics</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Site">
          <h2 className="font-display text-sm font-semibold uppercase tracking-wider">Site</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/blog" className="transition-colors hover:text-primary">
                All articles
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="transition-colors hover:text-primary">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-primary">
                Terms of use
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="transition-colors hover:text-primary">
                Disclaimer
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {year} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}