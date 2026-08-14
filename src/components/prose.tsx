import type { Block } from "@/content/posts";
import { Check, Info, Lightbulb, TriangleAlert, X } from "lucide-react";
import { KeyTakeaways } from "./key-takeaways";

/** Renders article body blocks with an ad unit injected after a given block index. */
export function Prose({
  blocks,
  adAfter,
  ad,
}: {
  blocks: Block[];
  adAfter?: number;
  ad?: React.ReactNode;
}) {
  return (
    <div className="mt-8 space-y-6">
      {blocks.map((block, i) => (
        <div key={i}>
          <BlockView block={block} />
          {adAfter === i && ad ? <div className="my-8">{ad}</div> : null}
        </div>
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h2": {
      const id =
        block.id ||
        block.text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
      return (
        <h2
          id={id}
          className="mt-12 mb-4 scroll-mt-20 font-display text-2xl sm:text-3xl font-semibold leading-tight text-foreground"
        >
          {block.text}
        </h2>
      );
    }

    case "h3": {
      const id =
        block.id ||
        block.text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
      return (
        <h3
          id={id}
          className="mt-8 mb-3 scroll-mt-20 font-display text-xl sm:text-2xl font-semibold leading-snug text-foreground"
        >
          {block.text}
        </h3>
      );
    }

    case "p": {
      return (
        <p
          className={`text-[1.05rem] sm:text-[1.1rem] leading-[1.8] text-foreground/90 ${
            block.className || ""
          }`}
        >
          {block.text}
        </p>
      );
    }

    case "ul": {
      return (
        <ul className="my-5 space-y-2.5 pl-6">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="list-disc text-[1.03rem] leading-[1.75] text-foreground/85 marker:text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    }

    case "ol": {
      return (
        <ol className="my-5 space-y-2.5 pl-6">
          {block.items.map((item, idx) => (
            <li
              key={idx}
              className="list-decimal text-[1.03rem] leading-[1.75] text-foreground/85 marker:font-semibold marker:text-primary"
            >
              {item}
            </li>
          ))}
        </ol>
      );
    }

    case "quote": {
      return (
        <figure className="my-8 rounded-xl border-l-4 border-primary bg-primary/5 py-4 px-6">
          <blockquote className="font-display text-lg sm:text-xl italic leading-relaxed text-foreground/95">
            “{block.text}”
          </blockquote>
          {block.author ? (
            <figcaption className="mt-2 text-sm font-medium text-muted-foreground not-italic">
              — {block.author}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    case "callout": {
      const variant = block.variant || "tip";
      const config = {
        tip: {
          icon: <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />,
          container: "border-emerald-500/30 bg-emerald-500/10 text-emerald-950 dark:text-emerald-100",
          titleColor: "text-emerald-700 dark:text-emerald-300",
          defaultTitle: "Pro Tip",
        },
        warning: {
          icon: <TriangleAlert className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />,
          container: "border-amber-500/30 bg-amber-500/10 text-amber-950 dark:text-amber-100",
          titleColor: "text-amber-800 dark:text-amber-300",
          defaultTitle: "Important Note",
        },
        info: {
          icon: <Info className="h-5 w-5 text-sky-600 dark:text-sky-400 flex-shrink-0" />,
          container: "border-sky-500/30 bg-sky-500/10 text-sky-950 dark:text-sky-100",
          titleColor: "text-sky-800 dark:text-sky-300",
          defaultTitle: "Did You Know?",
        },
        highlight: {
          icon: <Lightbulb className="h-5 w-5 text-primary flex-shrink-0" />,
          container: "border-primary/30 bg-primary/10 text-foreground",
          titleColor: "text-primary",
          defaultTitle: "Key Takeaway",
        },
      }[variant];

      return (
        <div className={`my-7 rounded-2xl border p-5 sm:p-6 ${config.container}`}>
          <div className="flex items-center gap-2.5">
            {config.icon}
            <h4 className={`font-semibold text-sm sm:text-base ${config.titleColor}`}>
              {block.title || config.defaultTitle}
            </h4>
          </div>
          <p className="mt-2 text-sm sm:text-base leading-relaxed opacity-90 pl-7">{block.text}</p>
        </div>
      );
    }

    case "image": {
      return (
        <figure className="my-8 overflow-hidden rounded-2xl border border-border bg-card">
          <img
            src={block.src}
            alt={block.alt}
            width={block.width || 1200}
            height={block.height || 800}
            className="w-full object-cover max-h-[500px]"
            loading="lazy"
          />
          {block.caption ? (
            <figcaption className="p-3 text-center text-xs sm:text-sm text-muted-foreground border-t border-border/60 bg-muted/30">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    case "takeaways": {
      return <KeyTakeaways title={block.title} items={block.items} />;
    }

    case "do-dont": {
      return (
        <div className="my-8 rounded-2xl border border-border bg-card p-5 sm:p-6 overflow-hidden">
          {block.title ? (
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">
              {block.title}
            </h4>
          ) : null}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                <Check className="h-4 w-4" />
                <span>Do</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/85">
                {block.dos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-destructive/30 bg-destructive/5 dark:bg-destructive/10 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-destructive mb-3">
                <X className="h-4 w-4" />
                <span>Don't</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/85">
                {block.donts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-destructive font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    case "divider": {
      return <hr className="my-10 border-border/80" />;
    }

    default:
      return null;
  }
}