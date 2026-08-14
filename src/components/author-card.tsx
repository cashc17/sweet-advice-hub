import { Link } from "@tanstack/react-router";
import { SITE } from "@/config/site";
import { User } from "lucide-react";

interface AuthorCardProps {
  authorName?: string;
  authorRole?: string;
  authorBio?: string;
  authorAvatar?: string;
}

export function AuthorCard({
  authorName = SITE.author,
  authorRole = SITE.authorRole,
  authorBio = SITE.authorBio,
  authorAvatar,
}: AuthorCardProps) {
  const initials = authorName
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="my-10 rounded-2xl border border-border/80 bg-gradient-to-br from-card to-secondary/30 p-6 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
        <div className="relative flex-shrink-0">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={authorName}
              className="h-16 w-16 rounded-full border-2 border-primary/20 object-cover shadow-sm"
              loading="lazy"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-semibold text-xl">
              {initials || <User className="h-7 w-7" />}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-primary">
              Written by
            </span>
          </div>

          <h3 className="mt-0.5 font-display text-lg sm:text-xl font-semibold text-foreground">
            {authorName}
          </h3>

          {authorRole ? (
            <p className="text-xs font-medium text-muted-foreground">{authorRole}</p>
          ) : null}

          <p className="mt-2 text-sm leading-relaxed text-foreground/80">{authorBio}</p>

          <div className="mt-3 flex items-center gap-4 text-xs font-medium">
            <Link to="/about" className="text-primary hover:underline">
              About the author →
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">
              Send feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
