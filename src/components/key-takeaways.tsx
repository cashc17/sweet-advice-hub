import { CheckCircle2, Sparkles } from "lucide-react";

interface KeyTakeawaysProps {
  title?: string;
  items: string[];
}

export function KeyTakeaways({
  title = "Key Takeaways & Quick Summary",
  items,
}: KeyTakeawaysProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="my-8 rounded-2xl border border-primary/25 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 p-6 sm:p-7 shadow-xs">
      <div className="flex items-center gap-2 text-primary font-display font-semibold text-lg">
        <Sparkles className="h-5 w-5" aria-hidden="true" />
        <span>{title}</span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed text-foreground/90">
            <CheckCircle2 className="h-4 w-4 mt-1 text-primary flex-shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
