import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  title?: string;
  items: FaqItem[];
}

export function FaqSection({ title = "Frequently Asked Questions", items }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="my-10 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
      <div className="flex items-center gap-2 text-primary">
        <HelpCircle className="h-5 w-5" aria-hidden="true" />
        <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
          {title}
        </h3>
      </div>

      <div className="mt-6 divide-y divide-border">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="py-4">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between gap-4 text-left font-display text-base font-medium text-foreground transition-colors hover:text-primary"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-primary" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground animate-in fade-in-50 duration-200">
                  {item.a}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
