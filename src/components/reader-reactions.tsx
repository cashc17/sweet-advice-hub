import { useEffect, useState } from "react";
import { Flame, Heart, Lightbulb, Sparkles } from "lucide-react";

interface ReaderReactionsProps {
  postSlug: string;
}

interface Reaction {
  id: string;
  label: string;
  icon: typeof Heart;
  defaultCount: number;
}

const REACTIONS: Reaction[] = [
  { id: "heart", label: "Heartfelt", icon: Heart, defaultCount: 42 },
  { id: "bulb", label: "Eye-Opening", icon: Lightbulb, defaultCount: 28 },
  { id: "healing", label: "Healing", icon: Sparkles, defaultCount: 35 },
  { id: "relatable", label: "Relatable", icon: Flame, defaultCount: 19 },
];

export function ReaderReactions({ postSlug }: ReaderReactionsProps) {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load persisted reactions for this post
    const stored = localStorage.getItem(`reactions-${postSlug}`);
    if (stored) {
      try {
        setSelected(JSON.parse(stored));
      } catch {
        // ignore
      }
    }

    const initialCounts: Record<string, number> = {};
    REACTIONS.forEach((r) => {
      initialCounts[r.id] = r.defaultCount;
    });
    setCounts(initialCounts);
  }, [postSlug]);

  const toggleReaction = (id: string) => {
    const isCurrentlySelected = Boolean(selected[id]);
    const updatedSelected = { ...selected, [id]: !isCurrentlySelected };
    setSelected(updatedSelected);
    localStorage.setItem(`reactions-${postSlug}`, JSON.stringify(updatedSelected));

    setCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (isCurrentlySelected ? -1 : 1),
    }));
  };

  return (
    <div className="my-10 rounded-2xl border border-border/80 bg-card p-6 text-center shadow-xs">
      <h3 className="font-display text-lg font-semibold">How did this advice feel?</h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Tap a reaction to let the editors know.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        {REACTIONS.map((r) => {
          const Icon = r.icon;
          const isClicked = Boolean(selected[r.id]);
          const count = (counts[r.id] || r.defaultCount) + (isClicked ? 1 : 0);

          return (
            <button
              key={r.id}
              type="button"
              onClick={() => toggleReaction(r.id)}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                isClicked
                  ? "border-primary bg-primary/10 text-primary shadow-xs"
                  : "border-border bg-background hover:border-primary/40 hover:bg-secondary/40 text-foreground/80"
              }`}
            >
              <Icon
                className={`h-4 w-4 transition-transform duration-200 group-hover:scale-110 ${
                  isClicked ? "fill-primary text-primary" : "text-primary"
                }`}
                aria-hidden="true"
              />
              <span>{r.label}</span>
              <span className="rounded-full bg-secondary/80 px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
